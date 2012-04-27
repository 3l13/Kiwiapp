//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    controllers: ["Main"],

    name: 'PDJ',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'Home', 'Actus', 'Contact'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    viewport: {
        autoMaximize: true
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('PDJ.view.Main'));
		/*Ext.create('PDJ.view.Main', {
			fullscreen:true
		});*/
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Mise à jour de l'application",
            "Mettre à jour l'application maintenant ?",
            function() {
                window.location.reload();
            }
        );
    }
});
