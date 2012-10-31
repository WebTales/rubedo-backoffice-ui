Ext.define('Rubedo.view.override.menuContenusContext', {
    override: 'Rubedo.view.menuContenusContext',
        plugins:[
        Ext.create('Ext.ux.grid.FilterBar', {renderHidden: false, showShowHideButton: true,showClearAllButton: true})
        
    ]
    
});
