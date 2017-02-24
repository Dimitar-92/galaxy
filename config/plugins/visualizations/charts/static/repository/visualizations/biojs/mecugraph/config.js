define( [], function() {
    return {
        title       : 'Mecu Graph',
        library     : 'BioJS',
        datatypes   : [ 'txt', 'fasta' ],
        keywords    : 'mecu-graph',
        description : 'Mecu graph visualization for proteins.',
        settings    : {
            conserv: { label :'Show conservation', help : 'Do you want to display a bar diagram indicating sequence conservation?', type : 'boolean', value: 'true' },
            overviewbox: { label :'Show overview box', help : 'Do you want to display the overview box below the sequence alignments?', type : 'boolean', value: 'true' },
            menu: { label :'Show interactive menu', help : 'Do you want to show a menu for interactive configuration?', type : 'boolean', value: 'true' }
        }
    }
});
