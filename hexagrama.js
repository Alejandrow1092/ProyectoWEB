
const num =["uno", "dos", "tres", "cuatro", "cinco", "seis"];
let cont=0;
let casilla;
const nombres=new Array()//aqui guardo los numeros de los nombres


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
            busqueda=nombre(hex);
            document.getElementById("nombreHex").innerHTML=""+busqueda[7] +" "+busqueda[6];
            nombres.push(parseInt(busqueda[7], 10));
            console.log(`àverts ${nombres[0]}`)
        }
    }
    else{
        alert("Hexagrama lleno");
    }
    
}

function dibuja(suma){
    if(suma==6){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yin mutante";
        hex.push(3);
        cont++;
    }
    else if(suma==7){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yang";
        hex.push(1);
        cont++;
    }
    else if(suma==8){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yin";
        hex.push(2);
        cont++;
    }
    else if(suma==9){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yang mutante";
        hex.push(4);
        cont++;
    }
    else{
        alert(`Valores no definidos`);
        return 0;
    }
    
   
}

function borrarLine(){
    cont--;

    document.getElementById("nombreHex").innerHTML=" ";
    hex.pop(); nombres.pop();
    casilla=document.getElementById(num[cont])
    if(casilla!=null){
        casilla.innerHTML=" ";
    }
    if(cont==-1){
        cont=0;
        document.getElementById("nombreHex").innerHTML=" ";
        hex.pop();
    }
    console.log(`Use: ${num[cont]}`);
}

function borrarHex(){

}

function nombre(Hex){
let averts;
let cuenta=0;
    for(y=0;y<64;y++){

        averts=list[y];

        for(x=0; x<6;x++){
            console.log("valor de x "+x);
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