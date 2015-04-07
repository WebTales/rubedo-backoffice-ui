/*
 * File: app/view/localiserFieldComponent.js
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

Ext.define('Rubedo.view.localiserFieldComponent', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.localiserFieldComponent',

    requires: [
        'Ext.form.field.Number'
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
                    localiserId: 'lcFieldAdress',
                    anchor: '50%',
                    margin: '0 10 0 0',
                    style: '{float:left;}',
                    fieldLabel: 'Adresse',
                    labelSeparator: ' ',
                    labelWidth: 60,
                    name: 'address',
                    submitValue: false
                },
                {
                    xtype: 'numberfield',
                    localiserId: 'lcFieldAltitude',
                    anchor: '50%',
                    fieldLabel: 'Altitude',
                    labelSeparator: ' ',
                    labelWidth: 60,
                    name: 'altitude',
                    submitValue: false,
                    decimalPrecision: 6
                },
                {
                    xtype: 'numberfield',
                    localiserId: 'lcFieldLatitude',
                    anchor: '50%',
                    margin: '0 10 0 0',
                    style: '{float:left;}',
                    fieldLabel: 'Latitude',
                    labelSeparator: ' ',
                    labelWidth: 60,
                    name: 'lat',
                    submitValue: false,
                    decimalPrecision: 6,
                    maxValue: 90,
                    minValue: -90
                },
                {
                    xtype: 'numberfield',
                    localiserId: 'lcFieldLongitude',
                    anchor: '50%',
                    fieldLabel: 'Longitude',
                    labelSeparator: ' ',
                    labelWidth: 60,
                    name: 'lon',
                    submitValue: false,
                    decimalPrecision: 6,
                    maxValue: 180,
                    minValue: -180
                }
            ]
        });

        me.callParent(arguments);
    }

});