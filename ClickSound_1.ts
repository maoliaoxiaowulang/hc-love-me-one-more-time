import { _decorator, Component, Node, EventTouch, SystemEvent, AudioClip,EventMouse,Vec3 ,Camera,v3} from 'cc';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;

@ccclass('ClickSound_1')
export class ClickSound_1 extends Component {

    @property
    cellside: number = 120;

    @property
        rows: number = 10;
    
        @property
        cols: number = 10;


    @property(AudioClip)
    private clickSound: AudioClip = null;

    @property(Camera)
    camera:Camera=null;

    @property(Node)
        mapnode: Node= null;
    

    @property(Node)
        aim: Node = null;


    start() {

        this.aim.position = new Vec3(0, 0, 0);  // 使用 position 设置位置
        this.aim.active=false;
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);

    }

    update(deltaTime: number) {
        
    }

    onTouchStart(event: EventTouch) {
        this.aim.active = true;
        let pos = event.getStartLocation();
        
        let out = new Vec3;
        this.camera.screenToWorld(v3(pos.x,pos.y),out);
        if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
           {return;} 
        this.aim.setWorldPosition(out);
        AudioMgr.inst.playOneShot(this.clickSound,1);
       
        this.aim.position=this.alignToGrid(this.aim.position)
    }

    alignToGrid(position: Vec3) {
        // 计算精灵占用的网格区域的中心位置，精灵的中心应当对齐到网格中心
        var alignedX = Math.floor(position.x  / this.cellside) * this.cellside +this.cellside/2 ;
        var alignedY = Math.floor(position.y / this.cellside) * this.cellside +this.cellside/2 ;
        return new Vec3(alignedX, alignedY, position.z);
        }
}


