function CMain(oData){
    var _bUpdate = false;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD;
    var _iState = STATE_LOADING;
    var _oData;

    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;

    this.initContainer = function(){
        var canvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(canvas);
        createjs.Touch.enable(s_oStage);

        s_bMobile = jQuery.browser.mobile;
        if(s_bMobile === false){
            s_oStage.enableMouseOver(20);
            $('body').on('contextmenu', '#canvas', function(e){ return false; });
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);

        if(navigator.userAgent.match(/Windows Phone/i)){
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary  = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
    };

    this._initSounds = function(){
        var aSoundsInfo = new Array();
        aSoundsInfo.push({path: './sounds/',filename:'explosion',loop:false,volume:1, ingamename: 'explosion'});
        aSoundsInfo.push({path: './sounds/',filename:'click',loop:false,volume:1, ingamename: 'click'});
        aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:false,volume:1, ingamename: 'game_over'});
        aSoundsInfo.push({path: './sounds/',filename:'bonus',loop:false,volume:1, ingamename: 'bonus'});
        aSoundsInfo.push({path: './sounds/',filename:'win',loop:false,volume:1, ingamename: 'win'});
        aSoundsInfo.push({path: './sounds/',filename:'soundtrack',loop:true,volume:1, ingamename: 'soundtrack'});
        aSoundsInfo.push({path: './sounds/',filename:'lk2b623_gam_03',loop:false,volume:1, ingamename: 'lk2b623_gam_03'});
        aSoundsInfo.push({path: './sounds/',filename:'lk2b623_gam_04',loop:false,volume:1, ingamename: 'lk2b623_gam_04'});
        aSoundsInfo.push({path: './sounds/',filename:'lk2b623_gam_05',loop:false,volume:1, ingamename: 'lk2b623_gam_05'});
        aSoundsInfo.push({path: './sounds/',filename:'lk2b623_gam_06',loop:false,volume:1, ingamename: 'lk2b623_gam_06'});
        aSoundsInfo.push({path: './sounds/',filename:'lk2b623_gam_07',loop:false,volume:1, ingamename: 'lk2b623_gam_07'});

        RESOURCE_TO_LOAD += aSoundsInfo.length;

        s_aSounds = new Array();
        for(var i=0; i<aSoundsInfo.length; i++){
            s_aSounds[aSoundsInfo[i].ingamename] = new Howl({
                                                            src: [aSoundsInfo[i].path+aSoundsInfo[i].filename+'.mp3'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: aSoundsInfo[i].loop,
                                                            volume: aSoundsInfo[i].volume,
                                                            onload: s_oMain.handleFileLoad()
                                                        });
        }

    };


    this._loadImages = function(){
        s_oSpriteLibrary.init( this.handleFileLoad,this._onAllImagesLoaded, this );

        s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_retry","./sprites/but_retry.png");
        s_oSpriteLibrary.addSprite("but_hint","./sprites/but_hint.png");
        s_oSpriteLibrary.addSprite("but_audio","./sprites/but_audio.png");
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_help","./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("boat","./sprites/boat_1.png");
        s_oSpriteLibrary.addSprite("girl_fail","./sprites/girl_fail.png");
        s_oSpriteLibrary.addSprite("girl_normal","./sprites/girl_normal.png");
        s_oSpriteLibrary.addSprite("girl_pull","./sprites/girl_pull.png");
        s_oSpriteLibrary.addSprite("girl_hand","./sprites/girl_hand.png");
        s_oSpriteLibrary.addSprite("crab1","./sprites/crab1.png");
        s_oSpriteLibrary.addSprite("rod","./sprites/rod.png");
        s_oSpriteLibrary.addSprite("hook","./sprites/hook.png");
        s_oSpriteLibrary.addSprite("nugget_1","./sprites/nugget_1.png");
        s_oSpriteLibrary.addSprite("nugget_2","./sprites/nugget_2.png");
        s_oSpriteLibrary.addSprite("nugget_3","./sprites/nugget_3.png");
        s_oSpriteLibrary.addSprite("nugget_4","./sprites/nugget_4.png");
        s_oSpriteLibrary.addSprite("malus","./sprites/malus.png");
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
	      s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
	      s_oSpriteLibrary.addSprite("clock","./sprites/clock.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits","./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./sprites/ctl_logo.jpg");
        s_oSpriteLibrary.addSprite("nugget_top","./sprites/nugget_top.png");

        //left right game
        s_oSpriteLibrary.addSprite("bg_gameLR","./sprites/bg_gameLR.jpg");
        // s_oSpriteLibrary.addSprite("boy_fail","./sprites/boy_fail.png");
        s_oSpriteLibrary.addSprite("boy_normal","./sprites/boy_normal.png");
        // s_oSpriteLibrary.addSprite("boy_pull","./sprites/boy_pull.png");
        // s_oSpriteLibrary.addSprite("boy_hand","./sprites/boy_hand.png");
        // s_oSpriteLibrary.addSprite("bat","./sprites/bat.png");
        // s_oSpriteLibrary.addSprite("gun","./sprites/gun.png");
        s_oSpriteLibrary.addSprite("gunclip","./sprites/gunclip.png");
        s_oSpriteLibrary.addSprite("gem_1","./sprites/gem_1.png");
        s_oSpriteLibrary.addSprite("gem_2","./sprites/gem_2.png");
        s_oSpriteLibrary.addSprite("gem_3","./sprites/gem_3.png");
        s_oSpriteLibrary.addSprite("gem_4","./sprites/gem_4.png");
        s_oSpriteLibrary.addSprite("gem_top","./sprites/gem_top.png");

        s_oSpriteLibrary.addSprite("girl_win","./sprites/girl_win.png");
        s_oSpriteLibrary.addSprite("girl_lose","./sprites/girl_lose.png");

        s_oSpriteLibrary.addSprite("boy_win","./sprites/boy_win.png");
        s_oSpriteLibrary.addSprite("boy_lose","./sprites/boy_lose.png");

        RESOURCE_TO_LOAD = s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this.handleFileLoad = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);

        if(_iCurResource === RESOURCE_TO_LOAD){
            this._allResourcesLoaded();
        }
    };

    this._onAllImagesLoaded = function(){

    };

    this.preloaderReady = function(){
        this._loadImages();
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }

        _bUpdate = true;
    };

    this._allResourcesLoaded = function(){
        _oPreloader.unload();

        if (!isIOS()) {
            s_oSoundTrack = playSound("soundtrack", 1, true);
        }

        s_oMain.gotoMenu();
    };

    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoGame = function(){
        _oGame = new CGame(_oData);

        _iState = STATE_GAME;
    };


    this.gotoGame0 = function(){
        _oGame = new CGame0(_oData);

        _iState = STATE_GAME;
    };

    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };

    this.stopUpdate = function(){
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            Howler.mute(true);
        }

    };

    this.startUpdate = function(){
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");

                Howler.mute(true);
    };

    this._update = function(){
        if(!_bUpdate){
            return;
        }

        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if(_iState === STATE_GAME){
            _oGame.update();
        }

        s_oStage.update();

    };

    s_oMain = this;
    _oData = oData;
    ENABLE_FULLSCREEN = oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;

    this.initContainer();
}

var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_bAudioActive = true;
var s_oSoundTrack = null;
var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_bFullscreen = false;
var s_aSounds;
