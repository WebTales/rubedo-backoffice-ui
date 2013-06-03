/*
 * File: app/view/localiserField.js
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

Ext.define('Rubedo.view.localiserField', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.localiserField',

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
        var companion = Ext.widget("localiserFieldComponent");
        companion.setFieldLabel(component.getFieldLabel());
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
                    decoded.location={
                        "type":"Point",
                        "coordinates":[decoded.lon,decoded.lat]
                    };
                    component.setValue(decoded);
                    component.resumeEvents();
                    if ((field.name=="address")&&(!Ext.isEmpty(newValue))){
                        if (Ext.isEmpty(field.geocoder)){
                            field.geocoder=new google.maps.Geocoder();
                        }
                        if (Ext.isEmpty(field.geoTask)){
                            field.geoTask=new Ext.util.DelayedTask(function(){
                                field.geocoder.geocode( { 'address': field.getValue()}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    decoded.lat=results[0].geometry.location.lat();
                                    decoded.lon=results[0].geometry.location.lng();
                                    decoded.location={
                                        "type":"Point",
                                        "coordinates":[decoded.lon,decoded.lat]
                                    };
                                    component.suspendEvents(false);
                                    component.setValue(decoded);
                                    component.resumeEvents();
                                    Ext.Array.forEach(companion.query("field"), function(field){
                                        field.suspendEvents(false);
                                        field.setValue(decoded[field.name]);
                                        field.resumeEvents();
                                    });
                                }
                            });
                        });
                    }
                    field.geoTask.delay(500);

                }

            }});
        });
        companion.on("afterrender",function(){
            companion.getEl().on("click",function(){

                component.getEl().dom.click();
            });
        });
        component.up().add(companion);
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