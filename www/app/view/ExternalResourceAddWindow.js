/*
 * File: app/view/ExternalResourceAddWindow.js
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

Ext.define('Rubedo.view.ExternalResourceAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ExternalResourceAddWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    id: 'ExternalResourceAddWindow',
    width: 400,
    constrain: true,
    title: 'Add external resource',
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
                            fieldLabel: 'Url',
                            name: 'url',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            vtype: 'url'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var form=button.up().getForm();
                                if (form.isValid()){
                                    button.up().up().targetStore.add(form.getValues());
                                    button.up().up().close();
                                }
                            },
                            anchor: '100%',
                            text: 'Add the external resource to this site'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});