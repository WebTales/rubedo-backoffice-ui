/*
 * File: app/view/ImageMapField.js
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

Ext.define('Rubedo.view.ImageMapField', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.ImageMapField',

    queryMode: true,
    geoQueryMode: false,
    damQueryMode: false,
    fieldLabel: 'Label',
    labelSeparator: ' ',

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
        var myComponent = Ext.widget("ImageMapFieldComponent");
        myComponent.setFieldLabel(component.fieldLabel+" ");
        component.on("change", function(a,newValue){
            if (Ext.isEmpty(newValue)){
                myComponent.getComponent("addBtn").show();
                myComponent.getComponent("editBtn").hide();
                myComponent.getComponent("removeBtn").hide();
            } else {
                myComponent.getComponent("addBtn").hide();
                myComponent.getComponent("editBtn").show();
                myComponent.getComponent("removeBtn").show();
            }
        });
        myComponent.getComponent("removeBtn").on("click", function(){
            component.setValue(null);
        });
        myComponent.getComponent("addBtn").on("click", function(){
            var selectedImageId=component.up().query("ImagePickerField")[0].getValue();
            if (Ext.isEmpty(selectedImageId)){
                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle,Rubedo.RubedoAutomatedElementsLoc.imageRequiredError);
            } else {
                var myEditor=Ext.widget("ImageMapperWindow");
                myEditor.sImageId=selectedImageId;
                myEditor.sourceFieldId=component.getId();
                myEditor.show();
            }



        });

        myComponent.getComponent("editBtn").on("click", function(){
            var selectedImageId=component.up().query("ImagePickerField")[0].getValue();
            if (Ext.isEmpty(selectedImageId)){
                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle,Rubedo.RubedoAutomatedElementsLoc.imageRequiredError);
            } else {
                var myEditor=Ext.widget("ImageMapperWindow");
                myEditor.sImageId=selectedImageId;
                myEditor.sourceFieldId=component.getId();
                myEditor.show();
            }
        });
        component.up().add(myComponent);
        component.fireEvent("change",component, component.getValue());

    }

});