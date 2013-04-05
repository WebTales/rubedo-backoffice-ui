/*
 * File: app/model/taxonomieDataModel.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('Rubedo.model.taxonomieDataModel', {
    extend: 'Ext.data.Model',
    alias: 'model.taxonomieDataModel',

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'helpText',
            type: 'string'
        },
        {
            name: 'expandable',
            type: 'boolean'
        },
        {
            name: 'inputAsTree',
            type: 'boolean'
        },
        {
            name: 'multiSelect',
            type: 'boolean'
        },
        {
            name: 'mandatory',
            type: 'boolean'
        },
        {
            name: 'version'
        },
        {
            name: 'id'
        },
        {
            dateFormat: 'timestamp',
            name: 'createTime',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'lastUpdateTime',
            type: 'date'
        },
        {
            name: 'createUser'
        },
        {
            name: 'workspaces'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        }
    ]
});