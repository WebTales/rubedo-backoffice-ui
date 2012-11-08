Ext.define('Rubedo.view.override.NestedContentsGrid', {
    override: 'Rubedo.view.NestedContentsGrid',
    plugins:[
        Ext.create('Ext.ux.grid.FilterBar', {renderHidden: false, showShowHideButton: true,showClearAllButton: true})
        
    ]
});