Ext.define('Rubedo.view.override.MyGridPanel16', {
    override: 'Rubedo.view.MyGridPanel16',
    plugins:[
        Ext.create('Ext.ux.grid.FilterBar', {renderHidden: false, showShowHideButton: true,showClearAllButton: true})
    ]
});