/*
 * File: app/view/CKEField.js
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

Ext.define('Rubedo.view.CKEField', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.CKEField',

    fieldLabel: 'Label',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                afterrender: {
                    fn: me.onTextareafieldAfterRender,
                    scope: me
                },
                beforedestroy: {
                    fn: me.onTextareafieldBeforeDestroy,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onTextareafieldAfterRender: function(abstractcomponent, options) {
        var targetId = abstractcomponent.getInputId();
        abstractcomponent.editor= editor=CKEDITOR.replace( targetId, {toolbar: [
            { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
            '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
            { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
            { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
            { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
            { name: 'colors', items : [ 'TextColor','BGColor' ] },
            { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
        ]});
    },

    onTextareafieldBeforeDestroy: function(abstractcomponent, options) {
        abstractcomponent.editor.destroy();
    },

    getValue: function() {
        return(this.getRawValue());
    },

    setValue: function(value) {
        var me=this;
        if (Ext.isDefined(me.editor)) {
            me.editor.setData(value);
        }
    },

    getRawValue: function() {
        var me=this;
        if (Ext.isDefined(me.editor)) {
            return(me.editor.getData());
        }
    }

});