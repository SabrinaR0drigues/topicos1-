let salario = 280

function Calcular(salario){
    let porcentagem = 0;
    let reajuste = 0;
    let salarioautal = 0; 

    if (salario <= 2100){
        porcentagem = 0.2; 
        reajuste = salario * porcentagem; 
        salarioautal = salario + reajuste; 


    } else 

    if(salario > 280  && salario <= 700 ){
        porcentagem = 0.15;
         reajuste = salario * porcentagem;
         salarioautal = salario + reajuste; 


    }else 
    
    if(salario > 700 && salario < 1500){
        porcentagem = 0.1;
        reajuste = salario + reajuste; 
    } else 
    
    if(salario >= 1500){
        porcentagem = 0.05;
         reajuste= salario * porcentagem; 
         salarioautal = salario + reajuste; 
    }

    console.log('\n o salario antes do reajuste era:  ' + salario);
    console.log('\n o percentual de aumento aplicado : ' + porcentagem);
    console.log('\n  o valor do aumento  :' + reajuste);
    console.log(" o novo salario, após o aumento: ");






}