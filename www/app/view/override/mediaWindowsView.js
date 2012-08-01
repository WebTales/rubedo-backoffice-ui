Ext.define('Rubedo.view.override.mediaWindowsView', {
    requires: 'Rubedo.view.mediaWindowsView'
}, function() {
    Ext.override(Rubedo.view.mediaWindowsView, {
        plugins:[
                Ext.create('Ext.ux.DataView.DragSelector', {}),
                Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'text'})
            ]
    });
});