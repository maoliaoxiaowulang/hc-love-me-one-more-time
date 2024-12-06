// GridMap.js
import { _decorator, Color, Component, Graphics, Vec2,Sprite, EventTouch, Vec3, v3,Node, v2} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GridMap')
export class GridMap extends Component {

    // 网格大小（每个单元格的尺寸）
    @property
    cellside: number = 50; // 每个单元格边长为50

    // 网格的行数和列数
    @property
    rows: number = 10;

    @property
    cols: number = 10;
    
    // 网格颜色
    @property
    color:Color=new Color(0,0,0)




  
    
    


    start() {
        this.drawGrid();

    }  
    

    drawGrid() {
        const graphics = this.getComponent(Graphics);

        // 设置线条宽度
        graphics.lineWidth = 3;
        graphics.strokeColor = this.color; 

        // 绘制水平网格线
        for (let row = 0; row <= this.rows; row++) {
            const y = row * this.cellside-this.rows*this.cellside/2;
            graphics.moveTo(-this.cols * this.cellside/2, y); // 移动到 (0, y)
            graphics.lineTo(this.cols * this.cellside/2, y); // 绘制到 (cols * cellSize, y)
        }

        // 绘制垂直网格线
        for (let col = 0; col <= this.cols; col++) {
            const x = col * this.cellside-this.cols*this.cellside/2;
            graphics.moveTo(x, -this.rows*this.cellside/2); // 移动到 (x, 0)
            graphics.lineTo(x, this.rows * this.cellside/2); // 绘制到 (x, rows * cellSize)
        }

        // 完成绘制并呈现
        graphics.stroke();
    }

    



}





