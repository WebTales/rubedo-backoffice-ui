/*
 * File: app/store/SpecialOffers.js
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

Ext.define('Rubedo.store.SpecialOffers', {
    extend: 'Ext.data.Store',
    alias: 'store.SpecialOffers',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SpecialOffers',
            fields: [
                {
                    dateFormat: 'timestamp',
                    name: 'beginDate',
                    type: 'date'
                },
                {
                    dateFormat: 'timestamp',
                    name: 'endDate',
                    type: 'date'
                },
                {
                    name: 'price'
                }
            ],
            listeners: {
                update: {
                    fn: me.onStoreUpdate,
                    scope: me
                },
                add: {
                    fn: me.onStoreAdd,
                    scope: me
                },
                remove: {
                    fn: me.onStoreRemove,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onStoreUpdate: function(store, record, operation, modifiedFieldNames, eOpts) {
        var record=Ext.getCmp("productVariationsGrid").getSelectionModel().getLastSelected();
        var data=Ext.clone(Ext.Array.pluck(store.getRange(),"data"));
        Ext.Array.forEach(data, function(item){
            item.beginDate=Ext.Date.format(item.beginDate,"U");
            item.endDate=Ext.Date.format(item.endDate,"U");
        });
        record.set("specialOffers",data);
    },

    onStoreAdd: function(store, records, index, eOpts) {
        var record=Ext.getCmp("productVariationsGrid").getSelectionModel().getLastSelected();
        var data=Ext.clone(Ext.Array.pluck(store.getRange(),"data"));
        Ext.Array.forEach(data, function(item){
            item.beginDate=Ext.Date.format(item.beginDate,"U");
            item.endDate=Ext.Date.format(item.endDate,"U");
        });
        record.set("specialOffers",data);
    },

    onStoreRemove: function(store, record, index, isMove, eOpts) {
        var record=Ext.getCmp("productVariationsGrid").getSelectionModel().getLastSelected();
        var data=Ext.clone(Ext.Array.pluck(store.getRange(),"data"));
        Ext.Array.forEach(data, function(item){
            item.beginDate=Ext.Date.format(item.beginDate,"U");
            item.endDate=Ext.Date.format(item.endDate,"U");
        });
        record.set("specialOffers",data);
    }

});