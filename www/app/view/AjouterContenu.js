/*
 * File: app/view/AjouterContenu.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.view.AjouterContenu', {
    extend: 'Ext.window.Window',
    alias: 'widget.ajouterContenu',

    requires: [
        'Rubedo.view.WorkspaceCombo',
        'Rubedo.view.NestedContentsGrid',
        'Rubedo.view.MyTool17',
        'Ext.ux.TreePicker'
    ],

    localiserId: 'newContentWindow',
    height: 500,
    id: 'ajouterContenu',
    width: 900,
    layout: {
        type: 'fit'
    },
    iconCls: 'content-icon',
    title: 'Nouveau Contenu',
    constrainHeader: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
                            isUpdate: false,
                            ACL: 'write.ui.contents.draft',
                            localiserId: 'createAsDraftBtn',
                            id: 'boutonEnregistrerNouveauContenu',
                            iconCls: 'save',
                            text: 'Brouillon'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents.draftToPending',
                            localiserId: 'submitBtn',
                            id: 'boutonSoumettreNouveauContenu',
                            iconCls: 'save',
                            text: 'Soumettre'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents.refused',
                            localiserId: 'refuseBtn',
                            hidden: true,
                            id: 'boutonRefuserNouveauContenu',
                            iconCls: 'save_refuse',
                            text: 'Refuser'
                        },
                        {
                            xtype: 'button',
                            isUpdate: false,
                            ACL: 'write.ui.contents.published',
                            localiserId: 'publishBtn',
                            id: 'boutonPublierNouveauContenu',
                            iconCls: 'publish',
                            text: 'Publier'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                button.up().up().close();
                            },
                            localiserId: 'cancelBtn',
                            id: 'contentEditorCancelButton',
                            iconCls: 'close',
                            text: 'Annuler'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Edition',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'editTab'
                            },
                            items: [
                                {
                                    xtype: 'form',
                                    height: 101,
                                    id: 'boiteAChampsContenus',
                                    autoScroll: true,
                                    bodyPadding: 10,
                                    title: '',
                                    items: [
                                        {
                                            xtype: 'container',
                                            id: 'cedtr1',
                                            padding: 10,
                                            layout: {
                                                type: 'anchor'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    localiserId: 'contentTitleField',
                                                    RTip: 'Titre du contenu. Obligatoire.',
                                                    anchor: '90%',
                                                    style: '{float:left}',
                                                    fieldLabel: 'Titre *',
                                                    name: 'text',
                                                    allowBlank: false
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'cedtr2',
                                            padding: 10,
                                            layout: {
                                                type: 'anchor'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textareafield',
                                                    localiserId: 'summaryField',
                                                    RTip: 'Résumé facultatif du contenu.',
                                                    anchor: '90%',
                                                    style: '{float:left}',
                                                    fieldLabel: 'Résumé ',
                                                    labelSeparator: ' ',
                                                    name: 'summary'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'contentMetadataBox',
                            bodyPadding: 10,
                            title: 'Métadonnées',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'metadataTab',
                                id: 'metaTabConfig'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'publishFieldset',
                                    title: 'Publication',
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            localiserId: 'contentStartPublicationDateField',
                                            anchor: '100%',
                                            fieldLabel: 'Date de début de publication ',
                                            labelWidth: 200,
                                            name: 'startPublicationDate'
                                        },
                                        {
                                            xtype: 'datefield',
                                            localiserId: 'contentEndPublicationDateField',
                                            anchor: '100%',
                                            fieldLabel: 'Date de fin de publication ',
                                            labelWidth: 200,
                                            name: 'endPublicationDate'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'boiteATaxoContenus',
                            bodyPadding: 10,
                            title: 'Taxonomie',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'taxonomyTab',
                                id: 'taxoTabConfig'
                            }
                        },
                        {
                            xtype: 'form',
                            id: 'boiteADroitsContenus',
                            bodyPadding: 10,
                            title: 'Espaces de travail',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'workspacesTab',
                                id: 'rightsTabConfig'
                            },
                            items: [
                                {
                                    xtype: 'WorkspaceCombo',
                                    localiserId: 'contributeWorkspaceField',
                                    fieldLabel: 'Contribution',
                                    name: 'writeWorkspace',
                                    store: 'ContributeWorkspacesCombo',
                                    anchor: '90%'
                                },
                                {
                                    xtype: 'WorkspaceCombo',
                                    localiserId: 'diffusionWorkspaceField',
                                    fieldLabel: 'Diffusion',
                                    name: 'target',
                                    multiSelect: true,
                                    store: 'WorkspacesComboWithAll',
                                    anchor: '90%'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'contentsVersionPanel',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Versions',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'versionsTab'
                            },
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    title: '',
                                    forceFit: true,
                                    store: 'VersioningStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'versionTitleCol',
                                            dataIndex: 'text',
                                            text: 'Titre'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            localiserId: 'versionVersionCol',
                                            dataIndex: 'publishVersion',
                                            text: 'Version',
                                            format: '0'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            localiserId: 'versionPublishDateCol',
                                            dataIndex: 'publishTime',
                                            text: 'Date de publication'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'versionAuthorCol',
                                            dataIndex: 'publishUser',
                                            text: 'Auteur'
                                        },
                                        {
                                            xtype: 'actioncolumn',
                                            width: 20,
                                            items: [
                                                me.processMyActionColumnItem({
                                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                        var cible = record;
                                                        Ext.getCmp('boiteAChampsContenus').getForm().setValues(cible.get("fields"));
                                                        Ext.Object.each(cible.get("fields"), function(key, value, myself){
                                                            if (Ext.isArray(value)) {
                                                                var multiField=Ext.getCmp('boiteAChampsContenus').query('[name='+key+']')[0];
                                                                var y=0;
                                                                if (multiField.multivalued) {
                                                                    Ext.Array.each(value,function(val,index){
                                                                        if (index>0) {
                                                                            multiField.up().getComponent('boutonReplicateurChamps').fireEvent("click",multiField.up().getComponent('boutonReplicateurChamps'));
                                                                        }
                                                                        Ext.getCmp('boiteAChampsContenus').query('[name='+key+']')[index].setValue(val);
                                                                    }); 
                                                                }
                                                            }
                                                        });
                                                        try{
                                                            Ext.getCmp("ajouterContenu").getComponent(0).getLayout().setActiveItem(1);
                                                            Ext.getCmp("ajouterContenu").getComponent(0).getLayout().setActiveItem(0);
                                                            Ext.getCmp("boiteATaxoContenus").getForm().setValues(cible.get("taxonomy"));
                                                            Ext.getCmp("boiteADroitsContenus").getForm().setValues(cible.getData());
                                                            Ext.getCmp("contentMetadataBox").getForm().setValues(cible.getData());
                                                        }catch (err){
                                                            console.log("reloading anomaly");
                                                        }
                                                    },
                                                    icon: 'resources/icones/generic/repeat.png'
                                                })
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            ACL: 'read.ui.dependantTypes',
                            hidden: true,
                            id: 'nestedContentsTab',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Contenus Imbriqués',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'dependantTypesTab',
                                hidden: true,
                                id: 'nestedContensTabConfig'
                            },
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    height: 54,
                                    items: [
                                        {
                                            xtype: 'buttongroup',
                                            height: 50,
                                            bodyPadding: 4,
                                            headerPosition: 'bottom',
                                            title: 'Ajouter un contenu imbriqué',
                                            columns: 2,
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    id: 'nestedContentsAddCombo',
                                                    fieldLabel: 'Type de contenu à ajouter ',
                                                    labelWidth: 160,
                                                    allowBlank: false,
                                                    editable: false,
                                                    displayField: 'type',
                                                    forceSelection: true,
                                                    queryMode: 'local',
                                                    store: 'DepContentsCombo',
                                                    typeAhead: true,
                                                    valueField: 'id'
                                                },
                                                {
                                                    xtype: 'button',
                                                    id: 'nestedContentsAddBtn',
                                                    margin: '0 0 0 10',
                                                    iconCls: 'add',
                                                    text: 'Ajouter'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'nestedContentsDeleteBtn',
                                            iconAlign: 'top',
                                            iconCls: 'remove_med',
                                            scale: 'medium',
                                            text: 'Supprimer'
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'nestedContentsModifyBtn',
                                            iconAlign: 'top',
                                            iconCls: 'pencil_med',
                                            scale: 'medium',
                                            text: 'Modifier'
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'nestedContentsOnlineBtn',
                                            iconAlign: 'top',
                                            iconCls: 'online_med',
                                            scale: 'medium',
                                            text: 'Mettre en ligne'
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'nestedContentsOfflineBtn',
                                            iconAlign: 'top',
                                            iconCls: 'offline_med',
                                            scale: 'medium',
                                            text: 'Mettre hors  ligne'
                                        },
                                        {
                                            xtype: 'tbfill'
                                        },
                                        {
                                            xtype: 'button',
                                            iconCls: 'info_big',
                                            scale: 'large',
                                            text: ''
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'NestedContentsGrid'
                                }
                            ]
                        }
                    ]
                }
            ],
            tools: [
                {
                    xtype: 'mytool17'
                }
            ],
            listeners: {
                render: {
                    fn: me.onAjouterContenuRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processMyActionColumnItem: function(config) {
        config.tooltip=Rubedo.RubedoAutomatedElementsLoc.restoreText;
        return config;
    },

    onAjouterContenuRender: function(component, eOpts) {
        if (component.specialMode){
            //abstractcomponent.setHeight(300);
        }
    }

});