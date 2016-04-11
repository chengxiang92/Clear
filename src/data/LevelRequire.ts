/**
 *
 * @author 
 *
 */
class LevelRequire {
    
    private levelRequireElementArray:Array<LevelRequireElement>;
    
    public getRequiredNum():number{
        return this.levelRequireElementArray.length;
    }
    
    public addRequiredElement(type:string, num:number):void{
        var element :LevelRequireElement = new LevelRequireElement();
        element.type = type;
        element.num = num;
        this.levelRequireElementArray.push(element);
    }
    
    public changeRequireElement(type:string, num:number):void{
        var length:number = this.levelRequireElementArray.length;
        for(var i= 0; i<length; i++){
            if(this.levelRequireElementArray[i].type == type){
                this.levelRequireElementArray[i].num = num;
                return;
            }
        }
    }
    
    public isClear():boolean{
        var length: number = this.levelRequireElementArray.length;
        for(var i = 0;i < length;i++) {
            if(this.levelRequireElementArray[i].num > 0) {
                return false;
            }
        }
        return true;
    }
    
    public openChange():void{
        this.levelRequireElementArray = [];
    }
    
	public constructor() {
	}
}
