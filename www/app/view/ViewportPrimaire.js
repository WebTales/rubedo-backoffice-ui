/*
 * File: app/view/ViewportPrimaire.js
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

Ext.define('KECMdesktop.view.ViewportPrimaire', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.ViewportPrimaire',
    requires: [
        'KECMdesktop.view.EnteteV'
    ],

    id: 'ViewportPrimaire',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    draggable: false,
                    id: 'desktopCont',
                    layout: {
                        type: 'absolute'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/images/background.jpg',
                            anchor: '105%',
                            x: 0,
                            y: 0
                        },
                        {
                            xtype: 'container',
                            id: 'boiteAIconesBureau',
                            minHeight: 600,
                            layout: {
                                type: 'absolute'
                            },
                            x: 0,
                            y: 0
                        }
                    ]
                },
                {
                    xtype: 'entete'
                }
            ]
        });

        me.callParent(arguments);
    }

});