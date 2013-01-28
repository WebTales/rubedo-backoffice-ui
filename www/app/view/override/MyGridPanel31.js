Ext.define('Rubedo.view.override.MyGridPanel31', {
    override: 'Rubedo.view.MyGridPanel31',
       plugins:[
        Ext.create('Ext.ux.grid.FilterBar', {renderHidden: false, showShowHideButton: true,showClearAllButton: true})
        
    ]
    
});