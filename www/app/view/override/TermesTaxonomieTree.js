Ext.define('Rubedo.view.override.TermesTaxonomieTree', {
    override: 'Rubedo.view.TermesTaxonomieTree',
    plugins:[
    Ext.create('Ext.grid.plugin.CellEditing', {
      clicksToEdit:2
    })
  ]
    
});