/*
 * File: app/store/MediasDataStore.js
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

Ext.define('Rubedo.store.MediasDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.MediasDataStore',

    requires: [
        'Rubedo.model.mediaDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'MediasDataStore',
            model: 'Rubedo.model.mediaDataModel',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'medias/create',
                    read: 'data/Medias.json',
                    update: 'medias/update',
                    destroy: 'medias/delete'
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
            },
            groupers: {
                property: 'type'
            }
        }, cfg)]);
    }
});