class AdaptiveCanvas{
    constructor({id_root,over=false,props}){
        this.id_root = id_root;
        this.over = over;
    }
    createCanvas(){
        const root = document.getElementById(this.id_root);
        const canvas = document.createElement("canvas");
        const {width,height} = root.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        if(this.over){
            canvas.style.position = "absolute";
            canvas.style.left= "0";
        }
        const context = canvas.getContext("2d");
        root.append(canvas);
        this.root = root;
        this.canvas = canvas;
        this.context = context;
        this.width = width;
        this.height = height;
    }
    limpiar(){
        this.context.clearRect(0,0,this.width,this.height);
    }
}