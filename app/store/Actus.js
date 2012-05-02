Ext.define('PDJ.store.Actus', {
    extend: 'Ext.data.Store',
    requires: [
        'PDJ.model.Actu'
    ],

    config: {
        storeId: 'blogStore',
        model: 'PDJ.model.Actu',
        autoLoad: true,
        
        proxy : {
            type:'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://www.alsacreations.com/rss/actualites.xml',
            
            reader:{
                type:'json',
                rootProperty:'responseData.feed.entries'
            }
        }
    }
});