const fondo1 = new AdaptiveCanvas({id_root:"root"});
fondo1.createCanvas();

let walkers = Array.from({length:8}, ()=>{
    const w =  new Walker({pos:{
        x: fondo1.width/2,
        y:fondo1.height/2
    }})
    w.setContext(fondo1.context);
    return w;
})
console.log(walkers);
let i = 0;
const colors = ["black","blue","orange","violet"]
const types = ["nuevos","acelerar"];
let tipo = "acelerar";
let rad = 1;
setInterval(()=>{
    walkers.forEach((w)=>{
        //console.log(w)
        w.moveAndDrawRadio(rad);
    })
    i++;
    if(i%5000==0){
        console.log("AddWalkers")
        if(tipo == "nuevos"){
            const n = walkers.length;
            for(let i = 0;i<n;i++){
                walkers.push(new Walker({pos:{
                    x:walkers[i].pos.x,
                    y:walkers[i].pos.y    
                },color:colors[getRandomInteger(0,colors.length-1)],
                    context:fondo1.context}));
            }
            console.log(walkers); 
        }
        if(tipo == "acelerar"){
            rad*=2;
        }
              
    }
},1)