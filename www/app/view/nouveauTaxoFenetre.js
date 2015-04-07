/*
 * File: app/view/nouveauTaxoFenetre.js
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

Ext.define('Rubedo.view.nouveauTaxoFenetre', {
    extend: 'Ext.window.Window',
    alias: 'widget.nouveauTaxoFenetre',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    localiserId: 'newVocabWindow',
    height: 106,
    id: 'nouveauTaxoFenetre',
    width: 300,
    resizable: false,
    layout: 'fit',
    constrainHeader: true,
    iconCls: 'page_taxonomy',
    title: 'Nouveau vocabulaire',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            localiserId: 'nameField',
                            anchor: '100%',
                            id: 'champCreerTaxo',
                            fieldLabel: 'Nom ',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            localiserId: 'createNewVocabBtn',
                            anchor: '100%',
                            id: 'boutonCreerTaxo',
                            text: 'Créer un nouveau vocabulaire'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});