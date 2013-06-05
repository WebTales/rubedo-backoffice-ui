/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '.',
        'Ext.ux': 'resources/ux'
    }
});

Ext.application({

    requires: [
        'Rubedo.view.MyGridPanel3',
        'Rubedo.view.ViewportPrimaire',
        'Rubedo.view.EnteteV',
        'Rubedo.view.iconeBureau',
        'Rubedo.view.contributionContenus',
        'Rubedo.view.adminFTDC',
        'Rubedo.view.adminFMDP',
        'Rubedo.view.contributionPages',
        'Rubedo.view.PDFPreviewWindow',
        'Rubedo.view.settingsContextMenu',
        'Rubedo.view.DesktopCustomizeWindow',
        'Rubedo.view.wallpaperPicker',
        'Rubedo.view.themePicker',
        'Rubedo.view.accessibilityPicker',
        'Rubedo.view.adminFUtilisateurs',
        'Rubedo.view.GroupAddWindow',
        'Rubedo.view.UserAddWindow',
        'Rubedo.view.UserAdminWindow',
        'Rubedo.view.MyGridPanel16',
        'Rubedo.view.testingGround',
        'Rubedo.view.CKEField',
        'Rubedo.view.ReusableElementPicker',
        'Rubedo.view.ExportElementWindow',
        'Rubedo.view.iconsContextMenu',
        'Rubedo.view.AdminPasswordChange',
        'Rubedo.view.userSettings',
        'Rubedo.view.menuContenusContext',
        'Rubedo.view.termContextMenu',
        'Rubedo.view.NestedContentsGrid',
        'Rubedo.view.NestedContentAddWindow',
        'Rubedo.view.esResponseWindow',
        'Rubedo.view.searchResultsWindow',
        'Rubedo.view.sitesInterface',
        'Rubedo.view.CTCField',
        'Rubedo.view.TTField',
        'Rubedo.view.FCCField',
        'Rubedo.view.assistantRequetage',
        'Rubedo.view.ImagePickerWindow',
        'Rubedo.view.ImageFieldComponent',
        'Rubedo.view.ImagePickerField',
        'Rubedo.view.monitoringTools',
        'Rubedo.view.SystemStatusPanel',
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Rubedo.view.MainToolsContextMenu',
        'Rubedo.view.mediaTypesInterface',
        'Rubedo.view.newMTWindow',
        'Rubedo.view.contentPickerWindow',
        'Rubedo.view.contentPickerGrid',
        'Rubedo.view.MTFieldAddWindow',
        'Rubedo.view.assisstantRE4',
        'Rubedo.view.assisstantRE6',
        'Rubedo.view.assisstantRE5',
        'Rubedo.view.queryBuilderField',
        'Rubedo.view.DAMInterface',
        'Rubedo.view.MyGridPanel31',
        'Rubedo.view.DAMCreateUpdateWindow',
        'Rubedo.view.DAMMainView',
        'Rubedo.view.CTMTField',
        'Rubedo.view.GFSFileFieldComponent',
        'Rubedo.view.GFSFileField',
        'Rubedo.view.GFSFieldUploadWindow',
        'Rubedo.view.siteBuilderWizzard',
        'Rubedo.view.MyToolbar56',
        'Rubedo.view.queryManagerInterface',
        'Rubedo.view.queryTypeChooseWindow',
        'Rubedo.view.manualQueryInterface',
        'Rubedo.view.DAMChooseMTWindow',
        'Rubedo.view.selectorTreeForField',
        'Rubedo.view.WorkspacesInterface',
        'Rubedo.view.newWorkspaceWindow',
        'Rubedo.view.WorkspaceCombo',
        'Rubedo.view.taxoTermInsertWindow',
        'Rubedo.view.maskSaveChoiceBox',
        'Rubedo.view.MQA',
        'Rubedo.view.DCEFieldComponent',
        'Rubedo.view.MQField',
        'Rubedo.view.DCEField',
        'Rubedo.view.MQFieldComponent',
        'Rubedo.view.localiserFieldComponent',
        'Rubedo.view.localiserField',
        'Rubedo.view.queryFieldComponent',
        'Rubedo.view.sessionWarningWindow',
        'Rubedo.view.sessionExpiredWindow',
        'Rubedo.view.menuPrincipalInterface',
        'Rubedo.view.GFSFileFieldComponentBig',
        'Rubedo.view.ImageFieldComponentSmall',
        'Rubedo.view.newUserWindow',
        'Rubedo.view.RHelpBtn',
        'Rubedo.view.PersoPicUploadWindow',
        'Rubedo.view.FormsInterface',
        'Rubedo.view.newFormWindow',
        'Rubedo.view.addFormFieldWindow',
        'Rubedo.view.RFormPage',
        'Rubedo.view.RFormField',
        'Rubedo.view.FormsEditContainer',
        'Rubedo.view.FormPickerField',
        'Rubedo.view.champsEditionTC',
        'Rubedo.view.MTeditFields',
        'Rubedo.view.RichTextConfigurator',
        'Rubedo.view.OpenFieldConfigurator',
        'Rubedo.view.FCEditor',
        'Rubedo.view.MyComboBox32',
        'Rubedo.view.externalMediaField',
        'Rubedo.view.externalMediaFieldComponent',
        'Rubedo.view.ESQfield',
        'Rubedo.view.ESQfieldComponent',
        'Rubedo.view.DelConfirmZ',
        'Rubedo.view.ajoutBlocFenetre',
        'Rubedo.view.adminFTaxonomie',
        'Rubedo.view.contributionPrevisualisation',
        'Rubedo.view.newPageWindow',
        'Rubedo.view.MailingListPickerField',
        'Rubedo.view.MultiChoiceConfigurator',
        'Rubedo.view.FormsPageConfigurator',
        'Rubedo.view.InportInterface',
        'Rubedo.view.AjouterContenu',
        'Rubedo.view.directRTEField',
        'Rubedo.view.directRTEFieldComponent',
        'Rubedo.view.MailingListsInterface',
        'Rubedo.view.newMLWindow',
        'Rubedo.view.specialTCFieldItemsConfigurator',
        'Rubedo.view.MultiChoiceConfigurator1',
        'Rubedo.view.SystemInfoDisplayWindow',
        'Rubedo.view.ESSearchField',
        'Rubedo.view.ImagePreviewWindow'
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
        'formModel',
        'formFieldTypeModel',
        'mailingListsModel',
        'inportFieldModel'
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
        'languageStore',
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
        'FormsStore',
        'FormFieldTypesStore',
        'FormPickerStore',
        'FCEStore',
        'TypesContenusDataJson',
        'PanierDataJson',
        'MultiChoiceOptionsStore',
        'MailingListsCombo',
        'NotInportFieldsStore',
        'InportAsFieldStore',
        'InportAsTaxoStore',
        'SystemCTStore',
        'AddMultiFieldStore',
        'ImportableFieldTypesStore'
    ],
    views: [
        'MyContainer',
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
        'MyWindow31',
        'esResponseWindow',
        'searchResultsWindow',
        'sitesInterface',
        'MyWindow35',
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
        'MyWindow39',
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
        'FormsInterface',
        'newFormWindow',
        'addFormFieldWindow',
        'RFormPage',
        'RFormField',
        'FormsEditContainer',
        'FormPickerField',
        'champsEditionTC',
        'MTeditFields',
        'RichTextConfigurator',
        'MulitiChoiceConfigurator',
        'OpenFieldConfigurator',
        'FCEditor',
        'MyComboBox32',
        'MyWindow67',
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
        'MultiChoiceConfigurator',
        'FormsPageConfigurator',
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
        'ImagePreviewWindow'
    ],
    autoCreateViewport: true,
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
        'FormsController',
        'ImportController',
        'MailingListsController'
    ],
    name: 'Rubedo'
});
