/*
 * File: app/view/contentPickerWindow.js
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

Ext.define('Rubedo.view.contentPickerWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.contentPickerWindow',

    requires: [
        'Rubedo.view.contentPickerGrid',
        'Rubedo.view.MyTool17'
    ],

    height: 434,
    id: 'contentPickerWindow',
    width: 751,
    layout: {
        type: 'fit'
    },
    title: 'Sélecteur de contenu',
    constrainHeader: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'contentPickerGrid'
                }
            ],
            tools: [
                {
                    xtype: 'mytool17'
                }
            ],
            listeners: {
                render: {
                    fn: me.onContentPickerWindowRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onContentPickerWindowBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onContentPickerWindowRender: function(abstractcomponent, options) {
        Ext.getStore("ContentSelectorStore").clearFilter(true);
        Ext.getStore("ContentSelectorStore").load();
    },

    onContentPickerWindowBeforeClose: function(panel, options) {
        Ext.getStore("ContentSelectorStore").clearFilter(true);
        Ext.getStore("ContentSelectorStore").removeAll();
    }

});