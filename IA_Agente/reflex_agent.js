// MIT License
// Copyright (c) 2020 Luis Espino
var contador = 0;
function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];


      	var action_result = reflex_agent(location, state);
      	document.getElementById("contingencia-menu").innerHTML+=`<li><a href="#">Location: ${location} -> Action: ${action_result}</a></li>`;
      	
      	conteo_estados();

      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		
        
        dirty_aleatorio();

		if(validar_finalizado()){
			document.getElementById("contingencia-menu").innerHTML+=`<li><a href="#">FINALIZADO!!!! TODOS LOS ESTADOS VISITADOS</a></li>`;
      	
		}
		else{
			setTimeout(function(){ test(states); }, 800);
		}

}

function conteo_estados(){
	if(states[0] === "A") {
        if(states[1] === "DIRTY" && states[2] === "DIRTY"){
            contador.estado0++;
            document.getElementById("estado0").innerHTML=contador.estado0;
        }else if(states[1] === "CLEAN" && states[2] === "DIRTY"){
            contador.estado1++;
            document.getElementById("estado1").innerHTML=contador.estado1;
        }else if(states[1] === "CLEAN" && states[2] === "CLEAN"){
            contador.estado4++;
            document.getElementById("estado4").innerHTML=contador.estado4;
        }else if(states[1] === "DIRTY" && states[2] === "CLEAN"){
            contador.estado5++;
            document.getElementById("estado5").innerHTML=contador.estado5;
        }
    }else{
        if(states[1] === "CLEAN" && states[2] === "DIRTY"){
            contador.estado2++;
            document.getElementById("estado2").innerHTML=contador.estado2;
        }else if(states[1] === "CLEAN" && states[2] === "CLEAN"){
            contador.estado3++;
            document.getElementById("estado3").innerHTML=contador.estado3;
        }else if(states[1] === "DIRTY" && states[2] === "DIRTY"){
            contador.estado6++;
            document.getElementById("estado6").innerHTML=contador.estado6;
        }else if(states[1] === "DIRTY" && states[2] === "CLEAN"){
            contador.estado7++;
            document.getElementById("estado7").innerHTML=contador.estado7;
        }
    }
}

function validar_finalizado(){
	console.log(contador)
	for (const [key, value] of Object.entries(contador)) {
	  if(value<2){
	    return false;
	  }
	}
	return true;
}

function dirty_aleatorio(){
	let al = Math.floor(Math.random()*(3-1)+1)
	let al_st =Math.floor(Math.random()*(3-1)+1)
	console.log('algo')
	if(al == 2){
	    if(states[1] == "CLEAN" && states[2]=="DIRTY"){
	    	states[1] = "DIRTY";
	    }
    	else if(states[1] == "DIRTY" && states[2]=="CLEAN"){
      		states[2] = "DIRTY";
   		}
    	else if(states[1] == "CLEAN" && states[2]=="CLEAN"){
      		if(al_st == 1){
        		states[1] = "DIRTY";
       		}
      		else if(al_st == 2){
        		states[2] = "DIRTY";
       		}
    	}

  }


}


var states = ["A","DIRTY","DIRTY"];
var contador = {
	estado0:0,
	estado1:0,
	estado2:0,
	estado3:0,
	estado4:0,
	estado5:0,
	estado6:0,
	estado7:0
}
test(states);