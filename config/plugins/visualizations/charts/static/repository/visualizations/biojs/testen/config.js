define( [], function() {
    return {
        title       : 'Pie Chart',
        library     : 'BioJS',
        datatypes   : [ 'txt', 'fasta' ],
        keywords    : 'pie',
        description : 'This is a test plugin for the pie chart visualization.',
        settings    : {
            conserv: { label :'Show conservation', help : 'Do you want to display a bar diagram indicating sequence conservation?', type : 'boolean', value: 'true' },
            overviewbox: { label :'Show overview box', help : 'Do you want to display the overview box below the sequence alignments?', type : 'boolean', value: 'true' },
            menu: { label :'Show interactive menu', help : 'Do you want to show a menu for interactive configuration?', type : 'boolean', value: 'true' }
        }
    }
});
