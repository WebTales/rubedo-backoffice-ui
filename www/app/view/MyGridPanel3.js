/*
 * File: app/view/MyGridPanel3.js
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

Ext.define('Rubedo.view.MyGridPanel3', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel3',

    requires: [
        'Ext.grid.View',
        'Ext.grid.column.Date'
    ],

    id: 'VersionsGrid',
    store: 'VersionsDataJson',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    localiserId: 'versionCol',
                    dataIndex: 'text',
                    text: 'Version'
                },
                {
                    xtype: 'gridcolumn',
                    localiserId: 'statusCol',
                    dataIndex: 'status',
                    text: 'Etat'
                },
                {
                    xtype: 'datecolumn',
                    localiserId: 'dateCol',
                    dataIndex: 'date',
                    text: 'Date'
                },
                {
                    xtype: 'gridcolumn',
                    localiserId: 'authorCol',
                    dataIndex: 'auteur',
                    text: 'Auteur'
                }
            ]
        });

        me.callParent(arguments);
    }

});