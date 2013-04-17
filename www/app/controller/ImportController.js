/*
 * File: app/controller/ImportController.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('Rubedo.controller.ImportController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ImportController',

    onMainCSVinportFieldChange: function(filefield, value, eOpts) {
        if (value) {
            var form= filefield.up().up().getForm();
            filefield.up().up().up().setLoading(true);
            form.submit({
                clientValidation: true,
                url: 'import/analyse',
                params: { 

                },
                success: function(form, action) {
                    var response = Ext.JSON.decode(action.response.responseText);
                    Ext.getStore("NotInportFieldsStore").removeAll();
                    Ext.getStore("InportAsFieldStore").removeAll();
                    Ext.getStore("InportAsTaxoStore").removeAll();
                    Ext.getCmp("fileFieldHelper1").show();
                    Ext.getStore("NotInportFieldsStore").loadData(response.detectedFields);
                    filefield.up().nextSibling().getComponent(0).setTitle(response.detectedFieldsCount+" champs identifiés et "+response.detectedContentsCount+" contenus importables");
                    filefield.up().up().up().setLoading(false);

                },
                failure: function(form, action) {
                    filefield.up().up().up().setLoading(false);
                    var message = "Erreur dans l'analyse du fichier";
                    try {
                        var response = Ext.JSON.decode(action.response.responseText);
                        if (response.message){
                            message=response.message;
                        }
                    } catch(err){}
                        Ext.Msg.alert("Erreur", message);
                        filefield.reset();
                    }
                });
            }
    },

    onMainImportSubmitBtnClick: function(button, e, eOpts) {
        var myForm = button.up().getForm();
        if (myForm.isValid()){
            var configs=myForm.getValues();
            var inportAsField=Ext.Array.pluck(Ext.getStore("InportAsFieldStore").getRange(), "data");
            var inportAsTaxo=Ext.Array.pluck(Ext.getStore("InportAsTaxoStore").getRange(), "data");
            var form=Ext.getCmp("mainCSVinportField").up().up().getForm();
            button.up().up().setLoading(true);
            form.submit({
                url: 'import/import',
                params: { 
                    configs:Ext.JSON.encode(configs),
                    inportAsField: Ext.JSON.encode(inportAsField),
                    inportAsTaxo: Ext.JSON.encode(inportAsTaxo)
                },
                success: function(form, action) {
                    var response = Ext.JSON.decode(action.response.responseText);
                    Ext.Msg.alert("Succés", response.importedContentsCount+" contenus importés.");            
                    button.up().up().setLoading(false);
                    button.up().up().close();

                },
                failure: function(form, action) {
                    button.up().up().setLoading(false);
                    Ext.Msg.alert("Erreur", "Erreur lors de l'importation");
                }
            });
        }
    },

    onFileFieldHelper1Click: function(button, e, eOpts) {
        Ext.getCmp("mainCSVinportField").reset();
        Ext.getStore("NotInportFieldsStore").removeAll();
        Ext.getStore("InportAsFieldStore").removeAll();
        Ext.getStore("InportAsTaxoStore").removeAll();
        button.hide();
    },

    init: function(application) {
        this.control({
            "#mainCSVinportField": {
                change: this.onMainCSVinportFieldChange
            },
            "#mainImportSubmitBtn": {
                click: this.onMainImportSubmitBtnClick
            },
            "#fileFieldHelper1": {
                click: this.onFileFieldHelper1Click
            }
        });
    }

});
