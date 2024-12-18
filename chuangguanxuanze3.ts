import { _decorator, Component, Node, Button, director} from 'cc';
import { global3 } from './global3';
const { ccclass, property } = _decorator;
import { globalstarnum } from './unlock';

@ccclass('chuangguanxuanze3')
export class chuangguanxuanze3 extends Component {

    @property(Button)
    button13: Button = null;

    @property(Button)
    button14: Button = null;

    @property(Button)
    button15: Button = null;

    @property(Button)
    button16: Button = null;

    @property(Button)
    button17: Button = null;

    @property(Button)
    button18: Button = null;

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
        this.button13.node.on('click', () => this.onButtonClick('canvas13'), this);
        this.button14.node.off('click', () => this.onButtonClick('canvas14'), this);
        this.button15.node.on('click', () => this.onButtonClick('canvas15'), this);
        this.button16.node.off('click', () => this.onButtonClick('canvas16'), this);
        this.button17.node.off('click', () => this.onButtonClick('canvas17'), this);
        this.button18.node.off('click', () => this.onButtonClick('canvas18'), this);

        if(globalstarnum.starnum12!=0){ 
            this.button13.node.on('click', () => this.onButtonClick('canvas13'), this)
            this.suo1.active=false;
        }
        if(globalstarnum.starnum13!=0){ 
            this.button14.node.on('click', () => this.onButtonClick('canvas14'), this);
            this.s1_0.active=false;
            this.s1_1.active=false;
            this.s1_2.active=false;
            this.s1_3.active=false;
            this.suo2.active=false;
            if(globalstarnum.starnum13==3) this.s1_3.active=true;
            if(globalstarnum.starnum13==2) this.s1_2.active=true;
            if(globalstarnum.starnum13==1) this.s1_1.active=true;
        }
        if(globalstarnum.starnum14!=0){ 
            this.button15.node.on('click', () => this.onButtonClick('canvas15'), this);
            this.s2_0.active=false;
            this.s2_1.active=false;
            this.s2_2.active=false;
            this.s2_3.active=false;
            this.suo3.active=false;
            if(globalstarnum.starnum14==3) this.s2_3.active=true;
            if(globalstarnum.starnum14==2) this.s2_2.active=true;
            if(globalstarnum.starnum14==1) this.s2_1.active=true;
        }
        if(globalstarnum.starnum15!=0){ 
            this.button16.node.on('click', () => this.onButtonClick('canvas16'), this);
            this.s3_0.active=false;
            this.s3_1.active=false;
            this.s3_2.active=false;
            this.s3_3.active=false;
            this.suo4.active=false;
            if(globalstarnum.starnum15==3) this.s3_3.active=true;
            if(globalstarnum.starnum15==2) this.s3_2.active=true;
            if(globalstarnum.starnum15==1) this.s3_1.active=true;
        }
        if(globalstarnum.starnum16!=0){ 
            this.button17.node.on('click', () => this.onButtonClick('canvas17'), this);
            this.s4_0.active=false;
            this.s4_1.active=false;
            this.s4_2.active=false;
            this.s4_3.active=false;
            this.suo5.active=false;
            if(globalstarnum.starnum16==3) this.s4_3.active=true;
            if(globalstarnum.starnum16==2) this.s4_2.active=true;
            if(globalstarnum.starnum16==1) this.s4_1.active=true;
        }
        if(globalstarnum.starnum17!=0){ 
            this.button18.node.on('click', () => this.onButtonClick('canvas18'), this);
            this.s5_0.active=false;
            this.s5_1.active=false;
            this.s5_2.active=false;
            this.s5_3.active=false;
            this.suo6.active=false;
            if(globalstarnum.starnum17==3) this.s5_3.active=true;
            if(globalstarnum.starnum17==2) this.s5_2.active=true;
            if(globalstarnum.starnum17==1) this.s5_1.active=true;
        }
        if(globalstarnum.starnum18!=0){ 
            this.s6_0.active=false;
            this.s6_1.active=false;
            this.s6_2.active=false;
            this.s6_3.active=false;
            if(globalstarnum.starnum18==3) this.s6_3.active=true;
            if(globalstarnum.starnum18==2) this.s6_2.active=true;
            if(globalstarnum.starnum18==1) this.s6_1.active=true;
        }
     

        // 为返回按钮添加点击事件
        this.returnButton.node.on('click', this.onReturnButtonClick, this);
    }


      update(deltaTime: number) {
        // 如果需要实时更新内容，写在这里
    }

    onButtonClick(canvasName: string) {

        global3.canvasname3=canvasName;
        director.loadScene('guanqia3');
        
        

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
     BUTTON3TO4() {
        director.loadScene('chuangguanxuanze4');
    }
    BUTTON3TO2() {
        director.loadScene('chuangguanxuanze2');
    }
 
}