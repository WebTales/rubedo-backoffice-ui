/*
 * File: app/store/MailingListsCombo.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('Rubedo.store.MailingListsCombo', {
    extend: 'Ext.data.Store',
    alias: 'store.MailingListsCombo',

    requires: [
        'Rubedo.model.mailingListsModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'Rubedo.model.mailingListsModel',
            storeId: 'MailingListsCombo',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'mailing-lists/create',
                    read: 'mailing-lists',
                    update: 'mailing-lists/update',
                    destroy: 'mailing-lists/delete'
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