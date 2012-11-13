/*
 * File: app/view/nouveauTaxoFenetre.js
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

Ext.define('Rubedo.view.nouveauTaxoFenetre', {
    extend: 'Ext.window.Window',
    alias: 'widget.nouveauTaxoFenetre',

    height: 106,
    id: 'nouveauTaxoFenetre',
    width: 300,
    resizable: false,
    layout: {
        type: 'fit'
    },
    iconCls: 'page_taxonomy',
    title: 'Nouveau vocabulaire',
    constrainHeader: true,
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
                            anchor: '100%',
                            id: 'champCreerTaxo',
                            fieldLabel: 'Nom ',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
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