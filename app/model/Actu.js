Ext.define('PDJ.model.Actu', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'title', type: 'string' },
            { name: 'author', type: 'string' },
            { name: 'content', type: 'string' }
        ]
    }
});