Ext.define("PDJ.view.Contact", {
	extend:"Ext.form.Panel",
	
	xtype: "contact",

    requires : [
        'Ext.form.FieldSet', 'Ext.field.Email'
    ],
	
	config: {
		title: "Contact",
		iconCls: "user",
		
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
                    {
                        xtype: 'fieldset',
                        title: 'Nous contacter',
                        instructions: "",

                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Nom',
                                name:'nom'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'E-mail',
                                name:'email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message',
                                name:'message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Envoyer',
                        ui: 'confirm',
                        handler: function(datas){
                            this.up("contact").submit( 
                                {
                                    url: 'http://www.ogoo.fr/contact.php',
                                    method: 'POST',
                                    success: function() {
                                        alert('Votre message a bien été envoyé !');
                                        this.reset();
                                    },
                                    failure: function() {
                                        alert('Saisie incorrecte : veuillez recommencer !');
                                    }
                                }, 
                                '', 
                                {}, true, 'Envoi en cours ...');

                        }
                    }
                ]
	}
});
