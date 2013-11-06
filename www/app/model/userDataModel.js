/*
 * File: app/model/userDataModel.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.model.userDataModel', {
    extend: 'Ext.data.Model',
    alias: 'model.userDataModel',

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'photo',
            type: 'string'
        },
        {
            name: 'language',
            type: 'string'
        },
        {
            name: 'login',
            type: 'string'
        },
        {
            name: 'groups'
        },
        {
            name: 'defaultGroup'
        },
        {
            dateFormat: 'U',
            name: 'createTime',
            type: 'date'
        },
        {
            dateFormat: 'U',
            name: 'lastUpdateTime',
            type: 'date'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'startValidity'
        },
        {
            name: 'endValidity'
        },
        {
            name: 'defaultWorkspace',
            persist: false
        },
        {
            name: 'workingLanguage'
        },
        {
            name: 'interfaceMode'
        },
        {
            name: 'typeId'
        },
        {
            name: 'fields'
        },
        {
            name: 'taxonomy'
        },
        {
            name: 'status'
        },
        {
            name: 'signupTime'
        }
    ]
});