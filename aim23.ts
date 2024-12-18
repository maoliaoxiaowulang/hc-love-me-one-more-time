import { _decorator, Color, Component, Graphics, Vec2,Sprite, AudioClip,EventTouch, Vec3, v3,Node, v2,dragonBones, Camera,instantiate,Prefab, sp, Label,director,Canvas} from 'cc';
const { ccclass, property } = _decorator;
const { CCArmatureDisplay } = dragonBones;;
import { global } from './global';
import { global4 } from './global4';
import { globalstarnum } from './unlock';
import { AudioMgr } from './AudioMgr';

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

        @property(Node)
        planebody2: Node = null;

        @property(Node)
        planehead2: Node= null;

        @property(Node)
        planebody3: Node = null;

        @property(Node)
        planehead3: Node= null;

        @property(Node)
        planebody4: Node = null;

        @property(Node)
        planehead4: Node= null;

        @property(Node)
        planebody5: Node = null;

        @property(Node)
        planehead5: Node= null;

        @property(Node)
        planebody6: Node = null;

        @property(Node)
        planehead6: Node= null;

        @property
        threestar:number=30;

        @property
        twostar:number=30;

        @property
        onestar:number=30;

        @property
        headnumber:number=5;

        @property(Canvas)
        canvas1: Canvas = null;
    
        @property(Canvas)
        canvas2: Canvas = null;

        @property(Canvas)
        canvas3: Canvas = null;

        @property(Node)
        star3: Node= null;

        @property(Node)
        star2: Node= null;

        @property(Node)
        star1: Node= null;

        @property(Node)
        nextlevel: Node= null;
       
       
       
       
        @property(Node)
        againlevel: Node= null;
       
       
        @property(Node)
        mapnode: Node= null;

        @property(Label)
        scoreLabel:Label=null;

        @property
        score:number=30;
        private fangdajing:boolean = false; //放大镜判断@@@@@@@@@@@@@
        @property(Node)
        fangdaaim:Node = null;//放大镜瞄准@@@@@@@@@@@@@@@

        private huojian:boolean = false; //火箭判断^^^^^^^^^^^^^^
        @property(Node)
        huojianaim:Node = null;//火箭瞄准^^^^^^^^^^^^

        private leida:boolean = false; //地雷判断!!!!!!!!!!!!!!
        @property(Node)
        leidaaim:Node = null;//地雷瞄准!!!!!!!!!!!!!!!!
        private gezi:Vec3[] = [];

        @property(AudioClip)
        private clickSound: AudioClip = null;

        @property(AudioClip)
        private clickSound_2: AudioClip = null;

        private lastTouchTime: number = 0;  // 上一次点击的时间
        private doubleClickInterval: number = 300;  // 双击间隔 (单位：毫秒)
    start() {
        global.currentnode = null;
        this.aim.position = new Vec3(0, 0, 0);  // 使用 position 设置位置
        this.aim.active=false;
        console.log(this.mapnode.worldPosition);
        director.on('fangda',this.fangda,this);//监听放大镜事件@@@@@@@@@@@@@@@@@@@
        this.fangdaaim.active = false;//放大镜瞄准初始状态@@@@@@@@@@@@@@@@

        director.on('huojian',this.huojianevent,this);//监听火箭事件^^^^^^^^^^^^^^
        this.huojianaim.active = false;//火箭瞄准初始状态^^^^^^^^^^^^^^^^^

        director.on('leida',this.leidaevent,this);//监听雷达事件!!!!!!!!!!!!!!
        this.leidaaim.active = false;//雷达瞄准初始状态!!!!!!!!!!!!!!!!!!!!!!
        // 监听精灵的触摸/鼠标事件
        this.canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.canvas.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.scoreLabel.string=`${this.score}`;


    }

    update(deltaTime: number) {
        
    }

    onTouchStart(event: EventTouch) {
        //放大镜@@@@@@@@@@@@@@@@@@@@@@@
        if(this.fangdajing == true){
            this.aim.active = false;
            this.huojianaim.active = false;
            this.leidaaim.active = false;
            this.fangdaaim.active = true;
            let pos = event.getStartLocation();
            
            let out = new Vec3;
            this.camera.screenToWorld(v3(pos.x,pos.y),out);
            if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
               {return;} 
            this.fangdaaim.setWorldPosition(out);
           
            this.fangdaaim.position=this.alignToGrid(this.fangdaaim.position)
            return
           }
           //放大镜结束@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
            //火箭^^^^^^^^^^^^^^^^^^^^^^^^^
            if(this.huojian == true){
                this.aim.active = false;
                this.fangdaaim.active = false;
                this.huojianaim.active = true;
                this.leidaaim.active = false;
                let pos = event.getStartLocation();
                
                let out = new Vec3;
                this.camera.screenToWorld(v3(pos.x,pos.y),out);
                if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
                   {return;} 
                this.huojianaim.setWorldPosition(out);
               
                this.huojianaim.position=this.alignToGrid(this.huojianaim.position)
                return
            }
            //火箭结束^^^^^^^^^^^^^^^^^^^^^
    
      
            //地雷!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if(this.leida == true){
                this.aim.active = false;
                this.fangdaaim.active = false;
                this.huojianaim.active = false;
                this.leidaaim.active = true;
                let pos = event.getStartLocation();
                
                let out = new Vec3;
                this.camera.screenToWorld(v3(pos.x,pos.y),out);
                if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
                   {return;} 
                this.leidaaim.setWorldPosition(out);
               
                this.leidaaim.position=this.alignToGrid(this.leidaaim.position)
                return
            }
        this.aim.active = true;
        let pos = event.getStartLocation();
        
        let out = new Vec3;
        this.camera.screenToWorld(v3(pos.x,pos.y),out);
        if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
           {return;}
        this.aim.setWorldPosition(out);
        
        this.aim.position=this.alignToGrid(this.aim.position)
    }

    private onTouchEnd(event: EventTouch) {
        const now = Date.now();  // 获取当前时间
        if (now - this.lastTouchTime <= this.doubleClickInterval) {
            // 判断是否为双击
           
            const touchLocation = event.getLocation();  // 获取触摸位置
            let out = new Vec3;
            this.camera.screenToWorld(v3(touchLocation.x,touchLocation.y),out);
            let angelout = this.alignToGrid(v3(out.x-this.mapnode.worldPosition.x,out.y-this.mapnode.worldPosition.y,0));
                  for (let i =0;i<this.gezi.length;i++){
                          if (angelout.equals(this.gezi[i])){
                        return;}

                          }
            this.gezi.push(angelout);
            //放大镜@@@@@@@@@@@@@@@@@@@@@@@@
            if(this.fangdajing == true){
               
                this.huojianshoweff(v3(touchLocation.x,touchLocation.y));
                
                this.scoreLabel.string=`${this.score}`;
                this.fangdajing = false;
                this.fangdaaim.active = false;
                if(this.score==0&&this.headnumber!=0){
                    this.canvas3.node.active = true;
                    this.againlevel.active = true;
                    return;
                }
            }
            //放大镜结束@@@@@@@@@@@@@@@@@@@@@@@@@


            //火箭^^^^^^^^^^^^^^^^^^^^^^^^^
            if(this.huojian == true){
                for( let i=-30;i<31;i++){
                this.huojianshoweff(v3(touchLocation.x,touchLocation.y+i*this.cellside/3));
             
                this.scoreLabel.string=`${this.score}`;
            }
                this.score +=1;
                this.scoreLabel.string=`${this.score}`;
                this.huojian = false;
                this.huojianaim.active = false;
                if(this.score==0&&this.headnumber!=0){
                    this.canvas3.node.active = true;
                    this.againlevel.active = true;
                    return;
                }
            }
            //火箭结束^^^^^^^^^^^^^^^^^^^^^^^

           
            //雷达!!!!!!!!!!!!!!!!!!!!!!!!!
            if(this.leida == true){
                for( let i=-1;i<2;i++){
                this.huojianshoweff(v3(touchLocation.x,touchLocation.y+i*50));
           
                this.scoreLabel.string=`${this.score}`;
            }
            for( let i=-1;i<2;i++){
                this.huojianshoweff(v3(touchLocation.x+i*50,touchLocation.y));
         
                this.scoreLabel.string=`${this.score}`;
            }
                this.score +=1;
                this.scoreLabel.string=`${this.score}`;
                this.leida = false;
                this.leidaaim.active = false;
                if(this.score==0&&this.headnumber!=0){
                    this.canvas3.node.active = true;
                    this.againlevel.active = true;
                    return;
                }
            }
            this.showeff(v3(touchLocation.x,touchLocation.y));  // 在触摸点显示效果
            this.updateScoreDisplay();
            if(this.score<=0&&this.headnumber!=0){
                global.currentnode = null;
                this.canvas3.node.active = true;
                this.againlevel.active = true;
                return;
            }
        }
        this.lastTouchTime = now;  // 更新点击时间
    }

    private showeff(pos: Vec3) {    
        this.aim.active = false;
        let out = new Vec3;
        this.camera.screenToWorld(v3(pos.x,pos.y),out);
        if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
           {this.score+=1;
            return;}
        let angelout = this.alignToGrid(v3(out.x-this.mapnode.worldPosition.x,out.y-this.mapnode.worldPosition.y,0));
        
        if (angelout.equals(this.alignToGrid(v3(this.planehead.worldPosition.x-this.mapnode.worldPosition.x,this.planehead.worldPosition.y-this.mapnode.worldPosition.y,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            this.finishjudge();
            AudioMgr.inst.playOneShot(this.clickSound,1);
            return;
        }
        if (angelout.equals(this.alignToGrid(v3(this.planehead2.worldPosition.x-this.mapnode.worldPosition.x,this.planehead2.worldPosition.y-this.mapnode.worldPosition.y,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            this.finishjudge();
            AudioMgr.inst.playOneShot(this.clickSound,1);
            return;
        }
        if (angelout.equals(this.alignToGrid(v3(this.planehead3.worldPosition.x-this.mapnode.worldPosition.x,this.planehead3.worldPosition.y-this.mapnode.worldPosition.y,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            this.finishjudge();
            AudioMgr.inst.playOneShot(this.clickSound,1);
            return;
        }
        if (angelout.equals(this.alignToGrid(v3(this.planehead4.worldPosition.x-this.mapnode.worldPosition.x,this.planehead4.worldPosition.y-this.mapnode.worldPosition.y,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            this.finishjudge();
            AudioMgr.inst.playOneShot(this.clickSound,1);
            return;
        }
        if (angelout.equals(this.alignToGrid(v3(this.planehead5.worldPosition.x-this.mapnode.worldPosition.x,this.planehead5.worldPosition.y-this.mapnode.worldPosition.y,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            this.finishjudge();
            AudioMgr.inst.playOneShot(this.clickSound,1);
            return;
        }
        if (angelout.equals(this.alignToGrid(v3(this.planehead6.worldPosition.x-this.mapnode.worldPosition.x,this.planehead6.worldPosition.y-this.mapnode.worldPosition.y,0)))){
            const headnode = instantiate(this.explosion);
            this.canvas.addChild(headnode);
            headnode.setWorldPosition(out);
            headnode.position=this.alignToGrid(headnode.position)
            this.finishjudge();
            AudioMgr.inst.playOneShot(this.clickSound,1);
            return;
        }
        for (const element of this.planebody.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const bodynode = instantiate(this.hit);
                this.canvas.addChild(bodynode);
                bodynode.setWorldPosition(out);
                bodynode.position=this.alignToGrid(bodynode.position)
                return;
            }
        }
        for (const element of this.planebody2.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const bodynode = instantiate(this.hit);
                this.canvas.addChild(bodynode);
                bodynode.setWorldPosition(out);
                bodynode.position=this.alignToGrid(bodynode.position)
                return;
            }
        }
        for (const element of this.planebody3.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const bodynode = instantiate(this.hit);
                this.canvas.addChild(bodynode);
                bodynode.setWorldPosition(out);
                bodynode.position=this.alignToGrid(bodynode.position)
                return;
            }
        }
        for (const element of this.planebody4.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const bodynode = instantiate(this.hit);
                this.canvas.addChild(bodynode);
                bodynode.setWorldPosition(out);
                bodynode.position=this.alignToGrid(bodynode.position)
                return;
            }
        }
        for (const element of this.planebody5.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const bodynode = instantiate(this.hit);
                this.canvas.addChild(bodynode);
                bodynode.setWorldPosition(out);
                bodynode.position=this.alignToGrid(bodynode.position)
                return;
            }
        }
        for (const element of this.planebody6.children){
            if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
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
        AudioMgr.inst.playOneShot(this.clickSound_2,1); 
        
        
    }

 

    alignToGrid(position: Vec3) {
        // 计算精灵占用的网格区域的中心位置，精灵的中心应当对齐到网格中心
        var alignedX = Math.floor(position.x  / this.cellside) * this.cellside +this.cellside/2 ;
        var alignedY = Math.floor(position.y / this.cellside) * this.cellside +this.cellside/2 ;
        return new Vec3(alignedX, alignedY, position.z);
        }

        updateScoreDisplay(){
            if(this.scoreLabel){
                this.score-=1;
                this.scoreLabel.string=`${this.score}`;
            }
        }
        finishjudge(){
            this.headnumber-=1;
                    
                if(this.headnumber==0){
                    global.currentnode = null;
                        // this.canvas1.node.active = false;
                        this.canvas2.node.active = true;
                        this.nextlevel.active = true;
                        this.canvas.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
                        this.canvas.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);    
                        if(this.score>=this.threestar){
                              this.star3.active=true;
                              globalstarnum.starnum23=3;
                              return;
                        }
                        if(this.score>=this.twostar){
                            this.star2.active=true;
                            if( globalstarnum.starnum23<2)
                            globalstarnum.starnum23=2;
                            return;
                      }
                      if( globalstarnum.starnum23<1)
                      globalstarnum.starnum23=1;
                        this.star1.active=true;
                        return;
                }
        }
        onnextbuttonClick(){
            global4.canvasname4 = 'canvas24';
            director.loadScene('guanqia4');
        }
        againthislevel(){
            director.loadScene('guanqia4');
        }
        private huojianshoweff(pos: Vec3) {    
            this.aim.active = false;
            let out = new Vec3;
            this.camera.screenToWorld(v3(pos.x,pos.y),out);
            if (out.x <= this.mapnode.worldPosition.x-this.rows*this.cellside/2 || out.x >= this.mapnode.worldPosition.x+this.rows*this.cellside/2 || out.y <= this.mapnode.worldPosition.y-this.cols*this.cellside/2 || out.y >= this.mapnode.worldPosition.y+this.cols*this.cellside/2)
            {
                return;} 
            let angelout = this.alignToGrid(v3(out.x-this.mapnode.worldPosition.x,out.y-this.mapnode.worldPosition.y,0));
            for (let i =0;i<this.gezi.length;i++){
                if (angelout.equals(this.gezi[i])){
         
              return;}
    
                }
            this.gezi.push(angelout);
            if (angelout.equals(this.alignToGrid(v3(this.planehead.worldPosition.x-this.mapnode.worldPosition.x,this.planehead.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const headnode = instantiate(this.explosion);
                this.canvas.addChild(headnode);
                headnode.setWorldPosition(out);
                headnode.position=this.alignToGrid(headnode.position)
                this.finishjudge();
                AudioMgr.inst.playOneShot(this.clickSound,1);
                return;
            }
            if (angelout.equals(this.alignToGrid(v3(this.planehead2.worldPosition.x-this.mapnode.worldPosition.x,this.planehead2.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const headnode = instantiate(this.explosion);
                this.canvas.addChild(headnode);
                headnode.setWorldPosition(out);
                headnode.position=this.alignToGrid(headnode.position)
                this.finishjudge();
                AudioMgr.inst.playOneShot(this.clickSound,1);
                return;
            }
            if (angelout.equals(this.alignToGrid(v3(this.planehead3.worldPosition.x-this.mapnode.worldPosition.x,this.planehead3.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const headnode = instantiate(this.explosion);
                this.canvas.addChild(headnode);
                headnode.setWorldPosition(out);
                headnode.position=this.alignToGrid(headnode.position)
                this.finishjudge();
                AudioMgr.inst.playOneShot(this.clickSound,1);
                return;
            }
            if (angelout.equals(this.alignToGrid(v3(this.planehead4.worldPosition.x-this.mapnode.worldPosition.x,this.planehead4.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const headnode = instantiate(this.explosion);
                this.canvas.addChild(headnode);
                headnode.setWorldPosition(out);
                headnode.position=this.alignToGrid(headnode.position)
                this.finishjudge();
                AudioMgr.inst.playOneShot(this.clickSound,1);
                return;
            }
            if (angelout.equals(this.alignToGrid(v3(this.planehead5.worldPosition.x-this.mapnode.worldPosition.x,this.planehead5.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const headnode = instantiate(this.explosion);
                this.canvas.addChild(headnode);
                headnode.setWorldPosition(out);
                headnode.position=this.alignToGrid(headnode.position)
                this.finishjudge();
                AudioMgr.inst.playOneShot(this.clickSound,1);
                return;
            }
            if (angelout.equals(this.alignToGrid(v3(this.planehead6.worldPosition.x-this.mapnode.worldPosition.x,this.planehead6.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                const headnode = instantiate(this.explosion);
                this.canvas.addChild(headnode);
                headnode.setWorldPosition(out);
                headnode.position=this.alignToGrid(headnode.position)
                this.finishjudge();
                AudioMgr.inst.playOneShot(this.clickSound,1);
                return;
            }
            for (const element of this.planebody.children){
                if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                    const bodynode = instantiate(this.hit);
                    this.canvas.addChild(bodynode);
                    bodynode.setWorldPosition(out);
                    bodynode.position=this.alignToGrid(bodynode.position)
                    return;
                }
            }
            for (const element of this.planebody2.children){
                if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                    const bodynode = instantiate(this.hit);
                    this.canvas.addChild(bodynode);
                    bodynode.setWorldPosition(out);
                    bodynode.position=this.alignToGrid(bodynode.position)
                    return;
                }
            }
            for (const element of this.planebody3.children){
                if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                    const bodynode = instantiate(this.hit);
                    this.canvas.addChild(bodynode);
                    bodynode.setWorldPosition(out);
                    bodynode.position=this.alignToGrid(bodynode.position)
                    return;
                }
            }
            for (const element of this.planebody4.children){
                if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                    const bodynode = instantiate(this.hit);
                    this.canvas.addChild(bodynode);
                    bodynode.setWorldPosition(out);
                    bodynode.position=this.alignToGrid(bodynode.position)
                    return;
                }
            }
            for (const element of this.planebody5.children){
                if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
                    const bodynode = instantiate(this.hit);
                    this.canvas.addChild(bodynode);
                    bodynode.setWorldPosition(out);
                    bodynode.position=this.alignToGrid(bodynode.position)
                    return;
                }
            }
            for (const element of this.planebody6.children){
                if(angelout.equals(this.alignToGrid(v3(element.worldPosition.x-this.mapnode.worldPosition.x,element.worldPosition.y-this.mapnode.worldPosition.y,0)))){
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
            AudioMgr.inst.playOneShot(this.clickSound_2,1); 
            
            
        }
        fangda(){
            this.fangdajing = true;
            this.huojian = false;
            this.leida = false;
        }
       
        huojianevent(){
            this.huojian = true;
            this.fangdajing = false;
            this.leida = false;
        }
    
        leidaevent(){
            this.leida = true;
            this.fangdajing = false;
            this.huojian = false;
        }
    
}   

