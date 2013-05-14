/*
 * File: app/view/RFormField.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.view.RFormField', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.RFormField',

    isPortlet: 'true',
    draggable: {
        moveOnDrag: false
    },
    minHeight: 80,
    layout: {
        type: 'anchor'
    },
    bodyCls: 'noBordered',
    bodyPadding: 10,
    frameHeader: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                afterrender: {
                    fn: me.onPanelAfterRender,
                    scope: me
                }
            },
            dockedItems: [
                {
                    xtype: 'container',
                    dock: 'right',
                    hidden: true,
                    hideMode: 'visibility',
                    itemId: 'editBar',
                    width: 20,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            localiserId: 'formFieldConfiguratorBtn',
                            itemId: 'formFieldCofiguratorBtn',
                            iconCls: 'edit',
                            text: '',
                            tooltip: 'Paramètres',
                            tooltipType: 'title'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'formFieldConditionsBtn',
                            itemId: 'formFieldConditionsBtn',
                            margin: '10 0 0 0',
                            iconCls: 'cond_small',
                            text: '',
                            tooltip: 'Condition d\'affichage',
                            tooltipType: 'title'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onPanelAfterRender: function(component, eOpts) {
        this.sync();
    },

    sync: function() {
        var me=this;
        me.removeAll();
        var plusText = "";
        if (!Ext.isEmpty(me.itemConfig.conditionals)){
            var filler="";
            try{
                filler=Ext.getCmp(me.itemConfig.conditionals[0].field).itemConfig.qNb+" "+me.itemConfig.conditionals[0].operator+" ";
                if (Ext.isEmpty(me.itemConfig.conditionals[0].value)) {
                    filler=filler+" "+Rubedo.RubedoAutomatedElementsLoc.notMentionedText;
                } else if ((Ext.getCmp(me.itemConfig.conditionals[0].field).itemConfig.fieldType=="radiogroup")||(Ext.getCmp(me.itemConfig.conditionals[0].field).itemConfig.fieldType=="checkboxgroup")) {
                    if (Ext.isObject(me.itemConfig.conditionals[0].value)){
                        if (Ext.isArray(me.itemConfig.conditionals[0].value.value)){
                            var theGoodOption = "";
                            Ext.Array.forEach(me.itemConfig.conditionals[0].value.value, function(value, index){
                                var interMedOption=" "+Rubedo.RubedoAutomatedElementsLoc.notMentionedText;

                                Ext.Array.forEach((Ext.getCmp(me.itemConfig.conditionals[0].field).itemConfig.fieldConfig.items), function(possible){
                                    if (possible.inputValue==value){
                                        interMedOption=possible.boxLabel;
                                    }
                                });
                                if (index > 0){
                                    interMedOption=Rubedo.RubedoAutomatedElementsLoc.orText+" "+interMedOption;
                                }
                                theGoodOption=theGoodOption+interMedOption;
                            });
                            filler=filler+theGoodOption;

                        } else {
                            var theGoodOption = " "+Rubedo.RubedoAutomatedElementsLoc.notMentionedText;
                            Ext.Array.forEach((Ext.getCmp(me.itemConfig.conditionals[0].field).itemConfig.fieldConfig.items), function(possible){
                                if (possible.inputValue==me.itemConfig.conditionals[0].value.value){
                                    theGoodOption=possible.boxLabel;
                                }
                            });
                            filler = filler+theGoodOption;

                        }}
                    } else if (Ext.getCmp(me.itemConfig.conditionals[0].field).itemConfig.fieldType=="datefield"){
                        var failDate=Ext.Date.parse(me.itemConfig.conditionals[0].value,"U");

                        filler=filler+Ext.Date.format(failDate, "d/m/y");
                    }else {
                        filler=filler+me.itemConfig.conditionals[0].value;
                    }
                }catch(err){console.log("error geting condition to display");}
                    plusText="<i style=\"color:"+MyPrefData.themeColor+";\"> ("+Rubedo.RubedoAutomatedElementsLoc.showOnlyIfText+" "+filler+" )</i>";
                }
                if ((me.itemConfig.fType=="openQuestion")||(me.itemConfig.fType=="multiChoiceQuestion")){
                    var previewField = Ext.widget(me.itemConfig.fieldType, me.itemConfig.fieldConfig);
                    previewField.anchor = "100%";
                    previewField.labelAlign="top";
                    previewField.labelSeparator=" ";
                    if (me.itemConfig.fieldConfig.mandatory){
                        previewField.allowBlank=false;
                        plusText= " * "+plusText;
                    }
                    previewField.fieldLabel="<b>"+me.itemConfig.qNb+" </b> "+me.itemConfig.label+plusText;
                    if (!Ext.isEmpty(me.itemConfig.tooltip)){
                        previewField.RTip=me.itemConfig.tooltip;
                    }

                    me.add(previewField);
                } else if (me.itemConfig.fType=="richText") {
                    me.update(plusText+me.itemConfig.html);
                }
                me.doLayout();    
    }

});