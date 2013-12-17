/*
 * File: app/view/MyView.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.view.MyView', {
    extend: 'Ext.view.View',
    alias: 'widget.myview',

    id: 'images-view',
    autoScroll: true,
    itemSelector: 'div',
    store: 'DAMFacetteStore',

    initComponent: function() {
        var me = this;

        me.processMyView(me);
        me.callParent(arguments);
    },

    processMyView: function(config) {
        config.tpl= [
        '<tpl for=".">',
        '<div class="thumb-wrap" id="{id}alternate">',
        '<div class="thumb"><img src="{link}" title="{text}"></div>',
        '<span>{text}</span>',
        '</div>',
        '</tpl>',
        '<div class="x-clear"></div>'
        ];
        config.multiSelect= true;
        config.trackOver= true;
        config.overItemCls= 'x-item-over';
        config.itemSelector= 'div.thumb-wrap';
        config.emptyText= '';
        config.plugins= [
        Ext.create('Ext.ux.DataView.DragSelector', {}),
        Ext.create('Ext.grid.plugin.DragDrop', {
            ddGroup: 'DirectoriesDD',
            enableDrop:false
        })
        ];
        config.prepareData= function(data) {
            data.link="dam/get-thumbnail?id="+data.id+"&version="+data.version;
            data.text=Ext.String.ellipsis(data.text,14);
            return data;
        };
        return config;
    }

});