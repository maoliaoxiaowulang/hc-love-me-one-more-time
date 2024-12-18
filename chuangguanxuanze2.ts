import { _decorator, Component, Node, Button, director} from 'cc';
import { global2 } from './global2';
const { ccclass, property } = _decorator;
import { globalstarnum } from './unlock';


@ccclass('chuangguanxuanze2')
export class chuangguanxuanze2 extends Component {

    @property(Button)
    button7: Button = null;

    @property(Button)
    button8: Button = null;

    @property(Button)
    button9: Button = null;

    @property(Button)
    button10: Button = null;

    @property(Button)
    button11: Button = null;

    @property(Button)
    button12: Button = null;

    @property(Button)
    returnButton: Button = null;

    @property(Node)
    s1_0: Node = null;
    @property(Node)
    s1_1: Node = null;
    @property(Node)
    s1_2: Node = null;
    @property(Node)
    s1_3: Node = null;

    @property(Node)
    s2_0: Node = null;
    @property(Node)
    s2_1: Node = null;
    @property(Node)
    s2_2: Node = null;
    @property(Node)
    s2_3: Node = null;

    @property(Node)
    s3_0: Node = null;
    @property(Node)
    s3_1: Node = null;
    @property(Node)
    s3_2: Node = null;
    @property(Node)
    s3_3: Node = null;

    @property(Node)
    s4_0: Node = null;
    @property(Node)
    s4_1: Node = null;
    @property(Node)
    s4_2: Node = null;
    @property(Node)
    s4_3: Node = null;

    @property(Node)
    s5_0: Node = null;
    @property(Node)
    s5_1: Node = null;
    @property(Node)
    s5_2: Node = null;
    @property(Node)
    s5_3: Node = null;
    
    @property(Node)
    s6_0: Node = null;
    @property(Node)
    s6_1: Node = null;
    @property(Node)
    s6_2: Node = null;
    @property(Node)
    s6_3: Node = null;

    @property(Node)
    suo1: Node = null;
    @property(Node)
    suo2: Node = null;
    @property(Node)
    suo3: Node = null;
    @property(Node)
    suo4: Node = null;
    @property(Node)
    suo5: Node = null;
    @property(Node)
    suo6: Node = null;


    // 增加一个标志来判断场景是否正在加载
    private isLoadingScene = false;
    
    

    start() {
        // 为每个按钮添加点击事件
        this.button7.node.on('click', () => this.onButtonClick('canvas7'), this);
        this.button8.node.off('click', () => this.onButtonClick('canvas8'), this);
        this.button9.node.off('click', () => this.onButtonClick('canvas9'), this);
        this.button10.node.off('click', () => this.onButtonClick('canvas10'), this);
        this.button11.node.off('click', () => this.onButtonClick('canvas11'), this);
        this.button12.node.off('click', () => this.onButtonClick('canvas12'), this);

        
        if(globalstarnum.starnum6!=0){ 
            this.button7.node.on('click', () => this.onButtonClick('canvas7'), this);
            this.suo1.active=false;
        }
        if(globalstarnum.starnum7!=0){ 
            this.button8.node.on('click', () => this.onButtonClick('canvas8'), this);
            this.s1_0.active=false;
            this.s1_1.active=false;
            this.s1_2.active=false;
            this.s1_3.active=false;
            this.suo2.active=false;
            if(globalstarnum.starnum7==3) this.s1_3.active=true;
            if(globalstarnum.starnum7==2) this.s1_2.active=true;
            if(globalstarnum.starnum7==1) this.s1_1.active=true;
        }
        if(globalstarnum.starnum8!=0){ 
            this.button9.node.on('click', () => this.onButtonClick('canvas9'), this);
            this.s2_0.active=false;
            this.s2_1.active=false;
            this.s2_2.active=false;
            this.s2_3.active=false;
            this.suo3.active=false;
            if(globalstarnum.starnum8==3) this.s2_3.active=true;
            if(globalstarnum.starnum8==2) this.s2_2.active=true;
            if(globalstarnum.starnum8==1) this.s2_1.active=true;
        }
        if(globalstarnum.starnum9!=0){ 
            this.button10.node.on('click', () => this.onButtonClick('canvas10'), this);
            this.s3_0.active=false;
            this.s3_1.active=false;
            this.s3_2.active=false;
            this.s3_3.active=false;
            this.suo4.active=false;
            if(globalstarnum.starnum9==3) this.s3_3.active=true;
            if(globalstarnum.starnum9==2) this.s3_2.active=true;
            if(globalstarnum.starnum9==1) this.s3_1.active=true;
        }
        if(globalstarnum.starnum10!=0){ 
            this.button11.node.on('click', () => this.onButtonClick('canvas11'), this);
            this.s4_0.active=false;
            this.s4_1.active=false;
            this.s4_2.active=false;
            this.s4_3.active=false;
            this.suo5.active=false;
            if(globalstarnum.starnum10==3) this.s4_3.active=true;
            if(globalstarnum.starnum10==2) this.s4_2.active=true;
            if(globalstarnum.starnum10==1) this.s4_1.active=true;
        }
        if(globalstarnum.starnum11!=0){ 
            this.button12.node.on('click', () => this.onButtonClick('canvas12'), this);
            this.s5_0.active=false;
            this.s5_1.active=false;
            this.s5_2.active=false;
            this.s5_3.active=false;
            this.suo6.active=false;
            if(globalstarnum.starnum11==3) this.s5_3.active=true;
            if(globalstarnum.starnum11==2) this.s5_2.active=true;
            if(globalstarnum.starnum11==1) this.s5_1.active=true;
        }
        if(globalstarnum.starnum12!=0){ 
            this.s6_0.active=false;
            this.s6_1.active=false;
            this.s6_2.active=false;
            this.s6_3.active=false;
            if(globalstarnum.starnum12==3) this.s6_3.active=true;
            if(globalstarnum.starnum12==2) this.s6_2.active=true;
            if(globalstarnum.starnum12==1) this.s6_1.active=true;
        }
     

       

        // 为返回按钮添加点击事件
        this.returnButton.node.on('click', this.onReturnButtonClick, this);
    }


      update(deltaTime: number) {
        // 如果需要实时更新内容，写在这里
    }

    onButtonClick(canvasName: string) {
        // 如果场景正在加载，直接返回
        

        global2.canvasname2=canvasName;
        director.loadScene('guanqia2');
        
        

        // 确保只有在用户交互后才启动 AudioContext
        /*if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }*/
    }

    onReturnButtonClick() {
        director.loadScene('1-Main');
    }
    BUTTON2TO3() {
        director.loadScene('chuangguanxuanze3');
    }
     BUTTON2TO1() {
        director.loadScene('chuangguanxuanze1');
    }
    
}