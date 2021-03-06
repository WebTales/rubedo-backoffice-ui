/*
 * File: app/view/FacetOverriderWindow.js
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

Ext.define('Rubedo.view.FacetOverriderWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.FacetOverriderWindow',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.form.field.ComboBox',
        'Ext.grid.plugin.CellEditing',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    localiserId: 'facetOverridesWindow',
    height: 297,
    width: 415,
    constrain: true,
    layout: 'fit',
    title: 'Facet overrides',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    title: '',
                    forceFit: true,
                    store: 'FacetOverriderStore',
                    viewConfig: {
                        markDirty: false
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return(Ext.getStore("FacetsToDisplayStore").findRecord("id",value).get("name"));
                            },
                            localiserId: 'facetColumn',
                            dataIndex: 'id',
                            text: 'Facet'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (value=="AND") {
                                    return(Rubedo.RubedoAutomatedElementsLoc.andText);
                                } else if (value=="OR") {
                                    return(Rubedo.RubedoAutomatedElementsLoc.orText);
                                }
                            },
                            localiserId: 'OperatorColumn',
                            dataIndex: 'facetOperator',
                            text: 'Operator',
                            editor: me.processMyComboBox10({
                                xtype: 'combobox',
                                allowBlank: false,
                                forceSelection: true
                            })
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            clicksToEdit: 1
                        })
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
                                    localiserId: 'applyBtn',
                                    id: 'facetOverriderApplyBtn',
                                    iconCls: 'ouiSpetit',
                                    text: 'Apply',
                                    listeners: {
                                        click: {
                                            fn: me.onFacetOverriderApplyBtnClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onWindowAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processMyComboBox10: function(config) {
        config.store=[["AND", Rubedo.RubedoAutomatedElementsLoc.andText],["OR", Rubedo.RubedoAutomatedElementsLoc.orText]];
        return config;
    },

    onFacetOverriderApplyBtnClick: function(button, e, eOpts) {
        var data=button.up().up().getStore().getRange();
        var newValue=Ext.JSON.encode(Ext.Array.pluck(data,"data"));
        Ext.getCmp(button.up().up().up().targetedFieldId).setValue(newValue);
        button.up().up().up().close();
    },

    onWindowAfterRender: function(component, eOpts) {
        component.getComponent(0).getStore().removeAll();
        component.getComponent(0).getStore().loadData(component.initialValue);
    }

});