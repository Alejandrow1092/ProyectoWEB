
const num =["uno", "dos", "tres", "cuatro", "cinco", "seis"];
const num1=["uno1", "dos1", "tres1", "cuatro1", "cinco1", "seis1",
"uno2", "dos2", "tres2", "cuatro2", "cinco2", "seis2"];
const nh=["nombreHex11", "nombreHex22"];
let cont=0;
let cont1=0;
let casilla;
let bandera=0;
let indice=new Array();
let nombres=new Array()//aqui guardo los numeros de los nombres
const hex=new Array();//Arreglo que contendra nuestro index;

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
    
    
    campos=document.getElementsByName("ingresa");

    for(x=0; x<campos.length;x++){
        suma=suma+parseInt(campos[x].value, 10);

    }
    if(cont<6){
        dibuja(suma);
        if(cont==6){
                
                console.log(`el valor de indice es: ${indice[0]}`)
                if(indice[0]!=null){
                    corrige();
                    document.getElementById("nombreHex").innerHTML="";
                    bandera=1;
                }
                else{
                    busqueda=nombre(hex);
                    document.getElementById("nombreHex").innerHTML=""+busqueda[7] +" "+busqueda[6];
                    nombres.push(busqueda[7]);
                    console.log(`àverts ${nombres[0]}`)
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
        hex.push(3); indice.push(cont);
        cont++;
    }
    else if(suma==7){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "___________________";
        hex.push(1);
        cont++;
    }
    else if(suma==8){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= `_________   _________`;
        hex.push(2);
        cont++;
    }
    else if(suma==9){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "_________ 0 ________";
        hex.push(4); indice.push(cont);
       
        cont++;
    }
    else{
        alert(`Valores no definidos`);
        return 0;
    }
    
   
}

function borrarLine(){
    cont1=0; hex.pop(); nombres.pop();


    if(bandera==1){
        document.getElementById("hexagrama1").style.visibility="hidden"
        document.getElementById("hexagrama2").style.visibility="hidden"
    }
    //if(hex[cont-1]==4 || hex[cont-1]==3){
        //indice.pop();
    //

    cont--;

    if(hex[cont]===4 || hex[cont]===3){
        indice.pop();
    }
    

    //borro el nombre
    document.getElementById("nombreHex").innerHTML=" ";
    //borro el elemento
    casilla=document.getElementById(num[cont])

    if(casilla!=null){
        casilla.innerHTML=" ";
    }
    if(cont==-1){
        cont=0;
        document.getElementById("nombreHex").innerHTML=" ";
        hex.pop();
        indice=new Array();;
    }
    //console.log(`Use: ${num[cont]}`);
}

function borrarHex(){


     cont=0;
     cont1=0;
      bandera=0;
    indice=new Array();
    nombres=new Array();
    
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
let averts;
let cuenta=0;
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
            if(hex[indice[x]]===3){
                hex[indice[x]]=1;
            }
            else{
                hex[indice[x]]=2;
            }
        }

        defineCSS("hexagrama1");
        dibujaa(0);

        for(x=0;indice[x]!=null; x++){
            if(hex[indice[x]]===1){
                hex[indice[x]]=2;
            }
            else hex[indice[x]]=1;
        }

        defineCSS("hexagrama2");
        dibujaa(1);
}
    


function dibujaa(f){
    let busqueda;

        for(x=0;x<6;x++){
            console.log(`${hex[x]}`);
            if(hex[x]===1){
                console.log(`${num1[cont1]}`);
                document.getElementById(num1[cont1]).innerHTML="___________________";
            }
            else{
                console.log(`${num1[cont1]}`);
                document.getElementById(num1[cont1]).innerHTML=`_________   _________`;
            }
        cont1++;         
        //console.log(`El valor de cont es ${cont1}`)
        }

        busqueda=nombre(hex);
        document.getElementById(nh[f]).innerHTML=""+busqueda[7] +" "+busqueda[6];
        nombres.push(busqueda[7]); 

    return cont1;
}


function defineCSS(nombre){
    //document.querySelector(nombre).setAttribute("style","visibility: visible");
    document.getElementById(nombre).style.visibility="visible"
}