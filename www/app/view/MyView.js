/*
 * File: app/view/MyView.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('KECMdesktop.view.MyView', {
    extend: 'Ext.view.View',
    alias: 'widget.myview',

    id: 'MediaMainView',
    padding: 10,
    autoScroll: false,
    emptyText: 'Dossier Vide',
    itemSelector: 'div.thumb-wrap',
    multiSelect: true,
    overItemCls: 'x-item-over',
    store: 'MediaViewStore',
    trackOver: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tpl: [
                '<tpl for=".">',
                '                    <div class="thumb-wrap" id="{text}">',
                '                    <div class="thumb"><img src="{fichier}" title="{text}"></div>',
                '                    <span class="x-editable">{text}</span></div>',
                '                </tpl>',
                '                <div class="x-clear"></div>'
            ]
        });

        me.callParent(arguments);
    }

});