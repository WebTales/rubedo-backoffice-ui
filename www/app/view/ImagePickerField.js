/*
 * File: app/view/ImagePickerField.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('Rubedo.view.ImagePickerField', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.ImagePickerField',

    height: 0,
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

    onHiddenfieldRender: function(abstractcomponent, options) {
        var myComponent = Ext.widget("ImageFieldComponent");
        myComponent.getComponent(0).setText(abstractcomponent.fieldLabel+" ");
        myComponent.on("afterrender",function(){
            if (Ext.isEmpty(abstractcomponent.getValue())){
                myComponent.getComponent("fieldImagePreview").setSrc("resources/icones/"+MyPrefData.iconsDir+"/128x128/image_remove.png");
            } else {
                myComponent.getComponent("fieldImagePreview").setSrc("file/get/file-id/"+abstractcomponent.getValue());
            }
            myComponent.getEl().on("click",function(){

                abstractcomponent.getEl().dom.click();
            });
        });
        abstractcomponent.up().add(myComponent);
        myComponent.getComponent("buttonHolder").getComponent("fieldChangeImage").on("click",function(){
            Ext.widget("ImagePickerWindow",{targetField:abstractcomponent.id}).show();
        });
        myComponent.getComponent("buttonHolder").getComponent("fieldClearImage").on("click",function(){
            abstractcomponent.setValue();
        });
        abstractcomponent.on("change",function(theField,newValue){
            if ((newValue==="")||(Ext.isEmpty(newValue))){
                myComponent.getComponent("fieldImagePreview").setSrc("resources/icones/"+MyPrefData.iconsDir+"/128x128/image_remove.png");
            } else {
                myComponent.getComponent("fieldImagePreview").setSrc("file/get/file-id/"+newValue);
            }
        });
    }

});