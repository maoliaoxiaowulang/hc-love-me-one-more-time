import { _decorator, Component, Node, Button, director} from 'cc';
import { global } from './global';
const { ccclass, property } = _decorator;
import { globalstarnum } from './unlock';

@ccclass('chuangguanxuanze1')
export class chuangguanxuanze1 extends Component {

    @property(Button)
    button1: Button = null;

    @property(Button)
    button2: Button = null;

    @property(Button)
    button3: Button = null;

    @property(Button)
    button4: Button = null;

    @property(Button)
    button5: Button = null;

    @property(Button)
    button6: Button = null;

    
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
        this.button1.node.on('click', () => this.onButtonClick('canvas1'), this);
        this.button2.node.off('click', () => this.onButtonClick('canvas2'), this);
        this.button3.node.off('click', () => this.onButtonClick('canvas3'), this);
        this.button4.node.off('click', () => this.onButtonClick('canvas4'), this);
        this.button5.node.off('click', () => this.onButtonClick('canvas5'), this);
        this.button6.node.off('click', () => this.onButtonClick('canvas6'), this);

        if(globalstarnum.starnum1!=0){
            this.button2.node.on('click', () => this.onButtonClick('canvas2'), this);
            this.s1_0.active=false;
            this.s1_1.active=false;
            this.s1_2.active=false;
            this.s1_3.active=false;
            this.suo2.active=false;
            if(globalstarnum.starnum1==3) this.s1_3.active=true;
            if(globalstarnum.starnum1==2) this.s1_2.active=true;
            if(globalstarnum.starnum1==1) this.s1_1.active=true;}

        // if(globalstarnum.starnum1!=0)
        // { this.button2.node.on('click', () => this.onButtonClick('canvas2'), this);
        //     this.s1_0.active=false;
        //     if(this.s1_3.active==true){this.s1_3.active==true}
        //     else if(this.s1_2.active==true){
        //         if(globalstarnum.starnum1==3) {this.s1_3.active=true;this.s1_2.active=false;}
        //     }
        //     else if(this.s1_1.active==true){
        //         if(globalstarnum.starnum1==3) {this.s1_3.active=true;this.s1_1.active=false;}
        //         if(globalstarnum.starnum1==2) {this.s1_2.active=true;this.s1_1.active=false;}
        //     }
        //     else {
        //         if(globalstarnum.starnum1==3) this.s1_3.active=true;
        //         if(globalstarnum.starnum1==2) this.s1_2.active=true;
        //         if(globalstarnum.starnum1==1) this.s1_1.active=true;
        //     }}
    
        if(globalstarnum.starnum2!=0){ 
            this.button3.node.on('click', () => this.onButtonClick('canvas3'), this);
            this.s2_0.active=false;
            this.s2_1.active=false;
            this.s2_2.active=false;
            this.s2_3.active=false;
            this.suo3.active=false;
            if(globalstarnum.starnum2==3) this.s2_3.active=true;
            if(globalstarnum.starnum2==2) this.s2_2.active=true;
            if(globalstarnum.starnum2==1) this.s2_1.active=true;}
        if(globalstarnum.starnum3!=0){ 
            this.button4.node.on('click', () => this.onButtonClick('canvas4'), this);
            
            this.s3_0.active=false;
            this.s3_1.active=false;
            this.s3_2.active=false;
            this.s3_3.active=false;
            this.suo4.active=false;
            if(globalstarnum.starnum3==3) this.s3_3.active=true;
            if(globalstarnum.starnum3==2) this.s3_2.active=true;
            if(globalstarnum.starnum3==1) this.s3_1.active=true;
        }
        if(globalstarnum.starnum4!=0){ 
            this.button5.node.on('click', () => this.onButtonClick('canvas5'), this);
       
            this.s4_0.active=false;
            this.s4_1.active=false;
            this.s4_2.active=false;
            this.s4_3.active=false;
            this.suo5.active=false;
            if(globalstarnum.starnum4==3) this.s4_3.active=true;
            if(globalstarnum.starnum4==2) this.s4_2.active=true;
            if(globalstarnum.starnum4==1) this.s4_1.active=true;}
        if(globalstarnum.starnum5!=0){ 
            this.button6.node.on('click', () => this.onButtonClick('canvas6'), this);
            this.s5_0.active=false;
            this.s5_1.active=false;
            this.s5_2.active=false;
            this.s5_3.active=false;
            this.suo6.active=false;
            if(globalstarnum.starnum5==3) this.s5_3.active=true;
            if(globalstarnum.starnum5==2) this.s5_2.active=true;
            if(globalstarnum.starnum5==1) this.s5_1.active=true;}

        if(globalstarnum.starnum6!=0){ 
                this.s6_0.active=false;
                this.s6_1.active=false;
                this.s6_2.active=false;
                this.s6_3.active=false;
                
                if(globalstarnum.starnum6==3) this.s6_3.active=true;
                if(globalstarnum.starnum6==2) this.s6_2.active=true;
                if(globalstarnum.starnum6==1) this.s6_1.active=true;}


        // 为返回按钮添加点击事件
        this.returnButton.node.on('click', this.onReturnButtonClick, this);


    
    }


      update(deltaTime: number) {
        // 如果需要实时更新内容，写在这里
    }

    onButtonClick(canvasName: string) {
        // 如果场景正在加载，直接返回
        

        global.canvasname=canvasName;
        director.loadScene('guanqia');
        
        

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
    BUTTON1TO2() {
        director.loadScene('chuangguanxuanze2');
    }

}