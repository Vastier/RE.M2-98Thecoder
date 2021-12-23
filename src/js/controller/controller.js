class CypherController{
	
	getMsg(){
		// Pegando dados do Form
		const message = $('#message-in').val(),
			  cypher = $('#cypher').val(),
			  inc = $('#inc').val(),
			  encodeco = $('input[name="encodeco"]:checked').val()

		//   Instanciando a Model
		const model = new CypherModel()

		// Pedindo pro model criar um objeto msg
		const msg = model.criaMsg(message, cypher, inc, encodeco)
		// Pedindo pro model processar a mensagem/objeto e devolver a mensagem final a ser mostrada pro usuário
		const endMsg = model.processMsg(msg)
		//Instanciando View
		const view = new CypherView()
		//Pedindo pra view tacar a mensagem na tela pro usuário ver
		view.renderMsg(endMsg)

	}
	// Pedindo pro view mostrar ou esconder a parte de incremento dependendo da cifra escolhida
	toggleInc(){
		const cypher = $('#cypher').val()
		const view = new CypherView()
		if (cypher === 'caesar') {
			view.showInc()
		} else if (cypher === 'base64'){
			view.hideInc()
		}
	}
	// pedindo pro view mudar o nome do botão de acordo com a escolha no usuário.
	toggleButton(){
		const encodeco = $('input[name="encodeco"]:checked').val()
		const view = new CypherView()
		if (encodeco === 'encode') {
			view.btnEncode()
		} else if (encodeco === 'decode'){
			view.btnDecode()
		}
	}
}

