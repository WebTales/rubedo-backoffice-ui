/*
 * File: app/view/contentReplicatorMainEntity.js
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

Ext.define('Rubedo.view.contentReplicatorMainEntity', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contentReplicatorMainEntity',

    requires: [
        'Ext.container.Container',
        'Ext.form.field.TextArea'
    ],

    height: 101,
    autoScroll: true,
    bodyPadding: 10,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    padding: 10,
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'textfield',
                            localiserId: 'contentTitleField',
                            RTip: 'Content title. Mandatory.',
                            anchor: '90%',
                            style: {
                                float: 'left'
                            },
                            fieldLabel: 'Title *',
                            name: 'text',
                            allowBlank: false,
                            stripCharsRe: 'new RegExp("/")'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: 10,
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'textfield',
                            RTip: 'Value to be used as content part in any URL diplaying this content.',
                            anchor: '90%',
                            style: {
                                float: 'left'
                            },
                            fieldLabel: 'URL Segment',
                            labelSeparator: ' ',
                            name: 'urlSegment',
                            stripCharsRe: 'new RegExp("/")'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: 10,
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'textareafield',
                            localiserId: 'summaryField',
                            RTip: 'Résumé facultatif du contenu.',
                            anchor: '90%',
                            style: {
                                float: 'left'
                            },
                            fieldLabel: 'Résumé ',
                            labelSeparator: ' ',
                            name: 'summary'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});