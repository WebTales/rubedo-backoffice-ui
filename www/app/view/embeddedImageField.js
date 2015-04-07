/*
 * File: app/view/embeddedImageField.js
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

Ext.define('Rubedo.view.embeddedImageField', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.embeddedImageField',

    fieldLabel: 'Label',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                render: {
                    fn: me.onHiddenfieldRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onHiddenfieldRender: function(component, eOpts) {
        var companion = Ext.widget("embeddedImageFieldComponent");
        component.companion=companion;
        companion.setFieldLabel(component.getFieldLabel());
        var icDir="blue";
        if (typeof(MyPrefData)!="undefined"){
            icDir=MyPrefData.iconsDir;
        }
        companion.on("afterrender",function(){
            companion.getEl().on("click",function(){

                component.getEl().dom.click();
            });
        });
        component.on("change", function(a, newValue){
            var decoded = { };
            if (!Ext.isEmpty(newValue)){
                decoded = newValue;
            }
            Ext.Array.forEach(companion.query("field"), function(field){
                field.suspendEvents(false);
                field.setValue(decoded[field.name]);
                field.resumeEvents();
            });
            if(Ext.isEmpty(decoded.imageCode)){
                companion.getComponent(0).getComponent("fieldEmbedImagePreview").setSrc("resources/icones/"+icDir+"/128x128/image_remove.png");
            } else {
                companion.getComponent(0).getComponent("fieldEmbedImagePreview").setSrc(decoded.imageCode);
            }
        });
        Ext.Array.forEach(companion.query("field"), function(field){
            field.on("change", function(a, newValue){
                if (field.isValid()){
                    component.suspendEvents(false);
                    var decoded = { };
                    if (!Ext.isEmpty(component.getValue())) {
                        decoded = component.getValue();
                    }
                    decoded[field.name]=newValue;
                    component.setValue(decoded);
                    if(field.name=="imageCode"){
                        if(Ext.isEmpty(decoded.imageCode)){
                            companion.getComponent(0).getComponent("fieldEmbedImagePreview").setSrc("resources/icones/"+icDir+"/128x128/image_remove.png");
                        } else {
                            companion.getComponent(0).getComponent("fieldEmbedImagePreview").setSrc(decoded.imageCode);
                        }
                    }
                    component.resumeEvents();
                }});
        });
        component.up().add(companion);
        component.fireEvent("change",component,component.getValue());
    },

    setValue: function(value) {
        var me=this;
        me.value=value;
        me.fireEvent("change",me,value);
    },

    getValue: function() {
        return(this.value);
    },

    getSubmitValue: function() {
        return (this.value);
    }

});