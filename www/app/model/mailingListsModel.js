/*
 * File: app/model/mailingListsModel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('Rubedo.model.mailingListsModel', {
    extend: 'Ext.data.Model',
    alias: 'model.mailingListsModel',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            defaultValue: [
                'global'
            ],
            name: 'workspaces'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        },
        {
            name: 'fromAddress'
        },
        {
            name: 'fromName'
        },
        {
            name: 'replyToAddress'
        },
        {
            name: 'replyToName'
        },
        {
            name: 'returnPathAddress'
        }
    ]
});