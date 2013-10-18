/*
 * File: app/model/userType.js
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

Ext.define('Rubedo.model.userType', {
    extend: 'Ext.data.Model',
    alias: 'model.userType',

    fields: [
        {
            name: 'type'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'fields'
        },
        {
            name: 'vocabularies'
        },
        {
            mapping: 'createUser.fullName',
            name: 'createUser',
            persist: false
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
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        },
        {
            dateFormat: 'timestamp',
            name: 'lastUpdateTime',
            type: 'date'
        },
        {
            name: 'defaultGroup'
        },
        {
            name: 'signUpType'
        },
        {
            name: 'UTType'
        }
    ]
});