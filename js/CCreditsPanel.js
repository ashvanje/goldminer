function CCreditsPanel(){

    var _oFade;
    var _oPanelContainer;
    var _oLogo;

    var _pStartPanelPos;
    var _oButExit;
    var _oButExitGame;
    var _oButRestart;
    var _oButHint;
    var _oButAudio;

    this._init = function(){

        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        var oPanel = new createjs.Shape();
        oPanel.graphics.beginStroke("black").drawRect(0,0,0,0);
        // oPanel.x = CANVAS_WIDTH-oPanel.width;
        // oPanel.y = CANVAS_HEIGHT-oPanel.height;
        oPanel.x = 0;
        oPanel.y = 0;
        oPanel.on("mousedown", function(){});
        _oPanelContainer.addChild(oPanel);

        // _oPanelContainer.x = CANVAS_WIDTH-oPanel.width;
        // _oPanelContainer.y = CANVAS_HEIGHT-oPanel.height;
        _oPanelContainer.x = 1150;
        _oPanelContainer.y = 190;
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};

        var oTitle = new createjs.Text(TEXT_DEVELOPED," 50px "+FONT_GAME, "#ffffff");
        oTitle.y = -70;
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 600;
        // _oPanelContainer.addChild(oTitle);

        var oLink = new createjs.Text("www.codethislab.com"," 35px "+FONT_GAME, "#ffffff");
        oLink.y = 50;
        oLink.textAlign = "center";
        oLink.textBaseline = "middle";
        oLink.lineWidth = 600;
        // _oPanelContainer.addChild(oLink);

        var oSprite = s_oSpriteLibrary.getSprite('ctl_logo');
        _oLogo = createBitmap(oSprite);
        _oLogo.on("mousedown",this._onLogoButRelease);
        _oLogo.regX = oSprite.width/2;
        _oLogo.regY = oSprite.height/2;
        // _oPanelContainer.addChild(_oLogo);


        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        oSprite.scaleX = oSprite.scaleY = 0.6;
        _oButExitGame = new CGfxButton(_oPanelContainer.x+50 , _oPanelContainer.y+50, oSprite, _oPanelContainer);
        _oButExitGame.addEventListener(ON_MOUSE_UP, s_oGame._onExit, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_retry');
        _oButRestart = new CGfxButton(_oPanelContainer.x+50 , _oPanelContainer.y+150, oSprite, _oPanelContainer);
        _oButRestart.addEventListener(ON_MOUSE_UP, this.gameRestart, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_hint');
        _oButHint = new CGfxButton(_oPanelContainer.x+50 , _oPanelContainer.y+250, oSprite, _oPanelContainer);
        // _oButHint.addEventListener(ON_MOUSE_UP, this.gameRestart, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_audio');
        _oButAudio = new CGfxButton(_oPanelContainer.x+50 , _oPanelContainer.y+350, oSprite, _oPanelContainer);
        _oButAudio.addEventListener(ON_MOUSE_UP, this.mute, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _oButExit = new CGfxButton(_oPanelContainer.x+50, _oPanelContainer.y+450, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);

    };

    this.unload = function(){

        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);

        _oButExit.unload();
        _oButExitGame.unload();
        _oButRestart.unload();
        _oButHint.unload();
        _oButAudio.unload();

        _oLogo.off("mousedown",this._onLogoButRelease);


    };

    this.mute = function(){
        console.log("mute");
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this.gameRestart = function(){
        console.log("gameRestart");
        s_oGame._onExit();
        s_oMain.gotoGame();
    };

    this._onLogoButRelease = function(){
        window.open("http://www.codethislab.com/index.php?&l=en");
    };


    this._init();


};
