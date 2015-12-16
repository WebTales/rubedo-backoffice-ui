/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '.',
        'Ext.ux': 'resources/ux'
    }
});


Ext.application({

    requires: [
        'Ext.Loader'
    ],
    models: [
        'sitesDataModel',
        'panierDataModel',
        'versionsDataModel',
        'blocDataModel',
        'typesChampsDataModel',
        'taxonomieDataModel',
        'iconDataModel',
        'wallpaperDataModel',
        'themeDataModel',
        'personalPrefsDataModel',
        'groupDataModel',
        'userDataModel',
        'reusableElementModel',
        'delegationDataModel',
        'nestedContentModel',
        'pageDataModel',
        'imageDataModel',
        'mediaTypeModel',
        'MTFieldModel',
        'queryDataModel',
        'DAMModel',
        'contentsSearchModel',
        'DAMSearchModel',
        'workspaceModel',
        'inportFieldModel',
        'DAMFolderViewModel',
        'directoryModel',
        'experimentalModel',
        'languageModel',
        'taxonomyTermModel',
        'CTLayout',
        'CTFieldForLayout',
        'applicationLog',
        'userType',
        'emailTemplateModel',
        'shipper',
        'country',
        'tax',
        'paymentMeans',
        'pmConfig',
        'order',
        'importPreset',
        'DAMFolderViewModel1',
        'applicationLogSimple',
        'rssFeed'
    ],
    stores: [
        'SitesJson',
        'BlocsDataStore',
        'TypesChampsDataStore',
        'TaxonomieDataJson',
        'champsTCARStore',
        'TypesContenusDepDataJson',
        'TypesContenusNDepDataJson',
        'IconesDataJson',
        'WallpapersDataJson',
        'ThemesDataJson',
        'PersonalPrefsStore',
        'GroupsDataStore',
        'UsersDataStore',
        'UsersGroupStore',
        'UsersAdminDataStore',
        'ReusableElementsDataStore',
        'countryStore',
        'BOLanguageStore',
        'DelegationsDataStore',
        'UsersComboStore',
        'CurrentUserDataStore',
        'DepContentsCombo',
        'NestedContentsStore',
        'PagesDataStore',
        'MasksComboStore',
        'contentTypesCombo',
        'taxoTermsCombo',
        'ContentSelectorStore',
        'SitesComboPages',
        'SitesComboMasks',
        'MasquesDataJson',
        'TaxonomyForCT',
        'TaxonomyForC',
        'VersionsDataJson',
        'ContenusDataJson',
        'DepTypesForContents',
        'TCNDepCombo',
        'CurrentContent',
        'ContentTypesForContent',
        'DepContentsCombo2',
        'TaxonomyForC2',
        'TCDepForQA',
        'ImagePickerStore',
        'TaxonomyForQA',
        'SitesComboPreview',
        'PagesPreviewStore',
        'VersioningStore',
        'MediaTypes',
        'TCNDepComboCS',
        'TaxonomyForMT',
        'MTFieldsStore',
        'SiteThemesStore',
        'PagePickerStore',
        'QueriesStore',
        'MainImageStore',
        'MediaTypesForDAM',
        'TaxonomyForDAM',
        'DAMStore',
        'DAMPickerStore',
        'MediaTypesForCT',
        'MediaTypesFORDAMPicker',
        'MainQueriesStore',
        'ESFacetteStore',
        'RoleStore',
        'MTForDAMEdit',
        'DAMEditStore',
        'TaxonomyForDam2',
        'ContentMQueryStore',
        'ContentSelectorStore2',
        'DAMFacetteStore',
        'WorkspacesStore',
        'WorkspacesComboStore',
        'ContributeWorkspacesCombo',
        'PageDisplayedContentsStore',
        'GroupsComboStore',
        'ContentTypesForContent2',
        'WorkspacesComboWithAll',
        'ContributeWorkspacesComboWithAll',
        'PanierDataJson',
        'MultiChoiceOptionsStore',
        'MailingListsCombo',
        'NotInportFieldsStore',
        'InportAsFieldStore',
        'InportAsTaxoStore',
        'SystemCTStore',
        'AddMultiFieldStore',
        'ImportableFieldTypesStore',
        'DAMFolderViewStore',
        'DirectoriesStore',
        'FacetsToDisplayStore',
        'FacetOverriderStore',
        'experimentalStore',
        'AllLanguagesStore',
        'AllLanguagesStore2',
        'MainLanguagesStore',
        'AllLanguagesStore3',
        'TranslationAdderStore',
        'flagsStore',
        'AllLanguagesStore4',
        'CTLayouts',
        'CTFieldsForLayouts',
        'InportAsFieldTranslationStore',
        'InportAsTaxoTranslationStore',
        'LocalizedFieldSelectorStore',
        'ImportTranslationLanguageStore',
        'ApplicationLogs',
        'SitesComboCTLayouts',
        'UserTypes',
        'TaxonomyForUT',
        'GroupsComboStore2',
        'UTFieldTypes',
        'UserTypesForUsers',
        'TaxonomyForU',
        'TaxonomyForUT2',
        'UnitaryUsersDataStore',
        'UserTypesForUsers2',
        'UserTypesCombo',
        'QuerySim',
        'EmailTemplates',
        'EmailModels',
        'MLUsers',
        'MLUnsubscribedUsers',
        'UTFieldsForLayouts',
        'UTLayouts',
        'SitesComboUTLayouts',
        'Shippers',
        'CountriesForShippers',
        'ShippersRatesStore',
        'ShippersForCT',
        'Taxes',
        'CountriesForTaxes',
        'UserTypesForTaxes',
        'ProductTypesForTaxes',
        'ProductTypesForStock',
        'InitialStockStore',
        'PaymentMeans',
        'PMConfigs',
        'Orders',
        'TCImportCombo',
        'ImportKeyFieldStore',
        'TaxoForImportKeys',
        'SpecialOffers',
        'BoughtProducts',
        'ImportPresets',
        'SiteExternalScripts',
        'SiteExternalStyles',
        'SiteInternalStyles',
        'SiteInternalScripts',
        'ThemeDirectoriesStore',
        'DAMFolderViewStore1',
        'TaxonomyForTXField',
        'ContentsEditorial',
        'CTEditorial',
        'QueriesStore1',
        'ApplicationLogsAuth',
        'ApplicationLogsCont',
        'RSSFeeds'
    ],
    views: [
        'MyGridPanel3',
        'ViewportPrimaire',
        'EnteteV',
        'iconeBureau',
        'contributionContenus',
        'adminFTDC',
        'adminFMDP',
        'contributionPages',
        'PDFPreviewWindow',
        'settingsContextMenu',
        'DesktopCustomizeWindow',
        'wallpaperPicker',
        'themePicker',
        'accessibilityPicker',
        'adminFUtilisateurs',
        'GroupAddWindow',
        'UserAddWindow',
        'UserAdminWindow',
        'MyGridPanel16',
        'testingGround',
        'CKEField',
        'ReusableElementPicker',
        'ExportElementWindow',
        'iconsContextMenu',
        'AdminPasswordChange',
        'userSettings',
        'menuContenusContext',
        'termContextMenu',
        'NestedContentsGrid',
        'NestedContentAddWindow',
        'esResponseWindow',
        'searchResultsWindow',
        'sitesInterface',
        'CTCField',
        'TTField',
        'FCCField',
        'assistantRequetage',
        'ImagePickerWindow',
        'ImageFieldComponent',
        'ImagePickerField',
        'monitoringTools',
        'SystemStatusPanel',
        'MyTool16',
        'MyTool17',
        'MainToolsContextMenu',
        'mediaTypesInterface',
        'newMTWindow',
        'contentPickerWindow',
        'contentPickerGrid',
        'MTFieldAddWindow',
        'assisstantRE4',
        'assisstantRE6',
        'assisstantRE5',
        'queryBuilderField',
        'DAMInterface',
        'MyGridPanel31',
        'DAMCreateUpdateWindow',
        'DAMMainView',
        'CTMTField',
        'GFSFileFieldComponent',
        'GFSFileField',
        'GFSFieldUploadWindow',
        'siteBuilderWizzard',
        'MyToolbar56',
        'queryManagerInterface',
        'queryTypeChooseWindow',
        'manualQueryInterface',
        'DAMChooseMTWindow',
        'selectorTreeForField',
        'WorkspacesInterface',
        'newWorkspaceWindow',
        'WorkspaceCombo',
        'taxoTermInsertWindow',
        'maskSaveChoiceBox',
        'MQA',
        'DCEFieldComponent',
        'MQField',
        'DCEField',
        'MQFieldComponent',
        'localiserFieldComponent',
        'localiserField',
        'queryFieldComponent',
        'sessionWarningWindow',
        'sessionExpiredWindow',
        'menuPrincipalInterface',
        'GFSFileFieldComponentBig',
        'ImageFieldComponentSmall',
        'newUserWindow',
        'RHelpBtn',
        'PersoPicUploadWindow',
        'champsEditionTC',
        'MTeditFields',
        'RichTextConfigurator',
        'externalMediaField',
        'externalMediaFieldComponent',
        'ESQfield',
        'ESQfieldComponent',
        'DelConfirmZ',
        'ajoutBlocFenetre',
        'adminFTaxonomie',
        'contributionPrevisualisation',
        'newPageWindow',
        'MailingListPickerField',
        'InportInterface',
        'AjouterContenu',
        'directRTEField',
        'directRTEFieldComponent',
        'MailingListsInterface',
        'newMLWindow',
        'specialTCFieldItemsConfigurator',
        'MultiChoiceConfigurator1',
        'SystemInfoDisplayWindow',
        'ESSearchField',
        'ImagePreviewWindow',
        'MassDamUploadWindow',
        'damTypeFacetImposeWindow',
        'pixlrEditorWindow',
        'newDirectoryWindow',
        'directoryConfiguratorWindow',
        'FTDComboField',
        'FacetOverriderField',
        'FacetOverriderFieldComponent',
        'FacetOverriderWindow',
        'experimentalGrid',
        'experiencePlanEditorWindow',
        'experimentalGridField',
        'experimentalGridFieldComponent',
        'languagesInterface',
        'workingLanguageChangeWindow',
        'pagesLocProps',
        'DLSToolbar',
        'TranslationAdderWindow',
        'workspacesReplicator',
        'taxonomyReplicator',
        'sitesRepLoc',
        'contentReplicatorMainEntity',
        'genericLocTextField',
        'CTLReplicatorEntity',
        'DAMReplicatorEntity',
        'ImageMapField',
        'ImageMapFieldComponent',
        'ImageMapperWindow',
        'NewCTLayoutWindow',
        'AssignFieldToColWindow',
        'simpleModeMainBar',
        'ApplicationLogsInterface',
        'CTLCopyWindow',
        'MyView',
        'UserTypesInterface',
        'newUTWindow',
        'UTFieldAddWindow',
        'UserCreateUpdateWindow',
        'UsersInterface',
        'userUpdateCreadentialsForm',
        'UTCField',
        'QuerySimWindow',
        'emailTypesInterface',
        'newEmailTemplateWindow',
        'subscribeUsersWindow',
        'sendEmailWindow',
        'mlImportWindow',
        'aceEditorWindow',
        'ACEFieldComponent',
        'ACEField',
        'NewUTLayoutWindow',
        'UTLCopyWindow',
        'AssignUTFieldToColWindow',
        'AssignFieldToColWindow1',
        'pagesECommerceFieldset',
        'productSettingsForm',
        'shippersInterface',
        'newShipperWindow',
        'CTECommerceFieldset',
        'taxesInterface',
        'stockInterface',
        'stockAdderWindow',
        'stockRemoverWindow',
        'paymentMeansInterface',
        'ordersInterface',
        'ImportChoiceWindow',
        'importProductOptionsForm',
        'customImportUpdateSettings',
        'importProductOptionsFieldset',
        'ExternalResourceAddWindow',
        'InternalResourceAddWindow',
        'FOThemesInterface',
        'FOThemeImportWindow',
        'GFSFieldUploadWindow1',
        'newDirectoryWindow1',
        'ordersExportWindow',
        'usersExportWindow',
        'contentsExportWindow',
        'AdvancedColorField',
        'embeddedImageField',
        'embeddedImageFieldComponent',
        'B64ImageUploadWindow',
        'DBRestoreInterface',
        'DBExportInterface',
        'RDirectObjectField',
        'urlField',
        'urlFieldComponent',
        'TXField',
        'SystemSettingsInterface',
        'RECField',
        'RECWindow',
        'EditorialInterface',
        'queryBuilderField1',
        'ActivityInterface',
        'RSSInterface',
        'newRssWindow'
    ],
    controllers: [
        'ContributionContenusController',
        'MasqueController',
        'TypesContenusController',
        'TaxonomieController',
        'assistantRequetageController',
        'InterfaceController',
        'UsersController',
        'MainStoresController',
        'ACLController',
        'SearchController',
        'SitesController',
        'PagesController',
        'MediaTypesController',
        'DAMController',
        'WorkspacesController',
        'LocalisationController',
        'ImportController',
        'MailingListsController',
        'AppExtensionController',
        'UserTypesController',
        'EmailController',
        'ShippersController',
        'FOThemesController'
    ],
    name: 'Rubedo',

    launch: function() {
        Ext.create('Rubedo.view.ViewportPrimaire');
    }

});
