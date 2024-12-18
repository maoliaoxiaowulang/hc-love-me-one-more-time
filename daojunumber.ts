import { _decorator, Component, Node, Canvas, director,Label} from 'cc';
import { globalstarnum } from './unlock';
const { ccclass, property } = _decorator;

@ccclass('guanqia')
export class guanqia extends Component {
      
    @property(Label)
    NUM1string:Label=null;

    @property
    Num1:number=globalstarnum.bigglassnum;

    @property(Label)
    NUM2string:Label=null;

    @property
    Num2:number=globalstarnum.leidanum;

    @property(Label)
    NUM3string:Label=null;

    @property
    Num3:number=globalstarnum.rocketnum;
    

    start() {

        this.Num1=globalstarnum.bigglassnum;
        this.Num2=globalstarnum.leidanum;
        this.Num3=globalstarnum.rocketnum;

        this.NUM1string.string=`×${this.Num1}`;
        this.NUM2string.string=`×${this.Num2}`;
        this.NUM3string.string=`×${this.Num3}`;
    }


    huojianclick(){
        
    }
}

