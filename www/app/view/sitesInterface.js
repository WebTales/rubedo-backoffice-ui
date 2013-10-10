/*
 * File: app/view/sitesInterface.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.view.sitesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.sitesInterface',

    requires: [
        'Rubedo.view.WorkspaceCombo',
        'Rubedo.view.DLSToolbar',
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17'
    ],

    localiserId: 'sitesWindow',
    height: 449,
    id: 'sitesInterface',
    width: 753,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    constrainHeader: true,
    iconCls: 'referencement_icon',
    title: 'Sites',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 30,
                    itemId: 'breadcrumb',
                    items: [
                        {
                            xtype: 'button',
                            localiserId: 'sitesLaunchBtn',
                            itemId: 'origine',
                            iconCls: 'referencement_icon',
                            text: 'Sites'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    height: 64,
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.sites',
                            localiserId: 'addBtn',
                            id: 'siteAddBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.sites',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'siteRemoveBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.sites',
                            localiserId: 'saveBtn',
                            disabled: true,
                            id: 'updateSiteBtn',
                            iconAlign: 'top',
                            iconCls: 'floppy_disc_big',
                            scale: 'large',
                            text: 'Enregistrer'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            RApplication: 'sites',
                            itemId: 'RHelpBtn',
                            iconCls: 'info_big',
                            scale: 'large',
                            text: ''
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    height: 50,
                    itemId: 'barreMeta',
                    items: [
                        {
                            xtype: 'image',
                            height: 45,
                            width: 48,
                            listeners: {
                                render: {
                                    fn: me.onImageRender,
                                    scope: me
                                }
                            }
                        },
                        me.processBoiteBarreMeta({
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            tpl: [
                                '<b>{text}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {createUser}  <b>Version : </b>{version}'
                            ]
                        })
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: false,
                    id: 'mainSitesGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'SitesJson',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (record.get("readOnly")) {
                                    return("<i style=\"color:#777;\">"+value+"</i>");
                                } else {
                                    return(value);
                                }
                            },
                            localiserId: 'domainNameColumn',
                            dataIndex: 'text',
                            text: 'Nom de domaine'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    disabled: true,
                    layout: {
                        type: 'card'
                    },
                    title: '',
                    items: [
                        {
                            xtype: 'form',
                            id: 'mainSiteProps',
                            itemId: 'mainLocItem',
                            autoScroll: true,
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'siteFieldSet',
                                    collapsible: true,
                                    title: 'Site',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'domainNameField',
                                            anchor: '100%',
                                            fieldLabel: 'Nom de domaine *',
                                            labelWidth: 110,
                                            name: 'text',
                                            allowBlank: false,
                                            regex: new RegExp(/^([a-z]|[0-9]|[-]|[.]){0,}$/)
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            localiserId: 'staticDomainField',
                                            fieldLabel: 'Static domain',
                                            labelWidth: 110,
                                            name: 'staticDomain',
                                            regex: new RegExp(/^([a-z]|[0-9]|[-]|[.]){0,}$/)
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'aliasField',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Alias ',
                                            labelWidth: 110,
                                            name: 'alias'
                                        },
                                        {
                                            xtype: 'combobox',
                                            managesStore: true,
                                            localiserId: 'themeField',
                                            anchor: '100%',
                                            fieldLabel: 'Theme ',
                                            labelWidth: 110,
                                            name: 'theme',
                                            displayField: 'label',
                                            store: 'SiteThemesStore',
                                            valueField: 'text'
                                        },
                                        {
                                            xtype: 'combobox',
                                            localiserId: 'protocolField',
                                            anchor: '100%',
                                            fieldLabel: 'Protocole *',
                                            labelWidth: 110,
                                            name: 'protocol',
                                            allowBlank: false,
                                            editable: false,
                                            forceSelection: true,
                                            multiSelect: true,
                                            store: [
                                                'HTTP',
                                                'HTTPS'
                                            ]
                                        },
                                        {
                                            xtype: 'combobox',
                                            validator: function(value) {
                                                var myValue=Ext.getCmp("siteDefaultLanguageField").getValue();
                                                var languagesArray=Ext.getCmp("siteUsedLanguagesField").getValue();
                                                if ((!Ext.isEmpty(myValue))&&(!Ext.isEmpty(languagesArray))&&(!Ext.Array.contains(languagesArray,myValue))){
                                                    return(Rubedo.RubedoAutomatedElementsLoc.siteLanguageChoiceError);
                                                }
                                                return(true);
                                            },
                                            localiserId: 'defaultLanguageField',
                                            anchor: '100%',
                                            id: 'siteDefaultLanguageField',
                                            fieldLabel: 'Default language *',
                                            labelWidth: 110,
                                            name: 'defaultLanguage',
                                            allowBlank: false,
                                            displayField: 'label',
                                            forceSelection: true,
                                            store: 'AllLanguagesStore',
                                            typeAhead: true,
                                            valueField: 'locale'
                                        },
                                        me.processLocStrategy({
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Localisation strategy',
                                            labelWidth: 110,
                                            name: 'locStrategy',
                                            editable: false,
                                            forceSelection: true,
                                            queryMode: 'local'
                                        }),
                                        me.processUseBrowserLanguage({
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: 'Use browser language',
                                            labelWidth: 110,
                                            name: 'useBrowserLanguage',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        }),
                                        {
                                            xtype: 'textareafield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Filtre ',
                                            name: 'filter'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'siteDefaultTitleField',
                                            anchor: '100%',
                                            fieldLabel: 'Titre par défaut',
                                            labelWidth: 110,
                                            name: 'title'
                                        },
                                        {
                                            xtype: 'textareafield',
                                            localiserId: 'defaultDescriptionField',
                                            anchor: '100%',
                                            fieldLabel: 'Description par défaut',
                                            labelWidth: 110,
                                            name: 'description',
                                            maxLength: 250
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'defaultAuthorField',
                                            anchor: '100%',
                                            fieldLabel: 'Auteur par défaut',
                                            labelWidth: 110,
                                            name: 'author',
                                            value: 'Powered by Rubedo'
                                        },
                                        {
                                            xtype: 'WorkspaceCombo',
                                            labelWidth: 110,
                                            store: 'ContributeWorkspacesCombo',
                                            anchor: '100%'
                                        }
                                    ],
                                    listeners: {
                                        render: {
                                            fn: me.onFieldsetRender,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'messageryFieldSet',
                                    hidden: true,
                                    collapsed: true,
                                    collapsible: true,
                                    title: 'Messagerie',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            localiserId: 'activeMessageryField',
                                            anchor: '100%',
                                            fieldLabel: 'Activé ',
                                            name: 'activeMessagery',
                                            boxLabel: ''
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'smtpServerField',
                                            anchor: '100%',
                                            fieldLabel: 'Serveur SMTP ',
                                            name: 'SMTPServer'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            localiserId: 'smtpPortField',
                                            anchor: '100%',
                                            fieldLabel: 'Port SMTP ',
                                            name: 'SMTPPort',
                                            allowDecimals: false,
                                            minValue: 0
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'smtpLoginField',
                                            anchor: '100%',
                                            fieldLabel: 'Login SMTP ',
                                            name: 'SMTPLogin'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'smtpPassField',
                                            anchor: '100%',
                                            fieldLabel: 'Mot de passe SMTP ',
                                            name: 'SMTPPassword',
                                            inputType: 'password'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'defaultEmailField',
                                            anchor: '100%',
                                            fieldLabel: 'E-mail par défaut ',
                                            name: 'defaultEmail',
                                            vtype: 'email'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'accessibilityFieldSet ',
                                    hidden: true,
                                    collapsed: true,
                                    collapsible: true,
                                    title: 'Accessibilité',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            localiserId: 'accessibilityLeveLfield',
                                            anchor: '100%',
                                            fieldLabel: 'Niveau d\'accessibilité ',
                                            name: 'accessibilityLevel',
                                            store: [
                                                'RGAA A',
                                                'RGAA AA',
                                                'RGAA AAA'
                                            ]
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'opquastLoginField',
                                            anchor: '100%',
                                            fieldLabel: 'Login Opquast ',
                                            name: 'opquastLogin'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'opquastPassField',
                                            anchor: '100%',
                                            fieldLabel: 'Mot de passe Optquast ',
                                            name: 'opquastPassword',
                                            inputType: 'password'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'apiKeysFieldSet',
                                    collapsible: true,
                                    title: 'Clés d\'API externes',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'googleMapKeyField',
                                            anchor: '100%',
                                            fieldLabel: 'Google Maps',
                                            labelWidth: 110,
                                            name: 'googleMapsKey'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'googleAnalyticsKeyField',
                                            anchor: '100%',
                                            fieldLabel: 'Google Analytics',
                                            labelWidth: 110,
                                            name: 'googleAnalyticsKey'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'disqusKeyField',
                                            anchor: '100%',
                                            fieldLabel: 'Disqus',
                                            labelWidth: 110,
                                            name: 'disqusKey'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'recaptchaFieldset',
                                    collapsed: true,
                                    collapsible: true,
                                    title: 'Recaptcha',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            localiserId: 'recaptchaPublicKeyField',
                                            fieldLabel: 'Public key',
                                            labelWidth: 110,
                                            name: 'recaptcha_public_key'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            localiserId: 'recaptchaPrivateKeyField',
                                            fieldLabel: 'Private key',
                                            labelWidth: 110,
                                            name: 'recaptcha_private_key'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'DLSToolbar',
                            replicatorEntity: 'sitesRepLoc',
                            id: 'sitesDLSToolbar',
                            dock: 'top'
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
    },

    processLocStrategy: function(config) {
        config.store=[["onlyOne",Rubedo.RubedoAutomatedElementsLoc.onlyOneText],["fallback", Rubedo.RubedoAutomatedElementsLoc.withFallbackText]];
        config.fieldLabel=Rubedo.RubedoAutomatedElementsLoc.locStrategyText;
        return config;
    },

    processUseBrowserLanguage: function(config) {
        config.fieldLabel=Rubedo.RubedoAutomatedElementsLoc.useBrowserLanguageText;
        return config;
    },

    processBoiteBarreMeta: function(config) {
        config.tpl=[
        '<b>{text}</b> </br> <b>'+Rubedo.RubedoAutomatedElementsLoc.creationText+' : </b> {creation} <b>'+Rubedo.RubedoAutomatedElementsLoc.lastUpdateText+' : </b> {derniereModification} <b>'+Rubedo.RubedoAutomatedElementsLoc.authorText+' : </b> {createUser}  <b>'+Rubedo.RubedoAutomatedElementsLoc.versionText+' : </b>{version}'
        ];
        return config;
    },

    onFieldsetRender: function(component, eOpts) {
        var homePageSelector = Ext.create("Ext.ux.TreePicker", {
            store:Ext.getStore("PagePickerStore"),
            displayField:"text",
            labelWidth:110,
            fieldLabel:Rubedo.RubedoAutomatedElementsLoc.homePageText,
            id:"sitesHomePicker",
            anchor: "100%",
            plugins:[Ext.create("Ext.ux.form.field.ClearButton")],
            name:"homePage"
        });
        var singlePageSelector = Ext.create("Ext.ux.TreePicker", {
            store:Ext.getStore("PagePickerStore"),
            displayField:"text",
            labelWidth:110,
            fieldLabel:Rubedo.RubedoAutomatedElementsLoc.defaultSinglePageText,
            id:"sitesSinglePicker",
            anchor: "100%",
            allowBlank:false,
            name:"defaultSingle"
        });
        var tagPicker = Ext.create("Ext.ux.form.field.BoxSelect", {
            store:[],
            anchor:"100%",
            name:"keywords",
            labelWidth:110,
            fieldLabel:Rubedo.RubedoAutomatedElementsLoc.defaultKeywordsText,
            multiSelect:true,
            forceSelection:false,
            createNewOnEnter:true,
            hideTrigger:true,
            triggerOnClick:false,
            createNewOnBlur:true,
            pinList:false
        });
        var languagesPicker = Ext.create("Ext.ux.form.field.BoxSelect", {
            anchor:"100%",
            name:"languages",
            id:"siteUsedLanguagesField",
            allowBlank:false,
            labelWidth:110,
            fieldLabel:Rubedo.RubedoAutomatedElementsLoc.languagesText+" *",
            multiSelect:true,
            forceSelection:true,
            store: Ext.getStore("AllLanguagesStore2"),
            displayField:"label",
            valueField:"locale",
            queryMode:"remote"
        });
        component.add(tagPicker);
        component.add(homePageSelector);
        component.insert(5,languagesPicker);
        component.add(singlePageSelector);
    },

    onImageRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/globe_computer.png');
    }

});