Ext.define('PDJ.view.Actus', {
	
	extend:'Ext.navigation.View',
	
	// "Espace de nom", "variable" d'appelation de ma vue
	xtype:'actus',

	requires : [
		'Ext.dataview.List', 'Ext.data.proxy.JsonP', 'Ext.data.Store'
	],
	
	config:{
		
		title:'Actus',
		iconCls:'list',
		defaultBackButtonText:'Retour',
		navigationBar:{
			items:{
				xtype:'button',
				iconCls:'refresh',
				iconMask: true
			}
		},
	
		items:{
			xtype:'list',
			itemTpl: '<div>{title}</div>',
			title:'Dernières actualités',

			
			store:{
				
				storeId: 'blogStore',
				autoLoad: true,
				fields:['title', 'author', 'content'],
				
				proxy : {
					type:'jsonp',
					url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://www.alsacreations.com/rss/actualites.xml',
					
					reader:{
						type:'json',
						rootProperty:'responseData.feed.entries'
					}
					
				}
			}
		}
	}
});