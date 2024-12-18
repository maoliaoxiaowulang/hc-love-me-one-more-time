import { _decorator, Component, Node, AudioClip,AudioSource } from 'cc';
import { AudioMgr } from './AudioMgr';
const { ccclass } = _decorator;

@ccclass('ButtonSoundManager')
export class ButtonSoundManager extends Component {
    private static instance: ButtonSoundManager;

    public static getInstance(): ButtonSoundManager {
        return this.instance || (this.instance = new ButtonSoundManager());
    }

    private constructor() {
        super();
    }

    public playSound(clickSound: AudioClip) {
        AudioMgr.inst.playOneShot(clickSound)
    }
}


