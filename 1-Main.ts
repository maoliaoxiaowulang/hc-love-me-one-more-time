import { _decorator, Color, Component, Graphics, Vec2,Sprite, EventTouch, Vec3, v3,Node, v2,dragonBones, Camera,instantiate,Prefab, sp, Label,Button,Canvas,director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('1-Main')
export class Main extends Component {
    @property(Button)
    startButton: Button = null;
@property(Node)
    start1: Node = null;
@property(Node)
    shop: Node = null;
@property(Node)
    sprite: Node = null;
@property(Node)
    loading: Node = null;

    start() {
        // 禁用 startButton，防止点击
        this.start1.active = false;
         this.shop.active=false;
         this.sprite.active=false;

        // 预加载多个场景
        const scenesToPreload = [ 'chuangguanxuanze1','guanqia','chuangguanxuanze3','chuangguanxuanze4','chuangguanxuanze2','2-Shop','3-chengjiu'];
        let loadedScenesCount = 0;

        scenesToPreload.forEach(sceneName => {
            director.preloadScene(sceneName, () => {
                loadedScenesCount++;

                // 当所有场景都加载完毕时，启用 startButton
                if (loadedScenesCount === scenesToPreload.length) {
                          this.start1.active = true;
                          this.shop.active=true;
                          this.sprite.active=true;
                          this.loading.active=false;

                }
            });
        });
    }

    onStartButtonClick() {
        // 这里处理 startButton 的点击事件，加载主场景
        director.loadScene('chuangguanxuanze1');
    }
}
// 'guanqia2', 'guanqia3', 'guanqia4',,'chuangguanxuanze3','chuangguanxuanze4','chuangguanxuanze2''guanqia',