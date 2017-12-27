function CChangeLevel(oSpriteBg, questionText, bottomText, answerText, gameType){

    var _oBg;
    var _oBottomText;
    var _oQuestionText;
    var _oAnswerText;
    var _oMsgText;
    var _oTargetText;
    var _oButStart;
    var _oGroup;
    var _oTopNugget;
    var _oNuggetTopSprite;
    var _oNuggetTopSpriteBg;
    var _oNuggetSprite;
    var _oNuggetCompleteSprite;
    var _oNuggetCompleteSpriteBg;

    this._init = function(oSpriteBg, questionText, bottomText, answerText){

        _oNuggetSprite = new createjs.Container();
        _oNuggetTopSprite = new createjs.Container();
        _oNuggetCompleteSprite = new createjs.Container();
        if(gameType == "TD"){
          _oNuggetCompleteSpriteBg = createBitmap(s_oSpriteLibrary.getSprite('nugget_top'));
          _oNuggetCompleteSpriteBg.x = CANVAS_WIDTH/2-oSpriteBg.width/2;
          _oNuggetCompleteSpriteBg.y = CANVAS_HEIGHT/2-100;

          _oNuggetTopSpriteBg = createBitmap(s_oSpriteLibrary.getSprite('nugget_top'));
          _oNuggetTopSpriteBg.x = CANVAS_WIDTH/2-oSpriteBg.width/2;
          _oNuggetTopSpriteBg.y = CANVAS_HEIGHT/2-300;

          _oBg = createBitmap(oSpriteBg);
          _oNuggetSprite.x = CANVAS_WIDTH/2-oSpriteBg.width/2;
          _oNuggetSprite.y = CANVAS_HEIGHT/2;
          _oBg.scaleX = _oBg.scaleY = 0.6;
        } else if (gameType == "LR"){
          _oNuggetCompleteSpriteBg = createBitmap(s_oSpriteLibrary.getSprite('gem_top'));
          _oNuggetCompleteSpriteBg.x = CANVAS_WIDTH/2-300;
          _oNuggetCompleteSpriteBg.y = CANVAS_HEIGHT/2-oSpriteBg.height/2;

          _oNuggetTopSpriteBg= createBitmap(s_oSpriteLibrary.getSprite('gem_top'));
          _oNuggetTopSpriteBg.x = CANVAS_WIDTH/2-300;
          _oNuggetTopSpriteBg.y = CANVAS_HEIGHT/2-oSpriteBg.height/2;

          _oBg = createBitmap(oSpriteBg);
          _oNuggetSprite.x = CANVAS_WIDTH/2+300;
          _oNuggetSprite.y = CANVAS_HEIGHT/2-oSpriteBg.height/2;
          _oBg.scaleX = _oBg.scaleY = 0.6;
        }
        _oNuggetTopSpriteBg.scaleX = _oNuggetTopSpriteBg.scaleY = 0.6;
        // _oNuggetTopSpriteBg.visible = true;

        //bottomText
        _oBottomText = new createjs.Text(bottomText,"40px "+FONT_GAME, "black");
        _oBottomText.x = 100;
        _oBottomText.y = 50;
        _oBottomText.textAlign = "center";

        //questionText
        _oQuestionText = new createjs.Text(questionText,"40px "+FONT_GAME, "black");
        // _oQuestionText.x =  _oNuggetSprite.width;
        // _oQuestionText.y =  _oNuggetSprite.width;
        _oQuestionText.x = CANVAS_WIDTH/2-50;
        _oQuestionText.y = 100;
        _oQuestionText.textAlign = "center";

        _oNuggetTopSprite.addChild(_oNuggetTopSpriteBg,_oQuestionText);
        // _oNuggetTopSprite.addChild(_oQuestionText);
        s_oStage.addChild(_oNuggetTopSprite);


        //answerText
        _oAnswerText = new createjs.Text(answerText,"40px "+FONT_GAME, "black");
        _oAnswerText.x = CANVAS_WIDTH/2;
        _oAnswerText.y = 300;
        _oAnswerText.textAlign = "center";
        _oNuggetCompleteSprite.addChild(_oNuggetCompleteSpriteBg);
        _oNuggetCompleteSprite.addChild(_oAnswerText);
        _oNuggetCompleteSprite.visible = false;

        _oMsgText = new createjs.Text("","40px "+FONT_GAME, "#ffffff");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2) - 30;
        _oMsgText.textAlign = "center";

        _oTargetText = new createjs.Text("","30px "+FONT_GAME, "#ffffff");
        _oTargetText.x = CANVAS_WIDTH/2;
        _oTargetText.y = (CANVAS_HEIGHT/2) + 90;
        _oTargetText.textAlign = "center";

        _oButStart = new createjs.Shape();
        _oButStart.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oButStart.alpha = 0.5;
        s_oStage.addChild(_oButStart);

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;

        _oNuggetSprite.addChild(_oBg);
        _oNuggetSprite.addChild(_oBottomText);
        _oGroup.addChild(_oButStart, _oNuggetSprite, _oNuggetTopSprite, _oNuggetCompleteSprite);
        // _oGroup.addChild(_oButStart, _oBg,_oBottomText, _oNuggetTopSprite);
        // createjs.Tween.get(_oGroup).wait(5000).to({x:400}).call(function(){});

        s_oStage.addChild(_oGroup);


  			createjs.Ticker.on("tick", tick);
  			createjs.Ticker.setFPS(30);

        function tick(event) {
          if(gameType == "TD"){
            if (_oNuggetTopSprite.y + 150 < _oNuggetSprite.y) {
        			_oNuggetSprite.y = _oNuggetSprite.y - 5;
              _oNuggetTopSprite.y = _oNuggetTopSprite.y + 5;
            } else {
              _oNuggetSprite.visible=false;
              _oNuggetTopSprite.visible=false;
              _oNuggetCompleteSprite.visible = true;
            }
          } else if (gameType == "LR") {
            if (_oNuggetTopSprite.x + 75 < _oNuggetSprite.x) {
        			_oNuggetSprite.x = _oNuggetSprite.x - 5;
              _oNuggetTopSprite.x = _oNuggetTopSprite.x + 5;
            } else {
              _oNuggetSprite.visible=false;
              _oNuggetTopSprite.visible=false;
              _oNuggetCompleteSprite.visible = true;
            }
          }
    			// if (_oNuggetTopSprite.y > _oBg.y) { createjs.Ticker.setPaused(true); }
    			s_oStage.update(event); // important!!
    		}

        var oParent = this;
        _oButStart.on("pressup",function(){oParent._onChangeLevel();});
    };

    this.show = function(iLevel,iTarget){
        _oMsgText.text = "";
        _oTargetText.text = TEXT_TARGET + ": "+iTarget+"$";
        _oGroup.visible = true;

        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function(){
                                                    if(iLevel>1){
                                                        $(s_oMain).trigger("show_interlevel_ad");
                                                    }
                                                });
    };

    this._onChangeLevel = function(){
        var oParent = this;
        _oButStart.off("pressup",function(){oParent._onChangeLevel();});
        s_oStage.removeChild(_oGroup);


        s_oGame.changeLevel();
    };

    this._init(oSpriteBg, questionText, bottomText, answerText);
}
