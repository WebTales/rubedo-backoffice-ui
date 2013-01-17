Ext.define('Rubedo.view.override.DAMMainView', {
    override: 'Rubedo.view.DAMMainView',
    multiSelect: true,
    viewConfig: {
            stripeRows: true,
            chunker: Ext.view.TableChunker
        },
        
        plugins: [Ext.create('Ext.ux.grid.plugin.DragSelector')],
        
        features: [Ext.create('Ext.ux.grid.feature.Tileview', {
            viewMode: 'tileIcons',
			getAdditionalData: function(data, index, record, orig)
			{
				
	            
	            
	            generateThumbnail = function()
	            {
	                return "dam/get-thumbnail?id="+record.get("id");
	            };
   
				if(this.viewMode)
				{
					return {
						thumbnails: generateThumbnail(),
						author:record.get("createUser").fullName,
                        date: Ext.Date.format(record.get("createTime"), 'd-m-Y'),
                        filename:record.get("title")
					};
				}
				return {};
			},
			viewTpls:
			{
					mediumIcons: [
						'<td class="{cls} ux-explorerview-medium-icon-row">',
						'<table class="x-grid-row-table">',
							'<tbody>',
								'<tr>',
									'<td class="x-grid-col x-grid-cell ux-explorerview-icon" style="background: transparent;">',
						'<img src=\"{thumbnails}\" height=\"100\" width=\"100\">',			
                        '</td>',
								'</tr>',
								'<tr>',
									'<td class="x-grid-col x-grid-cell">',
										'<div class="x-grid-cell-inner" unselectable="on">{filename}</div>',
									'</td>',
								'</tr>',
							'</tbody>',
						'</table>',
						'</td>'].join(''),
				  
		  			tileIcons: [
						'<td class="{cls} ux-explorerview-detailed-icon-row">',
						'<table class="x-grid-row-table">',
							'<tbody>',
								'<tr>',
									'<td class="x-grid-col x-grid-cell ux-explorerview-icon" style="background: transparent;">',
						'<img src=\"{thumbnails}\" height=\"50\" width=\"50\">',			
                        '</td>',
								
									'<td class="x-grid-col x-grid-cell">',
										'<div class="x-grid-cell-inner" unselectable="on">{filename}<br><span>{author}<br>{date}</span></div>',
									'</td>',
								'</tr>',
							'</tbody>',
						'</table>',
						'</td>'].join('')
		
    		}
        }),
		{
            ftype: 'grouping',
            groupHeaderTpl: 'Cuisine: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
            disabled: false
        }],
    tbar: [{},'->', {
            xtype: 'switchbuttonsegment',
            activeItem: 1,
            scope: this,
            items: [{
                tooltip: 'Details',
                viewMode: 'default',
                iconCls: 'icon-default'
            }, {
                tooltip: 'Tiles',
                viewMode: 'tileIcons',
                iconCls: 'icon-tile'
            }, {
                tooltip: 'Icons',
                viewMode: 'mediumIcons',
                iconCls: 'icon-medium'
            }],
            listeners: {
                change: function(btn, item)
                {
					Ext.getCmp("DAMMainView").features[0].setView(btn.viewMode);		
                },
                scope: this
            }
        }
        ]
    
});