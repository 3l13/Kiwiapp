<?php

	if((isset($_POST['nom']) && !empty($_POST['nom'])) && (isset($_POST['email']) && !empty($_POST['email'])) && (isset($_POST['message']) && !empty($_POST['message']))){

		$message  = "Contact venant de : " . $_POST['nom'] . "\n";
		$message .= $_POST['message'];
		$message .= "\n E-mail de réponse : " . $_POST['email'];

		mail('maklous@gmail.com', 'E-mail depuis le mobile', $message);

		echo json_encode(array('success' =>  true));
	}
	else{
		echo json_encode(array('success' =>  false));
	}
?>