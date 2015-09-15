/*
 * File: app/view/urlFieldComponent.js
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

Ext.define('Rubedo.view.urlFieldComponent', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.urlFieldComponent',

    requires: [
        'Ext.form.field.Text'
    ],

    anchor: '90%',
    height: 54,
    width: 426,
    layout: 'anchor',
    fieldLabel: 'Label',
    labelSeparator: ' ',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    localiserId: 'emFieldURL',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'URL',
                    labelSeparator: ' ',
                    name: 'url',
                    submitValue: false
                },
                {
                    xtype: 'textfield',
                    localiserId: 'urlFieldTitle',
                    anchor: '100%',
                    fieldLabel: 'Title',
                    labelSeparator: ' ',
                    name: 'title',
                    submitValue: false
                }
            ]
        });

        me.callParent(arguments);
    }

});