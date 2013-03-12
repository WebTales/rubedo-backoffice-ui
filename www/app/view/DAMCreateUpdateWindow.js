/*
 * File: app/view/DAMCreateUpdateWindow.js
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

Ext.define('Rubedo.view.DAMCreateUpdateWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.DAMCreateUpdateWindow',

    requires: [
        'Rubedo.view.MyTool17',
        'Rubedo.view.WorkspaceCombo',
        'Ext.ux.TreePicker'
    ],

    floating: true,
    height: 400,
    id: 'DAMCreateUpdateWindow',
    minHeight: 220,
    width: 900,
    overflowY: 'auto',
    layout: {
        type: 'fit'
    },
    iconCls: 'mediaTypes',
    title: 'Nouveau média',
    constrain: true,
    constrainHeader: true,
    maximizable: false,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'mytool17'
                }
            ],
            items: [
                {
                    xtype: 'form',
                    id: 'DAMFieldBox',
                    autoScroll: true,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    id: 'DAMMainFileFieldBox',
                                    padding: 10,
                                    width: 300,
                                    layout: {
                                        type: 'anchor'
                                    },
                                    listeners: {
                                        render: {
                                            fn: me.onContainerRender,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    id: 'DAMSEcondaryFieldsBox',
                                    margin: '10 0 0 20',
                                    layout: {
                                        type: 'anchor'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            anchor: '100%',
                                            padding: 10,
                                            layout: {
                                                type: 'anchor'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '90%',
                                                    style: '{float:left}',
                                                    name: 'title',
                                                    fieldLabel: 'Titre *',
                                                    labelSeparator: ' ',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'helpBouton',
                                                    style: '{float:right;}',
                                                    handleMouseEvents: false,
                                                    iconCls: 'help',
                                                    pressedCls: 'x-btn',
                                                    text: '',
                                                    tooltip: 'Titre du média. Obligatoire.'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            padding: 10,
                                            layout: {
                                                type: 'anchor'
                                            },
                                            items: [
                                                {
                                                    xtype: 'filefield',
                                                    anchor: '90%',
                                                    style: '{float:left}',
                                                    name: 'originalFileId',
                                                    fieldLabel: 'Fichier original *',
                                                    labelSeparator: ' ',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'helpBouton',
                                                    style: '{float:right;}',
                                                    handleMouseEvents: false,
                                                    iconCls: 'help',
                                                    pressedCls: 'x-btn',
                                                    text: '',
                                                    tooltip: 'Fichier principal du média. Obligatoire.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            id: 'DAMTaxoBox',
                            title: 'Taxonomie'
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Espaces de travail',
                            items: [
                                {
                                    xtype: 'WorkspaceCombo',
                                    name: 'writeWorkspace',
                                    fieldLabel: 'Contribution',
                                    store: 'ContributeWorkspacesCombo',
                                    anchor: '90%'
                                },
                                {
                                    xtype: 'WorkspaceCombo',
                                    name: 'target',
                                    fieldLabel: 'Diffusion',
                                    multiSelect: true,
                                    store: 'WorkspacesComboWithAll',
                                    anchor: '90%'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'DAMSubmitBtn',
                            iconCls: 'save',
                            text: 'Créer ce nouveau média'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            id: 'DAMSubmitUpdateBtn',
                            iconCls: 'save',
                            text: 'Enregistrer les modifications'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            id: 'DAMSwitchEditBtn',
                            text: 'Passer en mode édition'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onContainerRender: function(abstractcomponent, options) {
        if (Ext.isEmpty(Ext.getStore("MTForDAMEdit").getRange())){
            var leType=Ext.getCmp("DAMMTGrid").getSelectionModel().getLastSelected().get("mainFileType");
        } else {
            var leType=Ext.getStore("MTForDAMEdit").getRange()[0].get("mainFileType");
        }
        var mainField= Ext.create("Rubedo.view.GFSFileField", {
            name:"originalFileId",
            allowBlank:false,
            fieldLabel:"Fichier original *",
            style:{"float":"left"},
            bigMode:true,
            fileType:leType,
        });
        abstractcomponent.insert(0, mainField);
    }

});