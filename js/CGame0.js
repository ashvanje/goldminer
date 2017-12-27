function CGame0(oData){
    var _bUpdate = false;
    var _iState;
    var _oDraggingNugget = null;
    var _iDirHook;
    var _iHookSpeed;
    var _iRopeSpeed;
    var _iSlowDown;
    var _iScore = 0;
    var _iCurLevel = 1;
    var _iCurTargetLevel;
    var _iNuggetToRemove;
    var _iTimeElaps;
    var _aNuggets;
    var _aMalus;
    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;

    var _oHook;
    var _oHurt;
    var _oBg;
    var _oHelpPanel;
    var _oButExit;
    var _oButStart;
    var _oEndPanel;
    var _oChangeLevel;
    var _oAudioToggle;
    var _oLevelText;
    var _oTimeText;
    var _oTargetText;
    var _oLevelTextBack;
    var _oTimeTextBack;
    var _oTargetTextBack;
    var _oCorrectText;
    var _oClockSprite;
    var _oNuggetTopSprite;
    var _oQuestionTopText;
    var _oAnswerText;
    var _oLevelSettings;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    var _oBlood;
    var _oBloodBorder;
    var _oBloodBorderArr;
    var _oBlackScreen;
    var _isAllowStartDig;
    var _isLock;
    var _isAllowDragNugget;

    var _oCrab;
    var _oGirlNormal;
    var _oBoat;
    var _oGirlHand;
    var _oRod;
    var _oButCredits;
    var _oTimeBar;
    var _bBoatRotateClockwise;
    var _bBoatRotateAntiClockwise;
    var _bLockCrab = true;

    this._init = function(){
        this.changeState(STATE_HOOK_ROTATE);

        _oLevelSettings = new CLevelSettingsLR();

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_gameLR'));
        s_oStage.addChild(_oBg);


        _oGirlNormal = createBitmap(s_oSpriteLibrary.getSprite('boy_normal'));
        _oGirlNormal.x = 480;
        _oGirlNormal.y = 220;
        _oGirlNormal.scaleX = _oGirlNormal.scaleY = 0.5
        s_oStage.addChild(_oGirlNormal);

        _oGirlHand = createBitmap(s_oSpriteLibrary.getSprite('girl_hand'));
        _oGirlHand.x = _oGirlNormal.x + 15;
        _oGirlHand.y = _oGirlNormal.y + 75;
        _oGirlHand.scaleX = _oGirlHand.scaleY = 0.5
        // s_oStage.addChild(_oGirlHand);

        _oLogo = createBitmap(s_oSpriteLibrary.getSprite('ctl_logo'));
        _oLogo.x = 300;
        _oLogo.y = 650;
        _oLogo.scaleX = _oLogo.scaleY = 0.5
        s_oStage.addChild(_oLogo);

        _oBoat = createBitmap(s_oSpriteLibrary.getSprite('boat'));
        _oBoat.x = _oGirlNormal.x-100;
        _oBoat.y = _oGirlNormal.y+40;
        _oBoat.scaleX = _oBoat.scaleY = 0.5
        // s_oStage.addChild(_oBoat);

        _bBoatRotateClockwise = 0;
        _bBoatRotateAntiClockwise = 0;
  			createjs.Ticker.on("tick", tick);
  			createjs.Ticker.setFPS(1);

        function tick(event) {
            if(_bBoatRotateClockwise < 20){
              _oBoat.rotation=_oBoat.rotation+0.5;
              _bBoatRotateClockwise++;
            } else if (_bBoatRotateClockwise == 20) {
              _oBoat.rotation=_oBoat.rotation-0.5;
              _bBoatRotateAntiClockwise++;
              if(_bBoatRotateAntiClockwise == 20 ) {
                _bBoatRotateClockwise = 0;
                _bBoatRotateAntiClockwise = 0;
              }
            }

            // } else {
            //   _oBoat.rotation--;
            //   _bBoatRotate--;
            // }
    		}

        _oRod = createBitmap(s_oSpriteLibrary.getSprite('rod'));
        _oRod.x = 740;
        _oRod.y = 80;
        _oRod.scaleX = _oRod.scaleY = 0.5
        // s_oStage.addChild(_oRod);

        //top text
        _oLevelTextBack = new createjs.Text("","40px "+FONT_GAME, "#000");
        _oLevelTextBack.x = 630;
        _oLevelTextBack.y = 60;
        _oLevelTextBack.textAlign = "left";
        _oLevelTextBack.textBaseline = "alphabetic";
        s_oStage.addChild(_oLevelTextBack);

        _oLevelText = new createjs.Text("","32px "+FONT_GAME, "#fff");
        _oLevelText.x = 308;
        _oLevelText.y = CANVAS_HEIGHT - 32;
        _oLevelText.textAlign = "left";
        _oLevelText.textBaseline = "alphabetic";
        s_oStage.addChild(_oLevelText);

        _oClockSprite = createBitmap(s_oSpriteLibrary.getSprite('clock'));
        _oClockSprite.x = 298;
        _oClockSprite.y = 10;
        //s_oStage.addChild(_oClockSprite);

        _oCrab = createBitmap(s_oSpriteLibrary.getSprite('crab1'));
        _oCrab.x = 700;
        _oCrab.y = 700;
        _oCrab.scaleX = _oCrab.scaleY = 0.5;
        _oCrab.visible = false;
        s_oStage.addChild(_oCrab);

        _oTimeBar = new createjs.Shape();
        _oTimeBar.graphics.beginFill("red").drawRect(0,0,300,30);
        _oTimeBar.x = 310;
        _oTimeBar.y = 40;
        s_oStage.addChild(_oTimeBar);

        _oTimeTextBack = new createjs.Text((LEVEL_TIME/1000),"40px "+FONT_GAME, "#000");
        _oTimeTextBack.x = 380;
        _oTimeTextBack.y = 57;
        _oTimeTextBack.textAlign = "center";
        _oTimeTextBack.textBaseline = "alphabetic";
        //s_oStage.addChild(_oTimeTextBack);

        _oTimeText = new createjs.Text((LEVEL_TIME/1000),"25px "+FONT_GAME, "#fff");
        _oTimeText.x = 380;
        _oTimeText.y = 55;
        _oTimeText.textAlign = "center";
        _oTimeText.textBaseline = "alphabetic";
        // s_oStage.addChild(_oTimeText);

        _iSlowDown = 0;
        _iRopeSpeed = 0.05;
        _iHookSpeed = HOOK_SPEED;

	      _iTimeElaps = WHOLEGAME_TIMELEFT;
        _iCurTargetLevel = _oLevelSettings.getLevelTarget(_iCurLevel);
        _iCurTarget = 0;

        //no use
        _oTargetTextBack = new createjs.Text(_iScore+"$/"+_iCurTargetLevel+"$","40px "+FONT_GAME, "#000");
        _oTargetTextBack.x = 310;
        _oTargetTextBack.y = 117;
        _oTargetTextBack.textAlign = "left";
        _oTargetTextBack.textBaseline = "alphabetic";
        //s_oStage.addChild(_oTargetTextBack);

        //no use
        _oTargetText = new createjs.Text(_iScore+"$/"+_iCurTargetLevel+"$","40px "+FONT_GAME, "#fff");
        _oTargetText.x = 308;
        _oTargetText.y = 115;
        _oTargetText.textAlign = "left";
        _oTargetText.textBaseline = "alphabetic";
        //s_oStage.addChild(_oTargetText);

        _oNuggetTopSpriteBg = createBitmap(s_oSpriteLibrary.getSprite('gem_top'));
        _oNuggetTopSpriteBg.scaleX = _oNuggetTopSpriteBg.scaleY = 0.6;
        _oNuggetTopSprite = new createjs.Container();
        _oNuggetTopSprite.x = 350;
        _oNuggetTopSprite.y = 250;

        _oQuestionTopText = new createjs.Text("","24px "+FONT_GAME, "black");
        // _oQuestionTopText.x = _oNuggetTopSpriteBg.width/2;
        _oQuestionTopText.x = 60;
        // _oQuestionTopText.y = _oNuggetTopSpriteBg.height/2;
        _oQuestionTopText.y = 40;
        _oQuestionTopText.textAlign = "center";
        // _oQuestionTopText.textBaseline = "alphabetic";

        _oAnswerText = new createjs.Text("","24px "+FONT_GAME, "black");

	      _oNuggetTopSprite.addChild(_oNuggetTopSpriteBg);
        _oNuggetTopSprite.addChild(_oQuestionTopText);
        s_oStage.addChild(_oNuggetTopSprite);

        var oSpriteHook = s_oSpriteLibrary.getSprite("gunclip");
        _oHook = new CHookLR(oSpriteHook);

        this._initNuggets();

        _oButStart = new createjs.Shape();
        _oButStart.graphics.beginFill("yellow").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oButStart.alpha = 0.01;
        s_oStage.addChild(_oButStart);


        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        // _pStartPosCredits = {x:CANVAS_WIDTH-oSprite.width, y:CANVAS_HEIGHT-oSprite.height};
        _pStartPosCredits = {x:1200, y:CANVAS_HEIGHT-oSprite.height};
        _oButCredits = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite, s_oStage);
        _oButCredits.addEventListener(ON_MOUSE_UP, this._onButCreditRelease, this);



        var oParent = this;
        // _oButStart.on("pressup",function(){oParent._onStartDig()});

        _oHurt = new createjs.Shape();
        _oHurt.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oHurt.alpha = 0.1;
        _oHurt.visible =  false;
        s_oStage.addChild(_oHurt);

        _oCorrectText = new createjs.Text("正確","80px "+FONT_GAME, "#fff");
        _oCorrectText.x = CANVAS_WIDTH/2-100;
        _oCorrectText.y = CANVAS_HEIGHT/2;
        _oCorrectText.textAlign = "middle";
        _oCorrectText.textBaseline = "alphabetic";
        _oCorrectText.visible =  false;
        s_oStage.addChild(_oCorrectText);

        _oBlood = new createjs.Shape();
        // _oBlood.graphics.beginFill("red").drawRect(0,0,100,20);
        _oBlood.x = GUN_START_X;
        _oBlood.y = GUN_START_Y;
        _oBlood.alpha = 0.5;
        _oBlood.visible =  false;
        _isLock = true;
        _isAllowStartDig = true;

        _oBloodBorderArr = new Array();

        var borderPosition = 0;
        // for(var k=0;k<MAX_NUGGET_CLICK/2;k++){
        for(var k=0;k<3;k++){
          _oBloodBorder = new createjs.Shape();
          _oBloodBorder.graphics.beginStroke("black").drawRect(0,0,40,20);
          _oBloodBorder.x = GUN_START_X + borderPosition;
          _oBloodBorder.y = GUN_START_Y;
          borderPosition = borderPosition + 40;
          _oBloodBorder.alpha = 0.5;
          _oBloodBorder.visible =  false;
          _oBloodBorderArr.push(_oBloodBorder);
          s_oStage.addChild(_oBloodBorderArr[k]);
        }

        s_oStage.addChild(_oBlood);
        _isAllowDragNugget = false;

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon')
            _pStartPosAudio = {x: CANVAS_WIDTH - 170, y: 60};
            //_oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive,s_oStage);
            //_oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);

            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:_pStartPosAudio.x - oSprite.width/2 - 10,y:_pStartPosAudio.y};
        }else{
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x: CANVAS_WIDTH - 170, y: 60};
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && inIframe() === false){


            //_oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            //_oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.width/2) - 10, y: 10+ (oSprite.height/2)};
        // _oButExit = new CGfxButton(_pStartPosExit.x,_pStartPosExit.y,oSprite,true);
        // _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        oSprite = s_oSpriteLibrary.getSprite('bg_help');
        this.onExitHelp(); //allow game to start
        // _oHelpPanel = new CHelp(oSprite);

        var oSprite = s_oSpriteLibrary.getSprite("malus");
        _oChangeLevel = new CChangeLevel(oSprite, "", "", "", "LR");

        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };


    this._onButCreditRelease = function(){
        new CCreditsPanel();
    };

    this.refreshButtonPos = function(iNewX,iNewY){
        //_oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            //_oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && inIframe() === false){
            //_oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX,_pStartPosFullscreen.y + iNewY);
        }
    };

    this.unload = function(){
        s_oStage.removeAllChildren();

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            //_oAudioToggle.unload();
            //_oAudioToggle = null;
        }

        if (_fRequestFullScreen && inIframe() === false){
            //_oButFullscreen.unload();
        }

        // _oButExit.unload();
        // _oButExit = null;


        for(var j=0;j<_aNuggets.length;j++){
            _aNuggets[j].unload();
        }

        for(var i=0;i<_aMalus.length;i++){
                _aMalus[i].unload();
        }

        s_oGame = null;
    };

    this.resetFullscreenBut = function(){
	//_oButFullscreen.setActive(s_bFullscreen);
    };

    this._initNuggets = function(){
        _aNuggets = new Array();
        _aMalus = new Array();

        var aPos = _oLevelSettings.getNuggetPosInLevel(_iCurLevel);
        var aInfo = _oLevelSettings.getNuggetInfoInLevel(_iCurLevel);
        for(var k=0;k<aPos.length;k++){
            var oSprite = s_oSpriteLibrary.getSprite('gem_'+aInfo[k].type);
            var oNugget = new CNugget(aPos[k].x,aPos[k].y,aInfo[k].scale,oSprite,aInfo[k].text,aInfo[k].isCorrect);

            _aNuggets.push(oNugget);
        }

        var oSpriteMalus = s_oSpriteLibrary.getSprite('malus');
        var aMalusPos = _oLevelSettings.getMalusPosInLevel(_iCurLevel);
        for(var j=0;j<aMalusPos.length;j++){
            var oMalus = new CMalus(aMalusPos[j].x,aMalusPos[j].y,1,oSpriteMalus);
            _aMalus.push(oMalus);
        }
        _oQuestionTopText.text = aInfo[0].question;
        _oAnswerText.text = aInfo[0].answer;

        _iNuggetToRemove = aPos.length;
    };

    this.changeLevel = function(){
        for(var i=0;i<_aNuggets.length;i++){
            _aNuggets[i].unload();
        }

        for(var t=0;t<_aMalus.length;t++){
            _aMalus[t].unload();
        }

        _iSlowDown = 0;
        _iHookSpeed = HOOK_SPEED;
	      _oHook.reset();

        // _iRopeSpeed+=0.025;
        WHOLEGAME_TIMELEFT = _iTimeElaps;
        // _iTimeElaps = LEVEL_TIME;

        _aNuggets = new Array();
        var aPos = _oLevelSettings.getNuggetPosInLevel(_iCurLevel);
        var aInfo = _oLevelSettings.getNuggetInfoInLevel(_iCurLevel);
        for(var k=0;k<aPos.length;k++){
            var oSprite = s_oSpriteLibrary.getSprite('gem_'+aInfo[k].type);
            var oNugget = new CNugget(aPos[k].x,aPos[k].y,aInfo[k].scale,oSprite,aInfo[k].text,aInfo[k].isCorrect);

            _aNuggets.push(oNugget);
        }

        _aMalus= new Array();
        var oSpriteMalus = s_oSpriteLibrary.getSprite('malus');
        var aMalusPos = _oLevelSettings.getMalusPosInLevel(_iCurLevel);
        for(var j=0;j<aMalusPos.length;j++){
            var oMalus = new CMalus(aMalusPos[j].x,aMalusPos[j].y,1,oSpriteMalus);
            _aMalus.push(oMalus);
        }
        _oQuestionTopText.text = aInfo[0].question;
        _oAnswerText.text = aInfo[0].answer;
        _iNuggetToRemove = aPos.length;

	this.changeState(STATE_HOOK_ROTATE);
        _bUpdate = true;

        $(s_oMain).trigger("start_level",_iCurLevel);
    };

    this.changeState = function(iState){
        _iState = iState;

        switch(_iState){
            case STATE_HOOK_ROTATE:{
                // console.log("remove blackscreen");
                // s_oStage.removeChild(_oBlackScreen); //remove black screen in both correct and incorrect nugget
                if(_oDraggingNugget){ //IF DRAGGED THE NUGGET
                    if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
                        // playSound("bonus",1,false);
                    }

                    _iScore += _oDraggingNugget.getValue();
                    _oTargetTextBack.text = _iScore + "$/" + _iCurTargetLevel+"$";
                    _oTargetText.text = _iScore + "$/" + _iCurTargetLevel+"$";

                    if(_isAllowDragNugget == true){
                        this.showHurt(); //if nugget is allowed to be caught, then show the black screen
                        _oDraggingNugget.hide();
                        _oDraggingNugget = null;

                        _iNuggetToRemove--;
                        // _isAllowDragNugget = false;
                        // this._endLevel();
                    }

                    if(_iNuggetToRemove === 0){
                        this._endLevel();
                    }
                }else if(_oHook){
                    if(_isAllowDragNugget == false){
                        // this.showHurt2();
                    }
                    _oHook.reset();
                }
                s_oStage.removeChild(_oBlackScreen);
                _isLock = true; //unlock MOVE_BACK state if case
                break;
            }
        }
    };

    this._checkCollision = function( oHook, oNugget ){
        var vHookPos   = oHook.getPos();
        var vNuggetPos = oNugget.getPos();
        var fNuggetRadius = oNugget.getRadius();

        var fDistance =  Math.sqrt( ( (vNuggetPos.x - vHookPos.x)*(vNuggetPos.x - vHookPos.x) ) +
                                    ( (vNuggetPos.y - vHookPos.y)*(vNuggetPos.y - vHookPos.y) ) );

        if ( fDistance < fNuggetRadius ){
            return true;
        }else{
            return false;
        }
    };

    this.hookOutOfBounds = function(){
        _iSlowDown = 0;
        this.changeState(STATE_HOOK_MOVE_BACK);
    };


    this._endLevel = function(){
        _bUpdate = false;
	_iState = -1;
        $(s_oMain).trigger("end_level",_iCurLevel);

        //commented gameover logic
        // if(_iScore < _iCurTargetLevel){
        //     this._gameOver();
        // }else{
            _iCurLevel++;
            if(_iCurLevel > _oLevelSettings.getNumLevels()){
                this._win();
            }else{
                _iCurTargetLevel = _oLevelSettings.getLevelTarget(_iCurLevel);
                _oLevelText.text = "";
                _oLevelTextBack.text = "";
                _oTargetText.text = _iScore + "$/"+ _iCurTargetLevel + "$";
                _oTargetTextBack.text = _iScore + "$/" + _iCurTargetLevel+"$";
                // _oChangeLevel = new CChangeLevel(s_oSpriteLibrary.getSprite("malus"), _oDraggingNugget.getText());
                _oChangeLevel = new CChangeLevel(_oDraggingNugget.getSprite(), _oQuestionTopText.text, _oDraggingNugget.getText(), _oAnswerText.text, "LR");
                _oChangeLevel.show(_iCurLevel,_iCurTargetLevel);
            }
        // }
    };

    this.showHurt = function(){
       this._endLevel();
    };

    this.showHurt2 = function(){
        console.log("showHurt2");
        var oParent = this;
         _isAllowDragNugget = false;
             if(_bLockCrab == true){
               _oCrab.x = localStorage.getItem('xPos')-80;
               _oCrab.y = localStorage.getItem('yPos');
               _bLockCrab = false;
             } else {
               _oCrab.y = _oCrab.y - 5;
             }
         _oCrab.visible = true;

         _oHook.updateMoveBack(_iSlowDown);
         createjs.Tween.get(_oCrab).wait(1000).call(function() {
           // _bUpdate = true;
           _oCrab.visible = false;
           _bLockCrab = true;
           _bUpdate = true;
         });
    };

    this._resetHurt = function(){
        _oHurt.visible = false;
        _oCorrectText.visible = false;
        _oHurt.alpha = 0.5;
    };

    this._gameOver = function(){
        _bUpdate=false;
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            // playSound("game_over",1,false);
        }
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('boy_lose'));

        _oEndPanel.show(_iScore,false);
    };

    this._win = function(){
        _bUpdate=false;
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            playSound("win",1,false);
        }
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('boy_win'));
        _oEndPanel.show(_iScore,true);
    };

    this._onStartDig = function(){
        if(_iState === STATE_HOOK_ROTATE){
            _iDirHook = (_oHook.getRotationDeg()+90)*0.0174532925;
            // console.log('_iDirHook = ' + _iDirHook);
            this.changeState(STATE_HOOK_MOVE);
        }
    };

    this.onExitHelp = function(){
      // playSound("lk2b623_gam_04",1,false);
      // s_aSounds["lk2b623_gam_04"].on('end', function(){
          _bUpdate = true;
      // });
    };

    this._onExit = function(){
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event",_iScore);
        $(s_oMain).trigger("save_score",_iScore);
        this.unload();
        s_oMain.gotoMenu();
    };

    this._onFullscreenRelease = function(){
      	if(s_bFullscreen) {
      		_fCancelFullScreen.call(window.document);
      	}else{
      		_fRequestFullScreen.call(window.document.documentElement);
      	}

      	sizeHandler();
    };

    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    count = 1;
    this.update = function(){
        if(_bUpdate === false){
            return;
        }

        _iTimeElaps -= s_iTimeElaps;
        var iCurSec = Math.floor(_iTimeElaps/1000);
	      _oTimeText.text = ""+ iCurSec;
        _oTimeTextBack.text = ""+ iCurSec;

        //TIME BAR 20171225
        if(_iTimeElaps>=0){
            _oTimeBar.graphics.clear().beginFill("red").drawRect(0,0,300*_iTimeElaps/LEVEL_TIME,30);
    		}

        if(_iTimeElaps < 0){
            _oTimeText.text = "0";
            _oTimeTextBack.text = "0";
            // this._endLevel();
            this._gameOver();
        }

        switch(_iState){
            case STATE_HOOK_ROTATE:{
                _oHook.updateRotation(_iRopeSpeed);
                break;
            }
            case STATE_HOOK_MOVE:{
                _oHook.updateMove();

                for(var i=0;i<_aNuggets.length;i++){
                    // console.log("_aNuggets[]"+i+"="+_aNuggets[i].isCorrect());
                    if(_aNuggets[i].isActive() && this._checkCollision(_oHook,_aNuggets[i])){

                        var speedParam = localStorage.getItem('speedParam');
                        _oDraggingNugget = _aNuggets[i];
                        this.changeState(STATE_HOOK_MOVE_BACK);
                        break;
                    }
                }

                for(var j=0;j<_aMalus.length;j++){
                    if(this._checkCollision(_oHook,_aMalus[j])){
                        _iSlowDown = 0;
                        this.showHurt();

                        this.changeState(STATE_HOOK_MOVE_BACK);

                        _iScore -= MALUS_SCORE;
                        if(_iScore<0){
                            _iScore = 0;
                        }
                        _oTargetText.text = _iScore + "$/"+ _iCurTargetLevel + "$";
                        _oTargetTextBack.text = _iScore + "$/" + _iCurTargetLevel+"$";

                        _aMalus[j].unload();
                        _aMalus.splice(j,1);
                        break;
                    }
                }
                break;
            }
            case STATE_HOOK_MOVE_BACK:{
                // if(_oDraggingNugget != null){
                if(_oDraggingNugget.isCorrect()==false) {
                    if(_isLock == true){
                        _isLock = false;
                        _oBlackScreen = new createjs.Shape();
                        _oBlackScreen.graphics.beginFill("white").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                        _oBlackScreen.alpha = 0.01;

                        _oBlackScreen.on("pressup",function(){
                        });


                        s_oStage.addChild(_oBlackScreen);
                    }
                    this.showHurt2(); //change to another function
                } else {
                  if (_isLock == true) {
                      _bUpdate = false;
                      console.log("1 _bUpdate = " + _bUpdate);
                      // _isAllowDragNugget = false;
                      console.log("count = " + count);
                      _isLock = false;
                      _oBlood.visible = true;
                      // for(var k=0;k<MAX_NUGGET_CLICK/2;k++){
                      console.log("chkpt2");
                      for(var k=0;k<3;k++){
                          console.log("_oBloodBorderArr[k].visible = true;");
                          _oBloodBorderArr[k].visible = true;
                      }

                      _oBlackScreen = new createjs.Shape();
                      _oBlackScreen.graphics.beginFill("white").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                      _oBlackScreen.alpha = 0.01;
                      s_oStage.addChild(_oBlackScreen);

                      _oBlackScreen.on("pressup",function(){
                        _isAllowDragNugget = true;
                        if (count < MAX_NUGGET_CLICK+1){
                          count = count + 1;
                          _oBlood.graphics.clear().beginFill("red").drawRect(0,0,40*(count-1),20);
                          //_iSlowDown = Math.floor(NUGGET_SPEED_PARAM/count) / 8;
                          //console.log("_iSlowDown = " + _iSlowDown);
                          if(count==1){
                            //
                          } else if (count==2){
                            _iSlowDown = 11.5;
                          } else if (count==3){
                            _iSlowDown = 5;
                          } else if (count==4){
                            _iSlowDown = 1;
                          }
                        }
                      });

                      console.log("2 _bUpdate = " + _bUpdate);
                  }

                  if(_bUpdate == false) {
                    createjs.Tween.get(_oBlood).wait(3000).call(function() {
                        console.log("wait 3000");
                        _bUpdate = true;
                    });
                  }

                  if(_bUpdate == true){

                    console.log("_bUpdate == true");
                    _oBlood.graphics.clear().beginFill("red").drawRect(0,0,0,20);
                    _oBlood.alpha = 0.5;
                     // for(var k=0;k<MAX_NUGGET_CLICK/2;k++){
                     for(var k=0;k<3;k++){
                       // console.log("_oBloodBorderArr[k].visible = false;");
                       _oBloodBorderArr[k].visible = false;
                     }

                    // s_oStage.removeChild(_oBlackScreen);

                    _oHook.updateMoveBack(_iSlowDown);
                    // if(_isAllowDragNugget == false){
                    //   _oDraggingNugget = null;
                    // }
                    if(_isAllowDragNugget == true && _oDraggingNugget){
                        _oDraggingNugget.updateMoveBack(_iHookSpeed - _iSlowDown,_iDirHook);
                    }

                    count = 1; //reset count
                  }

                } //end else if
                break;
            }
        }
    };

    s_oGame=this;

    MALUS_SCORE = oData.malus_score;
    HOOK_SPEED = oData.hook_speed;
    LEVEL_TIME = oData.level_time;

    this._init();
}

var s_oGame = null;
