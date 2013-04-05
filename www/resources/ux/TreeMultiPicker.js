/**
 * @class Ext.ux.TreeMultiPicker
 * @extends Ext.form.field.Picker
 * 
 * A Picker field that contains a tree panel on its popup, enabling selection of tree nodes.
 */
Ext.define('Ext.ux.TreeMultiPicker', {
    extend: 'Ext.form.field.Picker',
    xtype: 'treemultipicker',

    triggerCls: Ext.baseCSSPrefix + 'form-arrow-trigger',

    config: {
        /**
         * @cfg {Ext.data.TreeStore} store
         * A tree store that the tree picker will be bound to
         */
        store: null,

        /**
         * @cfg {String} displayField
         * The field inside the model that will be used as the node's text.
         * Defaults to the default value of {@link Ext.tree.Panel}'s `displayField` configuration.
         */
        displayField: null,

        /**
         * @cfg {Array} columns
         * An optional array of columns for multi-column trees
         */
        columns: null,

        /**
         * @cfg {Boolean} selectOnTab
         * Whether the Tab key should select the currently highlighted item. Defaults to `true`.
         */
        selectOnTab: true,

        /**
         * @cfg {Number} maxPickerHeight
         * The maximum height of the tree dropdown. Defaults to 300.
         */
        maxPickerHeight: 300,

        /**
         * @cfg {Number} minPickerHeight
         * The minimum height of the tree dropdown. Defaults to 100.
         */
        minPickerHeight: 100
    },
   
    editable: false,

    initComponent: function() {
        var me = this;
        me.callParent(arguments);

        this.addEvents(
            /**
             * @event select
             * Fires when a tree node is selected
             * @param {Ext.ux.TreePicker} picker        This tree picker
             * @param {Ext.data.Model} record           The selected record
             */
            'select'
        );

        me.store.on('load', me.onLoad, me);
    },

    /**
     * Creates and returns the tree panel to be used as this field's picker.
     * @private
     */
    createPicker: function() {
        var me = this,
            picker = Ext.create('Ext.tree.Panel', {
                store: me.store,
                floating: true,
                hidden: true,
                rootVisible:false,
                useArrows:true,
                displayField: me.displayField,
                columns: me.columns,
                maxHeight: me.maxTreeHeight,
                shadow: false,
                manageHeight: false,
                selModel:{
                	mode:'SIMPLE'
                },
                
                listeners: {
                    itemclick: Ext.bind(me.onItemClick, me)
                }
            }),
            view = picker.getView();

        view.on('render', me.setPickerViewStyles, me);

        if (Ext.isIE9 && Ext.isStrict) {
            // In IE9 strict mode, the tree view grows by the height of the horizontal scroll bar when the items are highlighted or unhighlighted.
            // Also when items are collapsed or expanded the height of the view is off. Forcing a repaint fixes the problem.
            view.on('highlightitem', me.repaintPickerView, me);
            view.on('unhighlightitem', me.repaintPickerView, me);
            view.on('afteritemexpand', me.repaintPickerView, me);
            view.on('afteritemcollapse', me.repaintPickerView, me);
        }
        return picker;
    },

    /**
     * Sets min/max height styles on the tree picker's view element after it is rendered.
     * @param {Ext.tree.View} view
     * @private
     */
    setPickerViewStyles: function(view) {
        view.getEl().setStyle({
            'min-height': this.minPickerHeight + 'px',
            'max-height': this.maxPickerHeight + 'px'
        });
    },

    /**
     * repaints the tree view
     */
    repaintPickerView: function() {
        var style = this.picker.getView().getEl().dom.style;

        // can't use Element.repaint because it contains a setTimeout, which results in a flicker effect
        style.display = style.display;
    },

    /**
     * Aligns the picker to the input element
     * @private
     */
    alignPicker: function() {
        var me = this,
            picker;

        if (me.isExpanded) {
            picker = me.getPicker();
            if (me.matchFieldWidth) {
                // Auto the height (it will be constrained by max height)
                picker.setWidth(me.bodyEl.getWidth());
            }
            if (picker.isFloating()) {
                me.doAlign();
            }
        }
    },

    /**
     * Handles a click even on a tree node
     * @private
     * @param {Ext.tree.View} view
     * @param {Ext.data.Model} record
     * @param {HTMLElement} node
     * @param {Number} rowIndex
     * @param {Ext.EventObject} e
     */
    onItemClick: function(view, record, node, rowIndex, e) {
    	var betaSelected =view.getSelectionModel().getSelection();
    	var realSelected = [ ];
    	Ext.Array.forEach(betaSelected, function(item){
    		if ((!item.isRoot())&&(!item.get("isNotPage"))){
    			realSelected.push(item);
    		}
    	});
        this.selectItem(realSelected);
    },

    /**
     * Handles a keypress event on the picker element
     * @private
     * @param {Ext.EventObject} e
     * @param {HTMLElement} el
     */
    onPickerKeypress: function(e, el) {
        var key = e.getKey();

        if(key === e.ENTER || (key === e.TAB && this.selectOnTab)) {
            this.selectItem(this.picker.getSelectionModel().getSelection()[0]);
        }
    },

    /**
     * Changes the selection to a given record and closes the picker
     * @private
     * @param {Ext.data.Model} record
     */
    selectItem: function(record) {
        var me = this;
        me.setValue(Ext.Array.pluck(Ext.Array.pluck(record,'data'),'id'));
        me.fireEvent('select', me, record)
	

    },

    /**
     * Runs when the picker is expanded.  Selects the appropriate tree node based on the value of the input element,
     * and focuses the picker so that keyboard navigation will work.
     * @private
     */
    onExpand: function() {
        var me = this,
            picker = me.picker,
            store = picker.store,
            value = me.value;

        if(value) {
        	var toSelect=[ ];
        	Ext.Array.forEach(value,function(item){
        		toSelect.push(store.getNodeById(item));
        	});
            picker.getSelectionModel().select(toSelect);
        } else {
            picker.getSelectionModel().select(store.getRootNode());
        }

        Ext.defer(function() {
            picker.getView().focus();
        }, 1);
    },

    /**
     * Sets the specified value into the field
     * @param {Mixed} value
     * @return {Ext.ux.TreePicker} this
     */
    setValue: function(value) {
        var me = this,
            record;

        me.value = value;

        if (me.store.loading) {
            // Called while the Store is loading. Ensure it is processed by the onLoad method.
            return me;
        }
        
        var toSelect=[ ]; 
        if (value){
	    	Ext.Array.forEach(value,function(item){
	    		toSelect.push(me.picker.store.getNodeById(item));
	    	});
	    	toDisplay=Ext.Array.pluck(Ext.Array.pluck(toSelect,'data'),me.displayField);
	
	        me.setRawValue(toDisplay);
        } else {
        	me.setRawValue('');
        }
        return me;
    },


    /**
     * Returns the current data value of the field (the idProperty of the record)
     * @return {Number}
     */
    getValue: function() {
        return this.value;
    },
    getSubmitValue: function() {
        return this.value;
    },

    /**
     * Handles the store's load event.
     * @private
     */
    onLoad: function() {
        var value = this.value;

        if (value) {
            this.setValue(value);
        }
    }

});