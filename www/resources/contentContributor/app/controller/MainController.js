/*
 * File: app/controller/MainController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ContentContributor.controller.MainController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.MainController',

    models: [
        'taxonomyTermModel'
    ],

    fieldReplicate: function(button, e, options) {
        var nouvChamp=button.up().getComponent(1).cloneConfig();
        nouvChamp.anchor = '90%';
        nouvChamp.style = '{float:left;}';
        var enrobage =Ext.widget('fieldWrapper');
        enrobage.add(nouvChamp);
        enrobage.getComponent('helpBouton').setTooltip("Réplique du champ "+button.up().getComponent(1).fieldLabel);
        var supprimeur = Ext.widget('button', {iconCls: 'close', margin: '0 0 0 5', tooltip: 'Enlever', itemId: 'boutonEffaceurChamps'});
        supprimeur.on('click', function(){
            button.valeursM--;
            button.up().up().remove(supprimeur.up());
        });
        enrobage.add(supprimeur);
        button.up().up().insert(button.up().up().items.indexOf(button.up())+button.valeursM, enrobage);
        button.valeursM++;
    },

    saveContent: function(button, e, options) {
        if (Ext.getCmp("MainForm").getForm().isValid()){
            if (Ext.getCmp("MainForm").isUpdatingContent){

            } else {
                var myFields = Ext.getCmp("MainForm").getForm().getValues();
                var newContent = Ext.create('ContentContributor.model.contentDataModel', {
                    text:myFields.text,
                    fields:myFields,
                    taxonomy: { },
                    online:true,
                    status:button.cStatus,
                    typeId:AppGlobals.typeId

                });
                Ext.getCmp("MainForm").setLoading(true);
                Ext.getStore("Contents").addListener("write", function(){

                    Ext.getCmp("MainForm").setLoading(false);
                    if (AppGlobals.contextQueryType=="manual"){
                        var queryRecord = Ext.getStore("QueriesStore").getRange()[0];
                        var qArray =Ext.clone(queryRecord.get("query"));
                        qArray.push(newContent.get("id"));
                        queryRecord.set("query", qArray);
                    }
                    Ext.Msg.alert('Succès', 'Le nouveau contenu a bien été enregistré');
                },this, {single:true});


                    Ext.getStore("Contents").add(newContent);

                }
            } else {
                Ext.Msg.alert('Erreur', 'Certains champs ne sont pas valides');
            }
    },

    initializeContentForm: function(contentType) {
        Ext.getCmp("MainForm").setTitle("Nouveau contenu "+contentType.type);
        this.renderMainFields(contentType.fields);
        this.renderTaxoFields(contentType.vocabularies);
    },

    renderMainFields: function(fields) {
        var target = Ext.getCmp("MainForm");
        Ext.Array.forEach(fields, function(field,index){
            var configurator=Ext.clone(field.config);
            configurator.labelSeparator=" ";
            var newField= Ext.widget(field.cType, configurator);
            var wrapping= Ext.widget("fieldWrapper");
            newField.anchor = '90%';
            newField.style = '{float:left;}';
            wrapping.add(newField);
            wrapping.getComponent('helpBouton').setTooltip(configurator.tooltip);
            if (Ext.isEmpty(configurator.tooltip)){
                wrapping.getComponent('helpBouton').hidden=true;
            } 
            if (newField.multivalued) {
                enrobage.add(Ext.widget('button', {iconCls: 'add',valeursM: 1, margin: '0 0 0 5', tooltip: 'Valeurs multiples', itemId: 'fieldReplicatorBtn'}));

            }
            target.add(wrapping);


        });
    },

    renderTaxoFields: function(vocabularies) {
        Ext.Array.remove(vocabularies, "navigation");
        if (!Ext.isEmpty(vocabularies)){
            var target = Ext.getCmp("MainForm");
            var taxoFieldset = Ext.widget("fieldset", {title:"Taxonomie", collapsible:true, id:"taxonomyFieldset"});
            var lesTaxo = vocabularies;
            var i=0;
            for (i=0; i<lesTaxo.length; i++) {
                var leVocab = Ext.getStore('TaxonomieDataJson').findRecord('id', lesTaxo[i]);
                var storeT = Ext.create('Ext.data.JsonStore', {
                    model:"ContentContributor.model.taxonomyTermModel",
                    remoteFilter:"true",
                    proxy: {
                        type: 'ajax',
                        api: {
                            read: '../../taxonomy-terms'
                        },
                        reader: {
                            type: 'json',
                            messageProperty: 'message',
                            root: 'data'
                        },
                        encodeFilters: function(filters) {
                            var min = [],
                                length = filters.length,
                                i = 0;

                            for (; i < length; i++) {
                                min[i] = {
                                    property: filters[i].property,
                                    value   : filters[i].value
                                };
                                if (filters[i].type) {
                                    min[i].type = filters[i].type;
                                }
                                if (filters[i].operator) {
                                    min[i].operator = filters[i].operator;
                                }
                            }
                            return this.applyEncoding(min);
                        }
                    },
                    filters: {
                        property: 'vocabularyId',
                        value: leVocab.get("id")
                    }

                });
                storeT.on("beforeload", function(s,o){
                    o.filters=Ext.Array.slice(o.filters,0,1);
                    if (!Ext.isEmpty(o.params.comboQuery)){

                        var newFilter=Ext.create('Ext.util.Filter', {
                            property:"text",
                            value:o.params.comboQuery,
                            operator:'like'
                        });

                        o.filters.push(newFilter);

                    }


                });


                var selecteur = Ext.widget('comboboxselect', {
                    name:leVocab.get("id"),
                    anchor:"90%",
                    fieldLabel: leVocab.get("name"),
                    submitValue:false,
                    autoScroll: false,
                    store: storeT,
                    queryMode: 'remote',
                    queryParam: 'comboQuery',
                    minChars:3,
                    displayField: 'text',
                    valueField: 'id',
                    filterPickList: true,
                    typeAhead: true,
                    forceSelection: !leVocab.data.expandable,
                    createNewOnEnter: leVocab.data.expandable,
                    multiSelect: leVocab.data.multiSelect,
                    allowBlank: !leVocab.data.mandatory
                });
                if (AppGlobals.contentQueryType=="simple"){
                    if (!Ext.isEmpty(AppGlobals.contentQuery.vocabularies[leVocab.get("id")])) {
                        selecteur.setValue(AppGlobals.contentQuery.vocabularies[leVocab.get("id")].terms);
                    }
                }

                var enrobage =Ext.widget('fieldWrapper');
                enrobage.add(selecteur);
                enrobage.getComponent('helpBouton').setTooltip(leVocab.data.helpText);
                if (Ext.isEmpty(leVocab.data.helpText)){enrobage.getComponent('helpBouton').hide();}
                taxoFieldset.add(enrobage);

            }
            target.add(taxoFieldset);
            Ext.getCmp("taxonomyFieldset").doLayout();
        }
    },

    init: function(application) {
        Ext.require("Rubedo.view.CKEField");
        Ext.define('AppGlobals', {singleton: true});

        this.control({
            "[itemId= 'boutonReplicateurChamps']": {
                click: this.fieldReplicate
            },
            "#mainDraftBtn, #mainSubmitBtn, #mainPublishBtn": {
                click: this.saveContent
            }
        });
    },

    mainAction: function() {
        var me=this;
        var options = decodeURIComponent(window.location.search.slice(1))
        .split('&')
        .reduce(function _reduce (a, b) {
            b = b.split('=');
            a[b[0]] = b[1];
            return a;
        }, {});
            if (!Ext.isEmpty(options.queryId)){
                Ext.getStore("QueriesStore").filter("id",options.queryId);
                Ext.getStore("QueriesStore").addListener("load", function(a, records){
                    if (!Ext.isEmpty(records)){
                        AppGlobals.contextQuery=records[0].get("query");
                        AppGlobals.contextQueryType=records[0].get("type");
                    } else {
                        Ext.Msg.alert('Erreur', 'Erreur dans la récupération de la requête de contexte');
                    }
                    if (!Ext.isEmpty(options.typeId)){
                        Ext.Ajax.request({
                            url: '../../content-types/find-one',
                            params: {
                                id: options.typeId
                            },
                            success: function(response){
                                var result = Ext.JSON.decode(response.responseText).data;
                                AppGlobals.typeId=options.typeId;
                                Ext.getCmp("MainViewport").add(Ext.widget("MainForm"));
                                me.initializeContentForm(result);
                            }
                        });
                    }
                }, this, {single:true});
                } else {
                    if (!Ext.isEmpty(options.typeId)){
                        Ext.Ajax.request({
                            url: '../../content-types/find-one',
                            params: {
                                id: options.typeId
                            },
                            success: function(response){
                                var result = Ext.JSON.decode(response.responseText).data;
                                AppGlobals.typeId=options.typeId;
                                Ext.getCmp("MainViewport").add(Ext.widget("MainForm"));
                                me.initializeContentForm(result);
                            }
                        });
                    }
                }

    }

});
