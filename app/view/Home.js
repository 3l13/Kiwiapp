Ext.define("PDJ.view.Home", {
	extend:"Ext.Panel",
	
	xtype: "homepanel",
	
	config: {
		title: "Home",
		iconCls: "home",
		styleHtmlCls:"clsHome",
		
		scrollable:true,
		styleHtmlContent:true,
		
		html: [
            
            '<img id="logo-alsacreations-com" src="http://www.alsacreations.com/css/img/logo-alsacreations-com.png" alt="" />',
            '<h1>Tutoriels - Astuces - Outils</h1>',
            "<p>Alsacréations est une communauté dédiée à la conception de sites web de qualité, aux standards W3C, aux feuilles de styles CSS, aux langages HTML et XHTML, et à l'accessibilité</p>"
        ].join("")
	}
});