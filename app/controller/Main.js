Ext.define('PDJ.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            actus:'actus',
            blogList:'actus list',
            refreshBtn:'actus button'
        },
        control: {
        	'actus' : {
        		back: 'displayRefreshBtn'
        	},
            'actus list' : {
				itemtap: 'showPost'
			},
			'actus button' : {
				tap: 'refreshBlog'
			}
        }
    },

    displayRefreshBtn: function(_this, _opts){
		this.getRefreshBtn().show();
	},

    refreshBlog: function(_this, _e, _opts){
    	
    	var store = this.getBlogList().getStore();
    	
    	store.load();
    },

	showPost: function(list, index, elt, record){


		//console.log(record);
		this.getActus().push({
			xtype:'panel',
			title:record.get('title'),
			html:record.get('content'),
			scrollable:{
			    direction: 'vertical',
			    directionLock: true
			},
			styleHtmlContent:true
		});
		this.getRefreshBtn().hide();
	}
});