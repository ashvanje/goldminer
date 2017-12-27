function CNugget0(iXPos,iYPos,iScale,oSprite){
    var _bActive;
    var _iValue;
    var _iWidth;
    var _iHeight;
	  var _iScale;
    var _oNuggetSprite;
    var _oNuggetSpriteBg;
  	var orgiXPos;
  	var orgiYPos;
    var _oHurt;
    var _oHurtBorder;
    var _oHurtBorderArr;
    var _oButStart;

    this._init = function(iXPos,iYPos,iScale,oSprite){
        _bActive =true;
        var iRandRot = Math.floor(Math.random()*180);

        _oNuggetSpriteBg = createBitmap(oSprite);
        _oNuggetSprite = new createjs.Container();
        _oNuggetSprite.x = iXPos;
        _oNuggetSprite.y = iYPos;
    		orgiXPos = iXPos;
    		orgiYPos = iYPos;
        //_oNuggetSprite.rotation = iRandRot;
        _oNuggetSprite.regX = oSprite.width/2;
        _oNuggetSprite.regY = oSprite.height/2;
        _oNuggetSprite.scaleX = _oNuggetSprite.scaleY = iScale;
        _oNuggetSprite.cursor = "pointer";
        _oNuggetSprite.addChild(_oNuggetSpriteBg);

        _oHurt = new createjs.Shape();
        _oHurt.graphics.beginFill("red").drawRect(0,0,100,20);
        _oHurt.x = HOOK_START_X;
        _oHurt.y = HOOK_START_Y;
        _oHurt.alpha = 0.5;
        _oHurt.visible =  false;

        _oHurtBorderArr = new Array();

        var borderPosition = 0;
        for(var k=0;k<MAX_NUGGET_CLICK;k++){
          _oHurtBorder = new createjs.Shape();
          _oHurtBorder.graphics.beginStroke("black").drawRect(0,0,20,20);
          _oHurtBorder.x = HOOK_START_X + borderPosition;
          _oHurtBorder.y = HOOK_START_Y;
          borderPosition = borderPosition + 20;
          _oHurtBorder.alpha = 0.5;
          _oHurtBorder.visible =  false;
          _oHurtBorderArr.push(_oHurtBorder);
          s_oStage.addChild(_oHurtBorderArr[k]);
        }

        s_oStage.addChild(_oNuggetSprite);
        s_oStage.addChild(_oHurt);

        _iValue = Math.floor(1000 * iScale);
		    _iScale = iScale;
        _iWidth = oSprite.width;
        _iHeight = oSprite.height;

        this._initListener();
    };

    this.unload = function(){
        s_oStage.removeChild(_oNuggetSprite);
        _oNuggetSprite = null;
    };

    this.changePos = function(iXPos,iYPos,iScale){
        _oNuggetSprite.x = iXPos;
        _oNuggetSprite.y = iYPos;
        _oNuggetSprite.scaleX = _oNuggetSprite.scaleY = _iScale = iScale;
        _oNuggetSprite.visible = true;

        _bActive =true;
    };

    this.hide = function(){
		if(_oNuggetSprite !== null){
			_oNuggetSprite.visible = false;
			_bActive =false;
		}
    };

    this.getImage = function(){
      return _oNuggetSprite;
    };

    this.getRadius = function(){
        return ((_iWidth/2)*_iScale) * 1;
    };

    this.getPos = function(){
        return { x: _oNuggetSprite.x, y: _oNuggetSprite.y};
    };

    this.getX = function(){
        return _oNuggetSprite.x;
    };

    this.getY = function(){
        return _oNuggetSprite.y;
    };

    this.getWidth = function(){
        return _iWidth;
    };

    this.getValue = function(){
        return _iValue;
    };

    this.isActive = function(){
        return _bActive;
    };

    this.updateMoveBack = function(iHookSpeed,iDir){
        var iNewX = _oNuggetSprite.x - (iHookSpeed) * Math.cos(iDir);
        var iNewY = _oNuggetSprite.y - (iHookSpeed) * Math.sin(iDir);

        _oNuggetSprite.x = iNewX;
        _oNuggetSprite.y = iNewY;
    };

    this._initListener = function(){
       oParent = this;

       _oNuggetSprite.on("mousedown", this.buttonDown);
       _oNuggetSprite.on("pressup" , this.buttonRelease);
    };


    this.buttonRelease = function(){
        s_oStage.removeChild(_oButStart);
        localStorage.setItem('speedParam', NUGGET_SPEED_PARAM/count);
        // createjs.Tween.get(_oHurt).to({alpha:0.6 }, 4000).call(function() {
        createjs.Tween.get(_oHurt).wait(5000).call(function() {
              _oHurt.visible = false;
              _oHurt.alpha = 0.5;
              s_oGame._onStartDig();
              count = 0;

              for(var k=0;k<MAX_NUGGET_CLICK;k++){
                _oHurtBorderArr[k].visible = false;
              }
        });
    };
    count = 1;
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

       _oButStart = new createjs.Shape();
       _oButStart.graphics.beginFill("yellow").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
       _oButStart.alpha = 0.5;
       s_oStage.addChild(_oButStart);
       _oButStart.on("pressup",function(){alert("OK")});

        _oHurt.visible = true;
        for(var k=0;k<MAX_NUGGET_CLICK;k++){
          _oHurtBorderArr[k].visible = true;
        }

        var oParent = this;
        if (count < MAX_NUGGET_CLICK+1){
          count = count + 1;
          _oHurt.graphics.clear().beginFill("red").drawRect(0,0,20*(count-1),20);
        }
    		localStorage.setItem('xPos', orgiXPos);
    		localStorage.setItem('yPos', orgiYPos);
    		//SELECTED_NUGGET_X = orgiXPos;
    		//SELECTED_NUGGET_Y = orgiYPos;
    };

    this._resetHurt = function(){
        _oHurt.visible = false;
        _oHurt.alpha = 0.5;
    };

    this._showHurt = function(){
        alert("HURT");
       //  var _oHurt;
       //  _oHurt = new createjs.Shape();
       //  _oHurt.graphics.beginFill("red").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
       //  _oHurt.alpha = 0.1;
       //
       // _oHurt.visible = true;
    };

    this._init(iXPos,iYPos,iScale,oSprite);
}
