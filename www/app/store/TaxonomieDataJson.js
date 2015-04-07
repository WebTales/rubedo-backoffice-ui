/*
 * File: app/store/TaxonomieDataJson.js
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

Ext.define('Rubedo.store.TaxonomieDataJson', {
    extend: 'Ext.data.Store',
    alias: 'store.TaxonomieDataJson',

    requires: [
        'Rubedo.model.taxonomieDataModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Taxonomy',
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.taxonomieDataModel',
            storeId: 'TaxonomieDataJson',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'taxonomy/create',
                    read: 'taxonomy',
                    update: 'taxonomy/update',
                    destroy: 'taxonomy/delete'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});