/*
 * File: app/store/UserTypesCombo.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('Rubedo.store.UserTypesCombo', {
    extend: 'Ext.data.Store',
    alias: 'store.UserTypesCombo',

    requires: [
        'Rubedo.model.userType',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.util.Filter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'UserTypes',
            autoLoad: false,
            model: 'Rubedo.model.userType',
            remoteFilter: true,
            storeId: 'UserTypesCombo',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'user-types'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                }
            },
            filters: {
                property: 'signUpType',
                value: {
                    $ne: 'none'
                }
            }
        }, cfg)]);
    }
});