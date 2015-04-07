/*
 * File: app/view/DesktopCustomizeWindow.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('Rubedo.view.DesktopCustomizeWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.DesktopCustomizeWindow',

    requires: [
        'Rubedo.view.wallpaperPicker',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    localiserId: 'desktopCustomizeWindow',
    height: 450,
    id: 'DesktopCustomizeWindow',
    width: 600,
    resizable: false,
    constrainHeader: true,
    iconCls: 'personalize',
    title: 'Personnalisation du bureau',
    minimizable: true,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    width: 150,
                    layout: 'accordion',
                    items: [
                        {
                            xtype: 'gridpanel',
                            managesStore: true,
                            localiserId: 'wallpaperGrid',
                            id: 'wallpaperGrid',
                            collapsed: false,
                            title: 'Fond d\'écran',
                            store: 'WallpapersDataJson',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    localiserId: 'nameCol',
                                    dataIndex: 'name',
                                    text: 'Nom',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            managesStore: true,
                            localiserId: 'themeGrid',
                            id: 'themeGrid',
                            collapsed: true,
                            title: 'Thèmes',
                            store: 'ThemesDataJson',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    localiserId: 'nameCol',
                                    dataIndex: 'name',
                                    text: 'Nom',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            localiserId: 'accessibilityPanel',
                            id: 'accessibilityOptionsPanel',
                            title: 'Accessibilité'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    id: 'DesktopCustomizeMainArea',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'wallpaperPicker'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});