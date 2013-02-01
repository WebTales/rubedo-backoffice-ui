/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '.',
        'Ext.ux': 'resources/ux'
    }
});

Ext.application({
    models: [
        'sitesDataModel',
        'panierDataModel',
        'versionsDataModel',
        'blocDataModel',
        'typesChampsDataModel',
        'taxonomieDataModel',
        'iconDataModel',
        'mediaDataModel',
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
        'workspaceModel'
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
        'MediasDataStore',
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
        'ContributeWorkspacesCombo'
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
        'contributionMedias',
        'mediaWindowsView',
        'ImagePreviewWindow',
        'PDFPreviewWindow',
        'mediaImageEditor',
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
        'taxoTermInsertWindow'
    ],
    autoCreateViewport: true,
    name: 'Rubedo',
    controllers: [
        'ContributionSitesController',
        'ContributionContenusController',
        'MasqueController',
        'TypesContenusController',
        'TaxonomieController',
        'assistantRequetageController',
        'InterfaceController',
        'MediathequeController',
        'UsersController',
        'MainStoresController',
        'ACLController',
        'SearchController',
        'SitesController',
        'PagesController',
        'MediaTypesController',
        'DAMController',
        'WorkspacesController'
    ]
});
