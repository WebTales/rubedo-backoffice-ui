/*
 * File: app/view/MyGridPanel31.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('Rubedo.view.MyGridPanel31', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel31',

    requires: [
        'Rubedo.view.override.MyGridPanel31'
    ],

    id: 'manualQueryLeftGrid',
    title: '',
    store: 'ContentSelectorStore2',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                plugins: [
                    Ext.create('Ext.grid.plugin.DragDrop', {

                    })
                ]
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
                    localiserId: 'u1TitleColumn',
                    dataIndex: 'text',
                    text: 'Titre',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if (Ext.isEmpty(Ext.getStore("TCNDepComboCS").findRecord("id",value))) {
                            return(value);
                        } else {
                            return(Ext.getStore("TCNDepComboCS").findRecord("id",value).get("type"));
                        }
                    },
                    filter: {
                        type: 'combo',
                        valueField: 'id',
                        displayField: 'type',
                        store: 'TCNDepComboCS'
                    },
                    localiserId: 'u1TypeColumn',
                    dataIndex: 'typeId',
                    text: 'Type',
                    flex: 1
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
                    localiserId: 'u1StatusColumn',
                    dataIndex: 'status',
                    text: 'Etat',
                    flex: 1
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
                    localiserId: 'u1OnlineColumn',
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
                    id: 'contentSelectorPagingToolbar',
                    width: 360,
                    displayInfo: true,
                    displayMsg: 'Affichage des contenus {0} - {1} sur {2}',
                    emptyMsg: 'Rien à afficher',
                    firstText: 'Première page',
                    lastText: 'Dernière page',
                    nextText: 'Page suivante',
                    prevText: 'Page prècèdente',
                    refreshText: 'Rafraichir',
                    listeners: {
                        beforerender: {
                            fn: me.onPagingToolbarConentSelectBeforeRender,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onPagingToolbarConentSelectBeforeRender: function(component, eOpts) {
        component.bindStore(component.up().getStore());
    }

});