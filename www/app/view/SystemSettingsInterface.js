/*
 * File: app/view/SystemSettingsInterface.js
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

Ext.define('Rubedo.view.SystemSettingsInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.SystemSettingsInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.tab.Tab',
        'Ext.form.FieldSet',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill'
    ],

    localiserId: 'SystemSettingsInterface',
    height: 463,
    id: 'SystemSettingsInterface',
    width: 723,
    constrainHeader: true,
    iconCls: 'process-icon',
    title: 'System settings',

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
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'form',
                            id: 'rubedoSystemConfigForm',
                            autoScroll: true,
                            bodyPadding: 10,
                            title: 'Rubedo config',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Features',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Activate e-commerce features',
                                            labelWidth: 200,
                                            name: 'addECommerce',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Activate Magic Queries',
                                            labelWidth: 200,
                                            name: 'activateMagic',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Performance',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Minify CSS & JS',
                                            labelWidth: 200,
                                            name: 'minify',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Cache page',
                                            labelWidth: 200,
                                            name: 'cachePage',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'API cache',
                                            labelWidth: 200,
                                            name: 'apiCache',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Use CDN',
                                            labelWidth: 200,
                                            name: 'useCdn',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Back Office',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Use SSL',
                                            labelWidth: 200,
                                            name: 'isBackofficeSSL',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Default domain',
                                            labelWidth: 200,
                                            name: 'defaultBackofficeHost'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Notifications',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Enable email notifications',
                                            labelWidth: 200,
                                            name: 'enableEmailNotification',
                                            boxLabel: '',
                                            inputValue: '1',
                                            uncheckedValue: '0'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Sender address',
                                            labelWidth: 200,
                                            name: 'fromEmailNotification'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Sender name',
                                            labelWidth: 200,
                                            name: 'fromEmailNotificationName'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'rubedoMailerConfigForm',
                            bodyPadding: 10,
                            title: 'Default mailer config',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Server name *',
                                    name: 'server'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Server port *',
                                    name: 'port'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    anchor: '100%',
                                    fieldLabel: 'Use SSL',
                                    name: 'ssl',
                                    boxLabel: '',
                                    inputValue: '1',
                                    uncheckedValue: '0'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'User name',
                                    name: 'username'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Password',
                                    name: 'password',
                                    inputType: 'password'
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
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var payload={};
                                payload.rubedo_config=Ext.getCmp("rubedoSystemConfigForm").getForm().getValues();
                                payload.swiftmail={
                                    smtp:Ext.getCmp("rubedoMailerConfigForm").getForm().getValues()
                                };
                                Ext.Ajax.request({
                                    url: 'config/update',
                                    method:'POST',
                                    params: {
                                        data:Ext.JSON.encode(payload)
                                    },
                                    success: function(response){
                                        Ext.create('Ext.ux.window.Notification', {
                                            title: "Success",
                                            position: 'tr',
                                            manager: 'instructions',
                                            cls: 'ux-notification-light',
                                            iconCls: 'ux-notification-icon-information',
                                            html: "<p>Config updated</p>",
                                            autoCloseDelay: 4000,
                                            styleHtmlContent:true,
                                            slideBackDuration: 500,
                                            slideInAnimation: 'bounceOut',
                                            slideBackAnimation: 'easeIn'
                                        }).show();

                                    },
                                    failure:function(response){
                                        Ext.Msg.alert("Error","Config update error");
                                    }
                                });
                            },
                            iconCls: 'save',
                            text: 'Save changes'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onWorkspacesInterfaceRender: function(component, eOpts) {
        Ext.Ajax.request({
            url: 'config',
            method:'GET',
            params: {
            },
            success: function(response){
                var config=Ext.JSON.decode(response.responseText);
                if (Ext.isEmpty(config.rubedo_config)){
                    config.rubedo_config={};
                }
                if (Ext.isEmpty(config.swiftmail)){
                    config.swiftmail={};
                }
                if (Ext.isEmpty(config.swiftmail.smtp)){
                    config.swiftmail.smtp={};
                }
                Ext.getCmp("rubedoSystemConfigForm").getForm().setValues(config.rubedo_config);
                Ext.getCmp("rubedoMailerConfigForm").getForm().setValues(config.swiftmail.smtp);
            }
        });
    }

});