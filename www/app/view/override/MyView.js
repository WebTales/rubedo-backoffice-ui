Ext.define('KECMdesktop.view.override.MyView', {
    requires: 'KECMdesktop.view.MyView'
}, function() {
    Ext.override(KECMdesktop.view.MyView, {
        plugins:[
                Ext.create('Ext.ux.DataView.DragSelector', {}),
                Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'text'})
            ]
    });
});