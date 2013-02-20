/*
 * File: app/view/queryFieldComponent.js
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

Ext.define('Rubedo.view.queryFieldComponent', {
    extend: 'Ext.container.Container',
    alias: 'widget.queryFieldComponent',

    anchor: '100%',
    height: 24,
    margin: '30 0 0 0',
    width: 261,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    ACL: 'write.ui.queries',
                    itemId: 'addBtn',
                    margin: '0 10 0 0',
                    iconCls: 'add',
                    text: 'Ajouter'
                },
                {
                    xtype: 'button',
                    ACL: 'write.ui.queries',
                    itemId: 'editBtn',
                    margin: '0 10 0 0',
                    iconCls: 'edit',
                    text: 'Modifier'
                },
                {
                    xtype: 'button',
                    ACL: 'write.ui.queries',
                    itemId: 'removeBtn',
                    iconCls: 'close',
                    text: 'Supprimer'
                }
            ]
        });

        me.callParent(arguments);
    }

});