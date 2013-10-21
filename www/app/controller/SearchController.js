/*
 * File: app/controller/SearchController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.controller.SearchController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.SearchController',

    mainSearchLaunch: function(button, e, eOpts) {
        var me=this;
        if (Ext.getCmp('ESSearchField').isValid()){
            var DisplayResults=Ext.getCmp('searchResultsWindow');
            if (Ext.isEmpty(DisplayResults)){
                DisplayResults=Ext.widget('searchResultsWindow');
                if (MyPrefData.simpleMode){
                    DisplayResults.maximized=true;
                    DisplayResults.draggable=false;
                }
                Ext.getCmp('desktopCont').add(DisplayResults);
                DisplayResults.show();
            } else {
                DisplayResults.show();
                DisplayResults.toFront();
            }
            var squery= { };
            if  (!Ext.isEmpty(Ext.getCmp('ESSearchField').getValue())){
                squery.query=Ext.getCmp('ESSearchField').getValue();
            }
            Ext.getStore("ESFacetteStore").activeFacettes=squery;
            Ext.getStore("ESFacetteStore").load();

        }
    },

    mainResultWindowGetContext: function(dataview, record, item, index, e, eOpts) {
        if ((record.get("objectType")=="content")&&(ACL.interfaceRights['read.ui.contents'])){
            Rubedo.controller.ContributionContenusController.prototype.unitaryContentEdit(record.get("id"));
        } else if ((record.get("objectType")=="dam")&&(ACL.interfaceRights['read.ui.contents'])){
            Rubedo.controller.DAMController.prototype.prepareContext(record.get("id"),record.get("typeId"));
        } else if ((record.get("objectType")=="user")&&(ACL.interfaceRights['read.ui.users'])){
            Rubedo.controller.UserTypesController.prototype.prepareContext(record.get("id"),record.get("typeId"));
        }
    },

    onESFacetQueryBtnClick: function(button, e, eOpts) {
        Ext.getStore("ESFacetteStore").activeFacettes.query=Ext.getCmp("ESFacetQueryField").getValue();
        Ext.getStore("ESFacetteStore").load();
    },

    renderActiveFacets: function(facets) {
        Ext.getCmp("ESFacetQueryField").setValue(Ext.getStore("ESFacetteStore").activeFacettes.query);
        var target=Ext.getCmp("SearchActiveFacetBar");
        target.removeAll();
        Ext.Array.forEach(facets, function(thing){
            if (thing.terms.length>1){
                Ext.Array.forEach(thing.terms,function(term){
                    var activeOne = Ext.widget('splitbutton',{
                        pressed:true,
                        cls:"show-cross",
                        text:thing.label+" : "+term.label,
                        arrowHandler:function(){
                            Ext.Array.remove(Ext.getStore("ESFacetteStore").activeFacettes[thing.id],term.term);
                            Ext.getStore("ESFacetteStore").loadPage(1);
                        },
                        handler:function(){
                            Ext.Array.remove(Ext.getStore("ESFacetteStore").activeFacettes[thing.id],term.term);
                            Ext.getStore("ESFacetteStore").loadPage(1);
                        }
                    });
                    if(thing.label=="Query"){
                        activeOne.setText(Rubedo.RubedoAutomatedElementsLoc.searchText+" : "+thing.terms[0].label);
                    }
                    target.add(activeOne);
                });
            } else {
                var activeOne = Ext.widget('splitbutton',{
                    pressed:true,
                    cls:"show-cross",
                    text:thing.label+" : "+thing.terms[0].label,
                    arrowHandler:function(){
                        delete Ext.getStore("ESFacetteStore").activeFacettes[thing.id];
                        Ext.getStore("ESFacetteStore").loadPage(1);
                    },
                    handler:function(){
                        delete Ext.getStore("ESFacetteStore").activeFacettes[thing.id];
                        Ext.getStore("ESFacetteStore").loadPage(1);
                    }
                });
                if(thing.label=="Query"){
                    activeOne.setText(Rubedo.RubedoAutomatedElementsLoc.searchText+" : "+thing.terms[0].label);
                }
                target.add(activeOne);
            }
        });
    },

    renderFacets: function(facets) {
        var me=this;
        var target=Ext.getCmp("searchFacetBox");
        target.removeAll();
        Ext.Array.forEach(facets, function(facet){
            if (facet._type=="range"){
                facet.id="lastupdatetime";
                facet.terms=[ ];
                if (!Ext.isEmpty(facet.ranges)){
                    Ext.Array.forEach(facet.ranges, function(rangeTerm){
                        if ((rangeTerm.count<Ext.getStore("ESFacetteStore").getTotalCount())&&(rangeTerm.count!==0)){
                            facet.terms.push(rangeTerm);
                            rangeTerm.term=rangeTerm.from;

                        }
                    });
                }
            }
            if (!Ext.isEmpty(facet.terms)){
                var newFacet = Ext.widget("fieldset", {title:facet.label, collapsible:true});
                if((facet.id!="type")&&(facet.id!="damType")){newFacet.collapse();}
                newFacet.usedProperty=facet.id;

                Ext.Array.forEach(facet.terms, function(term){
                    var newTerm=Ext.widget("button",{
                        text:term.label+" ("+term.count+")",
                        usedValue:term.term,
                        anchor:"100%",
                        margin:2,
                        handler:function(thing){
                            var theProp=Ext.getStore("ESFacetteStore").activeFacettes[thing.up().usedProperty];
                            if ((!Ext.isEmpty(theProp))&&(facet._type!="range")){
                                if (Ext.isArray(theProp)){
                                    theProp.push(thing.usedValue);
                                } else {
                                    theProp=[theProp,thing.usedValue];
                                }

                            } else {
                                theProp=thing.usedValue;

                            }
                            Ext.getStore("ESFacetteStore").activeFacettes[thing.up().usedProperty]=theProp;
                            Ext.getStore("ESFacetteStore").loadPage(1);
                        }
                    });
                    newFacet.add(newTerm);
                });

                target.add(newFacet);
            }
        });

    },

    init: function(application) {
        this.control({
            "#ESSearchButton": {
                click: this.mainSearchLaunch
            },
            "#ResultContentsGrid": {
                itemdblclick: this.mainResultWindowGetContext
            },
            "#ESFacetQueryBtn": {
                click: this.onESFacetQueryBtnClick
            }
        });
    }

});
