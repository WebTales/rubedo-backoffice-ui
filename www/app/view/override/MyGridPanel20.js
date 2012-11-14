Ext.define('Rubedo.view.override.MyGridPanel20', {
    override: 'Rubedo.view.MyGridPanel20',
    plugins:[
        Ext.create('Ext.ux.grid.FilterBar', {renderHidden: false, showShowHideButton: true,showClearAllButton: true})
        
    ]
    
});