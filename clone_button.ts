import { _decorator, Component, Node,Button, director } from 'cc';
import { global } from './global';
const { ccclass, property } = _decorator;

@ccclass('clone_button')
export class clone_button extends Component {
    @property(Node)
    cloneplane: Node = null;

    @property(Button)
    cloneyes: Button = null;

    @property(Button)
    cloneno: Button = null;

    

    start() {
        this.cloneyes.node.on(Node.EventType.TOUCH_START,this.plane_place,this);
        this.cloneno.node.on(Node.EventType.TOUCH_END,this.plane_destory,this);
        let plane = this.cloneplane.getChildByName('plane');
            let children = plane.children;
            for(let child of children){
        child.on(Node.EventType.TOUCH_START,this.activebutton,this)}

    }

    update(deltaTime: number) {
        
    }

    plane_place(){
        this.cloneyes.node.active = false;
        this.cloneno.node.active = false;
        this.cloneyes.node.off(Node.EventType.TOUCH_START,this.plane_place,this);
        this.cloneno.node.off(Node.EventType.TOUCH_START,this.plane_destory,this);
        
        

    }

    plane_destory(){
        global.currentnode= this.cloneplane;
        this.cloneplane.emit('planedestory')
        
        this.cloneyes.node.off(Node.EventType.TOUCH_START,this.plane_place,this);
        this.cloneno.node.off(Node.EventType.TOUCH_START,this.plane_destory,this);
        let plane = this.cloneplane.getChildByName('plane');
            let children = plane.children;
            for(let child of children){
        child.off(Node.EventType.TOUCH_START,this.activebutton,this)}

        
    }

    activebutton(){
        if (this.cloneyes.node.active === false && this.cloneno.node.active === false){
            this.cloneyes.node.active = true;
            this.cloneno.node.active = true;
            this.cloneyes.node.on(Node.EventType.TOUCH_START,this.plane_place,this);
            this.cloneno.node.on(Node.EventType.TOUCH_START,this.plane_destory,this);
          

        }
        
    }

    
}


