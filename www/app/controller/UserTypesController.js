/*
 * File: app/controller/UserTypesController.js
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

Ext.define('Rubedo.controller.UserTypesController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.UserTypesController',

    onNewUTBtnClick: function(button, e, eOpts) {
        Ext.widget("newUTWindow").show();
    },

    onCreateNewUTBtnClick: function(button, e, eOpts) {
        if (button.up().getForm().isValid()) {
            var newMT=Ext.create("Rubedo.model.userType",button.up().getForm().getValues());
            newMT.set("vocabularies", [ ]);
            newMT.set("fields", [ ]);
            newMT.set("signUpType","none");
            newMT.set("defaultGroup",Ext.getStore("GroupsComboStore2").findRecord("name","public").get("id"));
            Ext.getStore("UserTypes").add(newMT);
            button.up().up().close();
        }
    },

    onMainUTGridSelectionChange: function(rowmodel, record, index, eOpts) {
        this.resetInterfaceSelect(record);
    },

    onRemoveUTBtnClick: function(button, e, eOpts) {
        var me=this;
        var cible = Ext.getCmp('mainUTGrid').getSelectionModel().getSelection()[0];
        if (Ext.isDefined(cible)) {
            Ext.Ajax.request({
                url: 'user-types/is-used',
                method:"GET",
                params: {
                    id: cible.get("id")
                },
                success: function(response){
                    var maskIsUsed=Ext.JSON.decode(response.responseText).used;
                    if (maskIsUsed){
                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.userTypeIsUsedError);
                    } else {
                        var fenetre = Ext.widget('delConfirmZ');
                        fenetre.specificMessage=Rubedo.RubedoAutomatedElementsLoc.thisUserTypeText;
                        fenetre.show();
                        Ext.getCmp('delConfirmZOui').on('click', function() { 
                            Ext.getCmp('mainUTGrid').getStore().remove(cible);
                            Ext.getCmp('delConfirmZ').close();
                            me.resetInterfaceNoSelect();
                        }); 
                    }
                }
            });
        }
    },

    onSaveUTBtnClick: function(button, e, eOpts) {
        var me=this;
        var record=Ext.getCmp("mainUTGrid").getSelectionModel().getLastSelected();
        var form = Ext.getCmp("userTypesEditForm").getForm();
        if (form.isValid()){
            record.beginEdit();
            record.set(form.getValues());
            var newVocabularies=Ext.Array.pluck(Ext.Array.pluck(Ext.getCmp("vocabulariesUTGrid").getSelectionModel().getSelection(), "data"), "id");
            record.set("vocabularies", newVocabularies);
            //record.set("fields", me.recordFields(Ext.getCmp('MTeditFields')));
            record.endEdit();
        } else {
            Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidRightsPropertiesError);
        }
    },

    onCopyUTBtnClick: function(button, e, eOpts) {
        var rec = Ext.clone(Ext.getCmp("mainUTGrid").getSelectionModel().getLastSelected().data);
        delete(rec.id);
        rec.type=rec.type+" - Copy "+Ext.Date.format(new Date(), 'j F, Y, G:i');
        rec.readOnly=false;
        delete(rec.version);
        delete(rec.createTime);
        delete(rec.lastUpdateTime);
        Ext.getCmp("mainUTGrid").getStore().add(rec);
    },

    onNewUTFieldBtnClick: function(button, e, eOpts) {
        Ext.widget("UTFieldAddWindow").show();
    },

    onUTFieldInsertBtnClick: function(button, e, eOpts) {

    },

    resetInterfaceNoSelect: function() {
        Ext.Array.forEach(Ext.getCmp("UserTypesInterface").getComponent("contextBar").query("buttongroup"), function(btng){btng.disable();});
        Ext.getCmp("removeUTBtn").disable();
        Ext.getCmp("UserTypesInterface").getComponent("breadcrumb").removeAll();
        Ext.getCmp("UserTypesInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: "User types ", iconCls:"user",localiserId:"userTypesLaunchBtn"}));
        Ext.getCmp('UTeditFields').removeAll();
        Ext.getCmp("UTfieldUp").disable();
        Ext.getCmp("UTfieldDown").disable();
        Ext.getCmp("UTfieldDeleter").disable();
        Ext.getCmp('UTFieldId').setValue();
        Ext.getCmp("UTFieldConfigsBox").removeAll();
        Ext.getCmp("UTcenterZone").disable();
        Ext.getCmp("userTypesEditForm").getForm().reset();
        Ext.getCmp("UserTypesInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta').hide();
    },

    resetInterfaceSelect: function(record) {
        var me =this;

        Ext.Array.forEach(Ext.getCmp("UserTypesInterface").getComponent("contextBar").query("buttongroup"), function(btng){btng.enable();});
        Ext.getCmp("removeUTBtn").enable();
        Ext.getCmp("UserTypesInterface").getComponent("breadcrumb").removeAll();
        Ext.getCmp("UserTypesInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: "User types ", iconCls:"user",localiserId:"userTypesLaunchBtn"}));
        Ext.getCmp("UserTypesInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: record.get("type"), iconCls:"user"}));
        Ext.getCmp("UTcenterZone").enable();
        Ext.getCmp("UTfieldUp").disable();
        Ext.getCmp("UTfieldDown").disable();
        Ext.getCmp('UTFieldId').setValue();
        Ext.getCmp("userTypesEditForm").getForm().setValues(record.getData());
        Ext.getCmp("UTfieldDeleter").disable();
        Ext.getCmp("UTFieldConfigsBox").removeAll();
        var metaBox = Ext.getCmp("UserTypesInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta');
        var values= record.getData();
        values.creation= Ext.Date.format(values.createTime, Ext.Date.defaultFormat);
        values.derniereModification= Ext.Date.format(values.lastUpdateTime, Ext.Date.defaultFormat);
        metaBox.update(values);
        metaBox.show();
        var selector= [];
        Ext.Array.forEach(record.get("vocabularies"),function(vocabId){
            if (!Ext.isEmpty(Ext.getCmp("vocabulariesUTGrid").getStore().findRecord("id", vocabId))){
                selector.push(Ext.getCmp("vocabulariesUTGrid").getStore().findRecord("id", vocabId));
            }
        });
        Ext.getCmp("vocabulariesUTGrid").getSelectionModel().select(selector);

        /*
        var targetZone=Ext.getCmp('UTeditFields');
        Ext.suspendLayouts();
        targetZone.removeAll();
        Ext.Array.forEach(record.get("fields"),function(field){
        me.renderMTField(field, targetZone);
        });
        Ext.resumeLayouts();
        Ext.getCmp("MTeditFields").doLayout();
        */

        if ((!ACL.interfaceRights["write.ui.userTypes"])||(record.get("readOnly"))) {
            Ext.Array.forEach(Ext.getCmp("userTypesEditForm").query("field"), function(thing){thing.setReadOnly(true);});
            Ext.getCmp("removeUTBtn").disable();
            Ext.getCmp("saveUTBtn").disable();
            Ext.getCmp("UTImportBtn").disable();
            Ext.getCmp("UTfieldDeleter").up().disable();
        } else {
            Ext.Array.forEach(Ext.getCmp("userTypesEditForm").query("field"), function(thing){thing.setReadOnly(false);});
            Ext.getCmp("removeUTBtn").enable();
            Ext.getCmp("saveUTBtn").enable();
            Ext.getCmp("UTImportBtn").enable();
            Ext.getCmp("UTfieldDeleter").up().enable();
        }



    },

    init: function(application) {
        this.control({
            "#newUTBtn": {
                click: this.onNewUTBtnClick
            },
            "#createNewUTBtn": {
                click: this.onCreateNewUTBtnClick
            },
            "#mainUTGrid": {
                select: this.onMainUTGridSelectionChange
            },
            "#removeUTBtn": {
                click: this.onRemoveUTBtnClick
            },
            "#saveUTBtn": {
                click: this.onSaveUTBtnClick
            },
            "#copyUTBtn": {
                click: this.onCopyUTBtnClick
            },
            "#newUTFieldBtn": {
                click: this.onNewUTFieldBtnClick
            },
            "#UTFieldInsertBtn": {
                click: this.onUTFieldInsertBtnClick
            }
        });
    }

});