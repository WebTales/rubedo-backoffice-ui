/*
 * File: app/model/sitesDataModel.js
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

Ext.define('Rubedo.model.sitesDataModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'version'
        },
        {
            name: 'id'
        },
        {
            name: 'alias'
        },
        {
            name: 'description'
        },
        {
            name: 'keywords'
        },
        {
            name: 'mainLanguage'
        },
        {
            name: 'languages'
        },
        {
            name: 'activeMessagery'
        },
        {
            name: 'SMTPServer'
        },
        {
            name: 'SMTPPort'
        },
        {
            name: 'SMTPLogin'
        },
        {
            name: 'SMTPPassword'
        },
        {
            name: 'defaultEmail'
        },
        {
            name: 'accessibilityLevel'
        },
        {
            name: 'opquastLogin'
        },
        {
            name: 'opquastPassword'
        },
        {
            name: 'protocol'
        },
        {
            name: 'filter'
        },
        {
            name: 'theme'
        },
        {
            name: 'homePage'
        },
        {
            name: 'createUser',
            mapping: 'createUser.fullName',
            persist: false
        },
        {
            name: 'lastUpdateTime',
            dateFormat: 'timestamp',
            type: 'date'
        },
        {
            name: 'createTime',
            dateFormat: 'timestamp',
            type: 'date'
        },
        {
            name: 'title'
        },
        {
            name: 'author'
        }
    ]
});