/*
 * File: app/view/DAMCreateUpdateWindow.js
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

Ext.define('Rubedo.view.DAMCreateUpdateWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.DAMCreateUpdateWindow',

    requires: [
        'Rubedo.view.MyTool17',
        'Ext.ux.TreePicker'
    ],

    floating: true,
    id: 'DAMCreateUpdateWindow',
    minHeight: 220,
    width: 900,
    layout: {
        type: 'fit'
    },
    iconCls: 'mediaTypes',
    title: 'Nouveau média',
    constrainHeader: true,
    maximizable: false,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'mytool17'
                }
            ],
            items: [
                {
                    xtype: 'form',
                    id: 'DAMFieldBox',
                    overflowY: 'auto',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'container',
                            padding: 10,
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '90%',
                                    style: '{float:left}',
                                    name: 'title',
                                    fieldLabel: 'Titre *',
                                    labelSeparator: ' ',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'helpBouton',
                                    style: '{float:right;}',
                                    handleMouseEvents: false,
                                    iconCls: 'help',
                                    pressedCls: 'x-btn',
                                    text: '',
                                    tooltip: 'Titre du média. Obligatoire.'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            padding: 10,
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'filefield',
                                    anchor: '90%',
                                    style: '{float:left}',
                                    name: 'originalFile',
                                    fieldLabel: 'Fichier original *',
                                    labelSeparator: ' ',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'helpBouton',
                                    style: '{float:right;}',
                                    handleMouseEvents: false,
                                    iconCls: 'help',
                                    pressedCls: 'x-btn',
                                    text: '',
                                    tooltip: 'Fichier principal du média. Obligatoire.'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            id: 'DAMTaxoBox',
                            title: 'Taxonomie'
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            id: 'DAMSubmitBtn',
                            scale: 'large',
                            text: 'Créer ce nouveau média'
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            hidden: true,
                            id: 'DAMSubmitUpdateBtn',
                            scale: 'large',
                            text: 'Enregistrer les modifications'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});