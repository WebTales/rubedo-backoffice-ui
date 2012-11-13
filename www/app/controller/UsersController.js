/*
 * File: app/controller/UsersController.js
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

Ext.define('Rubedo.controller.UsersController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.UsersController',

    groupSelect: function(selModel, record, index, options) {
        var users = [ ];
        this.getGroupUsers(record,users);
        Ext.getStore("UsersGroupStore").loadData(users);
        Ext.Array.forEach(Ext.getCmp("adminFUtilisateurs").getComponent("contextBar").query("buttongroup"), function(btn){btn.enable();});
        Ext.getCmp("groupDeleteButton").enable();
        var arButtons = [ ];
        this.ArianneBuilder(record,arButtons);
        Ext.getCmp("adminFUtilisateurs").getComponent("filArianne").removeAll();
        Ext.getCmp("adminFUtilisateurs").getComponent("filArianne").add(arButtons.reverse());
        if (record.isRoot()){
            var name= " Racine ";
        } else {
            var name = " "+record.get("name")+" : ";
            var userNb = users.length;
            var calif = "vide";
            if (userNb==1) {calif="utilisateur";} else if (userNb>1) {calif="utilisateurs";} else if (userNb===0) {userNb= undefined;}
        }
        Ext.getCmp("adminFUtilisateurs").getComponent("barreMeta").getComponent("boiteBarreMeta").update({
            name:name,
            userNb:userNb,
            calif:calif
        });
    },

    removeGroup: function(button, e, options) {
        var target = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        if (!Ext.isEmpty(target)) {
            target.remove();
            Ext.Array.forEach(Ext.getCmp("adminFUtilisateurs").getComponent("contextBar").query("buttongroup"), function(btn){btn.disable();});
            button.disable();
        }
    },

    openGroupAddWindow: function(button, e, options) {
        var window = Ext.widget("GroupAddWindow");
        Ext.getCmp('ViewportPrimaire').add(window);
        window.show();

    },

    createGroup: function(button, e, options) {
        var target = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        if (Ext.isEmpty(target)) {
            target=Ext.getCmp("groupsGrid").getStore().getRootNode();
        }
        var nameField = button.previousSibling();
        if (nameField.isValid()) {
            target.appendChild({
                name:nameField.getValue(),
                members: [ ],
                rights: { }
            });
            target.expand();
        }
        button.up().up().close();

    },

    onWindowBeforeClose: function(panel, options) {
        Ext.getStore("UsersAdminDataStore").removeAll();
    },

    changeAdminPwdSubmit: function(button, e, options) {
        var myForm=button.up().getForm();

        if (myForm.isValid()) {
            if (myForm.getFieldValues().password==myForm.getFieldValues().passwordConfirm){
                myForm.submit({
                    url:"users/change-password",
                    success: function(form, action) {
                        button.up().up().close();

                    },
                    failure: function(form, action) {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Erreur', 'Formulaire invalide');
                            break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Erreur', 'Erreur Ajax');
                            break;
                            case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Erreur', action.result.msg);
                        }
                    }
                }); } else {
                    Ext.Msg.alert('Erreur', "Les mots de passe ne correspondent pas");
                }
            }
    },

    newAdminDelegation: function(button, e, options) {
        var newDel = Ext.create("Rubedo.model.delegationDataModel", {
            giverId:Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().get("id")
        });
        button.up().up().getStore().add(newDel);
    },

    openUserAddWindow: function(button, e, options) {
        var target = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        if (!Ext.isEmpty(target)) {
            var window = Ext.widget("UserAddWindow");
            Ext.getCmp('ViewportPrimaire').add(window);
            window.show();
        }
    },

    userSelectionAdd: function(button, e, options) {
        var selection = Ext.Array.pluck(Ext.Array.pluck(button.up().up().getComponent(0).getSelectionModel().getSelection(),"data"),"name");
        var record = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        record.set("members", Ext.Array.union(record.get("members"),selection));
        Ext.getCmp("groupsGrid").getSelectionModel().deselectAll();
        Ext.getCmp("groupsGrid").getSelectionModel().select(record);
        button.up().up().close();
    },

    removeUserFromGroup: function(button, e, options) {
        var targets =Ext.Array.pluck(Ext.Array.pluck(Ext.getCmp("UsersInGroupGrid").getSelectionModel().getSelection(),"data"),"name");
        var record=Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        record.set("members", Ext.Array.difference(record.get("members"),targets));
        Ext.getCmp("groupsGrid").getSelectionModel().deselectAll();
        Ext.getCmp("groupsGrid").getSelectionModel().select(record);
    },

    userAdminSelect: function(tablepanel, record, item, index, e, options) {
        Ext.getCmp("userAdminMainPanel").enable();
        if ((!ACL.interfaceRights["write.ui.users"])&&(Ext.isEmpty(Ext.getCmp("userAdminMainPanel").alreadyRO))){
            Ext.Array.forEach(Ext.getCmp("userAdminMainPanel").query("field"), function(truc){truc.setReadOnly(true);});
            Ext.getCmp("userAdminMainPanel").alreadyRO=true;
        }
        Ext.getCmp("userAdminInfoDisplay").getForm().loadRecord(record);
        Ext.getCmp("userAdminAccessDisplay").getForm().loadRecord(record);
        if (Ext.isEmpty(record.get("photo"))) {
            Ext.getCmp("userAdminProfilePicture").setSrc("resources/images/userBig.png");
        } else {
            Ext.getCmp("userAdminProfilePicture").setSrc(record.get("photo"));
        }
        Ext.getStore("DelegationsDataStore").clearFilter(true);
        Ext.getStore("DelegationsDataStore").filter("giverId", record.get("id"));
    },

    adminInfoUpdate: function(button, e, options) {
        if (Ext.getCmp("userAdminInfoDisplay").getForm().isValid()) {
            Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().set(Ext.getCmp("userAdminInfoDisplay").getForm().getValues());
        }
    },

    newUser: function(button, e, options) {
        var newUser = Ext.create("Rubedo.model.userDataModel",{
            name:"Nouvel Utilisateur",
            creationDate:Ext.Date.now()
        });
        button.up().up().getComponent(0).getStore().add(newUser);
    },

    userAdminRemove: function(button, e, options) {
        var targets = button.up().up().getComponent(0).getSelectionModel().getSelection();
        button.up().up().getComponent(0).getStore().remove(targets);
        Ext.getCmp("userAdminMainPanel").disable();
    },

    onWindowShow: function(abstractcomponent, options) {
        Ext.getStore("UsersAdminDataStore").clearFilter();
        Ext.getStore("UsersAdminDataStore").load();
    },

    onMainWindowRender: function(abstractcomponent, options) {
        if (abstractcomponent.isXType("window")){
            Ext.getStore("UsersDataStore").clearFilter();
            Ext.getStore("UsersDataStore").load();
        }
    },

    onWindowBeforeClose2: function(panel, options) {
        Ext.getStore("UsersDataStore").removeAll();
    },

    onWindowBeforeClose1: function(panel, options) {
        Ext.getStore("UsersDataStore").clearFilter();
    },

    deleteAdminPicture: function(button, e, options) {
        Ext.getCmp("userAdminProfilePicture").setSrc("resources/images/userBig.png");
        Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().set("photo", null);
    },

    adminAccessEdit: function(button, e, options) {
        if (Ext.getCmp("userAdminAccessDisplay").getForm().isValid()) {
            Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().set(Ext.getCmp("userAdminAccessDisplay").getForm().getValues());
        }
    },

    openAdminChangePwdWindow: function(button, e, options) {
        var window = Ext.widget("AdminPasswordChange");
        Ext.getCmp('ViewportPrimaire').add(window);
        window.show();
        window.getComponent(0).getForm().loadRecord(Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected());
    },

    openUserSettings: function(abstractcomponent, options) {
        if (abstractcomponent.isWindow) {
            var myRecord= Ext.getStore("CurrentUserDataStore").getRange()[0];
            Ext.getCmp("userInfoDisplay").getForm().loadRecord(myRecord);
            if (Ext.isEmpty(myRecord.get("photo"))) {
                Ext.getCmp("userProfilePicture").setSrc("resources/images/userBig.png");
            } else {
                Ext.getCmp("userProfilePicture").setSrc(myRecord.get("photo"));
            }
        }
    },

    userInfoUpdate: function(button, e, options) {
        var myRecord= Ext.getStore("CurrentUserDataStore").getRange()[0];
        if (Ext.getCmp("userInfoDisplay").getForm().isValid()){
            myRecord.set(Ext.getCmp("userInfoDisplay").getForm().getValues());
        }
    },

    deleteUserProfilePic: function(button, e, options) {
        Ext.getCmp("userProfilePicture").setSrc("resources/images/userBig.png");
        Ext.getStore("CurrentUserDataStore").getRange()[0].set("photo", null);
    },

    adminDeleteDelegations: function(button, e, options) {
        button.up().up().getStore().remove(button.up().up().getSelectionModel().getSelection());
    },

    getGroupUsers: function(group, array) {
        if (!group.isRoot()){
            var me=this;
            Ext.Array.forEach(group.get("members"), function(membre){
                var someMembre = Ext.getStore("UsersDataStore").findRecord("name", membre);
                if (!Ext.isEmpty(someMembre)){
                    Ext.Array.include(array,someMembre);
                }
            });
        }

    },

    ArianneBuilder: function(node, array) {
        var me=this;
        if (node.isRoot()) {
            var button = Ext.widget("button", {text:"Groupes<b> ></b>", iconCls:"user"});
            button.on("click",function(){ Ext.getCmp("groupsGrid").getSelectionModel().select(node);});
            array.push(button);
        } else {
            var button = Ext.widget("button", {text:node.get("name")+"<b> ></b>", iconCls:"user"});
            button.on("click",function(){ Ext.getCmp("groupsGrid").getSelectionModel().select(node);});
            array.push(button);
            me.ArianneBuilder(node.parentNode,array);
        }
    },

    init: function(application) {
        this.control({
            "#groupsGrid": {
                select: this.groupSelect
            },
            "#groupDeleteButton": {
                click: this.removeGroup
            },
            "#groupAddButton": {
                click: this.openGroupAddWindow
            },
            "#groupCreateButton": {
                click: this.createGroup
            },
            "#UserAdminWindow": {
                beforeclose: this.onWindowBeforeClose,
                show: this.onWindowShow
            },
            "#AdminPasswordChangeBtn": {
                click: this.changeAdminPwdSubmit
            },
            "#AdminAddDelegationBtn": {
                click: this.newAdminDelegation
            },
            "#userAddButton": {
                click: this.openUserAddWindow
            },
            "#userSelectionAddButton": {
                click: this.userSelectionAdd
            },
            "#userRemoveButton": {
                click: this.removeUserFromGroup
            },
            "#userAdminGrid": {
                itemclick: this.userAdminSelect
            },
            "#userAdminInfoEdit": {
                click: this.adminInfoUpdate
            },
            "#userAdminAdd": {
                click: this.newUser
            },
            "#userAdminRemove": {
                click: this.userAdminRemove
            },
            "#adminFUtilisateurs": {
                render: this.onMainWindowRender,
                beforeclose: this.onWindowBeforeClose2
            },
            "#UserAddWindow": {
                beforeclose: this.onWindowBeforeClose1
            },
            "#userAdminProfilePictureDelete": {
                click: this.deleteAdminPicture
            },
            "#userAdminAccessEdit": {
                click: this.adminAccessEdit
            },
            "#AdminChangeUserPwd": {
                click: this.openAdminChangePwdWindow
            },
            "#userSettings": {
                afterrender: this.openUserSettings
            },
            "#userInfoEdit": {
                click: this.userInfoUpdate
            },
            "#userProfilePictureDelete": {
                click: this.deleteUserProfilePic
            },
            "#AdminDeleteDelegationBtn": {
                click: this.adminDeleteDelegations
            }
        });
    }

});
