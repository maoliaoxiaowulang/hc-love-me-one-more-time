
import { _decorator, Component, Node, EventTouch, SystemEvent, AudioClip,EventMouse } from 'cc';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;

@ccclass('ClickSound_2')
export class ClickSound_2 extends Component {
    @property(AudioClip)
    private clickSound: AudioClip = null;

    private lastTouchTime: number = 0;  // 上一次点击的时间
    private doubleClickInterval: number = 300; 



    start() {
        // 注册触摸事件
        this.node.on(Node.EventType.TOUCH_START, this.onTouchEnd, this);
    }

    

    

    private onTouchEnd(event: EventTouch) {
        const now = Date.now();  // 获取当前时间
        if (now - this.lastTouchTime <= this.doubleClickInterval) {
            // 判断是否为双击
         
            const touchLocation = event.getLocation();  // 获取触摸位置
            AudioMgr.inst.playOneShot(this.clickSound,1);  // 在触摸点显示效果
            
            
        }
        this.lastTouchTime = now;  // 更新点击时间
    }

}

