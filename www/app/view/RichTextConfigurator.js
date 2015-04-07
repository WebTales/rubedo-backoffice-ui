/*
 * File: app/view/RichTextConfigurator.js
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

Ext.define('Rubedo.view.RichTextConfigurator', {
    extend: 'Ext.window.Window',
    alias: 'widget.RichTextConfigurator',

    requires: [
        'Rubedo.view.CKEField',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    localiserId: 'rteConfigWindow',
    height: 360,
    width: 667,
    constrain: true,
    resizable: false,
    layout: 'fit',
    title: 'Editeur de texte riche',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'CKEField',
                    CKETBConfig: 'Email',
                    hideLabel: true,
                    name: 'html'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'validateBtn',
                            id: 'richTextConfiguratorSubmit',
                            iconCls: 'ouiSpetit',
                            text: 'Valider',
                            listeners: {
                                click: {
                                    fn: me.onRichTextConfiguratorSubmitClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onRichTextConfiguratorSubmitClick: function(button, e, eOpts) {
        var field = button.up().up().getComponent(0);
        if (field.isValid()) {
            if (button.directMode){
                var target=Ext.getCmp(button.targetedId);
                target.setValue(field.getValue());
                button.up().up().close();
            } else {
                var target=Ext.getCmp(button.targetedId);
                target.itemConfig.html=field.getValue();
                button.up().up().close();
                target.sync();
            }
        }

    }

});