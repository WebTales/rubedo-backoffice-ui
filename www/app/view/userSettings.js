/*
 * File: app/view/userSettings.js
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

Ext.define('Rubedo.view.userSettings', {
    extend: 'Ext.window.Window',
    alias: 'widget.userSettings',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17'
    ],

    height: 468,
    id: 'userSettings',
    width: 600,
    layout: {
        type: 'fit'
    },
    iconCls: 'parametres',
    title: 'Paramètres',
    constrainHeader: true,
    maximizable: false,
    minimizable: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'form',
                            id: 'userInfoDisplay',
                            autoScroll: true,
                            layout: {
                                type: 'hbox'
                            },
                            bodyPadding: 10,
                            title: 'Informations',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    height: 385,
                                    margin: 0,
                                    width: 356,
                                    autoScroll: true,
                                    title: 'Informations',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            disabled: false,
                                            name: 'name',
                                            fieldLabel: 'Nom ',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'login',
                                            fieldLabel: 'Login ',
                                            allowBlank: false,
                                            vtype: 'alphanum'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'email',
                                            fieldLabel: 'E-mail ',
                                            allowBlank: false,
                                            vtype: 'email'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            name: 'title',
                                            fieldLabel: 'Civilité ',
                                            editable: false,
                                            forceSelection: true,
                                            store: [
                                                'Mr',
                                                'Mme',
                                                'Mlle'
                                            ]
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'organisation',
                                            fieldLabel: 'Organisation '
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'service',
                                            fieldLabel: 'Service '
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'post',
                                            fieldLabel: 'Fonction '
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'telephone',
                                            fieldLabel: 'Téléphone '
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'mobile',
                                            fieldLabel: 'Mobile '
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'coordinates',
                                            fieldLabel: 'Coordonnées '
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            name: 'language',
                                            fieldLabel: 'Langue ',
                                            editable: false,
                                            displayField: 'language',
                                            forceSelection: true,
                                            store: 'languageStore',
                                            valueField: 'language'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            name: 'country',
                                            fieldLabel: 'Pays '
                                        },
                                        {
                                            xtype: 'button',
                                            anchor: '100%',
                                            id: 'userInfoEdit',
                                            text: 'Appliquer'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    height: 292,
                                    margin: '0 0 0 10',
                                    width: 200,
                                    title: 'Photo',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 180,
                                            id: 'userProfilePicture',
                                            margin: '0 0 18 18',
                                            width: 140,
                                            src: 'resources/images/userBig.png'
                                        },
                                        {
                                            xtype: 'filefield',
                                            anchor: '60%',
                                            formBind: false,
                                            style: 'float: left;',
                                            submitValue: false,
                                            fieldLabel: '',
                                            buttonText: 'Choisir'
                                        },
                                        {
                                            xtype: 'button',
                                            anchor: '40%',
                                            text: 'Appliquer'
                                        },
                                        {
                                            xtype: 'button',
                                            anchor: '100%',
                                            id: 'userProfilePictureDelete',
                                            text: 'Suprimer'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            title: 'Accès',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Changer de mot de passe',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            inputType: 'password',
                                            name: 'oldPassword',
                                            fieldLabel: 'Mot de passe actuel ',
                                            labelWidth: 160
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            inputType: 'password',
                                            name: 'newPassword',
                                            fieldLabel: 'Nouveau mot de passe ',
                                            labelWidth: 160
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            inputType: 'password',
                                            name: 'newPasswordConfirm',
                                            submitValue: false,
                                            fieldLabel: 'Confirmer le mot passe ',
                                            labelWidth: 160
                                        },
                                        {
                                            xtype: 'button',
                                            anchor: '100%',
                                            id: 'changeMyPasswordBtn',
                                            text: 'Changer le mot de passe'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            tools: [
                {
                    xtype: 'mytool16'
                },
                {
                    xtype: 'mytool17'
                }
            ]
        });

        me.callParent(arguments);
    }

});