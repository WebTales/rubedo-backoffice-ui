/*
 * File: app/view/shippersInterface.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('Rubedo.view.shippersInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.shippersInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.grid.plugin.RowEditing',
        'Ext.panel.Tool'
    ],

    height: 456,
    id: 'shippersInterface',
    width: 1003,
    constrainHeader: true,
    iconCls: 'truck',
    title: 'Shippers',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.shippers',
                            localiserId: 'addBtn',
                            id: 'shippersAddBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.shippers',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'shippersRemoveBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.shippers',
                            localiserId: 'saveBtn',
                            disabled: true,
                            id: 'shippersSaveBtn',
                            iconAlign: 'top',
                            iconCls: 'floppy_disc_big',
                            scale: 'large',
                            text: 'Enregistrer',
                            listeners: {
                                afterrender: {
                                    fn: me.onWorkspaceSaveAfterRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'tbfill'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'shippersGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'Shippers',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (record.get("readOnly")) {
                                    return("<i style=\"color:#777;\">"+value+"</i>");
                                } else {
                                    return(value);
                                }
                            },
                            localiserId: 'nameColumn',
                            dataIndex: 'name',
                            text: 'Nom'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    localiserId: 'propsPanel',
                    flex: 1,
                    disabled: true,
                    title: 'Propriétés',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'form',
                            id: 'shippersMainForm',
                            itemId: 'mainLocItem',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    localiserId: 'nameField',
                                    anchor: '100%',
                                    fieldLabel: 'Nom',
                                    labelWidth: 140,
                                    name: 'name',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'checkboxfield',
                                    anchor: '100%',
                                    fieldLabel: 'Active',
                                    labelWidth: 140,
                                    name: 'active',
                                    inputValue: 'true',
                                    uncheckedValue: 'false'
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    fieldLabel: 'Rate type',
                                    labelWidth: 140,
                                    name: 'rateType',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    forceSelection: true,
                                    queryMode: 'local',
                                    store: [
                                        [
                                            'flatPerOrder',
                                            'Flat rate per order'
                                        ],
                                        [
                                            'flatPerItem',
                                            'Flat rate per item'
                                        ]
                                    ]
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    hidden: true,
                                    fieldLabel: 'Minimum order amount',
                                    labelWidth: 140,
                                    name: 'minimumOrderAmount',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    minValue: 0
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            title: 'Rates',
                            forceFit: true,
                            store: 'ShippersRatesStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        try {return(Ext.getStore("CountriesForShippers").findRecord("alpha-2",value).get("name"));} catch (err){
                                        return value;
                                    }
                                    },
                                    dataIndex: 'country',
                                    text: 'Country',
                                    editor: {
                                        xtype: 'combobox',
                                        allowBlank: false,
                                        displayField: 'name',
                                        forceSelection: true,
                                        queryMode: 'local',
                                        store: 'CountriesForShippers',
                                        valueField: 'alpha-2'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'rate',
                                    text: 'Price (tax-free)',
                                    editor: {
                                        xtype: 'numberfield',
                                        allowBlank: false,
                                        minValue: 0
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'tax',
                                    text: 'Tax (%)',
                                    editor: {
                                        xtype: 'numberfield',
                                        allowBlank: false,
                                        minValue: 0
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'delay',
                                    text: 'Delay (days)',
                                    editor: {
                                        xtype: 'numberfield',
                                        allowBlank: false,
                                        minValue: 0
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'hRDelay',
                                    text: 'Displayed delay (amount)',
                                    editor: {
                                        xtype: 'numberfield',
                                        allowBlank: false,
                                        allowOnlyWhitespace: false,
                                        minValue: 0
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'hRUnit',
                                    text: 'Displayed delay (unit)',
                                    editor: {
                                        xtype: 'combobox',
                                        allowBlank: false,
                                        allowOnlyWhitespace: false,
                                        forceSelection: true,
                                        queryMode: 'local',
                                        store: [
                                            [
                                                'hours',
                                                'hours'
                                            ],
                                            [
                                                'days',
                                                'days'
                                            ],
                                            [
                                                'weeks',
                                                'weeks'
                                            ],
                                            [
                                                'months',
                                                'months'
                                            ]
                                        ]
                                    }
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
                                            iconCls: 'add',
                                            text: 'Add rate',
                                            listeners: {
                                                click: {
                                                    fn: me.onButtonClick,
                                                    scope: me
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'removeShipperRateBtn',
                                            iconCls: 'close',
                                            text: 'Remove rate',
                                            listeners: {
                                                click: {
                                                    fn: me.onRemoveShipperRateBtnClick,
                                                    scope: me
                                                }
                                            }
                                        }
                                    ]
                                }
                            ],
                            plugins: [
                                Ext.create('Ext.grid.plugin.RowEditing', {

                                })
                            ],
                            listeners: {
                                selectionchange: {
                                    fn: me.onGridpanelSelectionChange,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            listeners: {
                render: {
                    fn: me.onWorkspacesInterfaceRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onWorkspacesInterfaceBeforeClose,
                    scope: me
                }
            },
            tools: [
                {
                    xtype: 'mytool16'
                },
                {
                    xtype: 'mytool17'
                }
            ]
        });

        me.callParent(arguments);
    },

    onWorkspaceSaveAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
        });
    },

    onButtonClick: function(button, e, eOpts) {
        button.up().up().getStore().add({"country":"*","rate":0,"tax":0,"delay":1,"hRDelay":1,"hRUnit":"days"});
    },

    onRemoveShipperRateBtnClick: function(button, e, eOpts) {
        button.up().up().getStore().remove(button.up().up().getSelectionModel().getLastSelected());
    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if (Ext.isEmpty(selected)){
        	Ext.getCmp("removeShipperRateBtn").disable();
        } else {
            Ext.getCmp("removeShipperRateBtn").enable();
            }
    },

    onWorkspacesInterfaceRender: function(component, eOpts) {
        Ext.getStore("Shippers").load();
        Ext.getStore("CountriesForShippers").load();
    },

    onWorkspacesInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("Shippers").removeAll();
        Ext.getStore("CountriesForShippers").removeAll();
    }

});