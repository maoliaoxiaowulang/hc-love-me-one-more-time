import { _decorator, Color, Component, Graphics, Vec2,Sprite, EventTouch, Vec3, v3,Node, v2,dragonBones, Camera,instantiate,Prefab, sp} from 'cc';
const { ccclass, property } = _decorator;
const { CCArmatureDisplay } = dragonBones;;


@ccclass('aim')
export class aim extends Component {
        // 网格大小（每个单元格的尺寸）
        @property
        cellside: number = 120;
    
        // 网格的行数和列数
        @property
        rows: number = 10;
    
        @property
        cols: number = 10;

        @property(Node)
        aim: Node = null;

        @property(Node)
        canvas: Node = null;

        @property(Camera)
        camera:Camera=null;

        @property(Prefab)
        nothing: Prefab = null;

        @property(Prefab)
        explosion: Prefab = null;

        @property(Prefab)
        hit: Prefab = null;

        @property(Node)
        planebody: Node = null;

        @property(Node)
        planehead: Node= null;

        



        private lastTouchTime: number = 0;  // 上一次点击的时间
        private doubleClickInterval: number = 300;  // 双击间隔 (单位：毫秒)
    start() {
        this.aim.position = new Vec3(0, 0, 0);  // 使用 position 设置位置
        this.aim.active=false;
       
        
        // 监听精灵的触摸/鼠标事件
        this.canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.canvas.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        


    }

    update(deltaTime: number) {
        
    }

    onTouchStart(event: EventTouch) {
        this.aim.active = true;
        let pos = event.getStartLocation();
        
        let out = new Vec3;
        this.camera.screenToWorld(v3(pos.x,pos.y),out);
        
        this.aim.setWorldPosition(out);
        
        this.aim.position=this.alignToGrid(this.aim.position)
    }

    private onTouchEnd(event: EventTouch) {
        const now = Date.now();  // 获取当前时间
        if (now - this.lastTouchTime <= this.doubleClickInterval) {
            // 判断是否为双击
            const touchLocation = event.getLocation();  // 获取触摸位置
            this.showeff(v3(touchLocation.x,touchLocation.y));  // 在触摸点显示效果
        }
        this.lastTouchTime = now;  // 更新点击时间
    }

    private showeff(pos: Vec3) {    
        this.aim.active = false;
        let out = new Vec3;
        this.camera.screenToWorld(v3(pos.x,pos.y),out);
        let angelout = this.alignToGrid(v3(out.x-640,out.y-360,0));
        
        if (angelout.equals(this.alignToGrid(v3(this.planehead.worldPosition.x-640,this.planehead.worldPosition.y-360,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            
            return;
        }
        for (const element of this.planebody.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-640,element.worldPosition.y-360,0)))){
                const bodynode = instantiate(this.hit);
                this.canvas.addChild(bodynode);
                bodynode.setWorldPosition(out);
                bodynode.position=this.alignToGrid(bodynode.position)
                return;
            }
        }
        const nothingnode = instantiate(this.nothing);
        this.canvas.addChild(nothingnode);
        nothingnode.setWorldPosition(out);
        nothingnode.position=this.alignToGrid(nothingnode.position)
        
        
    }

 

    alignToGrid(position: Vec3) {
        // 计算精灵占用的网格区域的中心位置，精灵的中心应当对齐到网格中心
        var alignedX = Math.floor(position.x  / this.cellside) * this.cellside +this.cellside/2 ;
        var alignedY = Math.floor(position.y / this.cellside) * this.cellside +this.cellside/2 ;
        return new Vec3(alignedX, alignedY, position.z);
        }

}   

