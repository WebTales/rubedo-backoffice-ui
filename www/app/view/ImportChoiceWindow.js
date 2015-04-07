/*
 * File: app/view/ImportChoiceWindow.js
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

Ext.define('Rubedo.view.ImportChoiceWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ImportChoiceWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    localiserId: 'importChoiceWindow',
    id: 'ImportChoiceWindow',
    width: 300,
    layout: 'fit',
    iconCls: 'database_up_small',
    title: 'Choose import options',
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
                        me.processWhatToImport({
                            xtype: 'combobox',
                            localiserId: 'whatToImportCombo',
                            anchor: '100%',
                            fieldLabel: 'What to import',
                            name: 'whatToImport',
                            value: 'contents',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            editable: false,
                            forceSelection: true,
                            queryMode: 'local',
                            store: [
                                [
                                    'contents',
                                    'Contents'
                                ],
                                [
                                    'products',
                                    'Products'
                                ]
                            ]
                        }),
                        me.processHowToImport({
                            xtype: 'combobox',
                            localiserId: 'howToImportCombo',
                            anchor: '100%',
                            fieldLabel: 'How to import',
                            name: 'howToImport',
                            value: 'create',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            editable: false,
                            forceSelection: true,
                            queryMode: 'local',
                            store: [
                                [
                                    'create',
                                    'Creation'
                                ],
                                [
                                    'update',
                                    'Update'
                                ]
                            ]
                        }),
                        {
                            xtype: 'button',
                            localiserId: 'importUsingTheseOptionsBtn',
                            anchor: '100%',
                            id: 'importChoiceSubmitBtn',
                            text: 'Import using these options'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processWhatToImport: function(config) {
        if (PHPOptions.addECommerce){
            config.store=[
                                        [
                                            'contents',
                                            Rubedo.RubedoAutomatedElementsLoc.contentsText
                                        ],
                                        [
                                            'products',
                                            Rubedo.RubedoAutomatedElementsLoc.productsText
                                        ]
                                    ];
        } else {
            config.store=[
                                        [
                                            'contents',
                                            Rubedo.RubedoAutomatedElementsLoc.contentsText
                                        ]
                                    ];
            config.value='contents';
            config.hidden=true;
        }
        return config;
    },

    processHowToImport: function(config) {
        config.store=[
                                        [
                                            'create',
                                            Rubedo.RubedoAutomatedElementsLoc.creationText
                                        ],
                                        [
                                            'update',
                                            Rubedo.RubedoAutomatedElementsLoc.updateText
                                        ]
                                    ];
        return config;
    }

});