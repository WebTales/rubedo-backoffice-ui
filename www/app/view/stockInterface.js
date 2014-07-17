/*
 * File: app/view/stockInterface.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('Rubedo.view.stockInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.stockInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.grid.plugin.BufferedRenderer',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    localiserId: 'stockWindow',
    height: 456,
    id: 'stockInterface',
    width: 1039,
    constrainHeader: true,
    iconCls: 'package',
    title: 'Stock',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'ProductTypesForStock',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            localiserId: 'productTypeCol',
                            dataIndex: 'type',
                            text: 'Product type '
                        }
                    ],
                    listeners: {
                        selectionchange: {
                            fn: me.onGridpanelSelectionChange,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    localiserId: 'ItemsGrid',
                    id: 'mainStockGrid',
                    title: 'Items',
                    forceFit: true,
                    store: 'InitialStockStore',
                    viewConfig: {
                        getRowClass: function(record, rowIndex, rowParams, store) {
                            if (record.get("stock")<record.get("outOfStockLimit")){
                                return("stockout");
                            } else if (record.get("stock")<record.get("notifyForQuantityBelow")){
                                return("stockwarning");
                            }
                        }
                    },
                    plugins: [
                        Ext.create('Ext.grid.plugin.BufferedRenderer', {

                        })
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'refreshBtn',
                                    disabled: true,
                                    id: 'stockrefresherBtn',
                                    iconCls: 'refresh',
                                    text: 'Refersh',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'addStockBtn',
                                    disabled: true,
                                    id: 'stockAddToVarItem',
                                    iconCls: 'add',
                                    text: 'Add stock',
                                    listeners: {
                                        click: {
                                            fn: me.onStockAddToVarItemClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'removeStockBtn',
                                    disabled: true,
                                    id: 'stockRemoveFromVarItem',
                                    iconCls: 'close',
                                    text: 'Remove stock',
                                    listeners: {
                                        click: {
                                            fn: me.onStockRemoveFromVarItemClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'viewProductBtn',
                                    disabled: true,
                                    id: 'stockViewVarProduct',
                                    width: 100,
                                    iconCls: 'content-icon',
                                    text: 'View product',
                                    listeners: {
                                        click: {
                                            fn: me.onStockViewVarProductClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            localiserId: 'titleCol',
                            dataIndex: 'title',
                            text: 'Title'
                        },
                        {
                            xtype: 'gridcolumn',
                            localiserId: 'priceCol',
                            dataIndex: 'price',
                            text: 'Price'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (record.get("stock")<record.get("outOfStockLimit")){
                                    return(value+" (Out of stock)");
                                } else if (record.get("stock")<record.get("notifyForQuantityBelow")){
                                    return(value +" (Below warning limit) ");
                                } else {
                                    return(value);
                                }
                            },
                            localiserId: 'stockCol',
                            dataIndex: 'stock',
                            text: 'Stock'
                        },
                        {
                            xtype: 'gridcolumn',
                            localiserId: 'skuCol',
                            dataIndex: 'sku',
                            text: 'Sku'
                        }
                    ],
                    listeners: {
                        selectionchange: {
                            fn: me.onMainStockGridSelectionChange,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onWorkspacesInterfaceRender: function(component, eOpts) {
        Ext.getStore("ProductTypesForStock").load();
    },

    onWorkspacesInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("ProductTypesForStock").removeAll();
    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if (Ext.isEmpty(selected)) {
            Ext.getCmp("mainStockGrid").getStore().removeAll();
            Ext.getCmp("stockrefresherBtn").disable();
        } else {
            Ext.getCmp("stockrefresherBtn").enable();
            Ext.getCmp("mainStockGrid").getStore().removeAll();
            var variatorFields=[
            {name:"price"},
            {name:"stock"},
            {name:"sku"},
            {name:"id"},
            {name:"title"},
            {name:"productId"},
            {name:"outOfStockLimit"},
            {name:"notifyForQuantityBelow"}
            ];
            var variatorColumns=[ ];
            variatorColumns.push({
                xtype: 'gridcolumn',
                dataIndex: 'title',
                text: 'Title'
            });
            Ext.Array.forEach(selected[0].get("champs"), function(field){
                if (field.config.useAsVariation){
                    variatorColumns.push({
                        xtype: 'gridcolumn',
                        dataIndex: field.config.name,
                        text: field.config.fieldLabel
                    });
                    variatorFields.push({name:field.config.name});
                }
            });
            variatorColumns.push({
                xtype: 'gridcolumn',
                dataIndex: 'price',
                text: 'Price'
            });
            variatorColumns.push({
                xtype: 'gridcolumn',
                dataIndex: 'sku',
                text: 'SKU'
            });
            variatorColumns.push({
                xtype: 'gridcolumn',
                dataIndex: 'stock',
                text: 'Stock',
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    if (record.get("stock")<record.get("outOfStockLimit")){
                        return(value+" (Out of stock)");
                    } else if (record.get("stock")<record.get("notifyForQuantityBelow")){
                        return(value +" (Below warning limit) ");
                    } else {
                        return(value);
                    }
                }
            });
            var variatorStore=Ext.create('Ext.data.Store', {
                autoLoad: false,
                pageSize: 100000,
                autoSync:true,
                proxy: {
                    type: 'ajax',
                    api: {
                        read: 'contents/get-stock',
                        update: 'contents/update-stock'
                    },
                    extraParams:{
                        "type-id":selected[0].get("id")
                    },
                    reader: {
                        type: 'json',
                        messageProperty: 'message',
                        root: 'data'
                    },
                    writer: {
                        type: 'json',
                        encode: true,
                        root: 'data'
                    }
                },
                fields: variatorFields
            });
            Ext.getCmp("mainStockGrid").reconfigure(variatorStore,variatorColumns);


            Ext.getCmp("mainStockGrid").getStore().load();
        }

    },

    onButtonClick: function(button, e, eOpts) {
        button.up().up().getStore().load();
    },

    onStockAddToVarItemClick: function(button, e, eOpts) {
        Ext.widget("stockAdderWindow").show();
    },

    onStockRemoveFromVarItemClick: function(button, e, eOpts) {
        Ext.widget("stockRemoverWindow").show();
        Ext.getCmp("stockRemoverField").setMaxValue(button.up().up().getSelectionModel().getLastSelected().get("stock"));
    },

    onStockViewVarProductClick: function(button, e, eOpts) {
        Rubedo.controller.ContributionContenusController.prototype.unitaryContentEdit(button.up().up().getSelectionModel().getLastSelected().get("productId"));
    },

    onMainStockGridSelectionChange: function(model, selected, eOpts) {
        if (Ext.isEmpty(selected)){
            Ext.getCmp("stockAddToVarItem").disable();
            Ext.getCmp("stockRemoveFromVarItem").disable();
            Ext.getCmp("stockViewVarProduct").disable();
        } else {
            Ext.getCmp("stockAddToVarItem").enable();
            Ext.getCmp("stockRemoveFromVarItem").enable();
            Ext.getCmp("stockViewVarProduct").enable();
        }
    }

});