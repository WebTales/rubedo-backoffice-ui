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
        var myTBConfig=[
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },

        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},

        '/',
        { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
        { name: 'colors', items: [ 'TextColor', '-','BGColor' ] },
        { name: 'tools', items: [ 'Maximize', '-','ShowBlocks' ] },
        { name: 'links', items: [ 'Link', 'Unlink', '-','Anchor' ] },
        '/',
        { name: 'insert', items: [ 'Image',  '-', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe' ] }
        ];
        if (abstractcomponent.CKETBConfig=="Standard"){
            myTBConfig=[
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
            { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
            { name: 'colors', items: [ 'TextColor', '-','BGColor' ] },'/',
            { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] }, 
            { name: 'insert', items: [ 'Image',  '-', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe' ] },
            { name: 'managing', items: [ 'Maximize','-','Undo', 'Redo'  ] }
            ];
        } else if (abstractcomponent.CKETBConfig=="Basic"){
            myTBConfig=[
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline','Strike', '-', 'RemoveFormat' ] },
            { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-',  'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock','-','Image']},
            { name: 'colors', items: [ 'TextColor', '-','BGColor' ] },
            { name: 'styles', items: [ 'Font', 'FontSize' ] }


            ];
        }

        var targetId = abstractcomponent.getInputId();
        abstractcomponent.editor= CKEDITOR.replace(targetId,{toolbar:  myTBConfig, resize_enabled:false, filebrowserImageBrowseUrl:"ext-finder?type=Image", filebrowserImageUploadUrl:"ext-finder?type=Image"});
        abstractcomponent.editor.on('instanceReady', function(){
            abstractcomponent.up().doLayout();
            abstractcomponent.editor.document.getDocumentElement().on('click', function(){
                abstractcomponent.getEl().dom.click();
            });
        });





        /* old config 
        [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo','Source' ] },
        { name: 'links', items: [ 'Link', 'Unlink','-', 'Anchor' ] },
        { name: 'insert', items: [ 'Image','-', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe' ] },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
        '/',
        { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
        { name: 'colors', items: [ 'TextColor','-', 'BGColor' ] },
        { name: 'tools', items: [ 'Maximize','-', 'ShowBlocks' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SpellChecker', 'Scayt' ] }
        ]
        */
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