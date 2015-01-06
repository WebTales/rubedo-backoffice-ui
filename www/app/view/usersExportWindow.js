/*
 * File: app/view/usersExportWindow.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Rubedo.view.usersExportWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.usersExportWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.button.Button'
    ],

    width: 400,
    constrain: true,
    iconCls: 'database_down_small',
    title: 'Export users',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Start date',
                            name: 'startDate'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'End date',
                            name: 'endDate'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var url="/backoffice/users/export?workingLanguage="+Ext.getStore("CurrentUserDataStore").getRange()[0].get("language")+"&typeId="+Ext.getCmp("usersInterfaceTypeGrid").getSelectionModel().getLastSelected().get("id");
                                var values=button.up().getForm().getValues();
                                Ext.Object.each(values, function(key,value){
                                    if (!Ext.isEmpty(value)){
                                        url=url+"&"+key+"="+value;
                                    }
                                });
                                window.onbeforeunload=Ext.emptyFn;
                                window.location.href=url;
                                var task63 = new Ext.util.DelayedTask(function(){
                                    window.onbeforeunload = function() { return Rubedo.RubedoAutomatedElementsLoc.windowBeforeUnloadMessage; };
                                });
                                button.up().up().close();
                                task63.delay(400);


                            },
                            anchor: '100%',
                            id: 'ordersExportSubmitBtn1',
                            text: 'Export'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});