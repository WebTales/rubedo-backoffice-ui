/*
 * File: app/store/MLUnsubscribedUsers.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('Rubedo.store.MLUnsubscribedUsers', {
    extend: 'Ext.data.Store',
    alias: 'store.MLUnsubscribedUsers',

    requires: [
        'Rubedo.model.userDataModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'Rubedo.model.userDataModel',
            storeId: 'MLUnsubscribedUsers',
            pageSize: 50,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'mailing-lists/get-unsubscribed-users'
                    
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});