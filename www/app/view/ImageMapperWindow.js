/*
 * File: app/view/ImageMapperWindow.js
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

Ext.define('Rubedo.view.ImageMapperWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ImageMapperWindow',

    requires: [
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool'
    ],

    localiserId: 'imageMapperWindow',
    height: 560,
    id: 'ImageMapperWindow',
    width: 1000,
    constrain: true,
    layout: 'fit',
    title: 'Image map editor',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'mytool17'
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onImageMapperWindowAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onImageMapperWindowAfterRender: function(component, eOpts) {
        var src="resources/summer/index.htm?id="+component.sImageId+"&sourceFieldId="+component.sourceFieldId;
        component.add(Ext.widget("component",{
            autoEl: {
                tag: 'iframe',
                src: src
            }
        }));
    }

});