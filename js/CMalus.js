function CMalus(iXPos,iYPos,iRandScale,oSprite){
    var _iWidth;
    var _iHeight;
    var _oMalusSprite;
  	var orgiXPos;  
  	var orgiYPos;
    
    this._init = function(iXPos,iYPos,iRandScale,oSprite){
        _oMalusSpriteBg = createBitmap(oSprite);
        _oMalusSprite = new createjs.Container();
        _oMalusSprite.x = iXPos;
        _oMalusSprite.y = iYPos;
    		orgiXPos = iXPos;
    		orgiYPos = iYPos;
        _oMalusSprite.scaleX = _oMalusSprite.scaleY = iRandScale;
        _oMalusSprite.regX = oSprite.width/2;
        _oMalusSprite.regY = oSprite.height/2;
        _oMalusSprite.cursor = "pointer";
        _oMalusSprite.addChild(_oMalusSpriteBg);
        
        s_oStage.addChild(_oMalusSprite);
        
        _iWidth = oSprite.width;
        _iHeight = oSprite.height;
        
        this._initListener();
    };
    
    this.changePos = function(iXPos,iYPos,iRandScale){
        _oMalusSprite.x = iXPos;
        _oMalusSprite.y = iYPos;
        _oMalusSprite.scaleX = _oMalusSprite.scaleY = iRandScale;
        _oMalusSprite.visible = true;
    };
    
    this.unload = function(){
        s_oStage.removeChild(_oMalusSprite);
        _oMalusSprite = null;
    };
    
    this.getPos = function(){
        return { x: _oMalusSprite.x, y: _oMalusSprite.y};
    };
    
    this.getRadius = function(){
        return ((_iWidth/2)*iRandScale) * 1;
    };
    
    this._initListener = function(){
       oParent = this;

       _oMalusSprite.on("mousedown", this.buttonDown);
       _oMalusSprite.on("pressup" , this.buttonRelease);
    };
    
        
    this.buttonRelease = function(){
        s_oGame._onStartDig();
    };

    this.buttonDown = function(){
        // s_oGame.changeState(STATE_HOOK_MOVE);
    		//SELECTED_NUGGET_X.value = 1100;
    		//SELECTED_NUGGET_Y.value = 650;
        // alert("HURT");
        
       //  var _oHurt;
       //  _oHurt = new createjs.Shape();
       //  _oHurt.graphics.beginFill("red").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
       //  _oHurt.alpha = 0.1;
       // 
       // _oHurt.visible = true;
       
    		localStorage.setItem('xPos', orgiXPos);
    		localStorage.setItem('yPos', orgiYPos);
    		//SELECTED_NUGGET_X = orgiXPos;
    		//SELECTED_NUGGET_Y = orgiYPos;
    };
        
    this._init(iXPos,iYPos,iRandScale,oSprite);
}