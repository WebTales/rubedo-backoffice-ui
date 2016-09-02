/*
 * File: app/model/pageDataModel.js
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

Ext.define('Rubedo.model.pageDataModel', {
    extend: 'Ext.data.Model',
    alias: 'model.pageDataModel',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'maskId',
            type: 'string'
        },
        {
            name: 'site'
        },
        {
            name: 'version',
            type: 'int'
        },
        {
            name: 'id'
        },
        {
            name: 'blocks'
        },
        {
            name: 'title'
        },
        {
            name: 'clickStreamEvent'
        },
        {
            name: 'description'
        },
        {
            name: 'keywords'
        },
        {
            name: 'pageURL'
        },
        {
            name: 'orderValue',
            sortType: 'asFloat',
            type: 'float'
        },
        {
            dateFormat: 'timestamp',
            name: 'lastUpdateTime',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'createTime',
            type: 'date'
        },
        {
            mapping: 'createUser.fullName',
            name: 'createUser',
            persist: false
        },
        {
            name: 'excludeFromMenu',
            type: 'boolean'
        },
        {
            convert: function(v, rec) {
                return(false);
            },
            name: 'leaf',
            persist: false,
            type: 'boolean'
        },
        {
            defaultValue: true,
            name: 'expandable',
            type: 'boolean'
        },
        {
            name: 'workspace'
        },
        {
            name: 'inheritWorkspace',
            type: 'boolean'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        },
        {
            name: 'i18n'
        },
        {
            name: 'locale'
        },
        {
            name: 'nativeLanguage'
        },
        {
            name: 'noIndex'
        },
        {
            name: 'noFollow'
        },
        {
            defaultValue: {
                
            },
            name: 'taxonomy'
        },
        {
            name: 'richTextId'
        },
        {
            name: 'UXInstructions'
        },
        {
            name: 'metaImage'
        }
    ]
});