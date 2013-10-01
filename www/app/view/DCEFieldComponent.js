/*
 * File: app/view/DCEFieldComponent.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.view.DCEFieldComponent', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.DCEFieldComponent',

    width: 243,
    fieldLabel: 'Label',
    labelSeparator: ' ',
    labelWidth: 60,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    disabled: true,
                    itemId: 'contentTitleBtn',
                    margin: '10 10 0 0',
                    maxWidth: 100,
                    style: '{cursor:default !important;}',
                    allowDepress: false,
                    enableToggle: true,
                    handleMouseEvents: false,
                    pressed: true,
                    text: ''
                },
                {
                    xtype: 'button',
                    localiserId: 'addBtn',
                    itemId: 'addBtn',
                    margin: '10 10 0 0',
                    iconCls: 'add',
                    text: 'Ajouter'
                },
                {
                    xtype: 'button',
                    localiserId: 'chooseBtn',
                    itemId: 'chooseBtn',
                    margin: '10 10 0 0',
                    iconCls: 'search',
                    text: 'Choisir'
                },
                {
                    xtype: 'button',
                    localiserId: 'modifyBtn',
                    itemId: 'editBtn',
                    margin: '10 10 0 0',
                    iconCls: 'edit',
                    text: 'Modifier'
                },
                {
                    xtype: 'button',
                    localiserId: 'removeBtn',
                    itemId: 'removeBtn',
                    margin: '10 0 0 0',
                    iconCls: 'close',
                    text: 'Supprimer'
                }
            ]
        });

        me.callParent(arguments);
    }

});