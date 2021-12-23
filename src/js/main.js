// Instanciando o controller.
const controller = new CypherController()

// Em caso de cliques no botão pedir pro controler resolver.
$('button').click((e)=>{
    e.preventDefault()
    controller.getMsg()
    
})

// Caso a cifra seja mudada pedir pro controller mostrar ou apagar o campo Inc.
$('#cypher').change(()=>{
    controller.toggleInc()
})
// Pedir pro controller trocar o nome do botão de acordo com a escolha dos Radio Buttons.
$('input[name="encodeco"]').change(()=>{
    controller.toggleButton()
})
