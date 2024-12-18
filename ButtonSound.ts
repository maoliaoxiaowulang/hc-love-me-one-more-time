import { _decorator, Component, Button, Node, AudioClip, EventMouse } from 'cc';
import { AudioMgr } from './AudioMgr';
import { ButtonSoundManager } from './ButtonSoundManager';
const { ccclass, property } = _decorator;

@ccclass('ButtonSound')
export class ButtonSound extends Component {
    @property(Button)
    private button: Button | null = null;

    @property(AudioClip)
    private clickSound: AudioClip = null;

    start() {
        // 确保按钮组件已经挂载
        if (this.button) {
            // 注册按钮点击事件
            this.button.node.on(Button.EventType.CLICK, this.onButtonClick, this);
        }
    }

    onDestroy() {
        // 取消按钮点击事件
        if (this.button) {
            this.button.node.off(Button.EventType.CLICK, this.onButtonClick, this);
        }
    }

    onButtonClick(event: EventMouse) {
        // 使用ButtonSoundManager播放音效
        ButtonSoundManager.getInstance().playSound(this.clickSound);
    }
}

