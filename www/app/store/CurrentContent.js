/*
 * File: app/store/CurrentContent.js
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

Ext.define('Rubedo.store.CurrentContent', {
    extend: 'Ext.data.Store',
    alias: 'store.CurrentContent',

    requires: [
        'Rubedo.model.contenusDataModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            usedCollection: 'contents',
            isOptimised: true,
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.contenusDataModel',
            storeId: 'CurrentContent',
            proxy: {
                type: 'ajax',
                batchActions: false,
                api: {
                    create: 'contents/create',
                    read: 'contents/find-one',
                    update: 'contents/update',
                    destroy: 'contents/delete'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    nameProperty: 'mapping',
                    encode: true,
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});