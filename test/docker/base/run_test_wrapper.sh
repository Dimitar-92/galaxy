#!/bin/bash
set -e

deluser galaxy | true
groupadd -r galaxy -g "$GALAXY_TEST_UID"
useradd -u $GALAXY_TEST_UID -r -g galaxy -d /home/galaxy -c "Galaxy User" galaxy -s /bin/bash
echo "galaxy:galaxy" | chpasswd
chown -R galaxy:galaxy /galaxy_venv

GALAXY_TEST_DATABASE_TYPE=${GALAXY_TEST_DATABASE_TYPE:-"postgres"}
if [ "$GALAXY_TEST_DATABASE_TYPE" = "postgres" ];
then
    su -c '/usr/lib/postgresql/9.3/bin/pg_ctl -o "-F" start -D /opt/galaxy/db' postgres
    sleep 3
    GALAXY_TEST_INSTALL_DB_MERGED="true"
    GALAXY_TEST_DBURI="postgres://root@localhost:5930/galaxy?client_encoding=utf8"
    TOOL_SHED_TEST_DBURI="postgres://root@localhost:5930/toolshed?client_encoding=utf8"
elif [ "$GALAXY_TEST_DATABASE_TYPE" = "mysql" ];
then
    sh /opt/galaxy/start_mysql.sh
    GALAXY_TEST_INSTALL_DB_MERGED="true"
    GALAXY_TEST_DBURI="mysql://galaxy:galaxy@localhost/galaxy?unix_socket=/var/run/mysqld/mysqld.sock"
    TOOL_SHED_TEST_DBURI="mysql://galaxy:galaxy@localhost/toolshed?unix_socket=/var/run/mysqld/mysqld.sock"
elif [ "$GALAXY_TEST_DATABASE_TYPE" = "sqlite" ];
then
    GALAXY_TEST_INSTALL_DB_MERGED="true"
    GALAXY_TEST_DBURI="sqlite:////opt/galaxy/galaxy.sqlite"
    TOOL_SHED_TEST_DBURI="sqlite:////opt/galaxy/toolshed.sqlite"
else
	echo "Unknown database type"
	exit 1
fi
export GALAXY_TEST_DBURI
export TOOL_SHED_TEST_DBURI
export GALAXY_TEST_INSTALL_DB_MERGED

cd /galaxy
GALAXY_CONFIG_OVERRIDE_DATABASE_CONNECTION="$GALAXY_TEST_DBURI";
export GALAXY_CONFIG_OVERRIDE_DATABASE_CONNECTION
TOOL_SHED_CONFIG_OVERRIDE_DATABASE_CONNECTION="$TOOL_SHED_TEST_DBURI";
export TOOL_SHED_CONFIG_OVERRIDE_DATABASE_CONNECTION

: ${GALAXY_VIRTUAL_ENV:=.venv}

sudo -E -u galaxy ./scripts/common_startup.sh || { echo "common_startup.sh failed"; exit 1; }

dev_requirements=./lib/galaxy/dependencies/dev-requirements.txt
[ -f $dev_requirements ] && $GALAXY_VIRTUAL_ENV/bin/pip install -r $dev_requirements

echo "Upgrading test database..."
sudo -E -u galaxy sh manage_db.sh upgrade
echo "Upgrading tool shed database... $TOOL_SHED_CONFIG_OVERRIDE_DATABASE_CONNECTION"
sudo -E -u galaxy sh manage_db.sh upgrade tool_shed

if [ -z "$GALAXY_NO_TESTS" ];
then
    sudo -E -u galaxy sh run_tests.sh --skip-common-startup $@
else
    GALAXY_CONFIG_MASTER_API_KEY=${GALAXY_CONFIG_MASTER_API_KEY:-"testmasterapikey"}
    GALAXY_CONFIG_FILE=${GALAXY_CONFIG_FILE:-config/galaxy.ini.sample}
    TOOL_SHED_CONFIG_FILE=${GALAXY_CONFIG_FILE:-config/tool_shed.ini.sample}
    GALAXY_CONFIG_CHECK_MIGRATE_TOOLS=false
    GALAXY_CONFIG_JOB_CONFIG_FILE=${GALAXY_CONFIG_JOB_CONFIG_FILE:-config/job_conf.xml.sample}
    GALAXY_CONFIG_FILE_PATH=${GALAXY_CONFIG_FILE_PATH:-/tmp/gx1}
    GALAXY_CONFIG_NEW_FILE_PATH=${GALAXY_CONFIG_NEW_FILE_PATH:-/tmp/gxtmp}

    export GALAXY_CONFIG_MASTER_API_KEY
    export GALAXY_CONFIG_FILE
    export TOOL_SHED_CONFIG_FILE
    export GALAXY_CONFIG_CHECK_MIGRATE_TOOLS
    export GALAXY_CONFIG_JOB_CONFIG_FILE
    export GALAXY_CONFIG_FILE_PATH
    export GALAXY_CONFIG_NEW_FILE_PATH

    sh run.sh $@
fi
