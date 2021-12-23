class CypherView{

	//mostrar a mensagem no campo message-out
	renderMsg(msg){
		const msgOut = $('#message-out')
		msgOut.prop('value', msg)
	}
	//Mostrar campo inc
	showInc(){
		const inc = $('#inc');
		const labelinc = $('#labelinc');
	
		inc.show();
		labelinc.show();
	}
	//esconder campo inc
	hideInc(){
		const inc = $('#inc');
		const labelinc = $('#labelinc');
	
		inc.hide();
		labelinc.hide();
	}
	//mudar nome do botão para Codificar
	btnEncode(){
		const btn = $('#submit')
		btn.prop('textContent', 'Codificar Mensagem!')
	}
	//mudar nome do botão para Decodificar
	btnDecode(){
		const btn = $('#submit')
		btn.prop('textContent', 'Decodificar Mensagem!')
	}
}
