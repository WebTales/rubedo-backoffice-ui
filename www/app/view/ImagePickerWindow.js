/*
 * File: app/view/ImagePickerWindow.js
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

Ext.define('Rubedo.view.ImagePickerWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ImagePickerWindow',

    height: 406,
    id: 'ImagePickerWindow',
    width: 516,
    layout: {
        type: 'fit'
    },
    title: 'Choisissez une image',
    constrainHeader: true,
    maximizable: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    title: '',
                    forceFit: true,
                    store: 'ImagePickerStore',
                    viewConfig: {
                        id: 'dragload'
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return("<img src=\"file/get/file-id/"+record.get("id")+"\"  height=\"100\">");
                            },
                            dataIndex: 'filename',
                            text: 'Prévisualisation'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return(value.fullName);
                            },
                            dataIndex: 'createUser',
                            text: 'Auteur'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'ImagePickerChooseBtn',
                                    iconCls: 'ouiSpetit',
                                    text: 'Choisir',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        button.up().up().up().close();
                                    },
                                    iconCls: 'close',
                                    text: 'Annuler'
                                }
                            ],
                            listeners: {
                                afterrender: {
                                    fn: me.onToolbarAfterRender,
                                    scope: me
                                }
                            }
                        }
                    ],
                    listeners: {
                        selectionchange: {
                            fn: me.onGridpanelSelectionChange,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, options) {
        Ext.getCmp(button.up().up().up().targetField).setValue(button.up().up().getSelectionModel().getLastSelected().get("id"));
        button.up().up().up().close();
    },

    onToolbarAfterRender: function(abstractcomponent, options) {

        abstractcomponent.add(Ext.create('Ext.ux.upload.Button', {
            text: 'Uploader des images',
            iconCls:"arrow_up",
            hidden:true,
            //singleFile: true,
            plugins: [Ext.create("Ext.ux.upload.plugin.Window",{title:"Ajoutez des images",height:300,width:440})
            ],

            uploader: 
            {
                url: 'image/put',
                autoStart: false,
                max_file_size: '2mb',			
                drop_element: 'dragload',
                statusQueuedText: 'Pret à télécharger',
                statusUploadingText: 'Téléchargement ({0}%)',
                statusFailedText: '<span style="color: red">Erreur</span>',
                statusDoneText: '<span style="color: green">Fini</span>',

                statusInvalidSizeText: 'Fichier trop volumineux',
                statusInvalidExtensionText: 'Type de fichier invalide'
            },
            listeners: 
            {
                filesadded: function(uploader, files)								
                {
                    //console.log('filesadded');
                    return true;
                },

                beforeupload: function(uploader, file)								
                {
                    //console.log('beforeupload');			
                },

                fileuploaded: function(uploader, file)								
                {
                    //console.log('fileuploaded');
                },

                uploadcomplete: function(uploader, success, failed)								
                {
                    abstractcomponent.up().getStore().load();				
                },
                scope: this
            }


        }));
    },

    onGridpanelSelectionChange: function(tablepanel, selections, options) {
        if (Ext.isEmpty(selections)){
            Ext.getCmp("ImagePickerChooseBtn").disable();
        } else {
            Ext.getCmp("ImagePickerChooseBtn").enable();
        }
    }

});