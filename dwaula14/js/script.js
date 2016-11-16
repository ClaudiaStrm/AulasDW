	/*FUNÇÕES JAVASCRIP*/

	function somar (val1,val2){
		return val1 + val2;
	} //fecha somar

	function subtrair (val1,val2){
		return val1 - val2;
	}//fecha subtrair

	function multiplicar (val1,val2){
		return val1 * val2;
	}//fecha multiplicar

	function dividir (val1,val2){
		return val1 / val2;
	}//fecha dividir

	function calcular(){
		//buscando os valores e convertendo
		var v1 = parseFloat(document.getElementById("val1").value);

		var v2 = parseFloat(document.getElementById("val2").value);

		console.log("teste v1: " +v1);
		console.log("teste v2: " +v2);

		//Buscando RadioButtons

		var rads = document.getElementsByName("rdcalc");

		var rdSelec = null;
		for (var i=0 ; i<rads.length ; i++) {
			if(rads[i].checked) {
				rdSelec = rads[i].value;
				}//fecha if
			}//fecha for

			console.log("radio selecionada: " +rdSelec);

			var result=0;

			switch(rdSelec){
				case 'somar':
					result = "Soma: " +somar(v1,v2);
				break;
				case 'subtrair' :
					result = "Subtração: " +subtrair(v1,v2);
				break;
				case 'multiplicar' :
					result = "Multiplicação: " +multiplicar(v1,v2);
				break;
				case 'dividir' :
					result = "Divisão: " +dividir(v1,v2);
				break;
				default: alert("Opção inválida!");
				break;

				}//fecha switch

			document.getElementById("resultado").innerHTML = 
				result;

			}//fecha calcular		