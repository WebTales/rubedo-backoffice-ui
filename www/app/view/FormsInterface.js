/*
 * File: app/view/FormsInterface.js
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

Ext.define('Rubedo.view.FormsInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormsInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Rubedo.view.WorkspaceCombo'
    ],

    favoriteIcon: 'images.png',
    height: 627,
    id: 'FormsInterface',
    width: 1080,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'form_small',
    title: 'Formulaires',
    constrainHeader: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'mytool16'
                },
                {
                    xtype: 'mytool17'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 30,
                    itemId: 'breadcrumb'
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
                            ACL: 'write.ui.damTypes',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.damTypes',
                            disabled: true,
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.damTypes',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Edition',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    iconAlign: 'top',
                                    iconCls: 'add_big',
                                    scale: 'large',
                                    text: 'Nouveau champ'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    iconAlign: 'top',
                                    iconCls: 'remove_big',
                                    scale: 'large',
                                    text: 'Supprimer champ'
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
                                    ACL: 'write.ui.damTypes',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Copier'
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
                            ACL: 'write.ui.damTypes',
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
                                    ACL: 'write.ui.damTypes',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_big',
                                    scale: 'large',
                                    text: 'Enregistrer',
                                    listeners: {
                                        afterrender: {
                                            fn: me.onSaveMTBtnAfterRender,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            hidden: false,
                            headerPosition: 'bottom',
                            title: 'Fichier',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    iconAlign: 'top',
                                    iconCls: 'application_down_big',
                                    scale: 'large',
                                    text: 'Exporter'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.damTypes',
                                    iconAlign: 'top',
                                    iconCls: 'application_up_big',
                                    scale: 'large',
                                    text: 'Importer'
                                }
                            ]
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            RApplication: 'damTypes',
                            iconCls: 'info_big',
                            scale: 'large',
                            text: ''
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
                                    fn: me.onImageRender1,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            tpl: [
                                '<b>{type}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {createUser}  <b>Version : </b>{version}'
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    disabled: true,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            floating: false,
                            autoScroll: false,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            iconCls: 'edit',
                            title: 'Edition',
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    id: 'MTEditContainer',
                                    autoScroll: true
                                },
                                {
                                    xtype: 'form',
                                    frame: true,
                                    width: 300,
                                    layout: {
                                        type: 'fit'
                                    },
                                    bodyPadding: 8,
                                    collapseDirection: 'right',
                                    collapsed: false,
                                    collapsible: true,
                                    iconCls: 'parametres',
                                    title: 'Propriétés',
                                    items: [
                                        {
                                            xtype: 'container',
                                            autoScroll: true,
                                            layout: {
                                                type: 'anchor'
                                            }
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            fieldLabel: 'Label'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            iconCls: 'user',
                            title: 'Droits',
                            items: [
                                {
                                    xtype: 'WorkspaceCombo',
                                    name: 'workspaces',
                                    fieldLabel: 'Espaces de travail',
                                    labelWidth: 120,
                                    multiSelect: true,
                                    store: 'ContributeWorkspacesCombo',
                                    anchor: '100%'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onSaveMTBtnAfterRender: function(abstractcomponent, options) {
        abstractcomponent.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!abstractcomponent.disabled){
            abstractcomponent.fireEvent("click", abstractcomponent);
            t.stopEvent();
        }
    });
    },

    onImageRender1: function(abstractcomponent, options) {
        abstractcomponent.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/note_edit.png');
    }

});