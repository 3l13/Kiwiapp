Ext.define("PDJ.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {	
				xtype:"homepanel"
			},
			{
				xtype:"actus"
			},
            {
                xtype:"contact"
            }
        ]
    }
});