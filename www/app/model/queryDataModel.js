/*
 * File: app/model/queryDataModel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Rubedo.model.queryDataModel', {
    extend: 'Ext.data.Model',
    alias: 'model.queryDataModel',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'query'
        },
        {
            name: 'averageDuration'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'count'
        },
        {
            name: 'usage'
        },
        {
            name: 'type'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        },
        {
            name: 'returnedFields'
        }
    ]
});