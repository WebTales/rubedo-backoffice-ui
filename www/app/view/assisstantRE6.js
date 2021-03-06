/*
 * File: app/view/assisstantRE6.js
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

Ext.define('Rubedo.view.assisstantRE6', {
    extend: 'Ext.form.Panel',
    alias: 'widget.assisstantRE6',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    etape: '5',
    localiserId: 'qbFinalRecStagePanel',
    id: 'assisstantRE6',
    autoScroll: true,
    bodyPadding: 10,
    title: 'Summary and saving',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    localiserId: 'qbRecapFieldset',
                    id: 'querySummaryBox',
                    padding: 10,
                    title: '<b>Summary</b>'
                },
                me.processQBReturnedDataFieldset({
                    xtype: 'fieldset',
                    id: 'QBReturnedDataFieldset',
                    title: 'Returned data'
                }),
                {
                    xtype: 'textfield',
                    localiserId: 'queryNameField',
                    anchor: '100%',
                    id: 'queryNameField',
                    fieldLabel: 'Query name',
                    labelWidth: 130,
                    name: 'queryName',
                    allowBlank: false
                },
                {
                    xtype: 'button',
                    localiserId: 'saveQBQueryBtn',
                    anchor: '100%',
                    id: 'queryBuildSaveBtn',
                    scale: 'large',
                    text: '<b>Save this query</b>'
                }
            ]
        });

        me.callParent(arguments);
    },

    processQBReturnedDataFieldset: function(config) {
        var tagPicker = Ext.create("Ext.ux.form.field.BoxSelect", {
            store:[],
            anchor:"100%",
            name:"returnedFields",
            id:"QBReturnedFieldsField",
            fieldLabel:"Returned fields",
            multiSelect:true,
            forceSelection:false,
            createNewOnEnter:true,
            hideTrigger:true,
            triggerOnClick:false,
            createNewOnBlur:true,
            pinList:false
        });
        config.items=[];
        config.items.push(tagPicker);
        return config;
    }

});