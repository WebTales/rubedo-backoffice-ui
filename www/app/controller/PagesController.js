/*
 * File: app/controller/PagesController.js
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

Ext.define('Rubedo.controller.PagesController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.PagesController',

    pageSiteSelect: function(combo, records, options) {
        Ext.getStore("PagesDataStore").getProxy().extraParams.filter="[{\"property\":\"site\",\"value\":\""+records[0].get("id")+"\"}]";
        Ext.getStore("PagesDataStore").load();
        Ext.getStore("MasksComboStore").getProxy().extraParams.filter="[{\"property\":\"site\",\"value\":\""+records[0].get("id")+"\"}]";
        Ext.getStore("MasksComboStore").load();
        var filArianne = combo.up().up().up().getDockedComponent('filArianne');
        var typeFil = filArianne.getComponent('type');
        if (Ext.isDefined(typeFil)) {typeFil.setText(records[0].get("text"));}
        else { typeFil= Ext.widget('button',{iconCls: "masque-icon", text:records[0].get("text"), itemId:'type'});
        typeFil.on("click", function(){Ext.getCmp("mainPageTree").getSelectionModel().select(Ext.getCmp("mainPageTree").getRootNode());});
        filArianne.add(typeFil);
    }
    Ext.getCmp("addPageBtn").enable();
    Ext.getCmp("removePageBtn").disable();
    Ext.Array.forEach(Ext.getCmp("contributionPages").getComponent("contextBar").query("buttongroup"), function(btn){btn.disable();});
    Ext.getCmp("mainPageEdition").removeAll();
    },

    openPageAddWindow: function(button, e, options) {
        Ext.widget("newPageWindow").show();
    },

    createNewPage: function(button, e, options) {
        var form=button.up().getForm();
        var target=Ext.getCmp("mainPageTree").getSelectionModel().getLastSelected();
        if (form.isValid()){
            var newRows=button.previousSibling().getStore().findRecord("id",button.previousSibling().getValue()).get("rows");
            var newPage=form.getValues();
            newPage.rows=newRows;
            newPage.leaf=true;
            newPage.iconCls="masque-icon";
            newPage.site=Ext.getCmp("pagesSitesCombo").getValue();
            var store=Ext.getCmp("mainPageTree").getStore();
            store.suspendAutoSync();
            target.appendChild(newPage);
            target.set("leaf",false);
            target.expand();
            store.resumeAutoSync();
            store.sync();
            button.up().up().close();
        }
    },

    deletePage: function(button, e, options) {
        var target=Ext.getCmp("mainPageTree").getSelectionModel().getLastSelected();
        if (Ext.isDefined(target)) {
            var delCon = Ext.widget('delConfirmZ');
            delCon.show();
            var store=Ext.getCmp("mainPageTree").getStore();
            Ext.getCmp('delConfirmZOui').on('click', function() { 
                store.suspendAutoSync();
                var myParent=target.parentNode;
                if ((myParent.childNodes.length==1)&&(!myParent.isRoot())){
                    myParent.set("leaf",true);
                }
                target.remove();
                store.resumeAutoSync();
                store.sync();
                Ext.getCmp("addPageBtn").enable();
                Ext.getCmp("removePageBtn").disable();
                Ext.Array.forEach(Ext.getCmp("contributionPages").getComponent("contextBar").query("buttongroup"), function(btn){btn.disable();});
                Ext.getCmp("mainPageEdition").removeAll();
                Ext.getCmp('delConfirmZ').close();

            });  

        }
    },

    pageSelect: function(selModel, record, index, options) {
        if (!record.isRoot()){
            Ext.getCmp("removePageBtn").enable();
            Ext.Array.forEach(Ext.getCmp("contributionPages").getComponent("contextBar").query("buttongroup"), function(btn){btn.enable();});
            Ext.getCmp("mainPageEdition").removeAll();
            Rubedo.controller.MasqueController.prototype.masqueRestit(record.get("rows"),1,Ext.getCmp("mainPageEdition"));
        }
    },

    init: function(application) {
        this.control({
            "#pagesSitesCombo": {
                select: this.pageSiteSelect
            },
            "#addPageBtn": {
                click: this.openPageAddWindow
            },
            "#newPageSubmitBtn": {
                click: this.createNewPage
            },
            "#removePageBtn": {
                click: this.deletePage
            },
            "#mainPageTree": {
                select: this.pageSelect
            }
        });
    }

});
