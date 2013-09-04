/*
 * File: app/view/ImageMapperWindow.js
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

Ext.define('Rubedo.view.ImageMapperWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ImageMapperWindow',

    requires: [
        'Rubedo.view.MyTool17'
    ],

    localiserId: 'imageMapperWindow',
    height: 560,
    id: 'ImageMapperWindow',
    width: 1000,
    layout: {
        type: 'fit'
    },
    title: 'Image map editor',
    constrain: true,
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
        component.add(Ext.widget("container",{
            autoEl: {
                tag: 'iframe',
                src: src
            }
        }));
    }

});