import { _decorator, Color, Component, Graphics, Vec2,Sprite, AudioClip,EventTouch, Vec3, v3,Node, v2,dragonBones, Camera,instantiate,Prefab, sp, Label,director,Canvas} from 'cc';
const { ccclass, property } = _decorator;
const { CCArmatureDisplay } = dragonBones;;


import { globalstarnum } from './unlock';


@ccclass('aim')
export class aim extends Component {

    @property(Label)
    starLabel:Label=null;
   
   

    @property(Node)
    s1grey:Node=null;
    @property(Node)
    s2grey:Node=null;
    @property(Node)
    s3grey:Node=null;
    @property(Node)
    s4grey:Node=null;
    @property(Node)
    s5grey:Node=null;
    @property(Node)
    s6grey:Node=null;
    @property(Node)
    s7grey:Node=null;
    @property(Node)
    s8grey:Node=null;
    @property(Node)
    s9grey:Node=null;
    @property(Node)
    s1:Node=null;
    @property(Node)
    s2:Node=null;
    @property(Node)
    s3:Node=null;
    @property(Node)
    s4:Node=null;
    @property(Node)
    s5:Node=null;
    @property(Node)
    s6:Node=null;
    @property(Node)
    s7:Node=null;
    @property(Node)
    s8:Node=null;
    @property(Node)
    s9:Node=null;

    @property(Node)
    button1grey:Node=null;
    @property(Node)
    button2grey:Node=null;
    @property(Node)
    button3grey:Node=null;
    @property(Node)
    button4grey:Node=null;
    @property(Node)
    button5grey:Node=null;
    @property(Node)
    button6grey:Node=null;
    @property(Node)
    button7grey:Node=null;
    @property(Node)
    button8grey:Node=null;
    @property(Node)

    @property(Node)
    button1:Node=null;
    @property(Node)
    button2:Node=null;
    @property(Node)
    button3:Node=null;
    @property(Node)
    button4:Node=null;
    @property(Node)
    button5:Node=null;
    @property(Node)
    button6:Node=null;
    @property(Node)
    button7:Node=null;
    @property(Node)
    button8:Node=null;
   

    

start(){
    this.starLabel.string=`${globalstarnum.startotal}`;

    this.s1grey.active=true;this.s1.active=false;
    this.s2grey.active=true;this.s2.active=false;
    this.s3grey.active=true;this.s3.active=false;
    this.s4grey.active=true;this.s4.active=false;
    this.s5grey.active=true;this.s5.active=false;
    this.s6grey.active=true;this.s6.active=false;
    this.s7grey.active=true;this.s7.active=false;
    this.s8grey.active=true;this.s8.active=false;
    this.s9grey.active=true;this.s9.active=false;
    
    if(globalstarnum.startotal==72){this.s9.active=true;this.s9grey.active=false;}
    if(globalstarnum.startotal>=63){this.s8.active=true;this.s8grey.active=false;}
    if(globalstarnum.startotal>=54){this.s7.active=true;this.s7grey.active=false;}
    if(globalstarnum.startotal>=45){this.s6.active=true;this.s6grey.active=false;}
    if(globalstarnum.startotal>=36){this.s5.active=true;this.s5grey.active=false;}
    if(globalstarnum.startotal>=27){this.s4.active=true;this.s4grey.active=false;}
    if(globalstarnum.startotal>=18){this.s3.active=true;this.s3grey.active=false;}
    if(globalstarnum.startotal>=9){this.s2.active=true;this.s2grey.active=false;}
    if(globalstarnum.startotal>=3){this.s1.active=true;this.s1grey.active=false;}
        
       
       
    if(globalstarnum.startotal>=3){
         if(globalstarnum.have1==0){this.button1grey.active=false;this.button1.active=true;}
    }
    if(globalstarnum.startotal>=9){
        if(globalstarnum.have2==0){this.button2grey.active=false;this.button2.active=true;}
   }
   if(globalstarnum.startotal>=18){
    if(globalstarnum.have3==0){this.button3grey.active=false;this.button3.active=true;}
}
if(globalstarnum.startotal>=27){
    if(globalstarnum.have4==0){this.button4grey.active=false;this.button4.active=true;}
}
if(globalstarnum.startotal>=36){
    if(globalstarnum.have5==0){this.button5grey.active=false;this.button5.active=true;}
}
if(globalstarnum.startotal>=45){
    if(globalstarnum.have6==0){this.button6grey.active=false;this.button6.active=true;}
}
if(globalstarnum.startotal>=54){
    if(globalstarnum.have7==0){this.button7grey.active=false;this.button7.active=true;}
}
if(globalstarnum.startotal>=63){
    if(globalstarnum.have8==0){this.button8grey.active=false;this.button8.active=true;}


       
}    

    }


    onclick1(){
        globalstarnum.have1+=1;
        globalstarnum.bigglassnum+=3;
        this.button1grey.active=true;this.button1.active=false;
    }
    onclick2(){
        globalstarnum.have2+=1;
        globalstarnum.leidanum+=2;
        this.button2grey.active=true;this.button2.active=false;
    }
    onclick3(){
        globalstarnum.have3+=1;
        globalstarnum.rocketnum+=1;
        this.button3grey.active=true;this.button3.active=false;
    }
    onclick4(){
        globalstarnum.have4+=1;
        globalstarnum.bigglassnum+=3;
        globalstarnum.leidanum+=1;
        this.button4grey.active=true;this.button4.active=false;
    }
    onclick5(){
        globalstarnum.have5+=1;
        globalstarnum.leidanum+=3;
        this.button5grey.active=true;this.button5.active=false;
    }
    onclick6(){
        globalstarnum.have6+=1;
        globalstarnum.bigglassnum+=5;
        globalstarnum.rocketnum+=1;
        this.button6grey.active=true;this.button6.active=false;
    }
    onclick7(){
        globalstarnum.have7+=1;
        globalstarnum.rocketnum+=1;
        globalstarnum.leidanum+=3;
        this.button7grey.active=true;this.button7.active=false;
    }
    onclick8(){
        globalstarnum.have8+=1;
        globalstarnum.rocketnum+=2;
        globalstarnum.leidanum+=2;
        this.button8grey.active=true;this.button8.active=false;
    }
   



}





