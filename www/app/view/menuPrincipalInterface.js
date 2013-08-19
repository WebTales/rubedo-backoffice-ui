/*
 * File: app/view/menuPrincipalInterface.js
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

Ext.define('Rubedo.view.menuPrincipalInterface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menuPrincipalInterface',

    border: 0,
    floating: true,
    height: 320,
    id: 'menuPrincipalInterface',
    width: 350,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    bodyBorder: false,
    bodyPadding: 0,
    frameHeader: false,
    iconCls: 'meUser',
    overlapHeader: false,
    title: 'Rubedo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    id: 'salamanderBox',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            height: 10,
                            id: 'salamanderContext',
                            width: 220,
                            layout: {
                                type: 'absolute'
                            },
                            items: [
                                {
                                    xtype: 'menu',
                                    x: 0,
                                    y: 0,
                                    floating: false,
                                    frame: true,
                                    hidden: false,
                                    id: 'salamanderStudioMenu',
                                    width: 218,
                                    listeners: {
                                        added: {
                                            fn: me.onSalamanderStudioMenuAdded,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'menu',
                                    x: 0,
                                    y: 0,
                                    floating: false,
                                    frame: true,
                                    hidden: false,
                                    id: 'salamanderAdminMenu',
                                    width: 218,
                                    listeners: {
                                        added: {
                                            fn: me.onSalamanderAdminMenuAdded,
                                            scope: me
                                        }
                                    }
                                }
                            ],
                            listeners: {
                                render: {
                                    fn: me.onSalamanderContextRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'image',
                            height: 239,
                            id: 'salamanderLogo',
                            width: 210,
                            src: 'resources/images/logoBkg.png'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'left',
                    id: 'menuPrincipalDroite',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'read.ui.pages',
                            favoriteIcon: 'application.png',
                            localiserId: 'pagesLaunchBtn',
                            itemId: 'contributionPages',
                            iconCls: 'site-icon',
                            text: 'Pages'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.pages',
                            favoriteIcon: 'computer.png',
                            localiserId: 'previewLaunchBtn',
                            itemId: 'contributionPrevisualisation',
                            iconCls: 'personalize',
                            text: 'Prévisualisation'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.contents',
                            favoriteIcon: 'page_full.png',
                            localiserId: 'contentsLaunchBtn',
                            itemId: 'contributionContenus',
                            iconCls: 'content-icon',
                            text: 'Contenus'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.dam',
                            favoriteIcon: 'images.png',
                            localiserId: 'DAMLaunchBtn',
                            itemId: 'DAMInterface',
                            iconCls: 'mediaTypes',
                            text: 'Médiathèque'
                        },
                        {
                            xtype: 'tbseparator',
                            ACL: 'read.ui.contents'
                        },
                        {
                            xtype: 'button',
                            usesMenu: true,
                            usedMenu: 'salamanderStudioMenu',
                            localiserId: 'studioMenuBtn',
                            iconCls: 'applications',
                            text: 'Studio',
                            listeners: {
                                render: {
                                    fn: me.onButtonRender,
                                    scope: me
                                }
                            },
                            menu: {
                                xtype: 'menu',
                                width: 120
                            }
                        },
                        {
                            xtype: 'button',
                            usesMenu: true,
                            usedMenu: 'salamanderAdminMenu',
                            localiserId: 'adminLenuBtn',
                            iconCls: 'process-icon',
                            text: 'Administration',
                            listeners: {
                                render: {
                                    fn: me.onButtonRender1,
                                    scope: me
                                }
                            },
                            menu: {
                                xtype: 'menu',
                                width: 120
                            }
                        },
                        {
                            xtype: 'button',
                            favoriteIcon: 'tools.png',
                            localiserId: 'mySettingsLaunchBtn',
                            itemId: 'userSettings',
                            iconCls: 'parametres',
                            text: 'Paramètres'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'logoutBtn',
                            itemId: 'deconnexionMenuPrincipal',
                            iconCls: 'deconecter',
                            text: 'Déconnexion'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onSalamanderStudioMenuAdded: function(component, container, pos, eOpts) {
        component.add([
        {
            xtype: 'menuitem',
            ACL: 'read.ui.sites',
            favoriteIcon: 'globe_computer.png',
            itemId: 'sitesInterface',
            iconCls: 'referencement_icon',
            localiserId:'sitesLaunchBtn',
            text: 'Sites'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.masks',
            favoriteIcon: 'application.png',
            itemId: 'adminFMDP',
            iconCls: 'masque-icon',
            localiserId:'masksLaunchBtn',
            text: 'Masques de page'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.contentTypes',
            favoriteIcon: 'page_full.png',
            itemId: 'adminFTDC',
            iconCls: 'content-icon',
            localiserId:'contentTypesLaunchBtn',
            text: 'Types de contenus'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.damTypes',
            favoriteIcon: 'images.png',
            itemId: 'mediaTypesInterface',
            iconCls: 'mediaTypes',
            localiserId:'damTypesLaunchBtn',
            text: 'Types de médias'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.forms',
            favoriteIcon: 'note.edit.png',
            itemId: 'FormsInterface',
            iconCls: 'form_small',
            localiserId:'formsLaunchBtn',
            text: 'Questionnaires'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.customThemes',
            favoriteIcon: 'palette.png',
            itemId: 'CustomThemesInterface',
            iconCls: 'palette',
            localiserId:'customThemesLaunchBtn',
            text: 'Custom Themes'
        }
        ]);
    },

    onSalamanderAdminMenuAdded: function(component, container, pos, eOpts) {
        component.add([
        {
            xtype: 'menuitem',
            ACL: 'read.ui.queries',
            favoriteIcon: 'database_search.png',
            itemId: 'queryManagerInterface',
            iconCls: 'database_search',
            localiserId:'queriesLaunchBtn',
            text: 'Requêtes'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.taxonomy',
            favoriteIcon: 'tag.png',
            itemId: 'adminFTaxonomie',
            iconCls: 'page_taxonomy',
            localiserId:'taxonomyLaunchBtn',
            text: 'Taxonomie'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.groups',
            favoriteIcon: 'users.png',
            itemId: 'adminFUtilisateurs',
            localiserId:'groupsLaunchBtn',
            iconCls: 'user',
            text: 'Groupes'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.workspaces',
            favoriteIcon: 'users.png',
            itemId: 'WorkspacesInterface',
            localiserId:'workspacesLaunchBtn',
            iconCls: 'user',
            text: 'Espaces de travail'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.users',
            favoriteIcon: 'user_edit.png',
            floating: false,
            itemId: 'UserAdminWindow',
            localiserId:'usersLaunchBtn',
            iconCls: 'user_edit',
            text: 'Utilisateurs'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.technicalDashboard',
            favoriteIcon: 'chart.png',
            itemId: 'monitoringTools',
            localiserId:'monitoringLaunchBtn',
            iconCls: 'monitoring',
            text: 'Supervision'
        },
        {
            xtype: 'menuitem',
            ACL: 'read.ui.workflows',
            favoriteIcon: 'processes.png',
            itemId: 'menuWorkflows',
            iconCls: 'process-icon',
            localiserId:'workflowsLaunchBtn',
            text: 'Workflows'
        },{
            xtype: 'menuitem',
            ACL: 'exe.ui.import',
            favoriteIcon: 'database_up.png',
            itemId: 'InportInterface',
            iconCls: 'database_up_small',
            localiserId:'importLaunchBtn',
            text: 'Import'
        },{
            xtype: 'menuitem',
            ACL: 'read.ui.mailingLists',
            favoriteIcon: 'mail.png',
            itemId: 'MailingListsInterface',
            iconCls: 'mail_small',
            localiserId:'mailingListsLaunchBtn',
            text: 'Listes de diffusion'
        },{
            xtype: 'menuitem',
            ACL: 'read.ui.languages',
            favoriteIcon: 'world.png',
            itemId: 'languagesInterface',
            iconCls: 'world_small',
            localiserId:'languagesLaunchBtn',
            text: 'Languages'
        }
        ]);
    },

    onSalamanderContextRender: function(component, eOpts) {
        Ext.Array.forEach(component.query("menu"), function(thing){thing.hide();});
    },

    onButtonRender: function(component, eOpts) {
        if ((!ACL.interfaceRights["read.ui.sites"])&&(!ACL.interfaceRights["read.ui.masks"])&&(!ACL.interfaceRights["read.ui.contentTypes"])&&(!ACL.interfaceRights["read.ui.damTypes"])){
            component.hide();
        }
    },

    onButtonRender1: function(component, eOpts) {
        if ((!ACL.interfaceRights["read.ui.queries"])&&(!ACL.interfaceRights["read.ui.taxonomy"])&&(!ACL.interfaceRights["read.ui.groups"])&&(!ACL.interfaceRights["read.ui.workspaces"])&&(!ACL.interfaceRights["read.ui.users"])&&(!ACL.interfaceRights["read.ui.technicalDashboard"])&&(!ACL.interfaceRights["read.ui.workflows"])){
            component.hide();
        }
    }

});