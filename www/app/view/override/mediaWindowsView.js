Ext.define('KECMdesktop.view.override.mediaWindowsView', {
    requires: 'KECMdesktop.view.mediaWindowsView'
}, function() {
    Ext.override(KECMdesktop.view.mediaWindowsView, {
        plugins:[
                Ext.create('Ext.ux.DataView.DragSelector', {}),
                Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'text'})
            ]
    });
});