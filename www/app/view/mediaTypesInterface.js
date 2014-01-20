/*
 * File: app/view/mediaTypesInterface.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.view.mediaTypesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.mediaTypesInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Rubedo.view.MTeditFields',
        'Rubedo.view.WorkspaceCombo',
        'Rubedo.view.DLSToolbar'
    ],

    favoriteIcon: 'images.png',
    localiserId: 'DamTypesMainWindow',
    height: 627,
    id: 'mediaTypesInterface',
    width: 1200,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    constrainHeader: true,
    iconCls: 'mediaTypes',
    title: 'Types de médias',

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
                            localiserId: 'addBtn',
                            id: 'newMTBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.damTypes',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'removeMTBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.damTypes',
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
                                    id: 'newMTFieldBtn',
                                    iconAlign: 'top',
                                    iconCls: 'add_big',
                                    scale: 'large',
                                    text: 'Nouveau champ'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'MTfieldUp',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'MTfieldDown',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'removeFieldBtn',
                                    disabled: true,
                                    id: 'MTfieldDeleter',
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
                                    ACL: 'write.ui.damTypes',
                                    localiserId: 'duplicateBtn',
                                    id: 'copyMTBtn',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Copier'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    id: 'addToSCMTBtn',
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
                            ACL: 'write.ui.damTypes',
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
                                    ACL: 'write.ui.damTypes',
                                    localiserId: 'saveBtn',
                                    id: 'saveMTBtn',
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
                                    id: 'MTexportBtn',
                                    iconAlign: 'top',
                                    iconCls: 'application_down_big',
                                    scale: 'large',
                                    text: 'Exporter'
                                },
                                {
                                    xtype: 'button',
                                    ACL: 'write.ui.damTypes',
                                    id: 'MTImportBtn',
                                    iconAlign: 'top',
                                    iconCls: 'application_up_big',
                                    scale: 'large',
                                    text: 'Importer'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'exe.ui.purgeDamType',
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
                                    localiserId: 'emptyDamBtn',
                                    id: 'purgeDTDamTypeBtn',
                                    iconAlign: 'top',
                                    iconCls: 'database_remove_big',
                                    scale: 'large',
                                    text: 'Empty assets',
                                    tooltip: 'Supprimer tous les contenus de ce type'
                                }
                            ]
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            RApplication: 'damTypes',
                            itemId: 'RHelpBtn',
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
                        me.processBoiteBarreMeta({
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            tpl: [
                                '<b>{type}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {createUser}  <b>Version : </b>{version}'
                            ]
                        })
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    id: 'mainMTGrid',
                    width: 200,
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    forceFit: true,
                    store: 'MediaTypes',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var returner = value;
                                if (record.get("readOnly")){
                                    returner ="<i style=\"color:#777;\">"+value+"</i>";
                                }
                                return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/images.png"> ' + returner + " : <i>" + record.get("mainFileType")+"</i>" );
                            },
                            localiserId: 'typeColumn',
                            dataIndex: 'type',
                            text: 'Type'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                try{var myFlagCode=Ext.getStore("AllLanguagesStore3").query("locale",record.get("locale"),false,false,true).items[0].get("flagCode");}
                                catch(err){var myFlagCode="_unknown";}
                                var returner =" <img src=\"/assets/flags/16/"+myFlagCode+".png\"> ";
                                if(!Ext.isEmpty(value)){
                                    Ext.Object.each(value, function(key, value, myself) {
                                        if (key!=record.get("locale")){
                                            try{var myFlagCode2=Ext.getStore("AllLanguagesStore3").query("locale",key,false,false,true).items[0].get("flagCode");}
                                            catch(err){var myFlagCode2="_unknown";}
                                            if (myFlagCode2!="_unknown"){
                                                returner=returner+" <img src=\"/assets/flags/16/"+myFlagCode2+".png\"> ";
                                            }
                                        }
                                    });
                                }
                                return(returner);
                            },
                            localiserId: 'languageCoumn',
                            hidden: true,
                            dataIndex: 'i18n',
                            text: 'Languages'
                        }
                    ],
                    listeners: {
                        select: {
                            fn: me.onMainMTGridSelect,
                            single: true,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    id: 'MTcenterZone',
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
                                    id: 'MTEditContainer',
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
                                                            xtype: 'button',
                                                            localiserId: 'auxBtn13',
                                                            itemId: 'helpBouton',
                                                            style: '{float:right;}',
                                                            handleMouseEvents: false,
                                                            iconCls: 'help',
                                                            pressedCls: 'x-btn',
                                                            text: '',
                                                            tooltip: 'Titre du média. Obligatoire.'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            localiserId: 'titleField',
                                                            anchor: '90%',
                                                            style: '{float:left}',
                                                            fieldLabel: 'Titre *',
                                                            name: 'title',
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
                                                            xtype: 'button',
                                                            localiserId: 'auxBtn15',
                                                            itemId: 'helpBouton',
                                                            style: '{float:right;}',
                                                            handleMouseEvents: false,
                                                            iconCls: 'help',
                                                            pressedCls: 'x-btn',
                                                            text: '',
                                                            tooltip: 'Fichier principal du média. Obligatoire.'
                                                        },
                                                        {
                                                            xtype: 'filefield',
                                                            localiserId: 'originalFileField',
                                                            anchor: '90%',
                                                            style: '{float:left}',
                                                            fieldLabel: 'Fichier original *',
                                                            labelSeparator: ' ',
                                                            name: 'originalFileId',
                                                            allowBlank: false
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'MTeditFields'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'form',
                                    localiserId: 'propsPanel',
                                    frame: true,
                                    id: 'MTPropPanel',
                                    padding: 0,
                                    width: 300,
                                    layout: {
                                        type: 'fit'
                                    },
                                    bodyPadding: 0,
                                    collapseDirection: 'right',
                                    collapsed: false,
                                    collapsible: true,
                                    iconCls: 'parametres',
                                    title: 'Propriétés',
                                    items: [
                                        {
                                            xtype: 'container',
                                            id: 'MTFieldConfigsBox',
                                            layout: {
                                                align: 'stretch',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'tabpanel',
                                                    flex: 1,
                                                    overlapHeader: false,
                                                    activeTab: 0,
                                                    items: [
                                                        me.processData({
                                                            xtype: 'form',
                                                            localiserId: 'dataTab',
                                                            autoScroll: true,
                                                            bodyPadding: 6,
                                                            iconCls: 'process-icon',
                                                            title: 'Data',
                                                            tabConfig: {
                                                                xtype: 'tab',
                                                                flex: 1
                                                            }
                                                        }),
                                                        me.processSearchFormCheck({
                                                            xtype: 'form',
                                                            localiserId: 'searchTab',
                                                            itemId: 'searchFormCheck',
                                                            autoScroll: true,
                                                            bodyPadding: 6,
                                                            iconCls: 'search',
                                                            title: 'Search',
                                                            tabConfig: {
                                                                xtype: 'tab',
                                                                flex: 1
                                                            }
                                                        })
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            id: 'MTFieldId',
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
                                    localiserId: 'MTtaxoGridUse',
                                    flex: 1,
                                    autoRender: false,
                                    id: 'vocabulariesMTGrid',
                                    title: 'Vocabulaires utilisables comme plan de classement',
                                    store: 'TaxonomyForMT',
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
                                        me.processEtiquettes({
                                            xtype: 'booleancolumn',
                                            localiserId: 'labelColumn',
                                            dataIndex: 'expandable',
                                            text: 'Etiquettes',
                                            flex: 1,
                                            falseText: 'non',
                                            trueText: 'oui'
                                        }),
                                        me.processChoixMultiple({
                                            xtype: 'booleancolumn',
                                            localiserId: 'multiChoiseColumn',
                                            dataIndex: 'mandatory',
                                            text: 'ChoixMultiple',
                                            flex: 1,
                                            falseText: 'non',
                                            trueText: 'oui'
                                        }),
                                        me.processObligatoire({
                                            xtype: 'booleancolumn',
                                            localiserId: 'mandatoryColumn',
                                            dataIndex: 'mandatory',
                                            text: 'Obligatoire',
                                            flex: 1,
                                            falseText: 'non',
                                            trueText: 'oui'
                                        })
                                    ],
                                    listeners: {
                                        viewready: {
                                            fn: me.onVocabulariesMTGridViewReady,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'card'
                            },
                            iconCls: 'parametres',
                            title: 'Propriétés',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'propsTab'
                            },
                            items: [
                                {
                                    xtype: 'form',
                                    id: 'mediaTypesEditForm',
                                    itemId: 'mainLocItem',
                                    bodyPadding: 10,
                                    title: '',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Name',
                                            labelWidth: 130,
                                            name: 'type',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'fieldset',
                                            localiserId: 'rightsFieldSet',
                                            title: 'Droits',
                                            items: [
                                                {
                                                    xtype: 'WorkspaceCombo',
                                                    fieldLabel: 'Espaces de travail',
                                                    labelWidth: 120,
                                                    name: 'workspaces',
                                                    multiSelect: true,
                                                    store: 'ContributeWorkspacesCombo',
                                                    anchor: '100%'
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
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'DLSToolbar',
                                    replicatorEntity: 'CTLReplicatorEntity',
                                    id: 'MTLDLSToolbar',
                                    dock: 'top'
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
                    fn: me.onMediaTypesInterfaceRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onMediaTypesInterfaceBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processBoiteBarreMeta: function(config) {
        config.tpl=[
        '<b>{text}</b> </br> <b>'+Rubedo.RubedoAutomatedElementsLoc.creationText+' : </b> {creation} <b>'+Rubedo.RubedoAutomatedElementsLoc.lastUpdateText+' : </b> {derniereModification} <b>'+Rubedo.RubedoAutomatedElementsLoc.authorText+' : </b> {createUser}  <b>'+Rubedo.RubedoAutomatedElementsLoc.versionText+' : </b>{version}'
        ];
        return config;
    },

    processData: function(config) {
        config.title=Rubedo.RubedoInterfaceLoc.dataTab.title;
        return config;
    },

    processSearchFormCheck: function(config) {
        config.title=Rubedo.RubedoInterfaceLoc.searchTab.title;
        return config;
    },

    processEtiquettes: function(config) {
        config.trueText=Rubedo.RubedoAutomatedElementsLoc.yesText;
        config.falseText=Rubedo.RubedoAutomatedElementsLoc.noText;
        return config;
    },

    processChoixMultiple: function(config) {
        config.trueText=Rubedo.RubedoAutomatedElementsLoc.yesText;
        config.falseText=Rubedo.RubedoAutomatedElementsLoc.noText;
        return config;
    },

    processObligatoire: function(config) {
        config.trueText=Rubedo.RubedoAutomatedElementsLoc.yesText;
        config.falseText=Rubedo.RubedoAutomatedElementsLoc.noText;
        return config;
    },

    onSaveMTBtnAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
    });
    },

    onMainMTGridSelect: function(rowmodel, record, index, eOpts) {
        Ext.getCmp("MTcenterZone").setActiveTab(2);
        Ext.getCmp("MTcenterZone").setActiveTab(0);
    },

    onImageRender1: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/images.png');
    },

    onVocabulariesMTGridViewReady: function(tablepanel, eOpts) {
        if (!ACL.interfaceRights["write.ui.damTypes"]){
            tablepanel.getSelectionModel().setLocked(true);
        }
    },

    onMediaTypesInterfaceRender: function(component, eOpts) {
        Ext.getStore("TaxonomyForMT").load();
    },

    onMediaTypesInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("TaxonomyForMT").removeAll();
    }

});