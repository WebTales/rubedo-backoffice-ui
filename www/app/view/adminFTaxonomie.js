/*
 * File: app/view/adminFTaxonomie.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('Rubedo.view.adminFTaxonomie', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminFTaxonomie',

    requires: [
        'Rubedo.view.TermesTaxonomieTree',
        'Rubedo.view.WorkspaceCombo'
    ],

    favoriteIcon: 'tag.png',
    height: 578,
    id: 'adminFTaxonomie',
    width: 1000,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'page_taxonomy',
    title: 'Taxonomie',
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
                            iconCls: 'page_taxonomy',
                            text: 'Taxonomie <b>></b> '
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
                    itemId: 'contextBar',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.taxonomy',
                            id: 'boutonCreerTaxonomie',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.taxonomy',
                            disabled: true,
                            id: 'boutonSupprimerTaxo',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.taxonomy',
                            disabled: true,
                            id: 'boutonEnregistrerTaxo',
                            iconAlign: 'top',
                            iconCls: 'floppy_disc_big',
                            scale: 'large',
                            text: 'Enregistrer',
                            listeners: {
                                afterrender: {
                                    fn: me.onBoutonEnregistrerTaxoAfterRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.taxonomyTerms',
                            disabled: true,
                            id: 'taxoTermEditBrnGroup',
                            headerPosition: 'bottom',
                            title: 'Edition des termes',
                            columns: 2,
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'taxoOpenInsertBtn',
                                    iconAlign: 'top',
                                    iconCls: 'add_big',
                                    scale: 'large',
                                    text: 'Ajouter'
                                },
                                {
                                    xtype: 'button',
                                    id: 'taxoTermKiller',
                                    iconAlign: 'top',
                                    iconCls: 'remove_big',
                                    scale: 'large',
                                    text: 'Supprimer'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            itemId: 'boutonCreerRaccourci',
                            iconAlign: 'top',
                            iconCls: 'favorite_add_big',
                            scale: 'large',
                            text: 'Ajouter aux favoris'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            RApplication: 'taxonomy',
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
                    managesStore: true,
                    autoRender: false,
                    id: 'AdminfTaxonomieGrid',
                    width: 150,
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    store: 'TaxonomieDataJson',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var returner = value;
                                if (record.get("readOnly")){
                                    returner ="<i style=\"color:#777;\">"+value+"</i>";
                                }
                                return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/tag.png"> '+returner);
                            },
                            dataIndex: 'name',
                            text: 'Nom',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    disabled: true,
                    id: 'taxonomyCenterBox',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            id: 'conteneurAdminfTaxo',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            iconCls: 'edit',
                            title: 'Edition',
                            items: [
                                {
                                    xtype: 'form',
                                    id: 'ProprietesTaxonomie',
                                    width: 300,
                                    autoScroll: true,
                                    bodyPadding: 10,
                                    collapseDirection: 'left',
                                    collapsed: false,
                                    collapsible: true,
                                    title: 'Propriétés',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Nom ',
                                            name: 'name',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'textareafield',
                                            anchor: '100%',
                                            fieldLabel: 'Description ',
                                            name: 'description'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Texte d\'aide ',
                                            name: 'helpText'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Extensible ',
                                            name: 'expandable',
                                            boxLabel: '',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Saisie arborescente',
                                            name: 'inputAsTree',
                                            boxLabel: '',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Choix multiple ',
                                            name: 'multiSelect',
                                            boxLabel: '',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Obligatoire ',
                                            name: 'mandatory',
                                            boxLabel: '',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'TermesTaxonomieTree',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'taxoRightsBox',
                            bodyPadding: 10,
                            iconCls: 'user',
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
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onImageRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/tag.png');
    },

    onBoutonEnregistrerTaxoAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
    });
    }

});