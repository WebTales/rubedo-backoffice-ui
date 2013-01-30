/*
 * File: app/view/queryManagerInterface.js
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

Ext.define('Rubedo.view.queryManagerInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.queryManagerInterface',

    requires: [
        'Rubedo.view.MyTool17'
    ],

    height: 434,
    id: 'queryManagerInterface',
    width: 604,
    layout: {
        type: 'fit'
    },
    iconCls: 'database_search',
    title: 'Requêtes',
    constrainHeader: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    height: 64,
                    items: [
                        {
                            xtype: 'button',
                            id: 'queryMainAddBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            id: 'queryMainRemoveBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            id: 'queryMainEditBtn',
                            iconAlign: 'top',
                            iconCls: 'pencil_big',
                            scale: 'large',
                            text: 'Editer'
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
                    xtype: 'gridpanel',
                    id: 'mainQueriesGrid',
                    title: '',
                    forceFit: true,
                    store: 'MainQueriesStore',
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'Nom'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'averageDuration',
                            text: 'Durée moyenne (s)'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'count',
                            text: 'Compteur'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'usage',
                            text: 'Usage'
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
                    fn: me.onQueryManagerInterfaceRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onQueryManagerInterfaceBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onQueryManagerInterfaceRender: function(abstractcomponent, options) {
        Ext.getStore("MainQueriesStore").load();
    },

    onQueryManagerInterfaceBeforeClose: function(panel, options) {
        Ext.getStore("MainQueriesStore").removeAll();
    }

});