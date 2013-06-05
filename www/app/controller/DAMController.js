/*
 * File: app/controller/DAMController.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.controller.DAMController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.DAMController',

    selectDAMType: function(model, selected, eOpts) {
        if (Ext.isEmpty(selected)){
            this.resetInterfaceNoSelect();
        } else {
            this.resetInterfaceSelect(selected[0]);
        }
    },

    onAddDAMBtnClick: function(button, e, eOpts) {
        if (!Ext.isEmpty(Ext.getStore("DAMFacetteStore").activeFacettes.damType)){
            var DAMType= Ext.getStore("MediaTypesForDAM").findRecord("id",Ext.getStore("DAMFacetteStore").activeFacettes.damType);
            var myEditor = Ext.widget("DAMCreateUpdateWindow");
            Ext.getCmp("DAMMainFileFieldBox").up().remove(Ext.getCmp("DAMMainFileFieldBox"));
            myEditor.typeId=DAMType.get("id");
            myEditor.mainFileType=DAMType.get("mainFileType");
            myEditor.setTitle(Rubedo.RubedoAutomatedElementsLoc.newDamText+DAMType.get("type"));
            myEditor.show();
            this.renderDAMTypeFields(DAMType, false);
            this.renderTaxoFields(DAMType);
            Ext.getCmp("DAMCreateUpdateWindow").doLayout();
        } else {
            Ext.widget("DAMChooseMTWindow").show();
        }
    },

    selectDAM: function(model, selected, eOpts) {
        Ext.getCmp("DAMDeleteBtn").enable();
        Ext.getCmp("DAMUpdateBtn").enable();
        Ext.getCmp("DAMROBtn").enable();
        if (Ext.isEmpty(selected)) {

            Ext.getCmp("DAMDeleteBtn").disable();
            Ext.getCmp("DAMUpdateBtn").disable();
            Ext.getCmp("DAMROBtn").disable();
            Ext.getCmp("DAMPPBtnGroup").disable();
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').hide();
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent(0).setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/images.png');

        } else if (selected.length==1) {
            var customMeta = "<b> "+selected[0].get("text")+"</b></br><b> "+Rubedo.RubedoAutomatedElementsLoc.lastUpdateText+" : </b>"+Ext.Date.format(selected[0].get("lastUpdateTime"), Ext.Date.defaultFormat)+"<b> "+Rubedo.RubedoAutomatedElementsLoc.authorText+" : </b>"+selected[0].get("author");
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').show();
            Ext.getCmp("DAMPPBtnGroup").enable();
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').update(customMeta);
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent(0).setSrc("dam/get-thumbnail?id="+selected[0].get("id"));
        } else {
            Ext.getCmp("DAMUpdateBtn").disable();
            var customMeta = "<b> "+selected.length+" "+Rubedo.RubedoAutomatedElementsLoc.mediasText+" "+ "</b>";
            Ext.getCmp("DAMPPBtnGroup").disable();
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').show();
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').update(customMeta);
            Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent(0).setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/images.png');
            Ext.getCmp("DAMROBtn").disable();
        }
    },

    onDAMDeleteBtnClick: function(button, e, eOpts) {
        var fenetre = Ext.widget('delConfirmZ');
        fenetre.show();
        Ext.getCmp('delConfirmZOui').on('click', function() { 
            Ext.getCmp("DAMCenter").getStore().remove(Ext.getCmp("DAMCenter").getSelectionModel().getSelection());
            Ext.getStore("DAMFacetteStore").addListener("datachanged", function(){Ext.getStore("DAMFacetteStore").load(); }, this, {delay:100,single:true});
            Ext.getCmp('delConfirmZ').close();

        }, this);  

    },

    onDAMSubmitBtnClick: function(button, e, eOpts) {
        button.up().up().setLoading(true);
        var me=this;
        var form=Ext.getCmp("DAMFieldBox").getForm();

        form.submit({
            clientValidation: true,
            url: 'dam/create',
            params: { 
                typeId: button.up().up().typeId,
                mainFileType: button.up().up().mainFileType,
                taxonomy: Ext.JSON.encode(me.getTaxoValues()),
                targetArray: Ext.JSON.encode(form.getFieldValues().target)
            },
            success: function(form, action) {
                button.up().up().setLoading(false);
                button.up().up().close();
                if (Ext.getCmp("DAMCreateUpdateWindow").directContribute){
                    Ext.getStore("DAMPickerStore").load();
                } else {
                    Ext.getStore("DAMFacetteStore").load();
                }

            },
            failure: function(form, action) {
                button.up().up().setLoading(false);
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidFieldsError);
                    break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.serverConnectionError);
                    break;
                    case Ext.form.action.Action.SERVER_INVALID:
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, action.result.msg);
                }
            }
        });

    },

    onDAMUpdateBtnClick: function(button, e, eOpts) {
        var record = Ext.getCmp("DAMCenter").getSelectionModel().getLastSelected();
        this.prepareContext(record.get("id"), record.get("typeId"));
        /*
        var DAMType= Ext.getStore("MediaTypesForDAM").findRecord("id", record.get("typeId"));
        var myEditor = Ext.widget("DAMCreateUpdateWindow");
        myEditor.setTitle("Edition du média \" "+record.get("title")+" \"");
        Ext.getCmp("DAMSubmitBtn").hide();
        Ext.getCmp("DAMSubmitUpdateBtn").show();
        Ext.getCmp("DAMFieldBox").remove(Ext.getCmp("DAMFieldBox").getComponent(1));
        myEditor.show();
        this.renderDAMTypeFields(DAMType, true);
        this.renderTaxoFields(DAMType);
        var valueBox=record.get("fields");
        if (Ext.isEmpty(valueBox)){valueBox={ };}
        valueBox.title=record.get("title");
        valueBox.originalFileId=record.get("originalFileId");
        valueBox=Ext.Object.merge(valueBox,record.get("taxonomy"));
        myEditor.getComponent(0).getForm().setValues(valueBox);
        Ext.getCmp("DAMCreateUpdateWindow").doLayout();*/
    },

    onDAMSubmitUpdateBtnClick: function(button, e, eOpts) {
        var me = this;
        if((Ext.getCmp("DAMFieldBox").getForm().isValid())&&(!Ext.isEmpty(Ext.getCmp("DAMOriginalUpd").getValue()))){
            if (button.indepMode){
                var record = Ext.getStore("DAMEditStore").getRange()[0];
            } else {
                var record = Ext.getCmp("DAMCenter").getSelectionModel().getLastSelected();
            }
            record.beginEdit();
            record.set("title",Ext.getCmp("DAMSEcondaryFieldsBox").getComponent(0).getComponent(1).getValue());
            record.set("originalFileId",Ext.getCmp("DAMMainFileFieldBox").getComponent(0).getValue());
            record.set("fields",Ext.getCmp("DAMFieldBox").getForm().getValues());
            record.set("writeWorkspace",Ext.getCmp("DAMFieldBox").getForm().getValues().writeWorkspace);
            record.set("target",Ext.getCmp("DAMFieldBox").getForm().getValues().target);
            record.set("taxonomy", me.getTaxoValues());
            record.endEdit();
            button.up().up().close();
            Ext.getStore("DAMFacetteStore").load();
        } else {Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle,Rubedo.RubedoAutomatedElementsLoc.invalidFieldsError);}
    },

    onDAMROBtnClick: function(button, e, eOpts) {
        var record = Ext.getCmp("DAMCenter").getSelectionModel().getLastSelected();
        this.prepareContext(record.get("id"), record.get("typeId"), true);
        /*
        var DAMType= Ext.getCmp("DAMMTGrid").getSelectionModel().getLastSelected();
        var myEditor = Ext.widget("DAMCreateUpdateWindow");
        myEditor.setTitle(record.get("title"));
        Ext.getCmp("DAMSubmitBtn").hide();
        Ext.getCmp("DAMSubmitUpdateBtn").hide();
        Ext.getCmp("DAMSwitchEditBtn").show();
        Ext.getCmp("DAMFieldBox").remove(Ext.getCmp("DAMFieldBox").getComponent(1));
        myEditor.show();
        this.renderDAMTypeFields(DAMType, true);
        this.renderTaxoFields(DAMType);
        var valueBox=record.get("fields");
        valueBox.title=record.get("title");
        valueBox.originalFileId=record.get("originalFileId");
        valueBox=Ext.Object.merge(valueBox,record.get("taxonomy"));
        myEditor.getComponent(0).getForm().setValues(valueBox);
        Ext.Array.forEach(Ext.getCmp("DAMFieldBox").query("field"), function(thing){thing.setReadOnly(true);});
        Ext.getCmp("DAMCreateUpdateWindow").doLayout();
        */
    },

    onDAMSwitchEditBtnClick: function(button, e, eOpts) {
        var record = Ext.getCmp("DAMCenter").getSelectionModel().getLastSelected();
        var myEditor = Ext.getCmp("DAMCreateUpdateWindow");
        button.hide();
        Ext.Array.forEach(Ext.getCmp("DAMFieldBox").query("field"), function(thing){thing.setReadOnly(false);});
        Ext.getCmp("DAMSubmitUpdateBtn").show();
        myEditor.setTitle(Rubedo.RubedoAutomatedElementsLoc.DAMEditText+" \" "+record.get("title")+" \"");


    },

    onGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        if (ACL.interfaceRights["write.ui.dam"]){
            this.prepareContext(record.get("id"), record.get("typeId"), record.get("readOnly"));
        } else {
            this.prepareContext(record.get("id"), record.get("typeId"), true);
        }
    },

    onDAMSearchBtnClick: function(button, e, eOpts) {
        Ext.getStore("DAMFacetteStore").activeFacettes.query=Ext.getCmp("DAMSearchField").getValue();
        Ext.getStore("DAMFacetteStore").load();
    },

    onAddDamAfterTypeBtnClick: function(button, e, eOpts) {
        if (!button.nonClassic){
            if (button.up().getForm().isValid()){
                var DAMType= Ext.getStore("MediaTypesForDAM").findRecord("id",button.up().getForm().getValues().typeId);
                var myEditor = Ext.widget("DAMCreateUpdateWindow");
                Ext.getCmp("DAMMainFileFieldBox").up().remove(Ext.getCmp("DAMMainFileFieldBox"));
                myEditor.typeId=DAMType.get("id");
                myEditor.mainFileType=DAMType.get("mainFileType");
                myEditor.setTitle(Rubedo.RubedoAutomatedElementsLoc.newDamText+" "+DAMType.get("type"));
                myEditor.show();
                this.renderDAMTypeFields(DAMType, false);
                this.renderTaxoFields(DAMType);
                Ext.getCmp("DAMCreateUpdateWindow").doLayout();
                button.up().up().close();
            } 
        }
    },

    onMassDamUploadBtnClick: function(button, e, eOpts) {

    },

    resetInterfaceSelect: function(record) {
        var me =this;
        Ext.getCmp("addDAMBtn").enable();
        Ext.Array.forEach(Ext.getCmp("DAMInterface").getComponent("contextBar").query("buttongroup"), function(btng){btng.enable();});
        Ext.getCmp("DAMInterface").getComponent("breadcrumb").removeAll();
        Ext.getCmp("DAMInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: "Mèdiathéque <b> > </b>", iconCls:"mediaTypes"}));
        Ext.getCmp("DAMInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: record.get("type"), iconCls:"folder"}));
        Ext.getStore("DAMStore").getProxy().extraParams.tFilter="[{\"property\":\"typeId\",\"value\":\""+record.get("id")+"\"}]";
        Ext.getStore("DAMStore").load();
        var customMeta = "<b> "+record.get("type")+ "</b>";
        Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').show();
        Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').update(customMeta);
        Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent(0).setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/folder.png');

    },

    resetInterfaceNoSelect: function() {
        Ext.Array.forEach(Ext.getCmp("DAMInterface").getComponent("contextBar").query("buttongroup"), function(btng){btng.disable();});
        Ext.getCmp("DAMInterface").getComponent("breadcrumb").removeAll();
        Ext.getCmp("DAMInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: "Types de médias", iconCls:"mediaTypes"}));
        Ext.getCmp("addDAMBtn").disable();
        Ext.getStore("DAMStore").removeAll();
        Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').hide();
        Ext.getCmp("DAMInterface").getDockedComponent('barreMeta').getComponent(0).setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/images.png');
    },

    renderDAMTypeFields: function(DAMType, updateMode) {
        var me=this;
        var fieldBox=Ext.getCmp("DAMSEcondaryFieldsBox");
        Ext.Array.forEach(DAMType.get("fields"),function(field){
            me.renderMTField(Ext.clone(field), fieldBox, updateMode);
        });
    },

    renderMTField: function(protoData, renderTarget, updateMode) {
        var me=this;
        var configurator=protoData.config;
        if (protoData.cType == 'combobox') {
            var myStore=  Ext.create('Ext.data.Store', Ext.clone(protoData.config.store));
            configurator.store = myStore;
        } else if ((updateMode)&&(protoData.cType == 'Ext.form.field.File')){
            protoData.cType="Rubedo.view.GFSFileField";
        }
        var newField= Ext.create(protoData.cType, configurator);
        newField.config=protoData.config;
        newField.protoId=protoData.protoId;
        newField.configFields=Ext.getStore("MTFieldsStore").findRecord("id", protoData.protoId).get("configFields");
        newField.cType=protoData.cType;
        newField.anchor = '90%';
        newField.style = '{float:left;}';
        var casing =Ext.widget('ChampTC');
        casing.add(newField);
        casing.getComponent('helpBouton').setTooltip(newField.config.tooltip);
        if (Ext.isEmpty(newField.config.tooltip)){
            casing.getComponent('helpBouton').hidden=true;
        } 
        renderTarget.add(casing);
    },

    renderTaxoFields: function(DAMType, useSep) {
        var formTaxoTC =  Ext.getCmp('DAMTaxoBox');
        var lesTaxo = DAMType.get("vocabularies");
        if (Ext.isEmpty(lesTaxo)) {
            formTaxoTC.hide();
        } else {
            var i=0;
            for (i=0; i<lesTaxo.length; i++) {
                if (useSep){
                    var leVocab = Ext.getStore('TaxonomyForDam2').findRecord('id', lesTaxo[i]);
                } else {
                    var leVocab = Ext.getStore('TaxonomyForDAM').findRecord('id', lesTaxo[i]);
                }
                if (leVocab.get("inputAsTree")){
                    var storeT = Ext.create("Ext.data.TreeStore", {
                        model:"Rubedo.model.taxonomyTermModel",
                        remoteFilter:"true",
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: 'taxonomy-terms/tree'
                            },
                            reader: {
                                type: 'json',
                                messageProperty: 'message'
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
                    var toUse="Ext.ux.TreePicker";
                    if(leVocab.get("multiSelect")){toUse="Ext.ux.TreeMultiPicker";}
                    if(leVocab.get("id")=='navigation'){storeT.getProxy().api={read:"taxonomy-terms/navigation-tree"};}
                    storeT.load();
                    var selecteur = Ext.create(toUse, {
                        name:leVocab.get("id"),
                        fieldLabel: leVocab.get("name"),
                        store: storeT,
                        anchor:"90%",
                        ignoreIsNotPage:true,
                        displayField:"text",
                        allowBlank: !leVocab.data.mandatory,
                        plugins:[Ext.create("Ext.ux.form.field.ClearButton")]
                    });


                } else {
                    var storeT = Ext.create('Ext.data.JsonStore', {
                        model:"Rubedo.model.taxonomyTermModel",
                        remoteFilter:"true",
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: 'taxonomy-terms'
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

                }
                var enrobage =Ext.widget('ChampTC');
                enrobage.add(selecteur);
                enrobage.getComponent('helpBouton').setTooltip(leVocab.data.helpText);
                if (Ext.isEmpty(leVocab.data.helpText)){enrobage.getComponent('helpBouton').hide();}
                formTaxoTC.add(enrobage);

            }}
    },

    getTaxoValues: function() {
        var values = { };
        Ext.Array.forEach(Ext.getCmp("DAMTaxoBox").query("field"),function(field){
            values[field.name]=field.getValue();
        });
        return(values);
    },

    prepareContext: function(damId, typeId, ROMode) {
        var me = this;
        Ext.getStore("DAMEditStore").clearFilter(true);
        Ext.getStore("MTForDAMEdit").clearFilter(true);
        Ext.getStore("DAMEditStore").filter("id",damId);
        Ext.getStore("MTForDAMEdit").filter("id",typeId);
        var counter = 3;
        Ext.getStore("MTForDAMEdit").addListener("load", function(){
            counter = counter - 1;
            if (counter === 0) {
                me.fireUnitaryEdit(ROMode);
            }
        },this, {single:true});
            Ext.getStore("TaxonomyForDam2").addListener("load", function(){
                counter = counter - 1;
                if (counter === 0) {
                    me.fireUnitaryEdit(ROMode);
                }
            },this, {single:true});
                Ext.getStore("DAMEditStore").addListener("load", function(){
                    counter = counter - 1;
                    if (counter === 0) {
                        me.fireUnitaryEdit(ROMode);
                    }
                },this, {single:true});
                    Ext.getStore("MTForDAMEdit").load();
                    Ext.getStore("TaxonomyForDam2").load();
                    Ext.getStore("DAMEditStore").load();

    },

    fireUnitaryEdit: function(ROMode) {
        var record = Ext.getStore("DAMEditStore").getRange()[0];
        var DAMType= Ext.getStore("MTForDAMEdit").getRange()[0];
        var myEditor = Ext.widget("DAMCreateUpdateWindow");
        myEditor.on("beforeclose", function(){
            Ext.getStore("MTForDAMEdit").removeAll();
            Ext.getStore("DAMEditStore").removeAll();
            Ext.getStore("TaxonomyForDam2").removeAll();
        });
        myEditor.setTitle(Rubedo.RubedoAutomatedElementsLoc.DAMEditText+" \" "+record.get("title")+" \"");
        Ext.getCmp("DAMSubmitBtn").hide();
        Ext.getCmp("DAMSubmitUpdateBtn").show();
        Ext.getCmp("DAMSubmitUpdateBtn").indepMode=true;
        Ext.getCmp("DAMSEcondaryFieldsBox").remove(Ext.getCmp("DAMSEcondaryFieldsBox").getComponent(1));
        myEditor.show();
        this.renderDAMTypeFields(DAMType, true);
        this.renderTaxoFields(DAMType, true);
        var valueBox=record.get("fields");
        if (Ext.isEmpty(valueBox)){valueBox={ };}
        valueBox.title=record.get("title");
        valueBox.originalFileId=record.get("originalFileId");
        valueBox=Ext.Object.merge(valueBox,record.get("taxonomy"));
        myEditor.getComponent(0).getForm().setValues(valueBox);
        Ext.getCmp("DAMCreateUpdateWindow").doLayout();
        if (ROMode){
            Ext.Array.forEach(myEditor.query("field"), function(thing){thing.setReadOnly(true);});
            //Ext.Array.forEach(myEditor.query("button"), function(thing){thing.disable();});
            myEditor.setTitle(Rubedo.RubedoAutomatedElementsLoc.DAMDisplayText+" \" "+record.get("title")+" \"");
            Ext.getCmp("DAMSubmitUpdateBtn").hide();
        }
    },

    renderFacets: function(facets) {
        var me=this;
        var target=Ext.getCmp("DAMFacetBox");
        target.removeAll();
        Ext.Array.forEach(facets, function(facet){
            if (facet._type=="range"){
                facet.id="lastupdatetime";
                facet.terms=[ ];
                if (!Ext.isEmpty(facet.ranges)){
                    Ext.Array.forEach(facet.ranges, function(rangeTerm){
                        if ((rangeTerm.count<Ext.getStore("DAMFacetteStore").getTotalCount())&&(rangeTerm.count!==0)){
                            facet.terms.push(rangeTerm);
                            rangeTerm.term=rangeTerm.from;

                        }
                    });
                }
            }
            if (!Ext.isEmpty(facet.terms)){
                var newFacet = Ext.widget("fieldset", {title:facet.label, collapsible:true});
                if(facet.id!="damType"){newFacet.collapse();}
                newFacet.usedProperty=facet.id;

                Ext.Array.forEach(facet.terms, function(term){
                    var newTerm=Ext.widget("button",{
                        text:term.label+" ("+term.count+")",
                        usedValue:term.term,
                        anchor:"100%",
                        handler:function(thing){
                            var theProp=Ext.getStore("DAMFacetteStore").activeFacettes[thing.up().usedProperty];
                            if ((!Ext.isEmpty(theProp))&&(facet._type!="range")){
                                if (Ext.isArray(theProp)){
                                    theProp.push(thing.usedValue);
                                } else {
                                    theProp=[theProp,thing.usedValue];
                                }

                            } else {
                                theProp=thing.usedValue;

                            }
                            Ext.getStore("DAMFacetteStore").activeFacettes[thing.up().usedProperty]=theProp;
                            Ext.getStore("DAMFacetteStore").load();
                        }
                    });
                    newFacet.add(newTerm);
                });

                target.add(newFacet);
            }
        });

    },

    renderActiveFacets: function(facets) {
        Ext.getCmp("DAMSearchField").setValue(Ext.getStore("DAMFacetteStore").activeFacettes.query);
        var target=Ext.getCmp("DAMActiveFacetBox");
        target.removeAll();
        Ext.Array.forEach(facets, function(thing){
            if (thing.terms.length>1){
                Ext.Array.forEach(thing.terms,function(term){
                    var activeOne = Ext.widget('splitbutton',{
                        pressed:true,
                        cls:"show-cross",
                        text:thing.label+" : "+term.label,
                        arrowHandler:function(){
                            Ext.Array.remove(Ext.getStore("DAMFacetteStore").activeFacettes[thing.id],term.term);
                            Ext.getStore("DAMFacetteStore").load();
                        },
                        handler:function(){
                            Ext.Array.remove(Ext.getStore("DAMFacetteStore").activeFacettes[thing.id],term.term);
                            Ext.getStore("DAMFacetteStore").load();
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
                        delete Ext.getStore("DAMFacetteStore").activeFacettes[thing.id];
                        Ext.getStore("DAMFacetteStore").load();
                    },
                    handler:function(){
                        delete Ext.getStore("DAMFacetteStore").activeFacettes[thing.id];
                        Ext.getStore("DAMFacetteStore").load();
                    }
                });
                if(thing.label=="Query"){
                    activeOne.setText(Rubedo.RubedoAutomatedElementsLoc.searchText+" : "+thing.terms[0].label);
                }
                target.add(activeOne);
            }
        });
        if (Ext.isEmpty(Ext.getStore("DAMFacetteStore").activeFacettes.damType)){
            Ext.getCmp("massDamUploadBtn").disable();
        } else {
            Ext.getCmp("massDamUploadBtn").enable();
        }
    },

    init: function(application) {
        this.control({
            "#DAMMTGrid": {
                selectionchange: this.selectDAMType
            },
            "#addDAMBtn": {
                click: this.onAddDAMBtnClick
            },
            "#DAMCenter": {
                selectionchange: this.selectDAM,
                itemdblclick: this.onGridpanelItemDblClick
            },
            "#DAMDeleteBtn": {
                click: this.onDAMDeleteBtnClick
            },
            "#DAMSubmitBtn": {
                click: this.onDAMSubmitBtnClick
            },
            "#DAMUpdateBtn": {
                click: this.onDAMUpdateBtnClick
            },
            "#DAMSubmitUpdateBtn": {
                click: this.onDAMSubmitUpdateBtnClick
            },
            "#DAMROBtn": {
                click: this.onDAMROBtnClick
            },
            "#DAMSwitchEditBtn": {
                click: this.onDAMSwitchEditBtnClick
            },
            "#DAMSearchBtn": {
                click: this.onDAMSearchBtnClick
            },
            "#addDamAfterTypeBtn": {
                click: this.onAddDamAfterTypeBtnClick
            },
            "#massDamUploadBtn": {
                click: this.onMassDamUploadBtnClick
            }
        });
    }

});
