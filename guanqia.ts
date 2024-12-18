import { _decorator, Component, Node, Canvas, director,Label} from 'cc';
import { global } from './global';
import { globalstarnum } from './unlock';
const { ccclass, property } = _decorator;

@ccclass('guanqia')
export class guanqia extends Component {
      

    @property(Canvas)
    canvas1: Canvas = null;

    @property(Canvas)
    canvas2: Canvas = null;

    @property(Canvas)
    canvas3: Canvas = null;

    @property(Canvas)
    canvas4: Canvas = null;

    @property(Canvas)
    canvas5: Canvas = null;

    @property(Canvas)
    canvas6: Canvas = null;



    // this.NUM1string.string=`×${this.score}`;
   /* @property(Button)
    returnButton: Button = null;
    */
    

    start() {
       
        
        // 默认隐藏所有画布
        this.hideAllCanvases();
        this.onShowCanvas(global.canvasname);
        //this.returnButton.node.on('click', this.onReturnButtonClick, this);

      
    }

    // 显示指定的 canvas 并隐藏其他 canvas
    onShowCanvas(canvasName: string) {
        this.hideAllCanvases();  // 隐藏所有 canvas
        
        // 根据 canvasName 显示对应的 canvas
        switch (canvasName) {
            case 'canvas1':
                this.canvas1.node.active = true;
                break;
            case 'canvas2':
                this.canvas2.node.active = true;
                break;
            case 'canvas3':
                this.canvas3.node.active = true;
                break;
            case 'canvas4':
                this.canvas4.node.active = true;
                break;
            case 'canvas5':
                this.canvas5.node.active = true;
                break;
            case 'canvas6':
                this.canvas6.node.active = true;
                break;
        }
    }

    // 隐藏所有 canvas
    hideAllCanvases() {
        this.canvas1.node.active = false;
        this.canvas2.node.active = false;
        this.canvas3.node.active = false;
        this.canvas4.node.active = false;
        this.canvas5.node.active = false;
        this.canvas6.node.active = false;
    }

    /*onDestroy() {
        // 在场景销毁时移除事件监听
        director.getScene().off('showCanvas', this.onShowCanvas, this);
    }
    onReturnButtonClick() {
        director.loadScene('chuangguanxuanze1');
    }
    */



 
}


