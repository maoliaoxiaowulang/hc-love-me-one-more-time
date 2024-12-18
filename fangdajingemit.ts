import { _decorator, Component, director, Node ,Label} from 'cc';
import { globalstarnum } from './unlock';
const { ccclass, property } = _decorator;

@ccclass('fangdajingemit')
export class fadajing extends Component {
    @property(Node)
    fangdajing:Node = null;
    @property(Label)
    NUM1string:Label=null;
    
    
    
    start() {
          this.fangdajing.on(Node.EventType.TOUCH_START, this.fangda, this)
    }

    update(deltaTime: number) {
        
    }

    fangda(){
        if(globalstarnum.bigglassnum>0){
            globalstarnum.bigglassnum-=1;
            this.NUM1string.string=`×${ globalstarnum.bigglassnum}`;
        director.emit('fangda');
        }
        else{}
    }
}


