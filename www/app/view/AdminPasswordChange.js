/*
 * File: app/view/AdminPasswordChange.js
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

Ext.define('Rubedo.view.AdminPasswordChange', {
    extend: 'Ext.window.Window',
    alias: 'widget.AdminPasswordChange',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.button.Button'
    ],

    localiserId: 'changePasswordWindow',
    height: 130,
    id: 'AdminPasswordChange',
    width: 400,
    resizable: false,
    layout: 'fit',
    title: 'Changement  de mot de passe',
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
                            localiserId: 'newPasswordField',
                            anchor: '100%',
                            fieldLabel: 'Nouveau mot de passe ',
                            labelWidth: 150,
                            name: 'password',
                            inputType: 'password'
                        },
                        {
                            xtype: 'textfield',
                            localiserId: 'confirmField',
                            anchor: '100%',
                            fieldLabel: 'Confirmer ',
                            labelWidth: 150,
                            name: 'passwordConfirm',
                            submitValue: false,
                            inputType: 'password'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'version'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'applyBtn',
                            anchor: '100%',
                            id: 'AdminPasswordChangeBtn',
                            text: 'Appliquer'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});