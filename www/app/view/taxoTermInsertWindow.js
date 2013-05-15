/*
 * File: app/view/taxoTermInsertWindow.js
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

Ext.define('Rubedo.view.taxoTermInsertWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.taxoTermInsertWindow',

    localiserId: 'newTermWindow',
    height: 118,
    id: 'taxoTermInsertWindow',
    width: 400,
    layout: {
        type: 'fit'
    },
    title: 'Nouveau terme',

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
                            localiserId: 'termField',
                            fieldLabel: 'Terme ',
                            name: 'text',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            localiserId: 'addBtn',
                            id: 'taxoTermInsertorBtn',
                            scale: 'large',
                            text: 'Ajouter'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});