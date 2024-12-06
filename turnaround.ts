import { _decorator, Component, Node,Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('turnaround')
export class turnaround extends Component {
    @property(Node)
    plane:Node=null
    
    @property(Button)
    Anniu:Button=null

    start() {
        this.Anniu.node.on(Node.EventType.TOUCH_START, this.turn90, this);

    }

   


    update(deltaTime: number) {
        
    }

    turn90(){
        this.plane.angle+=90;
    }
}


