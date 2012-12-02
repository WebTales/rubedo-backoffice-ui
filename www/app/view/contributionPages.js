/*
 * File: app/view/contributionPages.js
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

Ext.define('Rubedo.view.contributionPages', {
    extend: 'Ext.window.Window',
    alias: 'widget.contributionPages',

    favoriteIcon: 'application.png',
    height: 578,
    id: 'contributionPages',
    width: 1200,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'masque-icon',
    title: 'Pages',
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
                            iconCls: 'masque-icon',
                            text: 'Pages<b> ></b> '
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
                            tpl: [
                                '<b>{text}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {auteur}  <b>Version : </b>{version}'
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
                            disabled: true,
                            id: 'addPageBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            id: 'removePageBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.masks',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Edition',
                            columns: 6,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'newPageBloc',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouveau Bloc'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'deletePageElement',
                                    iconAlign: 'top',
                                    iconCls: 'window_remove_big',
                                    scale: 'large',
                                    text: 'Supprimer'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'pageElementUp',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Dèplacer'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'pageElementDown',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Dèplacer'
                                }
                            ]
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
                                    iconAlign: 'top',
                                    iconCls: 'shopping_cart_add_big',
                                    scale: 'large',
                                    text: 'Ajouter au panier'
                                },
                                {
                                    xtype: 'button',
                                    iconAlign: 'top',
                                    iconCls: 'favorite_add_big',
                                    scale: 'large',
                                    text: 'Ajouter aux favoris'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.masks',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Sauvegarde',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'pageSaveBtn',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_big',
                                    scale: 'large',
                                    text: 'Enregistrer'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.masks',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Test',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'pagePreviewBtn',
                                    iconAlign: 'top',
                                    iconCls: 'page_preview_big',
                                    scale: 'large',
                                    text: 'Prèvisualisation plein-écran'
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
                    xtype: 'treepanel',
                    id: 'mainPageTree',
                    width: 225,
                    title: '',
                    store: 'PagesDataStore',
                    useArrows: true,
                    viewConfig: {

                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'combobox',
                                    managesStore: true,
                                    flex: 1,
                                    id: 'pagesSitesCombo',
                                    fieldLabel: 'Site ',
                                    labelWidth: 40,
                                    editable: false,
                                    forceSelection: true,
                                    queryMode: 'local',
                                    store: 'SitesComboPages',
                                    valueField: 'id'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            title: 'Edition',
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    id: 'mainPageEdition',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    title: ''
                                },
                                {
                                    xtype: 'panel',
                                    frame: false,
                                    width: 300,
                                    overflowY: 'auto',
                                    bodyPadding: 5,
                                    collapseDirection: 'right',
                                    collapsible: true,
                                    title: 'Propriétés',
                                    items: [
                                        {
                                            xtype: 'form',
                                            id: 'pageElementPropsPanel',
                                            bodyPadding: 10,
                                            title: 'Sélectionnez un élément'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            id: 'pageElementIdField',
                                            fieldLabel: 'Label'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'mainPageAttributeForm',
                            bodyPadding: 10,
                            title: 'Propriétés',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'text',
                                    fieldLabel: 'Titre ',
                                    allowBlank: false,
                                    vtype: 'alphanum'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'pagesInternalPreview',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Prèvisualisation'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onImageRender: function(abstractcomponent, options) {
        abstractcomponent.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/application.png');
    }

});