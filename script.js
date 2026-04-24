//função que será chamada quando clicar no botão
//função: um bloco de código reutilizável que executa uma tarefa específica
function calcular(){
    //--------------
    //1. PEGAR OS ELEMENTOS DA TELA
    //---------------

    //aqui pegamos cada checkbox pelo id
    let hamburguer = document.getElementById("Hambúrguer")
    let batata = document.getElementById("Batata")
    let nugget = document.getElementById("Nuggets")
    let coca = document.getElementById("Coca-Cola")
    let sorvete = document.getElementById("Sorvete")
    let pizza = document.getElementById("Pizza")
    //=================================
    //2 variaveis iniciais
    //=================================
    // total começa com 0
    let total = 0
    // string para guardaros itens escolhidos
    let itens = ""
    //=================================
    //3 verificar cada produto
    //=================================
    // se o checkbox estiver marcadi (true)
    if(hamburguer.checked){
        total = total + 25 // soma o valor do hamburguer
        itens = itens + "Hambúrguer 🍔<br>" // adiciona ao texto dos produtos
    }
    if(batata.checked){
        total = total + 12
        itens = itens + "Batata 🍟 <br>"
    }
    if(nugget.checked){
        total = total + 15
        itens = itens + "Nuggets 🐤 <br>"
    }
    if(coca.checked){
        total = total + 16
        itens = itens + "Coca-Cola 🥤 <br>"
    }
    if(sorvete.checked){
        total = total + 15
        itens = itens + "Sorvete 🍨 <br>"
    }
    if(pizza.checked){
        total = total + 85
        itens = itens + "Pizza 🍕 <br>"
    }
    //================================
    //4. PEGAR A DIV DO RESULTADO
    //================================
    let resultado = document.getElementById("resultado")

    //================================
    //5. VALIDAÇÃO  
    //===============================
    // Se não escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui
    }

    //================================
    //6. DESCONTO 
    //================================
    let subtotal = total
    let desconto = 0
    // se o valor for >= 30, aplicamos o dsconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.10 // 10%
    }
    //==============================
    //7. ENTREGA
    //==============================
    let entrega = 5
    // se passar de 50 -> entrega grátis
    if(subtotal - desconto >= 50){
        entrega = 0
    }
    //==============================
    //8. TOTAL FINAL
    //==============================
    let totalfinal = subtotal - desconto + entrega
    
    //==========================
    //9. MOSTRAR O RESULTADO
    //============================
    resultado.innerHTML = 
    "<strong>Itens:</strong><br>"+
    itens + 
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2) +
    "<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br><strong> Total: R$ " + totalfinal.toFixed(2) + "</strong>"
}