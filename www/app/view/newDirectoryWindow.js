/*
 * File: app/view/newDirectoryWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.view.newDirectoryWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.newDirectoryWindow',

    height: 98,
    id: 'newDirectoryWindow',
    width: 400,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'New directory',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Name',
                            labelWidth: 110,
                            name: 'text',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            id: 'newDirectorySubmitBtn',
                            text: 'Create as a child of the selected directory'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});