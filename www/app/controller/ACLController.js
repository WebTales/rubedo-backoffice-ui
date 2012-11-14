/*
 * File: app/controller/ACLController.js
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

Ext.define('Rubedo.controller.ACLController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ACLController',

    onComponentRender: function(abstractcomponent, options) {
        if (!Ext.isEmpty(abstractcomponent.ACL)) {   
            if (ACL.interfaceRights[abstractcomponent.ACL]===false){
                abstractcomponent.hide();
                abstractcomponent.clearListeners();
                abstractcomponent.fireEvent=Ext.emptyFn;
            }
        }
    },

    init: function(application) {
        Ext.define('ACL', {
            singleton:true,
            interfaceRights:{
                "read.ui.taxonomy":false,
                "write.ui.taxonomy":false,
                "read.ui.contentTypes":false,
                "write.ui.contentTypes":false,
                "read.ui.contents":false,
                "write.ui.contents":false,
                "read.ui.contents.draft":false,
                "read.ui.contents.pending":false,
                "read.ui.contents.published":false,
                "write.ui.contents.draft":false,
                "write.ui.contents.pending":false,
                "write.ui.contents.published":false,
                "write.ui.contents.draftToPending":false,
                "write.ui.contents.pendingToDraft":false,
                "write.ui.contents.pendingToPublished":false,
                "write.ui.contents.putOnline":false,
                "write.ui.contents.putOffline":false,
                "read.ui.masks":false,
                "write.ui.masks":false,
                "read.ui.users":false,
                "write.ui.users":false,
                "read.ui.pages":false,
                "write.ui.pages":false,
                "read.ui.medias":false,
                "write.ui.medias":false,
                "read.ui.groups":false,
                "write.ui.groups":false,
                "read.ui.workflows":false,
                "write.ui.workflows":false,
                "exe.ui.elasticSearch":false
            }
        });

        this.control({
            "component": {
                render: this.onComponentRender
            }
        });
    },

    onLaunch: function() {
        Ext.Ajax.request({
            url:'acl',
            params:{
                data: Ext.JSON.encode(ACL.interfaceRights)
            },
            success:function(response){
                ACL.interfaceRights=Ext.JSON.decode(response.responseText);
                Ext.getCmp('boutonPincipalInterface').enable();
                Ext.getCmp('entete').add(Ext.widget('esWindowButton'));
            },
            failure:function(){
                Ext.Msg.alert('Erreur', 'Erreur dans la récupération des droits');
            }
        });
    }

});
