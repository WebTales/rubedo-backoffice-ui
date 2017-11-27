/*
 * File: app/view/RSOEditorWindow.js
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

Ext.define('Rubedo.view.RSOEditorWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.RSOEditorWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    height: 463,
    width: 800,
    layout: 'fit',
    constrainHeader: true,
    title: 'Object Editor',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    autoScroll: true,
                    bodyPadding: 10,
                    title: ''
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Field type',
                            labelWidth: 60,
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            editable: false,
                            displayField: 'type',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'TypesChampsDataStore',
                            valueField: 'cType'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var cType=button.previousSibling().getValue();
                                if(cType){
                                    var rec=button.previousSibling().findRecord("cType",cType);
                                    if(rec){
                                        var recData=rec.getData();
                                        var confF=Ext.clone(recData.config);
                                        confF.fieldLabel=recData.type;
                                        var index=me.getComponent(0).items.items.length+1;
                                        var fieldType=Ext.create(cType).getXType();
                                        confF.name="fieldextgen"+fieldType+index;
                                        confF.anchor="80%";
                                        confF.style='{float:left;}';
                                        me.rendField({
                                            cType:recData.cType,
                                            config:confF
                                        });
                                    }
                                }
                            },
                            iconCls: 'add',
                            text: 'Add field'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var formC=button.up().up().getComponent(0);
                                var newValue={
                                    fields:[],
                                    values:{}
                                };
                                Ext.Array.forEach(formC.items.items,function(fieldHolder){
                                    if(fieldHolder.initialRConf){
                                        newValue.fields.push(Ext.clone(fieldHolder.initialRConf));
                                    }
                                });
                                newValue.values=formC.getForm().getValues();
                                var target=Ext.getCmp(button.up().up().targetedId);
                                if(newValue.fields.length===0){
                                    target.setValue(null);
                                } else {
                                    target.setValue(newValue);
                                }
                                button.up().up().close();

                            },
                            iconCls: 'save',
                            text: 'Save'
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

    onWindowAfterRender: function(component, eOpts) {
        var me=this;
        if (component.initialValue&&component.initialValue.fields&&component.initialValue.fields.length>0){
            Ext.Array.forEach(component.initialValue.fields,function(field){
                me.rendField(field);
            });
            component.getComponent(0).getForm().setValues(component.initialValue.values);
        }
    },

    rendField: function(field) {
        var me=this;
        var enrobage =Ext.widget('ChampTC');
        enrobage.initialRConf=Ext.clone(field);
        enrobage.add(Ext.create(field.cType,field.config));
        var supprimeur = Ext.widget('button', {iconCls: 'close', margin: '0 0 0 5', tooltip: Rubedo.RubedoAutomatedElementsLoc.removeText, itemId: 'bcClearSO'});
        supprimeur.on('click', function(){
            supprimeur.up().up().remove(supprimeur.up());
        });
        enrobage.add(supprimeur);
        var moveUp = Ext.widget('button', {iconCls: 'arrow_up', margin: '0 0 0 5', tooltip: "Move field up", itemId: 'moveFieldUpRSO'});
        moveUp.on('click', function(){
            var pos = moveUp.up().up().items.indexOf(moveUp.up());
            if (pos > 0) {
                moveUp.up().up().move(pos,pos-1);
            }
        });

        enrobage.add(moveUp);
        var moveDown = Ext.widget('button', {iconCls: 'arrow_down', margin: '0 0 0 5', tooltip: "Move field down", itemId: 'moveFieldDownRSO'});
        moveDown.on('click', function(){
            var pos = moveDown.up().up().items.indexOf(moveDown.up());
            moveDown.up().up().move(pos,pos+1);
        });
        enrobage.add(moveDown);
        enrobage.getComponent('helpBouton').hide();
        me.getComponent(0).add(enrobage);
    }

});