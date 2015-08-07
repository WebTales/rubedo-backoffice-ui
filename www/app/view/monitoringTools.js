/*
 * File: app/view/monitoringTools.js
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

Ext.define('Rubedo.view.monitoringTools', {
    extend: 'Ext.window.Window',
    alias: 'widget.monitoringTools',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.toolbar.Spacer'
    ],

    ACL: 'exe.ui.elasticSearch',
    localiserId: 'monitoringField',
    height: 325,
    id: 'monitoringTools',
    width: 874,
    constrainHeader: true,
    iconCls: 'monitoring',
    title: 'Supervision',

    layout: {
        type: 'vbox',
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
                    xtype: 'form',
                    refreshCacheInfo: function() {
                        Ext.Ajax.request({
                            url: 'cache',
                            params: {
                            },
                            success: function(response){
                                var text = Ext.JSON.decode(response.responseText);
                                Ext.getCmp("SupervisionCachePanel").getForm().setValues(text);
                            }
                        });
                    },
                    localiserId: 'cachePanel',
                    flex: 1,
                    id: 'SupervisionCachePanel',
                    bodyPadding: 10,
                    title: 'Cache',
                    items: [
                        {
                            xtype: 'fieldset',
                            localiserId: 'cacheElementFieldSet',
                            title: 'Elements en cache',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'objectField',
                                    anchor: '100%',
                                    fieldLabel: 'Objets',
                                    name: 'cachedItems',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'urlField',
                                    anchor: '100%',
                                    fieldLabel: 'URL',
                                    name: 'cachedUrl',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'cachedApiCallsField',
                                    anchor: '100%',
                                    fieldLabel: 'API calls',
                                    name: 'apiCache',
                                    readOnly: true
                                }
                            ]
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
                                    handler: function(button, event) {
                                        button.up().up().refreshCacheInfo();
                                    },
                                    localiserId: 'refreshBtn',
                                    id: 'supervisionRefreshCacheBtn',
                                    text: '<b>Rafraîchir</b>'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'cache/clear',
                                            params: {
                                            },
                                            success: function(response){
                                                button.setLoading(false);
                                                button.up().up().refreshCacheInfo();
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, "Cache cleared");
                                            }
                                        });
                                    },
                                    id: 'SupervisionClearCachetn',
                                    text: '<b>Clear all cached items</b>'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'cache/clear-files',
                                            params: {
                                            },
                                            success: function(response){
                                                button.setLoading(false);
                                                button.up().up().refreshCacheInfo();
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, "Cache cleared");
                                            }
                                        });
                                    },
                                    text: '<b>Clear file cache</b>'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'cache/clear-config',
                                            params: {
                                            },
                                            success: function(response){
                                                button.setLoading(false);
                                                button.up().up().refreshCacheInfo();
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, "Cache cleared");
                                            }
                                        });
                                    },
                                    text: '<b>Clear config cache</b>'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'cache/clear-api',
                                            params: {
                                            },
                                            success: function(response){
                                                button.setLoading(false);
                                                button.up().up().refreshCacheInfo();
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, "Cache cleared");
                                            }
                                        });
                                    },
                                    text: '<b>Clear API cache</b>'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'cache/clear-url',
                                            params: {
                                            },
                                            success: function(response){
                                                button.setLoading(false);
                                                button.up().up().refreshCacheInfo();
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, "Cache cleared");
                                            }
                                        });
                                    },
                                    text: '<b>Clear URL cache</b>'
                                }
                            ]
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onSupervisionCachePanelAfterRender,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'form',
                    localiserId: 'elasticSearchPanel',
                    flex: 0.5,
                    layout: 'fit',
                    bodyPadding: 10,
                    icon: 'resources/images/esLogo.png',
                    title: 'Elastic Search',
                    items: [
                        {
                            xtype: 'toolbar',
                            height: 30,
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'elastic-indexer?option=content',
                                            params:{
                                            },
                                            success: function(response){
                                                var answerMe = Ext.widget("esResponseWindow");
                                                answerMe.getComponent(0).setSource(Ext.JSON.decode(response.responseText));
                                                Ext.getCmp("ViewportPrimaire").add(answerMe);
                                                answerMe.show();
                                                button.setLoading(false);
                                            },
                                            failure: function(response) {
                                                button.setLoading(false);
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Ext.JSON.decode(response.responseText).msg);

                                            }
                                        });
                                    },
                                    localiserId: 'indexContentsBtn',
                                    text: '<b>Indexation des contenus</b>'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'elastic-indexer?option=dam',
                                            params:{
                                            },
                                            success: function(response){
                                                var answerMe = Ext.widget("esResponseWindow");
                                                answerMe.getComponent(0).setSource(Ext.JSON.decode(response.responseText));
                                                Ext.getCmp("ViewportPrimaire").add(answerMe);
                                                answerMe.show();
                                                button.setLoading(false);
                                            },
                                            failure: function(response) {
                                                button.setLoading(false);
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Ext.JSON.decode(response.responseText).msg);
                                            }
                                        });
                                    },
                                    localiserId: 'indexMediasBtn',
                                    text: '<b>Indexation des médias</b>'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'elastic-indexer?option=user',
                                            params:{
                                            },
                                            success: function(response){
                                                var answerMe = Ext.widget("esResponseWindow");
                                                answerMe.getComponent(0).setSource(Ext.JSON.decode(response.responseText));
                                                Ext.getCmp("ViewportPrimaire").add(answerMe);
                                                answerMe.show();
                                                button.setLoading(false);
                                            },
                                            failure: function(response) {
                                                button.setLoading(false);
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Ext.JSON.decode(response.responseText).msg);
                                            }
                                        });
                                    },
                                    localiserId: 'indexUsersBtn',
                                    text: '<b>Index users</b>'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.setLoading(true);
                                        Ext.Ajax.request({
                                            url: 'elastic-indexer?option=all',
                                            params:{
                                            },
                                            success: function(response){
                                                var answerMe = Ext.widget("esResponseWindow");
                                                answerMe.getComponent(0).setSource(Ext.JSON.decode(response.responseText));
                                                Ext.getCmp("ViewportPrimaire").add(answerMe);
                                                answerMe.show();
                                                button.setLoading(false);
                                            },
                                            failure: function(response) {
                                                button.setLoading(false);
                                                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Ext.JSON.decode(response.responseText).msg);
                                            }
                                        });
                                    },
                                    localiserId: 'indexAllBtn',
                                    text: '<b>Indexation complète</b>'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var theWin =Ext.getCmp("SystemInfoDisplayWindow");
                                if (Ext.isEmpty(theWin)){
                                    Ext.widget("SystemInfoDisplayWindow").show();
                                } else {
                                    theWin.show();
                                }
                            },
                            localiserId: 'systemInformationGetBtn',
                            id: 'getSystemInformationBtn',
                            iconCls: 'help',
                            text: 'Informations système'
                        },
                        me.processGetDatabaseInformationBtn({
                            xtype: 'button',
                            handler: function(button, event) {
                                if (button.canUpdate){
                                    Ext.Msg.confirm(Rubedo.RubedoAutomatedElementsLoc.warningTitle, Rubedo.RubedoAutomatedElementsLoc.databaseUpdateWarning ,function(anser){
                                        if (anser=="yes"){
                                            Ext.getCmp("getDatabaseInformationBtn").setLoading(true);
                                            Ext.Ajax.request({
                                                url: 'update/run',
                                                params: {
                                                },
                                                success: function(response){
                                                    var data = Ext.JSON.decode(response.responseText);
                                                    Ext.getCmp("getDatabaseInformationBtn").setLoading(false);
                                                    Ext.getCmp("getDatabaseInformationBtn").canUpdate=false;
                                                    Ext.getCmp("getDatabaseInformationBtn").setIconCls(null);
                                                    Ext.getCmp("getDatabaseInformationBtn").setText(Rubedo.RubedoAutomatedElementsLoc.databaseIsUpToDateText);
                                                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, Rubedo.RubedoAutomatedElementsLoc.databaseUpdatedToText+" "+data.version);

                                                }});
                                            }
                                        }
                                        );
                                    }
                            },
                            id: 'getDatabaseInformationBtn',
                            icon: 'resources/icones/generic/database.png',
                            text: 'Database is up to date'
                        }),
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                button.setLoading(true);
                                Ext.Ajax.request({
                                    url: 'update/apply-indexes',
                                    params: {
                                    },
                                    success: function(response){
                                        var data = Ext.JSON.decode(response.responseText);
                                        button.setLoading(false);

                                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle, "Collection indexes applied.");

                                    }});
                            },
                            iconCls: 'process-icon',
                            text: 'Apply collection indexes'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                button.setLoading(true);
                                Ext.Ajax.request({
                                    url: 'magic/refresh-item-recommendations',
                                    timeout: 300000,
                                    params:{
                                    },
                                    success: function(response){
                                        button.setLoading(false);
                                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle,"Item recommendations refreshed.");
                                    },
                                    failure: function(response) {
                                        button.setLoading(false);
                                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Ext.JSON.decode(response.responseText).msg);

                                    }
                                });
                            },
                            id: 'rebuildContentConcurrencyBtn',
                            iconCls: 'content-icon',
                            text: 'Refresh item recommendations',
                            listeners: {
                                afterrender: {
                                    fn: me.onRebuildContentConcurrencyBtnAfterRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                button.setLoading(true);
                                Ext.Ajax.request({
                                    url: 'magic/refresh-user-recommendations',
                                    timeout: 300000,
                                    params:{
                                    },
                                    success: function(response){
                                        button.setLoading(false);
                                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.successTitle,"User recommendations refreshed.");
                                    },
                                    failure: function(response) {
                                        button.setLoading(false);
                                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Ext.JSON.decode(response.responseText).msg);

                                    }
                                });
                            },
                            id: 'rebuildUserRecsBtn',
                            iconCls: 'user',
                            text: 'Refresh user recommendations',
                            listeners: {
                                afterrender: {
                                    fn: me.onRebuildContentConcurrencyBtnAfterRender1,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onMonitoringToolsAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processGetDatabaseInformationBtn: function(config) {
        config.text=Rubedo.RubedoAutomatedElementsLoc.databaseIsUpToDateText;
        return config;
    },

    onSupervisionCachePanelAfterRender: function(component, eOpts) {
        component.refreshCacheInfo();
    },

    onRebuildContentConcurrencyBtnAfterRender: function(component, eOpts) {
        if (!PHPOptions.activateMagic){
            component.hide();
        }
    },

    onRebuildContentConcurrencyBtnAfterRender1: function(component, eOpts) {
        if (!PHPOptions.activateMagic){
            component.hide();
        }
    },

    onMonitoringToolsAfterRender: function(component, eOpts) {
        Ext.getCmp("getSystemInformationBtn").setLoading(true);
        Ext.Ajax.request({
            url: 'rubedo-version',
            params: {
            },
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                Ext.getCmp("getSystemInformationBtn").setLoading(false);
                component.retrievedSystemInfo=data;
                if (!(data.IsRubedoLatest)){
                    Ext.getCmp("getSystemInformationBtn").setIconCls("infoWarning");
                    Ext.getCmp("getSystemInformationBtn").setText(Ext.getCmp("getSystemInformationBtn").getText()+" "+Rubedo.RubedoAutomatedElementsLoc.oldVersionText);
                }
            }
        });
        Ext.getCmp("getDatabaseInformationBtn").setLoading(true);
        Ext.Ajax.request({
            url: 'update',
            params: {
            },
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                Ext.getCmp("getDatabaseInformationBtn").setLoading(false);
                if (data.needUpdate){
                    Ext.getCmp("getDatabaseInformationBtn").canUpdate=true;
                    Ext.getCmp("getDatabaseInformationBtn").setIconCls("infoWarning");
                    Ext.getCmp("getDatabaseInformationBtn").setText(Rubedo.RubedoAutomatedElementsLoc.databaseNeedsUpdateText);
                }
            }
        });
    }

});