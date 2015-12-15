/*
 * File: app/view/ActivityInterface.js
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

Ext.define('Rubedo.view.ActivityInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.ActivityInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging'
    ],

    localiserId: 'activityMonitorWindow',
    height: 456,
    id: 'ActivityInterface',
    width: 723,
    constrainHeader: true,
    iconCls: 'user',
    title: 'Activity',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

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
            items: [
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            layout: 'fit',
                            title: 'Log in',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    title: '',
                                    forceFit: true,
                                    store: 'ApplicationLogsAuth',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                return(value.user.fullName);
                                            },
                                            dataIndex: 'context',
                                            text: 'User'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'datetime',
                                            text: 'Lon-in date'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true,
                                            store: 'ApplicationLogsAuth',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, e) {
                                                        var userId=button.up().up().getSelectionModel().getLastSelected().get("context").user.id;
                                                        Ext.Ajax.request({
                                                            url: 'users/find-one?id='+userId,
                                                            params: {
                                                            },
                                                            method:"GET",
                                                            success: function(response){
                                                                var resp = Ext.JSON.decode(response.responseText);
                                                                if(resp.data&&resp.data.typeId){
                                                                    Rubedo.controller.UserTypesController.prototype.prepareContext(userId,resp.data.typeId);
                                                                }
                                                            }
                                                        });
                                                    },
                                                    disabled: true,
                                                    id: 'activityUserUAthDetailBtn',
                                                    iconCls: 'user_edit',
                                                    text: 'View user detail'
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        selectionchange: {
                                            fn: me.onGridpanelSelectionChange,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Content contribution'
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onActivityInterfaceAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if(Ext.isEmpty(selected)){
            Ext.getCmp("activityUserUAthDetailBtn").disable();
        } else {
            Ext.getCmp("activityUserUAthDetailBtn").enable();
        }
    },

    onActivityInterfaceAfterRender: function(component, eOpts) {
        Ext.getStore("ApplicationLogsAuth").load();
    }

});