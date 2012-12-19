/*
 * File: app/view/contentPickerGrid.js
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

Ext.define('Rubedo.view.contentPickerGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contentPickerGrid',

    requires: [
        'Rubedo.view.override.contentPickerGrid'
    ],

    id: 'contentPickerGrid',
    title: '',
    store: 'ContentSelectorStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if (record.get("status")=="published") {
                            return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_accept.png"> '+value);
                        } else if (record.get("status")=="pending") {
                            return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_process.png"> '+value);
                        } else if (record.get("status")=="draft") {
                            return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_edit.png"> '+value);
                        }



                    },
                    filter: true,
                    dataIndex: 'text',
                    flex: 1,
                    text: 'Titre'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return(Ext.getStore("TCNDepComboCS").findRecord("id",value).get("type"));
                    },
                    filter: {
                        type: 'combo',
                        valueField: 'id',
                        displayField: 'type',
                        store: 'TCNDepComboCS'
                    },
                    dataIndex: 'typeId',
                    flex: 1,
                    text: 'Type'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if (value=="published") {
                            return("publié");
                        } else if (value=="pending") {
                            return("en attente de validation");
                        } else if (value=="draft") {
                            return("brouillon");
                        }
                    },
                    filter: {
                        type: 'combo',
                        store: [
                            [
                                'draft',
                                'brouillon'
                            ],
                            [
                                'pending',
                                'en attente de validation'
                            ],
                            [
                                'published',
                                'publié'
                            ]
                        ]
                    },
                    dataIndex: 'status',
                    flex: 1,
                    text: 'Etat'
                },
                {
                    xtype: 'booleancolumn',
                    filter: {
                        type: 'combo',
                        store: [
                            [
                                true,
                                'Oui'
                            ],
                            [
                                false,
                                'Non'
                            ]
                        ]
                    },
                    width: 60,
                    dataIndex: 'online',
                    text: 'En ligne',
                    falseText: 'Non',
                    trueText: 'Oui'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    displayMsg: 'Affichage des contenus {0} - {1} sur {2}',
                    emptyMsg: 'Rien à afficher',
                    firstText: 'Première page',
                    lastText: 'Dernière page',
                    nextText: 'Page suivante',
                    prevText: 'Page prècèdente',
                    refreshText: 'Rafraichir',
                    store: 'ContentSelectorStore',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var chosenOne = button.up().up().getSelectionModel().getLastSelected();
                                Ext.getCmp(button.up().up().up().targetId).setValue(chosenOne.get("id"));
                                button.up().up().up().close();

                            },
                            disabled: true,
                            id: 'contentPickerSelectBtn',
                            iconCls: 'ouiSpetit',
                            text: '<b>Choisir ce contenu</b>'
                        }
                    ]
                }
            ],
            listeners: {
                selectionchange: {
                    fn: me.onContentPickerGridSelectionChange,
                    scope: me
                },
                itemdblclick: {
                    fn: me.onContentPickerGridItemDblClick,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onContentPickerGridSelectionChange: function(tablepanel, selections, options) {
        if (Ext.isEmpty(selections)) {
            Ext.getCmp("contentPickerSelectBtn").disable();
        } else {
            Ext.getCmp("contentPickerSelectBtn").enable();
        }
    },

    onContentPickerGridItemDblClick: function(tablepanel, record, item, index, e, options) {
        Ext.getCmp("contentPickerSelectBtn").handler(Ext.getCmp("contentPickerSelectBtn"));

    }

});