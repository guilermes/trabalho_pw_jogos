function respostas(){
       
       var acertos=0;
	   
       var resp0=document.formQuizz.r0.value;
	   var resp1=document.formQuizz.r1.value;
	   var resp2=document.formQuizz.r2.value;
	   var resp3=document.formQuizz.r3.value;
	   var resp4=document.formQuizz.r4.value;
	   var resp5=document.formQuizz.r5.value;
	   var resp6=document.formQuizz.r6.value;
	   var resp7=document.formQuizz.r7.value;
	   var resp8=document.formQuizz.r8.value;
	   var resp9=document.formQuizz.r9.value;
       var result="";

	   var resposta=[];// resposta é uma variável vetor
	    resposta[0] = "Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa.";
		resposta[1] = "Inteiro, Lógico, Caractere, Double";
		resposta[2] = "Verdadeiro, Falso";
		resposta[3] = "Local na memória RAM do computador utilizado para armazenar temporariamente dados que são utilizados pelo programa.";
		resposta[4] = "Um laço while repete o bloco de código associado enquanto um teste lógico realizado retornar verdadeiro.";
		resposta[5] = "Calcular o resto de uma divisão inteira.";
		resposta[6] = "AND retorna V apenas se todas as expressões de entrada forem verdadeiras, e o OR retorna V se ao menos uma delas for verdadeira.";
		resposta[7] = "+";
		resposta[8] = "Uma biblioteca é um arquivo que organiza código pré-definido para o uso em aplicações.";
		resposta[9] = "Um array é uma estrutura que pode armazenar uma série de elementos de dados de mesmo tipo.";
        
	     if ((resp0=="")&& (resp1=="")&& (resp2=="")&& (resp3=="")&& (resp4=="") && (resp5=="")&& (resp6=="")&& (resp7=="")&& (resp8=="")&& (resp9=="")) result="no";
		if(result!= "no")
		{
		if(resp0 == resposta[0]) acertos=acertos+1;//acertos++
		if(resp1 == resposta[1]) acertos=acertos+1;
		if(resp2 == resposta[2]) acertos=acertos+1;
		if(resp3 == resposta[3]) acertos=acertos+1;
		if(resp4 == resposta[4]) acertos=acertos+1;
		if(resp5 == resposta[5]) acertos=acertos+1;
		if(resp6 == resposta[6]) acertos=acertos+1;
		if(resp7 == resposta[7]) acertos=acertos+1;
		if(resp8 == resposta[8]) acertos=acertos+1;
		if(resp9 == resposta[9]) acertos=acertos+1;
		 
		porcentagem=(acertos/10)*100;
		alert('Total de Acertos ='+acertos + ' com um total de ' + Math.round(porcentagem)+ ' % '); 
		if(Math.round(porcentagem)<=31) alert ('Que fraquinho, somente ' + Math.round(porcentagem)+ ' % ');
		else  if (Math.round(porcentagem)<50) alert ('Por pouco você não chegou a 50%, pois acertou somente ' + Math.round(porcentagem)+ ' % ');
		else  if (Math.round(porcentagem)<=69) alert ('Fez uma média razoável , entre 50% e 69%,pois acertou ' + Math.round(porcentagem)+ ' % ');
		else  if (Math.round(porcentagem)<=79) alert ('Está legalzinho , ficou entre 50% e 79%, pois acertou ' + Math.round(porcentagem)+ ' % ');
		else  if (Math.round(porcentagem)<=89) alert ('Está bem , ficou entre 80% e 89%, pois acertou ' + Math.round(porcentagem)+ ' % ');
		else  if (Math.round(porcentagem)<=95) alert ('Muito bom , ficou entre 90% e 95%, pois acertou ' + Math.round(porcentagem)+ ' % ');
		else  alert ('Excelente, você é um expert  ,  pois acertou ' + Math.round(porcentagem)+ ' % ');
		  
		
		
		 
		} else alert("Você não escolheu nada !!!")
 }

 function mudaTema() {
    document.body.classList.toggle("dark");
    console.log("mudou")
  }