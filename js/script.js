// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto (diaSemana){
//     let diaSemanaTexto;
//     switch (diaSemana){
//         case 0 : 
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//         case 1 : 
//         diaSemanaTexto = 'Segunda';
//         return diaSemanaTexto;
//         case 2 : 
//         diaSemanaTexto = 'Terça';
//         return diaSemanaTexto;
//         case 3 : 
//         diaSemanaTexto = 'Quarta';
//         return diaSemanaTexto;
//         case 4 : 
//         diaSemanaTexto = 'Quinta';
//         return diaSemanaTexto;
//         case 5 : 
//         diaSemanaTexto = 'Sexta';
//         return diaSemanaTexto;
//         case 6 : 
//         diaSemanaTexto = 'Sabado';
//         return diaSemanaTexto;
//         default :
//         diaSemanaTexto = 'Invalido'
//         return diaSemanaTexto;
//     }
// }

// function getNomeMes (numeroMes){
//     let nomeMes;

//     switch (numeroMes){
//         case 0 : 
//         nomeMes = 'Janeiro';
//         return nomeMes;
//         case 1 : 
//         nomeMes = 'Fevereiro';
//         return nomeMes;
//         case 2 : 
//         nomeMes = 'Março';
//         return nomeMes;
//         case 3 : 
//         nomeMes = 'Abril';
//         return nomeMes;
//         case 4 : 
//         nomeMes = 'Maio';
//         return nomeMes;
//         case 5 : 
//         nomeMes = 'Maio';
//         return nomeMes;
//         case 6 : 
//         nomeMes = 'Junho';
//         return nomeMes;
//         case 7 : 
//         nomeMes = 'Julho';
//         return nomeMes;
//         case 8 : 
//         nomeMes = 'Agosto';
//         return nomeMes;
//         case 9 : 
//         nomeMes = 'Outubro';
//         return nomeMes;
//         case 10 : 
//         nomeMes = 'Novembro';
//         return nomeMes;
//         case 11 : 
//         nomeMes = 'Dezembro';
//         return nomeMes;
       
       
       
//     }
// }

// function zeroEsquerda (num){
//     return num >= 10 ? num : `0${num}`;
// }

// function criaDate(data){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}`+
// ` de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`)
// }

// h1.innerHTML = criaDate(data);


const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR',{ dateStyle: 'full', timeStyle: 'short'});