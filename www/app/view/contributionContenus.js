/*
 * File: app/view/contributionContenus.js
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

Ext.define('Rubedo.view.contributionContenus', {
    extend: 'Ext.window.Window',
    alias: 'widget.contributionContenus',

    requires: [
        'Rubedo.view.menuContenusContext'
    ],

    favoriteIcon: 'folder.png',
    height: 578,
    id: 'contributionContenus',
    width: 951,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'content-icon',
    title: 'Contenus',
    constrainHeader: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'tool',
                    itemId: 'windowMinimize',
                    type: 'minimize'
                },
                {
                    xtype: 'tool',
                    itemId: 'windowMaximize',
                    type: 'maximize'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 30,
                    itemId: 'filArianne',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'origine',
                            iconCls: 'content-icon',
                            text: 'Contenus <b>></b> '
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    height: 50,
                    itemId: 'barreMeta',
                    items: [
                        {
                            xtype: 'image',
                            height: 45,
                            itemId: 'imageBarreMeta',
                            width: 48,
                            listeners: {
                                render: {
                                    fn: me.onImageRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            margin: '0 0 0 20',
                            tpl: [
                                '{customMeta}'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 86,
                    itemId: 'contextBar',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents',
                            id: 'boutonAjouterContenu',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents',
                            disabled: true,
                            id: 'boutonModifierContenu',
                            iconAlign: 'top',
                            iconCls: 'pencil_big',
                            scale: 'large',
                            text: 'Modifier'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents',
                            disabled: true,
                            id: 'boutonSupprimerContenu',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Presse-papiers',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contents',
                                    disabled: true,
                                    id: 'boutonCopierContenus',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Copier'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    hidden: true,
                                    id: 'ajoutPanierContenus',
                                    iconAlign: 'top',
                                    iconCls: 'shopping_cart_add_big',
                                    scale: 'large',
                                    text: 'Ajouter au panier'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'boutonCreerRaccourci',
                                    iconAlign: 'top',
                                    iconCls: 'favorite_add_big',
                                    scale: 'large',
                                    text: 'Ajouter aux favoris'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.contents',
                            disabled: true,
                            id: 'contribWorkflowBox',
                            headerPosition: 'bottom',
                            title: 'Workflow',
                            columns: 5,
                            items: [
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contents.pendingToPublished',
                                    id: 'contentAcceptPublishBtn',
                                    iconAlign: 'top',
                                    iconCls: 'accept_big',
                                    scale: 'large',
                                    text: 'Publier'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contents.draftToPending',
                                    disabled: false,
                                    id: 'contentSubmitValBtn',
                                    iconAlign: 'top',
                                    iconCls: 'validation_submit_big',
                                    scale: 'large',
                                    text: 'Soumettre'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contents.pendingToDraft',
                                    id: 'contentRefuseBtn',
                                    iconAlign: 'top',
                                    iconCls: 'nonS',
                                    scale: 'large',
                                    text: 'Refuser'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contents.putOnline',
                                    id: 'contentOnlineBtn',
                                    iconAlign: 'top',
                                    iconCls: 'online_big',
                                    scale: 'large',
                                    text: 'Mettre en ligne'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contents.putOffline',
                                    id: 'contentOfflineBtn',
                                    iconAlign: 'top',
                                    iconCls: 'offline_big',
                                    scale: 'large',
                                    text: 'Mettre hors ligne'
                                }
                            ]
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'boutonAide',
                            iconCls: 'info_big',
                            scale: 'large',
                            text: ''
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    id: 'TypesContenusGrid',
                    width: 150,
                    overflowY: 'auto',
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    store: 'TypesContenusNDepDataJson',
                    viewConfig: {
                        id: 'TypesContenusGridView'
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return ('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/folder.png"> '+value);
                            },
                            width: 672,
                            dataIndex: 'type',
                            flex: 1,
                            text: 'Type'
                        }
                    ],
                    selModel: Ext.create('Ext.selection.RowModel', {

                    })
                },
                {
                    xtype: 'menuContenusContext',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    },

    onImageRender: function(abstractcomponent, options) {
        abstractcomponent.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/page_full.png');
    }

});