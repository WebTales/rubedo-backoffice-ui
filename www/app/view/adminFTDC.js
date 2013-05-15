/*
 * File: app/view/adminFTDC.js
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

Ext.define('Rubedo.view.adminFTDC', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminFTDC',

    requires: [
        'Rubedo.view.MTeditFields',
        'Rubedo.view.WorkspaceCombo',
        'Ext.ux.TreePicker'
    ],

    favoriteIcon: 'page_full.png',
    localiserId: 'contentTypesWindow',
    height: 578,
    id: 'adminFTDC',
    width: 1350,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'content-icon',
    title: 'Types de contenus',
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
                            text: 'Types de contenus <b>></b> '
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
                                '<b>{type}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {createUser}  <b>Version : </b>{version}'
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
                            ACL: 'write.ui.contentTypes',
                            localiserId: 'addBtn',
                            id: 'boutonNouveauTypeContenu',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contentTypes',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'boutonSupprimerTypeContenu',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.contentTypes',
                            localiserId: 'editGroup',
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
                                    localiserId: 'newFieldBtn',
                                    id: 'boutonOuvrirFenetreTC',
                                    iconAlign: 'top',
                                    iconCls: 'add_big',
                                    scale: 'large',
                                    text: 'Nouveau champ'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'TCfieldUp',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'TCfieldDown',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'removeFieldBtn',
                                    disabled: true,
                                    id: 'TCfieldDeleter',
                                    iconAlign: 'top',
                                    iconCls: 'remove_big',
                                    scale: 'large',
                                    text: 'Supprimer champ'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            localiserId: 'clipboardGroup',
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
                                    ACL: 'write.ui.contentTypes',
                                    localiserId: 'duplicateBtn',
                                    id: 'boutonCopierTC',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Copier'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    id: 'ajouterPanierTC',
                                    iconAlign: 'top',
                                    iconCls: 'shopping_cart_add_big',
                                    scale: 'large',
                                    text: 'Ajouter au panier'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'shortcutBtn',
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
                            ACL: 'write.ui.contentTypes',
                            localiserId: 'saveGroup',
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
                                    localiserId: 'saveBtn',
                                    id: 'boutonEnregistrerTypeContenu',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_big',
                                    scale: 'large',
                                    text: 'Enregistrer',
                                    listeners: {
                                        afterrender: {
                                            fn: me.onBoutonEnregistrerTypeContenuAfterRender,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'exe.ui.purgeContentType',
                            localiserId: 'adminGroupCT',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Administration',
                            layout: {
                                columns: 1,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'purgeContentTypeBtn',
                                    id: 'purgeCTContentsBtn',
                                    iconAlign: 'top',
                                    iconCls: 'database_remove_big',
                                    scale: 'large',
                                    text: 'Vider les contenus',
                                    tooltip: 'Supprimer tous les contenus de ce type'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            hidden: true,
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
                                    id: 'AdminfTCExporter',
                                    iconAlign: 'top',
                                    iconCls: 'application_down_big',
                                    scale: 'large',
                                    text: 'Exporter'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.contentTypes',
                                    id: 'AdminfTCImporter',
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
                            RApplication: 'contentTypes',
                            itemId: 'RHelpBtn',
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
                    managesStore: false,
                    id: 'AdminfTypesGrid',
                    width: 150,
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    store: 'TypesContenusDataJson',
                    viewConfig: {
                        id: 'AdminfTypesGridView'
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var returner = value;
                                if (record.get("readOnly")){
                                    returner ="<i style=\"color:#777;\">"+value+"</i>";
                                }
                                if (record.data.dependant===false) {return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_full.png"> ' + returner );}
                                else {return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/attach_document.png"> ' + returner );}

                            },
                            localiserId: 'typeColumn',
                            width: 452,
                            dataIndex: 'type',
                            text: 'Type',
                            flex: 1,
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            }
                        }
                    ],
                    selModel: Ext.create('Ext.selection.RowModel', {

                    }),
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            listeners: {
                                beforeedit: {
                                    fn: me.onGridcelleditingpluginBeforeEdit,
                                    scope: me
                                }
                            }
                        })
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    disabled: true,
                    id: 'tabPanTC',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            iconCls: 'edit',
                            title: 'Edition',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'editTab'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    id: 'conteneurChampsEditionTC',
                                    autoScroll: true,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            localiserId: 'systemFieldPanel',
                                            frame: true,
                                            margin: 20,
                                            title: 'Champs système',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    padding: 10,
                                                    layout: {
                                                        type: 'anchor'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            localiserId: 'titleField',
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
                                        },
                                        {
                                            xtype: 'MTeditFields',
                                            localiserId: 'editableFieldPanel',
                                            id: 'champsEditionTC',
                                            title: 'Champs Editables'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'form',
                                    localiserId: 'propertiesPanel',
                                    frame: true,
                                    id: 'PaneauConfigChamps',
                                    width: 300,
                                    autoScroll: true,
                                    layout: {
                                        type: 'auto'
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
                                            id: 'boiteConfigChampsTC',
                                            layout: {
                                                type: 'anchor'
                                            }
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            id: 'champTCIdField',
                                            fieldLabel: 'Label'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            hidden: true,
                            iconCls: 'page_meta',
                            title: 'Métadonnées'
                        },
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            iconCls: 'page_taxonomy',
                            title: 'Taxonomie',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'taxonomyTab'
                            },
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    managesStore: false,
                                    flex: 1,
                                    autoRender: false,
                                    id: 'vocabulairesTypesContenusGrid',
                                    title: 'Vocabulaires',
                                    store: 'TaxonomyForCT',
                                    viewConfig: {
                                        autoRender: false
                                    },
                                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                                    }),
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'titleColumn',
                                            dataIndex: 'name',
                                            text: 'Titre',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'descriptionColumn',
                                            dataIndex: 'description',
                                            text: 'Description',
                                            flex: 3
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'helpTextColumn',
                                            dataIndex: 'helpText',
                                            text: 'HelpText',
                                            flex: 2
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            localiserId: 'labelField',
                                            dataIndex: 'expandable',
                                            text: 'Etiquettes',
                                            flex: 1,
                                            falseText: 'non',
                                            trueText: 'oui'
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            localiserId: 'multiChoiseColumn',
                                            dataIndex: 'mandatory',
                                            text: 'ChoixMultiple',
                                            flex: 1,
                                            falseText: 'non',
                                            trueText: 'oui'
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            localiserId: 'mandatoryField',
                                            dataIndex: 'mandatory',
                                            text: 'Obligatoire',
                                            flex: 1,
                                            falseText: 'non',
                                            trueText: 'oui'
                                        }
                                    ],
                                    listeners: {
                                        viewready: {
                                            fn: me.onVocabulairesTypesContenusGridViewReady,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'TDCEditForm',
                            bodyPadding: 10,
                            iconCls: 'parametres',
                            title: 'Propriétés',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'propsTab'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'rightWorkflowFieldSet',
                                    title: 'Droits et workflow',
                                    items: [
                                        {
                                            xtype: 'WorkspaceCombo',
                                            fieldLabel: 'Espaces de travail',
                                            labelWidth: 120,
                                            name: 'workspaces',
                                            multiSelect: true,
                                            store: 'ContributeWorkspacesCombo',
                                            anchor: '100%'
                                        },
                                        {
                                            xtype: 'combobox',
                                            localiserId: 'workflowField',
                                            anchor: '100%',
                                            fieldLabel: 'Workflow',
                                            labelWidth: 120,
                                            name: 'workflow',
                                            allowBlank: false,
                                            editable: false,
                                            forceSelection: true,
                                            store: [
                                                'Aucun',
                                                'Basique'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'commentsFieldSet',
                                    title: 'Commentaires',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            localiserId: 'disqusField',
                                            anchor: '100%',
                                            fieldLabel: 'Disqus',
                                            name: 'activateDisqus',
                                            boxLabel: '',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            hidden: true,
                            iconCls: 'versions',
                            title: 'Historique'
                        }
                    ]
                }
            ],
            listeners: {
                render: {
                    fn: me.onAdminFTDCRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onAdminFTDCBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onImageRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/page_full.png');
    },

    onBoutonEnregistrerTypeContenuAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
    });
    },

    onGridcelleditingpluginBeforeEdit: function(editor, e, eOpts) {
        if ((!ACL.interfaceRights["write.ui.contentTypes"])||(Ext.getCmp("AdminfTypesGrid").getSelectionModel().getLastSelected().get("readOnly"))) {
            return false;
        }
    },

    onVocabulairesTypesContenusGridViewReady: function(tablepanel, eOpts) {
        if (!ACL.interfaceRights["write.ui.contentTypes"]){
            tablepanel.getSelectionModel().setLocked(true);
        }
    },

    onAdminFTDCRender: function(component, eOpts) {
        Ext.getStore("TypesContenusDataJson").load();
    },

    onAdminFTDCBeforeClose: function(panel, eOpts) {
        Ext.getStore("TypesContenusDataJson").removeAll();
    }

});