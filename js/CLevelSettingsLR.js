function CLevelSettingsLR(){

    var _aNuggetPos;
    var _aNuggetInfo;
    var _aMalusPos;
    var _aQuestionAnswer;
    var _aLevelTarget;

    this._init = function(){
        _aNuggetPos = new Array();
        _aNuggetInfo = new Array();
        _aMalusPos = new Array();
        _aQuestionAnswer = new Array();

        //Q1 {type:1,scale:0.6,text:"Q1禾",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
		{type:1,scale:0.6,text:"未",isCorrect:true,question:"女",answer:"妹"},
		{type:2,scale:0.6,text:"欠",isCorrect:false,question:"女",answer:"妹"},
		{type:3,scale:0.6,text:"求",isCorrect:false,question:"女",answer:"妹"},
		{type:4,scale:0.6,text:"甘",isCorrect:false,question:"女",answer:"妹"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q2 {type:1,scale:0.6,text:"Q2日",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
		{type:1,scale:0.6,text:"甘",isCorrect:true,question:"舌",answer:"甜"},
		{type:2,scale:0.6,text:"欠",isCorrect:false,question:"舌",answer:"甜"},
		{type:3,scale:0.6,text:"求",isCorrect:false,question:"舌",answer:"甜"},
		{type:4,scale:0.6,text:"未",isCorrect:false,question:"舌",answer:"甜"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q3 {type:1,scale:0.6,text:"Q3父",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
		{type:1,scale:0.6,text:"求",isCorrect:true,question:"王",answer:"球"},
		{type:2,scale:0.6,text:"欠",isCorrect:false,question:"王",answer:"球"},
		{type:3,scale:0.6,text:"甘",isCorrect:false,question:"王",answer:"球"},
		{type:4,scale:0.6,text:"未",isCorrect:false,question:"王",answer:"球"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q4 {type:1,scale:0.6,text:"Q4禾",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
		{type:1,scale:0.6,text:"欠",isCorrect:true,question:"哥",answer:"歌"},
		{type:2,scale:0.6,text:"求",isCorrect:false,question:"哥",answer:"歌"},
		{type:3,scale:0.6,text:"甘",isCorrect:false,question:"哥",answer:"歌"},
		{type:4,scale:0.6,text:"未",isCorrect:false,question:"哥",answer:"歌"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q5 {type:1,scale:0.6,text:"Q5日",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
		{type:1,scale:0.6,text:"昌",isCorrect:true,question:"口",answer:"唱"},
		{type:2,scale:0.6,text:"求",isCorrect:false,question:"口",answer:"唱"},
		{type:3,scale:0.6,text:"日",isCorrect:false,question:"口",answer:"唱"},
		{type:4,scale:0.6,text:"水",isCorrect:false,question:"口",answer:"唱"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q6 {type:1,scale:0.6,text:"Q6立",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
		{type:1,scale:0.6,text:"果",isCorrect:true,question:"言",answer:"課"},
		{type:2,scale:0.6,text:"求",isCorrect:false,question:"言",answer:"課"},
		{type:3,scale:0.6,text:"火",isCorrect:false,question:"言",answer:"課"},
		{type:4,scale:0.6,text:"水",isCorrect:false,question:"言",answer:"課"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q7 {type:1,scale:0.6,text:"Q7田",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
          {type:1,scale:0.6,text:"青",isCorrect:true,question:"日",answer:"晴"},
        	{type:2,scale:0.6,text:"巴",isCorrect:false,question:"日",answer:"晴"},
        	{type:3,scale:0.6,text:"求",isCorrect:false,question:"日",answer:"晴"},
        	{type:4,scale:0.6,text:"水",isCorrect:false,question:"日",answer:"晴"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q8 {type:1,scale:0.6,text:"Q7田",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
          {type:1,scale:0.6,text:"重",isCorrect:true,question:"禾",answer:"種"},
      		{type:2,scale:0.6,text:"巴",isCorrect:false,question:"禾",answer:"種"},
      		{type:3,scale:0.6,text:"生",isCorrect:false,question:"禾",answer:"種"},
      		{type:4,scale:0.6,text:"水",isCorrect:false,question:"禾",answer:"種"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q9 {type:1,scale:0.6,text:"Q7田",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
          {type:1,scale:0.6,text:"火",isCorrect:true,question:"禾",answer:"秋"},
      		{type:2,scale:0.6,text:"巴",isCorrect:false,question:"禾",answer:"秋"},
      		{type:3,scale:0.6,text:"生",isCorrect:false,question:"禾",answer:"秋"},
      		{type:4,scale:0.6,text:"水",isCorrect:false,question:"禾",answer:"秋"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q10 {type:1,scale:0.6,text:"Q7田",isCorrect:true},
        var aNuggets = [{x:1000,y:100},{x:1000,y:300},{x:1000,y:500},{x:1000,y:700}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [
          {type:1,scale:0.6,text:"欠",isCorrect:true,question:"口",answer:"吹"},
      		{type:2,scale:0.6,text:"求",isCorrect:false,question:"口",answer:"吹"},
      		{type:3,scale:0.6,text:"火",isCorrect:false,question:"口",answer:"吹"},
      		{type:4,scale:0.6,text:"水",isCorrect:false,question:"口",answer:"吹"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //TODO: Q8-Q10

        //INIT ALL LEVEL TARGET
        _aLevelTarget = new Array();

        //TARGET LEVEL 1
        _aLevelTarget.push(2000);
        _aLevelTarget.push(2000);
        _aLevelTarget.push(2000);
        _aLevelTarget.push(2000);

        //shuffle _aNuggetInfo
        _aNuggetInfo = shuffle(_aNuggetInfo);
    };

    this.getNuggetPosInLevel = function(iLevel){
        return _aNuggetPos[iLevel-1];
    };

    this.getNuggetInfoInLevel = function(iLevel){
        return _aNuggetInfo[iLevel-1];
    };

    this.getMalusPosInLevel = function(iLevel){
        return _aMalusPos[iLevel-1];
    };

    this.getLevelTarget = function(iLevel){
        return _aLevelTarget[iLevel-1];
    };

    this.getQuestionAnswer = function(iLevel){
        return _aQuestionAnswer[iLevel-1];
    };
    this.getNumLevels = function(){
        return _aLevelTarget.length;
    };

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
    }

    this._init();
}
