import { _decorator, Component, Node, Canvas, director} from 'cc';
import { global2 } from './global2';
const { ccclass, property } = _decorator;
import { globalstarnum } from './unlock';

@ccclass('guanqia2')
export class guanqia2 extends Component {
      

    @property(Canvas)
    canvas7: Canvas = null;

    @property(Canvas)
    canvas8: Canvas = null;

    @property(Canvas)
    canvas9: Canvas = null;

    @property(Canvas)
    canvas10: Canvas = null;

    @property(Canvas)
    canvas11: Canvas = null;

    @property(Canvas)
    canvas12: Canvas = null;
    
   /* @property(Button)
    returnButton: Button = null;
    */
    

    start() {
       
        
        // 默认隐藏所有画布
        this.hideAllCanvases();
        this.onShowCanvas(global2.canvasname2);
        //this.returnButton.node.on('click', this.onReturnButtonClick, this);
    }

    // 显示指定的 canvas 并隐藏其他 canvas
    onShowCanvas(canvasName: string) {
        this.hideAllCanvases();  // 隐藏所有 canvas
        
        // 根据 canvasName 显示对应的 canvas
        switch (canvasName) {
            case 'canvas7':
                this.canvas7.node.active = true;
                break;
            case 'canvas8':
                this.canvas8.node.active = true;
                break;
            case 'canvas9':
                this.canvas9.node.active = true;
                break;
            case 'canvas10':
                this.canvas10.node.active = true;
                break;
            case 'canvas11':
                this.canvas11.node.active = true;
                break;
            case 'canvas12':
                this.canvas12.node.active = true;
                break;
        }
    }

    // 隐藏所有 canvas
    hideAllCanvases() {
        this.canvas7.node.active = false;
        this.canvas8.node.active = false;
        this.canvas9.node.active = false;
        this.canvas10.node.active = false;
        this.canvas11.node.active = false;
        this.canvas12.node.active = false;
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