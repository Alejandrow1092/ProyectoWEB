
const num =["uno", "dos", "tres", "cuatro", "cinco", "seis"];
const num1=["uno1", "dos1", "tres1", "cuatro1", "cinco1", "seis1",
"uno2", "dos2", "tres2", "cuatro2", "cinco2", "seis2"];
const nh=["nombreHex11", "nombreHex22"];
let cont=0;//indica el indice donde se guardara en el arreglo hex
let cont1=0;//contador que recorre el arreglo num
let casilla; //guarda algunos elementos de del DOM
let bandera=0; //bandera que dice si se calculo un hexagrama compuesto
let indice=[]; //arreglo que guarda los yin/yan mutantes
let nombres=[]//aqui guardo los numeros de los nombres
let hex=[];//Arreglo que contendra nuestro index;
let copiaHex=[];

let leftInicial=-150;
let botInicial=0;

const list=[[1,1,1,1,1,1,"Ch'ien", 1],[2,2,2,2,2,2,"k'un",2],
            [2,1,2,2,2,1,"Chun",3],[1,2,2,2,1,2,"Meng",4],[2,1,2,1,1,1,"Hsu",5],
            [1,1,1,2,1,2,"Sung",6],[2,2,2,2,1,2,"Shih",7],[2,1,2,2,2,2,"PI",8],[1,1,2,1,1,1,"Hsiao Chu",9],
            [1,1,1,2,1,1,"Lu",10],[2,2,2,1,1,1,"t'ai",11],[1,1,1,2,2,2,"P'i",12],[1,1,1,1,2,1,"T'ung Jen",13], 
            [1,2,1,1,1,1,"Ta yu",14], [2,2,2,1,2,2,"Ch'ien",15], [2,2,1,2,2,2,"Yü",16], [2,1,1,2,2,1,"Sui",17], 
            [1,2,2,1,1,2,"Ku",18], [2,2,2,2,1,1,"Lin",19], [1,1,2,2,2,2,2,"kuan",20], [1,2,1,2,2,1,"Shih Ho",21], 
            [1,2,2,1,2,1,"Pi",22], [1,2,2,2,2,2,"Po",23], 
            [2,2,2,2,2,1,"Fu",24], [1,1,1,2,2,1,"Wu Wang",25], [1,2,2,1,1,1,"Ta Ch'u",26], [1,2,2,2,2,1,"I",27], 
            [2,1,1,1,1,2,"Ta kuo",28], [2,1,2,2,1,2,"K'an",29], [1,2,1,1,2,1,"Li",30], [2,1,1,1,2,2,"Hsien",31], 
            [2,2,1,1,1,2,"Heng",32], [1,1,1,1,2,2,"Tun",33], 
            [2,2,1,1,1,1,"Ta Chuang",34], [1,2,1,2,2,2,"Chin",35], [2,2,2,1,2,1,"Ming I",36], [1,1,2,1,2,1,"Chia Jen",37], 
            [1,2,1,2,1,1,"K'uei",38], [2,1,2,1,2,2,"Chien",39], 
             [2,2,1,2,1,2,"Hsieh",40], [2,2,1,2,1,2,"Sun",41], [1,1,2,2,2,1,"I",42], [2,1,1,1,1,1,"Kuai",43], [1,1,1,1,1,2,"Kou",44], 
             [2,1,1,2,2,2,"Ts'ui",45], [2,2,2,1,1,2,"Sheng",46], 
            [2,1,1,2,1,2,"K'un",47], [2,1,2,1,1,2,"Ching",48], [2,1,1,1,2,1,"Ko",49], 
            [1,2,1,1,1,2,"Ting",50], ["Chen",51], ["Ken",52], [1,1,2,1,2,2,"Chien",53]
            , [2,2,1,2,1,1,"Kuei Mei", 54], [2,2,1,1,2,1,"Feng", 55], [1,2,1,1,2,2,"Lü",56], 
            [1,1,2,1,1,2,"Sun", 57], [2,1,1,2,1,1,"Tui", 58], 
            [1,1,2,2,1,2,"Huan", 59], [2,1,2,2,1,1,"Chieh", 60], [1,1,2,2,1,1,"Chung Fu", 61], 
            [2,2,1,1,2,2,"Hsiao Kuo", 62]
            , [2,1,2,1,2,1,"Chi Chi", 63], [1,2,1,2,1,2,"Wei Chi", 64]];



/*Funcion que hace la suma de la caja*/
function calcula(){
    

    let campos; //campos a leer
    let suma=0;
    let busqueda;
    
    
    campos=document.getElementsByName("ingresa");

    for(x=0; x<campos.length;x++){
        suma=suma+parseInt(campos[x].value, 10);

    }
    if(cont<6){
        dibuja(suma);
        if(cont==6){

            
                if(indice[0]==null){
                    busqueda=nombre(hex);
                    casilla=document.getElementById("nombreHex");
                    casilla.style.bottom=0+"px";
                    casilla.style.left=80+"px";
                    
                    casilla.innerHTML=""+busqueda[7] +" "+busqueda[6];
                    
                    nombres.push(busqueda[7]);
                   
                    bnadera=0;
                    
                }
                else{
                    botInicial=0;
                    copiaHex=hex.slice();
                    corrige();
                    
                    document.getElementById("nombreHex").innerHTML="";
                    bandera=1;
                } 
        }
    }
    else{
        alert("Hexagrama lleno");
    }
    
}

