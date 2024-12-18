import { _decorator, Component, Node, Button, director} from 'cc';
import { global4 } from './global4';
const { ccclass, property } = _decorator;
import { globalstarnum } from './unlock';

@ccclass('chuangguanxuanze4')
export class chuangguanxuanze4 extends Component {

    @property(Button)
    button19: Button = null;

    @property(Button)
    button20: Button = null;

    @property(Button)
    button21: Button = null;

    @property(Button)
    button22: Button = null;

    @property(Button)
    button23: Button = null;

    @property(Button)
    button24: Button = null;

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
        this.button19.node.on('click', () => this.onButtonClick('canvas19'), this);
        this.button20.node.off('click', () => this.onButtonClick('canvas20'), this);
        this.button21.node.off('click', () => this.onButtonClick('canvas21'), this);
        this.button22.node.off('click', () => this.onButtonClick('canvas22'), this);
        this.button23.node.off('click', () => this.onButtonClick('canvas23'), this);
        this.button24.node.off('click', () => this.onButtonClick('canvas24'), this);

        if(globalstarnum.starnum18!=0){ 
            this.button19.node.on('click', () => this.onButtonClick('canvas19'), this);
            this.suo1.active=false;
        }
        if(globalstarnum.starnum19!=0){ 
            this.button20.node.on('click', () => this.onButtonClick('canvas20'), this);
            this.s1_0.active=false;
            this.s1_1.active=false;
            this.s1_2.active=false;
            this.s1_3.active=false;
            this.suo2.active=false;
            if(globalstarnum.starnum19==3) this.s1_3.active=true;
            if(globalstarnum.starnum19==2) this.s1_2.active=true;
            if(globalstarnum.starnum19==1) this.s1_1.active=true;
        }
        if(globalstarnum.starnum20!=0){ 
            this.button21.node.on('click', () => this.onButtonClick('canvas21'), this);
            this.s2_0.active=false;
            this.s2_1.active=false;
            this.s2_2.active=false;
            this.s2_3.active=false;
            this.suo3.active=false;
            if(globalstarnum.starnum20==3) this.s2_3.active=true;
            if(globalstarnum.starnum20==2) this.s2_2.active=true;
            if(globalstarnum.starnum20==1) this.s2_1.active=true;
        }
        if(globalstarnum.starnum21!=0){ 
            this.button22.node.on('click', () => this.onButtonClick('canvas22'), this);
            this.s3_0.active=false;
            this.s3_1.active=false;
            this.s3_2.active=false;
            this.s3_3.active=false;
            this.suo4.active=false;
            if(globalstarnum.starnum21==3) this.s3_3.active=true;
            if(globalstarnum.starnum21==2) this.s3_2.active=true;
            if(globalstarnum.starnum21==1) this.s3_1.active=true;
        }
        if(globalstarnum.starnum22!=0){ 
            this.button23.node.on('click', () => this.onButtonClick('canvas23'), this);
            this.s4_0.active=false;
            this.s4_1.active=false;
            this.s4_2.active=false;
            this.s4_3.active=false;
            this.suo5.active=false;
            if(globalstarnum.starnum22==3) this.s4_3.active=true;
            if(globalstarnum.starnum22==2) this.s4_2.active=true;
            if(globalstarnum.starnum22==1) this.s4_1.active=true;
        }
        if(globalstarnum.starnum23!=0){ 
            this.button24.node.on('click', () => this.onButtonClick('canvas24'), this);
            this.s5_0.active=false;
            this.s5_1.active=false;
            this.s5_2.active=false;
            this.s5_3.active=false;
            this.suo6.active=false;
            if(globalstarnum.starnum23==3) this.s5_3.active=true;
            if(globalstarnum.starnum23==2) this.s5_2.active=true;
            if(globalstarnum.starnum23==1) this.s5_1.active=true;
        }
        if(globalstarnum.starnum24!=0){ 
            this.s6_0.active=false;
            this.s6_1.active=false;
            this.s6_2.active=false;
            this.s6_3.active=false;
            if(globalstarnum.starnum24==3) this.s6_3.active=true;
            if(globalstarnum.starnum24==2) this.s6_2.active=true;
            if(globalstarnum.starnum24==1) this.s6_1.active=true;
        }

        // 为返回按钮添加点击事件
        this.returnButton.node.on('click', this.onReturnButtonClick, this);
    }


      update(deltaTime: number) {
        // 如果需要实时更新内容，写在这里
    }

    onButtonClick(canvasName: string) {
        // 如果场景正在加载，直接返回
        

        global4.canvasname4=canvasName;
        director.loadScene('guanqia4');
        
        

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
      BUTTON4TO3() {
        director.loadScene('chuangguanxuanze3');
    }
 

}