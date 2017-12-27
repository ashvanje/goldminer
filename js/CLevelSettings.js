function CLevelSettings(){

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

        //Q1 {type:1,scale:0.6,text:"Q1禾",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"日",isCorrect:true,question:"禾",answer:"香"},{type:2,scale:0.6,text:"力",isCorrect:false,question:"禾",answer:"香"},{type:3,scale:0.6,text:"生",isCorrect:false,question:"禾",answer:"香"},{type:4,scale:0.6,text:"巴",isCorrect:false,question:"禾",answer:"香"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q2 {type:1,scale:0.6,text:"Q2日",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"生",isCorrect:true,question:"日",answer:"星"},{type:2,scale:0.6,text:"日",isCorrect:false,question:"日",answer:"星"},{type:3,scale:0.6,text:"力",isCorrect:false,question:"禾",answer:"星"},{type:4,scale:0.6,text:"巴",isCorrect:false,question:"日",answer:"星"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q3 {type:1,scale:0.6,text:"Q3父",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"巴",isCorrect:true,question:"父",answer:"爸"},{type:2,scale:0.6,text:"日",isCorrect:false,question:"父",answer:"爸"},{type:3,scale:0.6,text:"力",isCorrect:false,question:"父",answer:"爸"},{type:4,scale:0.6,text:"生",isCorrect:false,question:"父",answer:"爸"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q4 {type:1,scale:0.6,text:"Q4禾",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"力",isCorrect:true,question:"田",answer:"力"},{type:2,scale:0.6,text:"日",isCorrect:false,question:"田",answer:"力"},{type:3,scale:0.6,text:"巴",isCorrect:false,question:"田",answer:"力"},{type:4,scale:0.6,text:"生",isCorrect:false,question:"田",answer:"力"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q5 {type:1,scale:0.6,text:"Q5日",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"十",isCorrect:true,question:"日",answer:"十"},{type:2,scale:0.6,text:"力",isCorrect:false,question:"日",answer:"十"},{type:3,scale:0.6,text:"水",isCorrect:false,question:"日",answer:"十"},{type:4,scale:0.6,text:"巴",isCorrect:false,question:"日",answer:"十"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q6 {type:1,scale:0.6,text:"Q6立",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"日",isCorrect:true,question:"立",answer:"音"},{type:2,scale:0.6,text:"巴",isCorrect:false,question:"立",answer:"音"},{type:3,scale:0.6,text:"力",isCorrect:false,question:"立",answer:"音"},{type:4,scale:0.6,text:"生",isCorrect:false,question:"立",answer:"音"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus);
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

        //Q7 {type:1,scale:0.6,text:"Q7田",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"心",isCorrect:true,question:"田",answer:"思"},{type:2,scale:0.6,text:"生",isCorrect:false,question:"田",answer:"思"},{type:3,scale:0.6,text:"巴",isCorrect:false,question:"田",answer:"思"},{type:4,scale:0.6,text:"山",isCorrect:false,question:"田",answer:"思"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus)
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

		//Q8 {type:1,scale:0.6,text:"Q7田",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"可",isCorrect:true,question:"大",answer:"奇"},{type:2,scale:0.6,text:"心",isCorrect:false,question:"大",answer:"奇"},{type:3,scale:0.6,text:"水",isCorrect:false,question:"大",answer:"奇"},{type:4,scale:0.6,text:"求",isCorrect:false,question:"大",answer:"奇"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus)
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

		//Q9 {type:1,scale:0.6,text:"Q7田",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"子",isCorrect:true,question:"禾",answer:"季"},{type:2,scale:0.6,text:"力",isCorrect:false,question:"禾",answer:"季"},{type:3,scale:0.6,text:"生",isCorrect:false,question:"禾",answer:"季"},{type:4,scale:0.6,text:"巴",isCorrect:false,question:"禾",answer:"季"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus)
        var questionAnswer = [{question:"禾",answer:"香"}];
        _aQuestionAnswer.push(questionAnswer);

		//Q10 {type:1,scale:0.6,text:"Q7田",isCorrect:true,question:"禾",answer:"香"},
        var aNuggets = [{x:400,y:500},{x:650,y:500},{x:900,y:500},{x:1150,y:500}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:0.6,text:"子",isCorrect:true,question:"口",answer:"員"},{type:2,scale:0.6,text:"力",isCorrect:false,question:"口",answer:"員"},{type:3,scale:0.6,text:"生",isCorrect:false,question:"口",answer:"員"},{type:4,scale:0.6,text:"巴",isCorrect:false,question:"口",answer:"員"}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [];
        _aMalusPos.push(aMalus)
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
