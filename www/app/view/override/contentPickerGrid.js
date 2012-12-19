Ext.define('Rubedo.view.override.contentPickerGrid', {
    override: 'Rubedo.view.contentPickerGrid',
    plugins:[
        Ext.create('Ext.ux.grid.FilterBar', {renderHidden: false, showShowHideButton: true,showClearAllButton: true})
        
    ]
    
});