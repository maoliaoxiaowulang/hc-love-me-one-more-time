import { _decorator, Component, Node, EventTouch, SystemEvent, AudioClip,EventMouse } from 'cc';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;

@ccclass('ClickSound')
export class ClickSound extends Component {
    @property(AudioClip)
    private clickSound: AudioClip = null;

    start() {
        // 注册触摸事件
        this.node.on(Node.EventType.TOUCH_START, this.onTouchBegan, this);
    }

    

    onTouchBegan(touch: EventTouch) {
        // 播放音效
        AudioMgr.inst.playOneShot(this.clickSound,1);
        
    }

    onButtonClick(event: EventMouse) {
        // 播放音效
        if (this.clickSound) {
            AudioMgr.inst.playOneShot(this.clickSound,1);
        }
    }
}


