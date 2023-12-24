/*====  Declarando as variaveis ====*/
const nome = document.getElementById("ipNome");
const peso = document.getElementById("ipPeso");
const altura = document.getElementById("ipAltura");
const btn = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

//Envento de click
btn.addEventListener("click", (e)=>{

    e.preventDefault();

    /*==== Pegando os valores do input ====*/
    let vNome = nome.value;
    let vPeso = peso.value;
    let vAltura = altura.value;

    if(vNome == "" && vPeso == "" && vAltura == "")
    {
        alert("Preencha todos os campos a baixos para obter o resultado desejado!");
    }
    else
    {
        //Formula para calcular o IMC 
        //A função toFixed serve para Arendodar 
        const valueIMC = (vPeso /(vAltura * vAltura)).toFixed(2);

        let classificao = "";

        //Condicionais
        if(valueIMC < 18.5)
        {
            classificao = "estas a baixo do peso.";
        }
        else if(valueIMC < 25)
        {
            classificao = "o teu peso é ideal, Parabens!";
        }
        else if(valueIMC < 30)
        {
            classificao = "estas a cima do peso.";
        }
        else if(valueIMC < 35)
        {
            classificao = "estas com obesidade grau I.";
        }
        else if(valueIMC < 40)
        {
            classificao = "estas com obesidade grau II.";
        }
        else{
            classificao = "estas com obesidade grau III.";
        }

        //Iprimindo o valor resultado
        //console.log(vNome, "o teu IMC é ", valueIMC, classificao);

        resultado.innerHTML = `<span class="green">${vNome}<span> o teu IMC é <span class="color-green" >${valueIMC}<span> ${classificao}`;
    }
});

// Este programa foi criado pelo Emanuel Malungo 24/12/2023