/*
 * File: app/view/menuUtilisateurs.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('KECMdesktop.view.menuUtilisateurs', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menuUtilisateurs',

    itemId: 'menuUtilisateurs',
    collapsed: true,
    iconCls: 'user',
    title: 'Utilisateurs',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'folder_add'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'folder_delete'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});