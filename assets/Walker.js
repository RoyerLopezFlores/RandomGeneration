const dx = [1,1,0,-1,-1,-1,0,1]
const dy = [0,-1,-1,-1,0,1,1,1]

class Walker{
    constructor({pos,color = "black",context=null}){
        this.pos = pos;
        this.color = color;
        this.context = context;
    }
    setContext(context){
        this.context = context;
    }
    setColor(color){
        this.color = color;
    }
    move(){
        const rn = getRandomInteger(0,dx.length-1);
        this.pos.x += dx[rn];
        this.pos.y += dy[rn];
    }
    draw(context){
        context.save();
        context.fillStyle=this.color;
        context.fillRect(this.pos.x,this.pos.y,1,1);
        context.restore();
    }
    moveAndDrawRadio(radio = 1,context = null){
        for(let i=0;i<radio;i++){
            this.move();
            if(!context) this.drawContext();
            else this.draw(context);
        }   
    }
    drawContext(){
        const {x,y} = this.pos;
        this.context.save();
        this.context.fillStyle = this.color;
        this.context.fillRect(x,y,1,1);
        this.context.restore();
    }
}