function CHelp(oSprite){
    var _oGroup;
    var _oText1;
    var _oText1Back;
    var _oText2;
    var _oText2Back;

    this._init = function(oSprite){
        var oBg = createBitmap(oSprite);
        //
        // _oText1Back = new createjs.Text("START","40px "+FONT_GAME, "#000000");
        // _oText1Back.x = CANVAS_WIDTH/2 + 2;
        // _oText1Back.y = 350;
        // _oText1Back.textAlign = "center";

        _oText1 = new createjs.Text("小朋友，我喺海裏面發現\n咗一d好特別既花樽，請\n你睇下我身邊呢半個花樽，\n然後係海裏面搵出另外半個，\n組成一個完整既花樽。留意\n呢個花樽既上半部分同\n下半部分係可以組成一\n個由上下兩個部分組合\n而成既字架。","40px "+FONT_GAME, "#ffffff");
        _oText1.x = CANVAS_WIDTH/2;
        _oText1.y = 240;
        _oText1.textAlign = "center";

        _oText2Back = new createjs.Text(TEXT_AVOID,"40px "+FONT_GAME, "#000000");
        _oText2Back.x = CANVAS_WIDTH/2 + 2;
        _oText2Back.y = 422;
        _oText2Back.textAlign = "center";

        _oText2 = new createjs.Text(TEXT_AVOID,"40px "+FONT_GAME, "#ffffff");
        _oText2.x = CANVAS_WIDTH/2;
        _oText2.y = 420;
        _oText2.textAlign = "center";

        _oGroup = new createjs.Container();
        _oGroup.addChild(oBg);
        _oGroup.addChild(_oText1);

        s_oStage.addChild(_oGroup);

        var oParent = this;
        _oGroup.on("pressup",function(){oParent._onExit()});
    };

    this.unload = function(){
        var oParent = this;
        _oGroup.off("pressup",function(){oParent._onExit()});
        s_oStage.removeChild(_oGroup);
    };

    this._onExit = function(){
        this.unload();
        s_oGame.onExitHelp();
    };

    this._init(oSprite);
}
