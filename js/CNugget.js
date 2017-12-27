function CNugget(iXPos,iYPos,iScale,oSprite,text,isCorrect){
    var _bActive;
    var _iValue;
    var _iWidth;
    var _iHeight;
	  var _iScale;
    var _oNuggetSprite;
    var _oNuggetSpriteBg;
  	var orgiXPos;
  	var orgiYPos;
  	var orgiRegXPos;
  	var orgiRegYPos;
    var _oBlood;
    var _oBloodBorder;
    var _oBloodBorderArr;
    var _oBlackScreen;
    var _isAllowStartDig;
    var _oText;
    var _bIsCorrect;
    var _text;

    this._init = function(iXPos,iYPos,iScale,oSprite,text,isCorrect){
        _bActive =true;
        var iRandRot = Math.floor(Math.random()*180);

        _text = text;
        _oText = new createjs.Text(_text,"40px "+FONT_GAME, "#000");
        _oText.x = oSprite.width/2;
        _oText.y = oSprite.height/2;
        _oText.textAlign = 'center';
        _bIsCorrect = isCorrect;

        _oNuggetSpriteBg = createBitmap(oSprite);
        _oNuggetSprite = new createjs.Container();
        _oNuggetSprite.x = iXPos;
        _oNuggetSprite.y = iYPos;
    		orgiXPos = iXPos;
    		orgiYPos = iYPos;
        //_oNuggetSprite.rotation = iRandRot;
        _oNuggetSprite.regX = oSprite.width/2;
        _oNuggetSprite.regY = oSprite.height/2;

    		orgiRegXPos = _oNuggetSprite.regX;
    		orgiRegYPos = _oNuggetSprite.regY;

        _oNuggetSprite.scaleX = _oNuggetSprite.scaleY = iScale;
        _oNuggetSprite.cursor = "pointer";
        _oNuggetSprite.addChild(_oNuggetSpriteBg);
        _oNuggetSprite.addChild(_oText);

        _oBlood = new createjs.Shape();
        // _oBlood.graphics.beginFill("red").drawRect(0,0,100,20);
        _oBlood.x = HOOK_START_X;
        _oBlood.y = HOOK_START_Y;
        _oBlood.alpha = 0.5;
        _oBlood.visible =  false;

        _isAllowStartDig = true;

        _oBloodBorderArr = new Array();

        var borderPosition = 0;
        for(var k=0;k<MAX_NUGGET_CLICK/2;k++){
          _oBloodBorder = new createjs.Shape();
          _oBloodBorder.graphics.beginStroke("black").drawRect(0,0,40,20);
          _oBloodBorder.x = HOOK_START_X + borderPosition;
          _oBloodBorder.y = HOOK_START_Y;
          borderPosition = borderPosition + 40;
          _oBloodBorder.alpha = 0.5;
          _oBloodBorder.visible =  false;
          _oBloodBorderArr.push(_oBloodBorder);
          s_oStage.addChild(_oBloodBorderArr[k]);
        }

        s_oStage.addChild(_oNuggetSprite);
        s_oStage.addChild(_oBlood);

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

    this.getSprite = function(){
      return oSprite;
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

    this.getText = function(){
        return _text;
    };

    this.isActive = function(){
        return _bActive;
    };

    this.isCorrect = function(){
        return _bIsCorrect;
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

    };

    this.buttonDown = function(){

        // console.log('orgiXPos = ' + orgiXPos);
        // console.log('orgiYPos = ' + orgiYPos);
        localStorage.setItem('xPos', orgiXPos);
        localStorage.setItem('yPos', orgiYPos);
        // console.log('localStorage.getItem(xPos)' + localStorage.getItem('xPos'));
        // console.log('localStorage.getItem(yPos)' + localStorage.getItem('yPos'));
        createjs.Tween.get(_oBlood).wait(100).call(function() {
          s_oGame._onStartDig();
        });

    };

    this._resetHurt = function(){
        _oBlood.visible = false;
        _oBlood.alpha = 0.5;
    };

    this._showHurt = function(){
        alert("HURT");
       //  var _oBlood;
       //  _oBlood = new createjs.Shape();
       //  _oBlood.graphics.beginFill("red").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
       //  _oBlood.alpha = 0.1;
       //
       // _oBlood.visible = true;
    };

    this._init(iXPos,iYPos,iScale,oSprite,text,isCorrect);
}
