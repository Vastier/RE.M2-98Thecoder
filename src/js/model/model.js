class CypherModel {

	// criando objeto mensagem
	criaMsg(message, cypher, inc, encodeco){
	
		const mensagem = {
			message: message,
			cypher: cypher,
			inc: parseInt(inc),
			encodeco: encodeco,
		}
		return mensagem
	}
	// pegando o objeto mensagem e passando ele para as funções adequadas para ser processado.
	processMsg(message){
		let processedMsg = ''
		
		if (message.cypher === 'caesar' && message.encodeco === 'encode'){

			processedMsg = this.caesarEncode(message.message, message.inc)

		} else if (message.cypher === 'caesar' && message.encodeco === 'decode'){

			processedMsg = this.caesarDecode(message.message, message.inc)

		} else if (message.cypher === 'base64' && message.encodeco === 'encode'){

			processedMsg = this.base64Encode(message.message)

		} else if (message.cypher === 'base64' && message.encodeco === 'decode'){

			processedMsg = this.base64Decode(message.message)

		}
		return processedMsg
	}

	// funções de tratamento da mensagem.

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
	// https://codeavenger.com/2017/05/19/JavaScript-Modulo-operation-and-the-Caesar-Cipher.html

	// Bom, como o % do JavaScript não é um Modulo de verdade e sim um 'restante' é necessário uma função que faça o Modulo direito.
	
	trueMod(a,n) {
		let result = (((a % n) + n ) % n)
		return result
		}

	// função pra realizar o processo da cifra de césar, tratando alfabeto maiúsculo, minúsculo e números, qualquer outro caractere é ignorado.
	caesarEncode(msg, key) {
		var cyphermsg = "";
	
		for(let i = 0; i < msg.length; i++) {
			let code = msg.charCodeAt(i);

			if (code >= 65 && code <= 65 + 26 - 1) {
				code -= 65;
				code = this.trueMod(code + key, 26);
				code += 65;
			} else if (code >= 97 && code <= 97 + 26 - 1) {
				code -= 97;
				code = this.trueMod(code + key, 26);
				code += 97;
			} else if (code >= 48 && code <= 48 + 10 - 1) {
				code -= 48;
				code = this.trueMod(code + key, 10);
				code += 48;
			}
			cyphermsg += String.fromCharCode(code);
		}
		return cyphermsg;
	}
	// Função para decodificar, vulgo fazer a mesma coisa de codificar, porém usando um valor negativo no Incremento. ( só lembrando que ~ é not, logo se key = 2 então ~key = -3 )
	caesarDecode(msg, key) {
		let nkey = ~key+1
		return this.caesarEncode(msg, nkey);
	}
	// Função de encode Base64 usando a função nativa do JS.
	base64Encode(msg) {
		const criptext = btoa(msg);
	
		return criptext;
	}
	// Função de decode Base64 usando a função nativa do JS.
	base64Decode(msg) {
		const decryptext = atob(msg);
	
		return decryptext;
	}

}
