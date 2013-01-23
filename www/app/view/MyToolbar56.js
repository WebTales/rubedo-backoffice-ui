/*
 * File: app/view/MyToolbar56.js
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

Ext.define('Rubedo.view.MyToolbar56', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mytoolbar56',

    ignoreValidation: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'progressbar',
                    flex: 1,
                    itemId: 'wizProgress',
                    value: 0.4
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        button.up().up().getLayout().prev();
                        button.up().makeCorrect();
                    },
                    itemId: 'wizPrev',
                    iconCls: 'arrow_left',
                    text: 'Précédent'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        if (button.up().ignoreValidation){
                            button.up().up().getLayout().next();
                            button.up().makeCorrect();
                        } else {
                            var goOK=true;
                            Ext.Array.forEach(button.up().up().getLayout().getActiveItem().query("field"),function(field){
                                if(!field.isValid()){
                                    goOK=false;
                                }
                            });
                            if (goOK){
                                button.up().up().getLayout().next();
                                button.up().makeCorrect();
                            }
                        }
                    },
                    itemId: 'wizNext',
                    iconAlign: 'right',
                    iconCls: 'arrow_right',
                    text: 'Suivant'
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onToolbarAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onToolbarAfterRender: function(abstractcomponent, options) {
        this.makeCorrect();
    },

    makeCorrect: function() {
        var all = this.up().items.items.length;
        var active = this.up().getLayout().getActiveItem();
        var activeIndex = this.up().items.items.indexOf(active);
        if (activeIndex===0){
            this.getComponent("wizPrev").hide();
        } else {
            this.getComponent("wizPrev").show();
        }

        if (activeIndex==all-1){
            this.getComponent("wizNext").hide();
        } else {
            this.getComponent("wizNext").show();
        }
        this.getComponent("wizProgress").updateProgress((activeIndex+1)/all,"Etape "+(activeIndex+1)+" sur "+all);
    }

});