function dibuja(suma){
    if(suma==6){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "_________ x ________";
        hex.push(3); 
        animacion(num[cont]);
        indice.push(cont);
        cont++;
    }
    else if(suma==7){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "___________________";
        animacion(num[cont]);
        hex.push(1);
        cont++;
    }
    else if(suma==8){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= `_________   _________`;
        animacion(num[cont]);
        hex.push(2);
        cont++;
    }
    else if(suma==9){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "_________ 0 ________";
        animacion(num[cont]);
        hex.push(4); 
        indice.push(cont);
        cont++;
    }
    else{
        alert(`Valores no definidos`);
        return 0;
    }
    
   
}

function borrarLine(){
    botInicial-=30;
    cont1=0; 
    nombres=[];
    
    //hex=new Array();

    if(bandera==1){
        document.getElementById("hexagrama1").style.visibility="hidden"
        document.getElementById("hexagrama2").style.visibility="hidden"
    }
    
    cont--;

    console.log(`valor del cont ${cont}
                valor de hex ${hex[cont]}`);

    

    for(x=0;copiaHex[x]!=null;x++){
        console.log(`valor de hex ${copiaHex[x]}, x: ${x}`);
    }

    if(hex[cont]===4 || hex[cont]===3){
        indice.pop();
        console.log("entro al if")
        //if(indice[0]==null) bandera=0;
    }

    hex.pop(); 

    
    //borro el nombre
    document.getElementById("nombreHex").innerHTML=" ";
    //borro el elemento
    casilla=document.getElementById(num[cont])

    if(casilla!=null){
        casilla.innerHTML=" ";
    }
    if(cont==-1){
        bandera=0;
        cont=0;
        document.getElementById("nombreHex").innerHTML=" ";
        hex=[];
        indice=[];
        leftInicial=-150;
        botInicial=0;
    }
    //console.log(`Use: ${num[cont]}`);
}

function borrarHex(){


     cont=0;
     cont1=0;
      bandera=0;
    indice=[];
    nombres=[];
    hex=[];
    leftInicial=-150;
    botInicial=0;    
        document.getElementById("hexagrama1").style.visibility="hidden"
        document.getElementById("hexagrama2").style.visibility="hidden"
    

    document.getElementById("hexagrama").innerHTML=` <div id="seis"></div>
    <div id="cinco"></div>
    <div id="cuatro"></div>
    <div id="tres"></div>
    <div id="dos"></div>
    <div id="uno"></div>
    <div id="nombreHex"></div>`;

    document.getElementById("hexagrama1").innerHTML=`<div id="seis1"></div>
    <div id="cinco1"></div>
    <div id="cuatro1"></div>
    <div id="tres1"></div>
    <div id="dos1"></div>
    <div id="uno1"></div>
    <div id="nombreHex11"></div>`
    document.getElementById("hexagrama2").innerHTML=`<div id="seis2"></div>
    <div id="cinco2"></div>
    <div id="cuatro2"></div>
    <div id="tres2"></div>
    <div id="dos2"></div>
    <div id="uno2"></div>
    <div id="nombreHex22"></div>`
}

function nombre(Hex){
let cuenta=0;
let averts;

    for(y=0;y<64;y++){

        averts=list[y];

        for(x=0; x<6;x++){
            if(Hex[x]==averts[x]){
                cuenta+=1;
            }
            else break;
        }

        if(cuenta==(6)){
            return averts;
        }
        else cuenta=0;     
    }
    
}


function corrige(){
    let x=0;
    
        for(x=0;indice[x]!=null; x++){
            if(copiaHex[indice[x]]===3){
                copiaHex[indice[x]]=1;
            }
            else{
                copiaHex[indice[x]]=2;
            }
        }
        console.log(`valores left ${leftInicial}  bot ${botInicial}` );
        defineCSS("hexagrama1");
        dibujaa(0);

        for(x=0;indice[x]!=null; x++){
            if(copiaHex[indice[x]]===1){
                copiaHex[indice[x]]=2;
            }
            else copiaHex[indice[x]]=1;
        }

        defineCSS("hexagrama2");
        botInicial=0;
        console.log(`valores left ${leftInicial}  bot ${botInicial}` );
        dibujaa(1);
}
    


function dibujaa(f){
    let busqueda;

        for(x=0;x<6;x++){
            if(indice[x]!=null && indice[x]==x){
                if(copiaHex[indice[x]]==1){
                
                    document.getElementById(num1[cont1]).innerHTML="___________________";
                    animacion(num1[cont1]);
                }
                else{
                    
                    document.getElementById(num1[cont1]).innerHTML=`_________   _________`;
                    animacion(num1[cont1]);
                }
            }
            else{
                if(copiaHex[x]==1){
                    document.getElementById(num1[cont1]).innerHTML="___________________";
                    animacion(num1[cont1]); 
                }
                else{
                    document.getElementById(num1[cont1]).innerHTML=`_________   _________`;
                    animacion(num1[cont1]);
                }
            }
            
        cont1++;         

        }
        busqueda=nombre(copiaHex);
        casilla=document.getElementById(nh[f]);
        casilla.style.bottom=0+"px";
        casilla.style.left=80+"px";
        casilla.innerHTML=""+busqueda[7] +" "+busqueda[6];
        nombres.push(busqueda[7]); 

   
}


function defineCSS(nombre){
    //document.querySelector(nombre).setAttribute("style","visibility: visible");
    document.getElementById(nombre).style.visibility="visible"
}


function animacion(elem1){
    botInicial+=30;
    let id=setInterval(frame, 5);
    let elem=document.getElementById(elem1);
    
    elem.style.bottom=botInicial+"px";
    function frame(){
        if(leftInicial==25){
            clearInterval(id);
        }
        else{
            leftInicial++;
            elem.style.left=leftInicial+"px";

        }
    }
    leftInicial=-150;
}