/*
 * File: app/store/ContentsEditorial.js
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

Ext.define('Rubedo.store.ContentsEditorial', {
    extend: 'Ext.data.Store',
    alias: 'store.ContentsEditorial',

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
            isOptimised: true,
            usedCollection: 'contents',
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.contenusDataModel',
            remoteFilter: true,
            remoteSort: true,
            storeId: 'ContentsEditorial',
            pageSize: 50,
            sortOnFilter: false,
            proxy: {
                type: 'ajax',
                batchActions: false,
                api: {
                    create: 'contents/create',
                    read: 'contents',
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
            },
            listeners: {
                update: {
                    fn: me.onJsonstoreUpdate,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonstoreUpdate: function(store, record, operation, modifiedFieldNames, eOpts) {
        Ext.getCmp("editorialContentsGrid").fireEvent("selectionchange",Ext.getCmp("editorialContentsGrid").getSelectionModel(),Ext.getCmp("editorialContentsGrid").getSelectionModel().getSelection());
    }

});