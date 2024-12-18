import { _decorator, Component, Node ,AudioClip,AudioSource,director} from 'cc';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;
import { globalstarnum } from './unlock';

@ccclass('AudioCTL')

export class AudioCTL extends Component {
    @property(AudioSource)
    audio?:AudioSource;

    @property(Node)
    playbutton:Node=null;
    @property(Node)
    stopbutton:Node=null;

    



    

    
    start() {
        this.playbutton.active=false;
        this.stopbutton.active=false;
        if(globalstarnum.musicplaying==1){  
            this.audio.play();
             this.playbutton.active=true;
        }
        else{this.audio.stop();
           
            this.stopbutton.active=true;
        }
      
        

    }

    update(deltaTime: number) {
        
    }

    play(){
        if(!this.audio.playing){
            this.audio.play()
           this.playbutton.active=true;
        this.stopbutton.active=false;
        globalstarnum.musicplaying=1;
        };
        
    }

    stop(){
        if(this.audio){ 
         this.audio.stop()
            this.playbutton.active=false;
        this.stopbutton.active=true
        globalstarnum.musicplaying=0;
           
            
        };
        
    }
}


