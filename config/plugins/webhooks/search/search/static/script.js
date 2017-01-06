$(document).ready(function() {

    var ToolForm = window.toolform;
    /** Display search overlay and search */
    var OverlaySearchView = Backbone.View.extend({
         
        parentElement: $('.full-content'),

        initialize: function () {
            this.search_query_minimum_length = 3;
            this.active_filter = "all";
            this.render();
            this.registerEvents();
        },

        /** Render the overlay html */
        render: function() {
            this.parentElement.prepend( this._template() );
        },

        /** Register events for the overlay */
        registerEvents: function() {
            var self = this,
                filter_classes = {};
                filter_classes.all = '.all-filter';
                filter_classes.tools = '.tool-filter';
                filter_classes.history = '.history-filter';
                filter_classes.data_library = '.datalibrary-filter';
                filter_classes.workflow = '.workflow-filter';
                filter_classes.removeditems = '.removeditems-filter';
                filter_classes.pinnedfilter = '.pinned-filter';
            // Register event for invoking overlay
            this.parentElement.on( 'keydown', function( e ) {
                self.invokeOverlay( e, self );
            });

            // Register events for search textbox
            $( '.txtbx-search-data' ).on( 'keyup', function( e ) { 
                self.triggerEvents( e, self );
            });
          
            // Register events for fliter clicks
            for( item in filter_classes ) {
                self.clickEvents( filter_classes[ item ], item, self );
            }
        },

        /** Invoke the search overlay */
        invokeOverlay: function( e, self ) {
            if( e ) {
                e.stopPropagation();
                // Click of ctrl + alt + q shows search overlay
	        if ( ( e.which === 81 || e.keyCode === 81 ) && e.ctrlKey && e.altKey ) {
                    self.clearSearchResults();
                    self.showOverlay();
                    self.setActiveFilter( '.all-filter' );
                    self.showDefaultLinks();
	        }
	        // Remove the overlay and hides the search screen on clicking escape key
	        else if ( e.which === 27 || e.keyCode === 27 ) {
	            self.removeOverlay();
	        }
            }
        },

        /** Display favourites and most used tools if present for home filter */
        showDefaultLinks: function() {
            defaultLinks = new SearchItemsView({});
            defaultLinks.showPinnedItems( '.search-results' );
            defaultLinks.buildMostUsedTools( '.search-results' );
        },

        /** Trigger events on search overlay */ 
        triggerEvents: function( e, self ) {
            var $el_search_textbox = $( '.txtbx-search-data' ),
                query = "";
            if( e ) {
                e.stopPropagation();
                query = (( $el_search_textbox.val() ).trim()).toLowerCase();
                // Perform search if enter is pressed or query has 3 or more characters
                if ( ( e.which === 13 || e.keyCode === 13 ) || query.length >= self.search_query_minimum_length ) {
                    // Search in all categories and defaults to 'All' search filter in the search overlay
                    self.searchWithAFilter( self, self.active_filter, query );
                }
                else if( query.length < self.search_query_minimum_length ) {
                    self.removeOldEntries();
                }
            }
        },

        /** Remove old entries if any */
        removeOldEntries: function() {
            $( '.search-tools' ).remove();
            $( '.search-history' ).remove();
            $( '.search-workflow' ).remove();
            $( '.search-datalib' ).remove();
        },

        /** Click events for the search categories */
        clickEvents: function( selector, type, self ) {
            $( selector ).click(function( e ) {
                var $el_removed_items = $( '.removed-items' ),
                    $el_search_results = $( '.search-results' );
                // Show removed items from search results
                if( type.indexOf( 'removed' ) > -1 ) {
                    $el_removed_items.show();
                    $el_search_results.hide();
                    removedLink = new SearchItemsView({});
                    removedLink.showRemovedLinks();
                    self.applyTextDecorations( this );
                }
                else {
                    // Search items for the selected filter
                    self.search( type, this, self );
                }
            });
        },
   
        /** Search with a filter */
        search: function( type, _this, self ) {
            if( !$( _this ).hasClass( 'filter-active' ) ) {
                var query = (( $( '.txtbx-search-data' ).val() ).trim()).toLowerCase();
                // Perform search
                if( query.length >= self.search_query_minimum_length ) {
                    // Set the active filter
                    self.active_filter = type;
                    // Apply css decorations to the selected filter
                    self.applyTextDecorations( _this );
                    self.showSearchResult();
                    self.searchWithAFilter( self, self.active_filter, query );
                }
                else {
                    // Show default links when clicked on home icon
                    // No search is performed as query length is less than three
                    if( type === "all" ) {
                        self.active_filter = type;
                        self.applyTextDecorations( _this );
                        self.showSearchResult();
                        self.showDefaultLinks();
                    }
                }
            }
        },

        /** Search with a filter */
        searchWithAFilter: function( self, type, query ) {
	    switch( type ) {
	        case "all":
	            self.searchAllFilters( self, query );
	            break;
	        case "tools":
	            self.searchTools( query );
	            break;
	        case "history":
	            self.searchHistory( query );
	            break;
	        case "data_library":
	            self.searchDataLibrary( query );
	            break;
                case "workflow":
                    self.searchWorkflow( query );
                    break;
	    }
        },

        /** Search in all categories */
        searchAllFilters: function( self, query ) {
	    self.clearSearchResults();
            self.setActiveFilter( '.all-filter' );
            self.showSearchResult();
            // Show default links above search results
            self.showDefaultLinks();
	    // Search for history
	    self.searchHistory( query );
	    // Search for tools
	    self.searchTools( query );
	    // Search for data libraries
	    self.searchDataLibrary( query );
            // Search for workflows only when the user is authenticated
            if( window.Galaxy.user.id ) {
                self.searchWorkflow( query );
            }
        },

        /** Search in tools */ 
        searchTools: function( query ) {
	    var url = Galaxy.root + 'api/tools';
	    $.get( url, { q: query }, function ( search_result ) {
	        toolSearch = new SearchItemsView( { 'tools': search_result } );
	    }, "json" );
        },

        /** Search in history */
        searchHistory: function( query ) {
	    var history_url = Galaxy.root + 'api/histories';
            // Get all histories
	    $.get( history_url, function ( histories ) {
	        var history_list = [];
	        // Get the content of each history
	        _.each( histories, function( item ) {
	            var history_item_url = history_url + '/' + item.id + '/contents';
	            $.get( history_item_url, function( history_content ) {
	                _.each( history_content, function( item ) {
	                    var item_name = item.name.toLowerCase();
	                    if ( item_name.indexOf( query ) > -1 ) {
	                        history_list.push( item );
	                    }
	                });
	                historySearch = new SearchItemsView({ 'history': history_list });
	            }, 'json');
	        });
	    }, "json" );
        },

        /** Search in data library */
        searchDataLibrary: function( query ) {
	    var url = Galaxy.root + 'api/libraries?deleted=false';
	    $.get( url, function ( library_data ) {
	        data_lib_list = [];
	        // Filter the result based on query
	        _.each( library_data, function( item ) {
	            var name = item.name.toLowerCase();
	            if ( name.indexOf( query ) > -1 ) {
	                data_lib_list.push( item );
	            }
	        });
	        libSearch = new SearchItemsView({ 'data_library': data_lib_list });
	    }, "json" );
        },

        /** Search in workflow */
        searchWorkflow: function( query ) {
            var url = Galaxy.root + 'api/workflows';
	    $.get( url, function ( workflow_data ) {
	        workflow_list = [];
	        // Filter the result based on query
	        _.each( workflow_data, function( item ) {
	            var name = item.name.toLowerCase();
	            if ( name.indexOf( query ) > -1 ) {
	                workflow_list.push( item );
	            }
	        });
	        workflowSearch = new SearchItemsView({ 'workflow': workflow_list });
	    }, "json" );

        },

        /** Show overlay */
        showOverlay: function() {
            var $el_search_textbox = $( '.txtbx-search-data' );
            $( '.search-screen-overlay' ).show();
	    $( '.search-screen' ).show();
            $el_search_textbox.val( "" );
            $el_search_textbox.focus();
        },

        /** Remove the search overlay */ 
        removeOverlay: function() {
            $( '.search-screen-overlay' ).hide();
            $( '.search-screen' ).hide();
        },

        /** Clear search results */
        clearSearchResults: function() {
            $( '.search-results' ).html( "" );
        },

        /** Show search result section and hide removed items */
        showSearchResult: function() {
            $( '.removed-items' ).hide();
            $( '.search-results' ).show();
        },

        /** Set the active filter */
        setActiveFilter: function( filter_class ) {
            var $el_filter = $( filter_class ),
                active = 'filter-active',
                inactive = 'filter-inactive';
	    if( !$el_filter.hasClass( active ) ) {
                $( '.overlay-filters a' ).addClass( inactive ).removeClass( active );
	        $el_filter.addClass( active ).removeClass( inactive );
	    }
            $( '.overlay-filters' ).show();
        },

        /** Apply the text decoration to the search overlay filters */
        applyTextDecorations: function( self ) {
	    $( '.search-results' ).html( "" );
            $( '.overlay-filters a' ).addClass( 'filter-inactive' ).removeClass( 'filter-active' );
            $( self ).removeClass( 'filter-inactive' ).addClass( 'filter-active' );
        },

        /** Template for search overlay */
        _template: function() {
            return '<div class="overlay-wrapper">' + 
	           '<div id="search_screen_overlay" class="search-screen-overlay"></div>' +
	           '<div id="search_screen" class="search-screen">' +
	               '<input class="txtbx-search-data form-control" type="text" value="" ' + 
                           'placeholder="Give at least 3 letters to search" />' + 
                       '<div class="overlay-filters">' +
                           '<a class="all-filter" title="All"><i class="fa fa-home"></i></a>' +
                           '<a class="history-filter" title="History"><i class="fa fa-history"></i></a>' +
                           '<a class="tool-filter" title="Tools"><i class="fa fa-wrench"></i></a>' +
                           '<a class="workflow-filter" title="Workflow"><i class="fa fa-code-fork rotate"></i></a>' +
                           '<a class="datalibrary-filter" title="Data Library"><i class="fa fa-folder-open"></i></a>' +
                           '<a class="removeditems-filter" title="Excluded from search"><i class="fa fa-trash"></i></a>' +
                       '</div>' +
                       '<div class="removed-items"></div>' +
                       '<div class="search-results"></div>' +
	       '</div>' +
           '</div>';
        },

    });

    /** Display search items from Tools, History, Workflow and Data libraries */
    var SearchItemsView = Backbone.View.extend({
        self : this,
        web_storage_keys : [ "_localstorage_search_items", "sessionstorage_search_items" ],
        /** Initialize the variables */
        initialize: function( item ) {
            var type = ( item ? Object.keys( item )[0] : "" ),
                data = {};
            // Set the data based on type of the result
	    switch( type ) {
		case "tools": 
		    data.tools = item[ type ];
		    break;
		case "history":
		    data.history = item[ type ];
		    break;
		case "data_library":
		    data.data_library = item[ type ];
		    break;
                case "workflow":
                    data.workflow = item[ type ];
	    }
            
            // Refresh the view as soon as more data arrive
            if( Object.keys( data ).length > 0 ) {
                this.refreshView( data );
            }
        },

        /** Return the active filter */
        getActiveFilter: function() {
	    var active_filter = "all";
                active_filter = ( $( '.all-filter' ).hasClass( 'filter-active') ? "all" : active_filter );
	        active_filter = ( $( '.tool-filter' ).hasClass( 'filter-active') ? "tools" : active_filter );
	        active_filter = ( $( '.history-filter' ).hasClass( 'filter-active' ) ? "history" : active_filter );
	        active_filter = ( $( '.datalibrary-filter' ).hasClass( 'filter-active' ) ? "data_library" : active_filter );
                active_filter = ( $( '.workflow-filter' ).hasClass( 'filter-active' ) ? "workflow" : active_filter );
                active_filter = ( $( '.removeditems-filter' ).hasClass( 'filter-active' ) ? "removeditems" : active_filter );
	    return active_filter;
        },

        /** Update the view as search data comes in */
        refreshView: function( items ) {
	    var has_result = true,
	        $el_search_result = $( '.search-results' ),
	        $el_no_result = $( '.no-results' ),
	        filter = this.getActiveFilter(),
	        data = null;
            $el_no_result.remove();
            // Make all sections when filter is all
	    if( filter === "all" ) {
	        this.makeAllSection( items );
	    }
	    else {
	        // If the selected filter has no data
	        data = items[ filter ];
	        if ( !data || data.length === 0 ) {
		    this.showEmptySection( $el_search_result );
		    return;
	        }
	        // Make individual section
	        this.makeSection( filter, data );
	    }
        },

        /** Show empty section if there is no search result */
        showEmptySection: function( $el ) {
	    $el.append( this._templateNoResults() );
        },

        /** Make section based on filter and data */
        makeSection: function( filter, data ) {
	    switch( filter ) {
	        case "tools":
		    this.makeToolSection( data );
		    break;
	        case "history":
		    this.makeCustomSearchSection( { 'name': 'History',
		                   'id': 'history',
		                   'class_name': 'search-section search-history',
		                   'link_class_name': 'history-search-link',
		                   'data': data } );
		    break;
	        case "data_library":
		    this.makeCustomSearchSection( { 'name': 'Data Library',
		                   'id': 'datalibrary',
		                   'class_name': 'search-section search-datalib',
		                   'link_class_name': 'datalib-search-link',
		                   'data': data } );
		    break;
                case "workflow":
                    this.makeCustomSearchSection( { 'name': 'Workflow',
		                   'id': 'workflow',
		                   'class_name': 'search-section search-workflow',
		                   'link_class_name': 'workflow-search-link',
		                   'data': data } );
                    break;
	    }
        },

        /** Create templates for all the categories in the search result */
        makeAllSection: function( data ) {
	    var has_result = false,
	        $el_search_result = $( '.search-results' ),
	        self = this;
            // Loop through the data and make the available sections
	    for( type in data ) {
                if( data[ type ] && data[ type ].length > 0 ) {
                    has_result = true;
                    self.makeSection( type, data[type] );
                }
	    }
        },

        /** Check if item is present in the removed list */
        checkItemPresent: function( item_id, type, self ) {
	    var present = false,
	        localStorageObject = null;
            localStorageObject = self.getStorageObject( self, window.Galaxy.user.id, type );
            if( localStorageObject ) {
	        _.each( localStorageObject, function ( item, item_key ) {
	            if( item_key === item_id ) {
	               present = true;
	            }
	        });
	        return present;
	    }
        },

        /** Create collection of templates of all sections and links for tools */
        makeToolSection: function( search_result ) {
	    var template_dict = [], 
	        tool_template = "",
	        self = this,
	        $el_search_result = $( '.search-results' );
	    _.each( search_result, function( item ) {
	        var all_sections = Galaxy.toolPanel.attributes.layout.models;
	        _.each( all_sections, function( section ) {
		    if( section.attributes.model_class === "ToolSection" ) {
		        var all_tools = section.attributes.elems,
		            is_present = false,
		            tools_template = "",
		            section_header_id = "",
		            section_header_name = "";
		        _.each( all_tools, function( tool ) {
		            if( tool.id === item ) {
		                var attrs = tool.attributes;
		                if( !self.checkItemPresent( attrs.id, "removed_results", self ) ) {
		                     is_present = true;
		                     tools_template = tools_template + self._buildLinkTemplate( attrs.id,
                                                                                                attrs.link,
                                                                                                attrs.name,
                                                                                                attrs.description,
                                                                                                attrs.target,
                                                                                                'tool-search-link',
                                                                                                 self.checkItemPresent( attrs.id, "pinned_results", self ),
                                                                                                 attrs.version,
                                                                                                 attrs.min_width,
                                                                                                 attrs.form_style );
		                }
		            }
		        });
		        if( is_present ) {
		            section_header_id = section.attributes.id;
		            section_header_name = section.attributes.name;
		            template_dict = self.appendTemplate( template_dict,
                                                                 section_header_id,
                                                                 section_header_name,
                                                                 tools_template );
		        }
		    }
		    else if( section.attributes.model_class === "Tool" || section.attributes.model_class === "DataSourceTool" ) {
		        var attributes = section.attributes;
		        if( item === attributes.id ) {
		            if( !self.checkItemPresent( attributes.id, "removed_results", self ) ) {
		                tool_template = tool_template + self._buildLinkTemplate( attributes.id, attributes.link,
                                                attributes.name, attributes.description, attributes.target,
                                                'tool-search-link', self.checkItemPresent( attributes.id, "pinned_results", self ),
                                                attributes.version, attributes.min_width, attributes.form_style );
		            }
		        }
		    }
	        });
	    });
	    // Remove the tool search result section if already present
	    $el_search_result.find( '.search-tools' ).remove();
	    // Make template for sections and tools
	    self.makeToolSearchResultTemplate( template_dict, tool_template );        
        },

        /** Append the template or creates a new section */
        appendTemplate: function( collection, id, name, text ) {
	    var is_present = false;
	    _.each( collection, function( item ) {
	        if( id === item.id ) {
		    item.template = item.template + " " + text;
		    is_present = true;
	        }
	    });
	    if(!is_present) {
	        collection.push( { id: id, template: text, name: name } );
	    }
	    return collection;
        },

        /** Register tool search link click */
        registerToolLinkClick: function( self ) {
	    $( ".tool-search-link" ).click(function( e ) {
                e.preventDefault();
                self.saveMostUsedToolsCount( this, self );
	        self.searchedToolLink( self, e );
	    });

            $( ".most-used-tools" ).click(function( e ) {
                e.preventDefault();
                self.saveMostUsedToolsCount( this, self );
	        self.searchedToolLink( self, e );
	    });
        },

        /** Save count of the most used tools */
        saveMostUsedToolsCount: function( el, self ) {
            var item = {};
            item = { 'id': $( el ).attr( 'data-id' ),
                     'desc': $( el )[0].innerText,
                     'link': $( el ).attr( 'href' ),
                     'target': $( el ).attr( 'target' ),
                     'formstyle': $( el ).attr( 'data-formstyle' ),
                     'version': $( el ).attr( 'data-version' ) };
            self.setStorageObject( self, window.Galaxy.user.id, 'most_used_tools', item, 1 );
        },

        /** Register clicks for removed links from custom section */
        registerRemoveLinkClicks: function( self ) {
            $( '.restore-item' ).click(function( e ) {
                var $el_removeditems = $( '.removed-items' );
                self.removeItems( self, this, e, 'removed_results' );
                if( $el_removeditems.children().length == 0 ) {
                    $el_removeditems.append( self._templateNoItems() );
                }
	    });
            $( '.remove-fav' ).click(function( e ) {
                var $el_favourites = $( '.fav-header' );
                self.removeItems( self, this, e, 'pinned_results' );
                if( $el_favourites.children().children().length == 0 ) {
                    $el_favourites.remove();
                }
	    });
        },

        /** Remove items from data storage for trash icon */
        removeItems: function( self, _self, e, type ) {
            e.preventDefault();
	    e.stopPropagation();
            self.removeFromDataStorage( self, $( _self ).parent(), type );
            $( _self ).parent().remove();
        },
 
        /** Register remove and pin action clicks */
        registerLinkActionClickEvent: function( self, $el ) {
	    $el.find( ".remove-item" ).click(function( e ) {
	        e.preventDefault();
	        e.stopPropagation();
	        self.setStorage( self, $( this ).parent() );
	        $( this ).parent().remove();
	    });

            $el.find( ".pin-item" ).click(function( e ) {
                var $el_this = $( this );
                e.preventDefault();
	        e.stopPropagation();
                if( $el_this.hasClass( 'pinned-item' ) ) {
                    self.removeFromDataStorage( self, $el_this.parent(), 'pinned_results' );
                    $el_this.removeClass( 'pinned-item' );
                    $el_this.attr( 'title', 'Add to favourites' );
                    $el_this.parent().find( '.remove-item' ).removeClass( 'hide' ).addClass( 'show' );
                }
                else {
                    self.setPinnedItemsStorage( self, $el_this.parent() );
                    $el_this.addClass( 'pinned-item' );
                    $el_this.attr( 'title', 'Added to favourites' );
                    $el_this.parent().find( '.remove-item' ).removeClass( 'show' ).addClass( 'hide' );
                }
	    });
        },

        /** Set localstorage for pinned items */
        setPinnedItemsStorage: function( self, $el ) {
            var elem = $el[0].outerHTML;
            elem = elem.replace( 'tool-link', '' );
            self.setStorageObject( self, window.Galaxy.user.id, 'pinned_results', $( elem ).attr( 'data-id' ), elem );
        },

        /** Build removed links */ 
        showRemovedLinks: function() {
	    var self = this,
                $el_removed_result = $( '.removed-items' ),
                html_text = "",
                $el_span = null,
                removed_results_html = null;
            $el_removed_result.html( "" );
	    // Build the removed result from web storage
            removed_results_html = self.getStorageObject( self, window.Galaxy.user.id, 'removed_results' );
            for( item in removed_results_html ) {
		html_text = html_text + removed_results_html[ item ];
            }
            // Build html if there is an item
            if( html_text.length > 0 ) {
                $el_removed_result.html( html_text );
                // Remove the link attribute and pin icon from anchor
                $el_removed_result.find( 'a.link-tile' ).removeAttr( 'href' );
                $el_removed_result.find( '.pin-item' ).remove();
                $el_span = $el_removed_result.find( 'span' );
                $el_span.removeClass( 'remove-item' ).addClass( 'restore-item' );
                // Update the title of the delete icon
                $el_span.attr( 'title', 'Restore to search' );
	        self.registerRemoveLinkClicks( self );
            }
            else {
                $el_removed_result.append( self._templateNoItems() );
            }
        },

        /** Display pinned items */
        showPinnedItems: function( el ) {
            var self = this,
	        pinned_results = {},
	        html_text = "",
                $el_pinned_result = $( el ),
                fav_header = "",
                title = 'Remove from favourites';
            pinned_results = self.getStorageObject( self, window.Galaxy.user.id, 'pinned_results' );
            // Build html text from web storage
            for( item in pinned_results ) {
		html_text = html_text + pinned_results[ item ];
	    }
            // Build section only if there is at least an item
            if( html_text.length > 0 ) {
                $el_pinned_result.show();
                fav_header = self._buildHeaderTemplate( 'fav_header', 'Favourites', 'search-section fav-header' );
                $el_pinned_result.append( fav_header );
                $el_pinned_result.find( '.fav-header' ).append( "<div>" + html_text + "</div>" );
                // Update items in html text
                $el_pinned_result.find( '.pin-item' ).remove();
                $el_pinned_result.find( '.remove-item' ).addClass( 'remove-fav' ).removeClass( 'remove-item' );
                $el_pinned_result.find( '.remove-fav' ).attr( 'title', title );
	        // Register events
                self.registerRemoveLinkClicks( self );
                self.registerToolLinkClick( self );
                $el_pinned_result.find( '.history-search-link' ).click(function( e ) {
                    self.removeOverlay();
                });
            }
        },

        /** Build template for most used tools */
        buildMostUsedTools: function( el ) {
            var self = this,
                most_used_tools = {},
                tools = [],
                id = "",
                item_obj = {},
                html_text = "",
                used_tools_header = "",
                $el_most_used_tools_result = $( el ),
                class_name = 'search-section used-tools-header',
                title = 'Most Used Tools';
            most_used_tools = self.getStorageObject( self, window.Galaxy.user.id, 'most_used_tools' );
            // Transfer the object to an array for sorting on count property
            for( item in most_used_tools ) {
                tools.push([ item, most_used_tools[ item ] ]);
            }
            // Sort the list in the decreasing order of count
            tools.sort(function(item_one, item_two){
                return item_two[ 1 ][ 'count' ] - item_one[ 1 ][ 'count' ];
            });
            // Build the template for most used tools, the most used being shown in the front
            for( item in tools ) {
                var id = tools[ item ][ 0 ],
                    item_obj = tools[ item ][ 1 ],
                    class_names = "most-used-tools btn btn-primary link-tile " + id;
                    html_text = html_text + "<a class='" + class_names + "' " +
                                    "title= '"+ item_obj.desc +"' target='"+ item_obj.target +"' href='"+ item_obj.link +"' " +
                                    "data-id= '" + id + "' data-version='"+ item_obj.version +"' data-formstyle='"+ item_obj.formstyle + "'>"
                                     + item_obj.desc + "</a>";
            }
            // Build section only if there is at least an item
            if( html_text.length > 0 ) {
                used_tools_header = self._buildHeaderTemplate( 'used_tools_header', title, class_name );
                $el_most_used_tools_result.append( used_tools_header );
          	$el_most_used_tools_result.find( '.used-tools-header' ).append( "<div>" + html_text + "</div>" );
                self.registerToolLinkClick( self );
            }
        },

        /** Build the fetched items template using the template dictionary */ 
        makeToolSearchResultTemplate: function( collection, tool_template ) {
	    var header_template = "",
	        self = this,
	        $el_search_result = $( '.search-results' ),
	        $el_pin_item = null,
	        $el_remove_item = null,
                title = "Tools",
                class_name = "search-section search-tools",
                html = "";
            // Append header section when shown for all
	    if( self.getActiveFilter() === "all" ) {
	        $el_search_result.append( self._buildHeaderTemplate( "tools", title, class_name ) );
	    }
            else {
                $el_search_result.append( self._buildHeaderTemplate( "tools", "", class_name ) );
            }
            // Make complete template
	    _.each( collection, function( item ) {
                html = html + item.template;
	    });
            html = html + tool_template;
            self.setHTMLtoDOM( self, $el_search_result, '.search-tools', '.tool-search-link', html );
        },

        /** Set HTML text to DOM */
        setHTMLtoDOM: function( self, $el, section_class, link_class , html_text ) {
            if( html_text.length > 0 ) {
                // Append the template to DOM
                $el.find( section_class ).append( "<div>" + html_text +  "</div>" );
                // Register link clicks for the new links
	        self.registerToolLinkClick( self );
	        self.registerLinkActionClickEvent( self, $( link_class ) );
            }
        },

        /** Open the respective link as the modal pop up or in the center of the main screen */
        searchedToolLink: function( _self, e ) {
	    var id = "",
	        form_style = "",
	        version = "", 
	        $target_element = null;
	    if( e ) {
	        _self.removeOverlay();
	        // Set the target element as jQuery element
	        if( e.srcElement ) {
		    $target_element = $( e.srcElement );
	        }
	        else if( e.target ) {
		    $target_element = $( e.target );
	        }
	        // Fetch the properties
	        id = $target_element.attr( 'data-id' );
	        form_style = $target_element.attr( 'data-formstyle' );
	        version = $target_element.attr( 'data-version' );
	        // Load as modal popup
	        if( id === 'upload1' ) {
		    Galaxy.upload.show();
	        }
	        // Open the link in the iframe
	        else if ( form_style === 'regular' ) {
		    var form = new ToolForm.View( { id : id, version : version } );
		    form.deferred.execute(function() {
		        Galaxy.app.display( form );
		    });
	        }
	        else if ( form_style === 'special' ) {
		    // Redirect to url other than the Galaxy
		    document.location = $target_element.attr( 'href' );
	        }
	    }
        },

        /** Make custom search section */
        makeCustomSearchSection: function( section_object ) {
	    var self = this,
                template_string = "",
	        $el_search_result = $( '.search-results' ),
	        $el_section_link = $( "." + section_object.link_class_name ),
	        link = "",
	        target = '_top',
	        data_type = "",
                section_class_name = section_object.class_name.split(" ")[1];
            // Set datatype for different url of links
	    if( section_object.link_class_name.indexOf( 'history' ) > -1 ) {
	        data_type = "history";
	    }
	    else if( section_object.link_class_name.indexOf( 'datalib' ) > -1 ) {
	        data_type = "data library";
	    }
            else if( section_object.link_class_name.indexOf( 'workflow' ) > -1 ) {
	        data_type = "workflow";
	    }

	    $el_search_result.find( '.' + section_class_name ).remove();
	    _.each( section_object.data, function( item ) {
	        if( !self.checkItemPresent( item.id, "removed_results", self ) ) {
                    switch( data_type ) {
                        case "history":
                            link = "/datasets/" + item.id + "/display/?preview=True";
                            target = 'galaxy_main';
                            break;
                        case "data library":
                            link = Galaxy.root + "library/list#folders/" + item.root_folder_id;
                            break;
                        case "workflow":
                            link = Galaxy.root + "workflow/editor?id=" + item.id;
                            break;
                    }
	            template_string = template_string + self._buildLinkTemplate( item.id, link, item.name, item.description, target,
                                                                                 section_object.link_class_name,
                                                                                 self.checkItemPresent( item.id, "pinned_results", self ) );
	        }
	    });
	    // Append section header if filter is "all"
	    if( self.getActiveFilter() === "all" ) {
	        $el_search_result.append( self._buildHeaderTemplate( section_object.id, section_object.name, section_object.class_name ) );
	    }
            else {
                $el_search_result.append( self._buildHeaderTemplate( section_object.id, "", section_object.class_name ) );
            }
            // Append template to DOM
            $el_search_result.find( '.' + section_class_name ).append( "<div>" + template_string + "</div>" );
            // Register link clicks for new links
	    $el_search_result.find( "." + section_object.link_class_name ).click(function( e ) {
	        self.removeOverlay();
	    });
	    self.registerLinkActionClickEvent( self, $( '.' + section_object.link_class_name ) );
        },

        /** Remove the delete item from localstorage */
        removeFromDataStorage: function( self, $el, type ) {
	    var link_id = "",
	        elem = $el[0].outerHTML;
            // Get the id of the link
	    link_id = ( $( elem ).attr( 'id' ) ? $( elem ).attr( 'id' ) : $( elem ).attr( 'data-id' ) );
            // Delete it from web storage
            self.deleteFromStorage( self, window.Galaxy.user.id, type, link_id );
        },

        /** Set local/session storage for removed results */
        setLocalStorageForRemovedLinks: function( self, elem ) {
            self.setStorageObject( self, window.Galaxy.user.id, 'removed_results', $( elem ).attr( 'data-id' ), elem );
        },

        /** Set localstorage for the removed links */
        setStorage: function( self, $el ) {
	    self.setLocalStorageForRemovedLinks( self, $el[0].outerHTML );
        },

        /** Build web storage object based on whether user is logged in */
        setStorageObject: function( self, user_id, type, id, elem ) {
            var storageType = {},
                key = "",
                storageObject = {},
                elem_obj = {};
            // Get the storage type - localStorage or sessionStorage
            storageType = ( user_id ? window.localStorage : window.sessionStorage );
            // Get the storage key
            key = ( user_id ? ( user_id + self.web_storage_keys[0] ) : self.web_storage_keys[1] );
            if( storageType.getItem( key ) ) {
                storageObject = JSON.parse( storageType.getItem( key ) );
                if( !storageObject[ type ] ) {
                    storageObject[ type ] = {};
                }
	    }
	    else {
	        storageObject[ type ] = {};
	    }

            // Check for html strings and set element to web storage
            if( isNaN( elem ) ) {
                storageObject[ type ][ id ] = elem;
            }
            else { // check for most used tools
                elem_obj = id;
                if ( storageObject[ type ][ elem_obj.id ] ) {
                    // Increment the counter
                    storageObject[ type ][ elem_obj.id ][ 'count' ] = parseInt( storageObject[ type ][ elem_obj.id ][ 'count' ] ) + 1;
                }
                else {
                    storageObject[ type ][ elem_obj.id ] = { 'count': 1,
                                                             'desc': elem_obj.desc,
                                                             'link': elem_obj.link,
                                                             'target': elem_obj.target,
                                                             'formstyle': elem_obj.formstyle,
                                                             'version': elem_obj.version };
                }
            }
            // Set the object to key
	    storageType.setItem( key, JSON.stringify( storageObject ) );
        },

        /** Return the web storage object */
        getStorageObject: function( self, user_id, type ) {
            var storageType = null,
                key = "";
            // Get the storage type - localStorage or sessionStorage
            storageType = ( user_id ? window.localStorage : window.sessionStorage );
            // Get the storage key
            key = ( user_id ? ( user_id + self.web_storage_keys[0] ) : self.web_storage_keys[1] );
            if ( storageType.getItem( key ) ) {
                return JSON.parse( storageType.getItem( key ) )[ type ];
            }
            else {
                return {};
            }
        },

        /** Remove item from web storage */
        deleteFromStorage: function( self, user_id, type, id ) {
            var storageType = null,
                key = "",
                localStorageObject = null;
            // Get the storage type - localStorage or sessionStorage
            storageType = ( user_id ? window.localStorage : window.sessionStorage );
            // Get the storage key
            key = ( user_id ? ( user_id + self.web_storage_keys[0] ) : self.web_storage_keys[1] );
            localStorageObject = JSON.parse(storageType.getItem( key ));
            if( localStorageObject[ type ] ) {
                delete localStorageObject[ type ][ id ];
                storageType.setItem( key, JSON.stringify( localStorageObject ) );
            }
        },

        /** Return links template */
        _buildLinkTemplate: function( id, link, name, description, target, cls, isBookmarked, version, min_width, form_style ) {
	    var template = "",
                bookmark_class = (isBookmarked ? "pinned-item" : ""),
                bookmark_title = (isBookmarked ? "Added to favourites" : "Add to favourites") ;
	        template = "<a class='" + cls + " btn btn-primary link-tile ' href='" + link +
	                   "' role='button' title='" + name +
	                   "' target='" + target +
                           "' data-id='" + id;
                // If the template is for tool links, add additional attributes
	        if( cls.indexOf('tool') > -1 ) {
		    template = template + "' data-version='" + version +
		               "' minsizehint='" + min_width +
		               "' data-formstyle='" + form_style;
	        }
                template = template + "'><span class='fa fa-thumb-tack pin-item actions " + bookmark_class + "' " +
                           "title='"+ bookmark_title +"'></span>" +
                           (( isBookmarked ) ? "<span class='fa fa-trash remove-item actions hide' title='Exclude from search'></span>" : " <span class='fa fa-trash remove-item actions show' title='Exclude from search'></span>") +
                           name +  " " + (description ? description : "") + "</a>";
	    return template;
        },

        /** Build section header template */
        _buildHeaderTemplate: function( id, name, cls ) {
	    return "<div class='" + cls + "' data-id='searched_" + id + "' >" + name + "</div>";
        },

        /** Template for no results for any query */
        _templateNoResults: function() {
	    return '<div class="no-results">No results. Please search with different keywords</div>';
        },

        _templateNoItems: function() {
            return '<div class="no-results"> No items remaining </div>';
        },

        /** Remove the search overlay */ 
        removeOverlay: function() {
	    $( '.search-screen-overlay' ).hide();
	    $( '.search-screen' ).hide();
        }
    });
    searchOverlay = new OverlaySearchView();
    searchItems = new SearchItemsView();
});
