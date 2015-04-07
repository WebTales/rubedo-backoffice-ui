/*
 * File: app/model/DAMFolderViewModel1.js
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

Ext.define('Rubedo.model.DAMFolderViewModel1', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            mapping: 'title',
            name: 'text'
        },
        {
            name: 'version',
            type: 'auto'
        },
        {
            name: 'id'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        },
        {
            name: 'directory',
            type: 'string'
        },
        {
            dateFormat: 'timestamp',
            name: 'lastUpdateTime',
            persist: false,
            type: 'date'
        },
        {
            mapping: 'createUser.fullName',
            name: 'author',
            persist: false
        },
        {
            name: 'writeWorkspace'
        },
        {
            name: 'mainFileType'
        },
        {
            name: 'originalFileId'
        },
        {
            name: 'target'
        },
        {
            name: 'fileSize'
        },
        {
            defaultValue: false,
            name: 'loadOnLaunch',
            type: 'boolean'
        },
        {
            name: 'themeId'
        }
    ]
});