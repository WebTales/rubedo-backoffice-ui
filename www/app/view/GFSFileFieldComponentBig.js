/*
 * File: app/view/GFSFileFieldComponentBig.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('Rubedo.view.GFSFileFieldComponentBig', {
    extend: 'Ext.container.Container',
    alias: 'widget.GFSFileFieldComponentBig',

    anchor: '90%',
    itemId: 'imageFieldComponent',
    minHeight: 100,
    width: 300,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    width: 300,
                    text: 'My Label :'
                },
                {
                    xtype: 'image',
                    itemId: 'fieldImagePreview',
                    margin: '10 0 0 0',
                    width: 300,
                    listeners: {
                        render: {
                            fn: me.onFieldImagePreviewRender,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'container',
                    height: 70,
                    itemId: 'buttonHolder',
                    width: 300,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'button',
                            x: 70,
                            y: 10,
                            localiserId: 'gfsUploadBtn',
                            itemId: 'fieldChangeFile',
                            iconCls: 'database_up_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Uploader un fichier'
                        },
                        {
                            xtype: 'button',
                            x: 190,
                            y: 10,
                            localiserId: 'gfsRemoveFileBtn',
                            itemId: 'fieldClearFile',
                            width: 40,
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Supprimer le fichier'
                        },
                        {
                            xtype: 'button',
                            x: 10,
                            y: 10,
                            localiserId: 'gfsDownloadBtn',
                            itemId: 'fieldDownloadFile',
                            width: 40,
                            iconCls: 'database_down_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Télécharger le fichier'
                        },
                        {
                            xtype: 'button',
                            x: 130,
                            y: 10,
                            localiserId: 'gfsPreviewFileBtn',
                            itemId: 'fieldPreviewFile',
                            width: 40,
                            iconCls: 'play_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Affichage en détail'
                        },
                        {
                            xtype: 'button',
                            x: 250,
                            y: 10,
                            localiserId: 'gfsHelpBtn',
                            itemId: 'helpBouton',
                            style: '{float:right;}',
                            handleMouseEvents: false,
                            iconCls: 'info_big',
                            pressedCls: 'x-btn',
                            scale: 'large',
                            text: '',
                            tooltip: 'Fichier principal du média. Obligatoire.'
                        },
                        {
                            xtype: 'button',
                            x: 130,
                            y: 10,
                            hidden: true,
                            itemId: 'fieldEditFile',
                            width: 40,
                            iconCls: 'pencil_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Editer le fichier'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onFieldImagePreviewRender: function(component, eOpts) {
        component.getEl().on("load", function(){component.up().doLayout();});
    }

});