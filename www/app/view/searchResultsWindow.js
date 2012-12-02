/*
 * File: app/view/searchResultsWindow.js
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

Ext.define('Rubedo.view.searchResultsWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.searchResultsWindow',

    requires: [
        'Rubedo.view.MyGridPanel20'
    ],

    height: 350,
    id: 'searchResultsWindow',
    width: 607,
    layout: {
        type: 'fit'
    },
    iconCls: 'search',
    title: 'Résultats de recherche',
    constrainHeader: true,
    maximizable: true,
    minimizable: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'mygridpanel20',
                    overflowY: 'auto'
                }
            ],
            listeners: {
                beforeclose: {
                    fn: me.onSearchResultsWindowBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onSearchResultsWindowBeforeClose: function(panel, options) {
        panel.getComponent(0).getStore().removeAll();
    }

});