/*
 * File: app/view/userUpdateCreadentialsForm.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.view.userUpdateCreadentialsForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userUpdateCreadentialsForm',

    id: 'userUpdateCreadentialsForm',
    overflowY: 'auto',
    bodyPadding: 20,
    title: 'Accès',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    localiserId: 'acountUserValidFieldSet',
                    title: 'Compte utilisateur et validité',
                    items: [
                        {
                            xtype: 'textfield',
                            localiserId: 'useraccountField',
                            anchor: '100%',
                            fieldLabel: 'Compte utilisateur ',
                            labelWidth: 200,
                            name: 'login',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            localiserId: 'gruopsField',
                            anchor: '100%',
                            fieldLabel: 'Groupes',
                            labelWidth: 200,
                            name: 'groups',
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            multiSelect: true,
                            queryMode: 'local',
                            store: 'GroupsComboStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            localiserId: 'defaultGroupField',
                            anchor: '100%',
                            fieldLabel: 'Groupe par defaut',
                            labelWidth: 200,
                            name: 'defaultGroup',
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'GroupsComboStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'datefield',
                            localiserId: 'startValidityField',
                            anchor: '100%',
                            fieldLabel: 'Début de validité ',
                            labelWidth: 200,
                            name: 'startValidity'
                        },
                        {
                            xtype: 'datefield',
                            localiserId: 'endValidityField',
                            anchor: '100%',
                            fieldLabel: 'Fin de validité ',
                            labelWidth: 200,
                            name: 'endValidity'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    ACL: 'write.ui.users',
                    localiserId: 'passwordChangeFieldSet',
                    height: 50,
                    title: 'Changement de mot de passe',
                    items: [
                        {
                            xtype: 'button',
                            localiserId: 'userPasswordChangeBtn',
                            anchor: '100%',
                            id: 'UserCUChangePwd',
                            text: 'Changer le mot de passe de cet utilisateur'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});