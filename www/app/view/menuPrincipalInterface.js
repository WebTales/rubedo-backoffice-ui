/*
 * File: app/view/menuPrincipalInterface.js
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

Ext.define('Rubedo.view.menuPrincipalInterface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menuPrincipalInterface',

    border: 0,
    floating: true,
    frame: false,
    height: 340,
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
    title: 'Alexandru Dobre',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 0.8,
                    width: 210,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'image',
                            height: 239,
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
                    dock: 'right',
                    id: 'menuPrincipalDroite',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'read.ui.sites',
                            favoriteIcon: 'globe_computer.png',
                            itemId: 'sitesInterface',
                            iconCls: 'referencement_icon',
                            text: 'Sites'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.pages',
                            favoriteIcon: 'application.png',
                            itemId: 'contributionPages',
                            iconCls: 'site-icon',
                            text: 'Pages'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.pages',
                            favoriteIcon: 'computer.png',
                            itemId: 'contributionPrevisualisation',
                            iconCls: 'personalize',
                            text: 'Prévisualisation'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.contents',
                            favoriteIcon: 'page_full.png',
                            itemId: 'contributionContenus',
                            iconCls: 'content-icon',
                            text: 'Contenus'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.medias',
                            favoriteIcon: 'database.png',
                            itemId: 'contributionMedias',
                            iconCls: 'media-icon',
                            text: 'Médiathèque'
                        },
                        {
                            xtype: 'tbseparator',
                            ACL: 'read.ui.contentTypes'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.masks',
                            favoriteIcon: 'application.png',
                            itemId: 'adminFMDP',
                            iconCls: 'masque-icon',
                            text: 'Masques de page'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.contentTypes',
                            favoriteIcon: 'page_full.png',
                            itemId: 'adminFTDC',
                            iconCls: 'content-icon',
                            text: 'Types de contenus'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.taxonomy',
                            favoriteIcon: 'tag.png',
                            itemId: 'adminFTaxonomie',
                            iconCls: 'page_taxonomy',
                            text: 'Taxonomie'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.workflows',
                            favoriteIcon: 'processes.png',
                            itemId: 'menuWorkflows',
                            iconCls: 'process-icon',
                            text: 'Workflows'
                        },
                        {
                            xtype: 'tbseparator',
                            ACL: 'read.ui.groups'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.groups',
                            favoriteIcon: 'users.png',
                            itemId: 'adminFUtilisateurs',
                            iconCls: 'user',
                            text: 'Groupes'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.users',
                            favoriteIcon: 'user_edit.png',
                            floating: false,
                            itemId: 'UserAdminWindow',
                            iconCls: 'user_edit',
                            text: 'Utilisateurs'
                        },
                        {
                            xtype: 'button',
                            ACL: 'exe.ui.elasticSearch',
                            favoriteIcon: 'chart.png',
                            itemId: 'monitoringTools',
                            iconCls: 'monitoring',
                            text: 'Supervision'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            favoriteIcon: 'tools.png',
                            itemId: 'userSettings',
                            iconCls: 'parametres',
                            text: 'Paramètres'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deconnexionMenuPrincipal',
                            iconCls: 'deconecter',
                            text: 'Déconnexion'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});