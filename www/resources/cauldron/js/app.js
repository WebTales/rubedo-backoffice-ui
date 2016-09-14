Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};
var App = angular.module('cauldron', ['ngDragDrop']);
App.controller('CauldronController', ['$scope','$q',function($scope,$q) {
    var me=this;
    me.instructionTypes={
        ifThen:{
            template:"templates/ifThen.html",
            instructionDefaultConfig:{
                conditionsArray:[],
                conditionsOperator:"AND",
                executionsArray:[]
            }
        },
        incVar:{
            template:"templates/incVar.html",
            instructionDefaultConfig:{
                property:null,
                value:1
            },
            toInstruction:function(config){
                return config.value ? "INC("+config.property+","+config.value+")" : "INC("+config.property+")";
            }
        },
        decVar:{
            template:"templates/decVar.html",
            instructionDefaultConfig:{
                property:null,
                value:1
            },
            toInstruction:function(config){
                return config.value ? "DEC("+config.property+","+config.value+")" : "DEC("+config.property+")";
            }
        },
        showModal:{
            template:"templates/showModal.html",
            instructionDefaultConfig:{
                code:null
            },
            toInstruction:function(config){
                return "SHOWMODAL('"+config.code+"')";
            }
        },
        showBlock:{
            template:"templates/showBlock.html",
            instructionDefaultConfig:{
                code:null
            },
            toInstruction:function(config){
                return "SHOWBLOCK('"+config.code+"')";
            }
        },
        hideBlock:{
            template:"templates/hideBlock.html",
            instructionDefaultConfig:{
                code:null
            },
            toInstruction:function(config){
                return "HIDEBLOCK('"+config.code+"')";
            }
        }
    };
    me.getInstructionTemplate=function(type){
        return(me.instructionTypes[type] ? me.instructionTypes[type].template : null);
    };
    me.elementSet=[
        {
            title:"If ... Then ...",
            icon:"next.png"
        },
        {
            title:"When ... DO ...",
            icon:"flag.png"
        },
        {
            title:"Set variable",
            icon:"page_next.png"
        },
        {
            title:"Increment variable",
            icon:"add.png",
            type:"incVar"
        },
        {
            title:"Decrement variable",
            icon:"remove.png",
            type:"decVar"
        },
        {
            title:"Show modal",
            icon:"windows.png",
            type:"showModal"
        },
        {
            title:"Show block",
            icon:"application_add.png",
            type:"showBlock"
        },
        {
            title:"Hide block",
            icon:"application_remove.png",
            type:"hideBlock"
        }
    ];
    me.instructionsArray=[

    ];
    me.getPhilter=function(){
        var stringArray=[];
        angular.forEach(me.instructionsArray,function(instruction){
            var type=angular.copy(instruction.type);
            if(me.instructionTypes[type]){
                stringArray.push(me.instructionTypes[type].toInstruction(angular.copy(instruction.config)));
            }
        });
        return stringArray.join('\n');
    };
    me.dropInMain=function(){
        me.mainDropClass="alert-info";
        var type=angular.copy(me.currentItemType);
        if(me.instructionTypes[type]){
            me.instructionsArray.push({
                type:type,
                config:angular.copy(me.instructionTypes[type].instructionDefaultConfig)
            });
        }
        var deferred = $q.defer();
        deferred.reject();
        return deferred.promise;
    };
    me.mainDropClass="alert-info";
    me.onMainOver=function(){
        me.mainDropClass="alert-success";
        $scope.$apply();
    };
    me.onMainOut=function(){
        me.mainDropClass="alert-info";
        $scope.$apply();
    };
    me.currentItemType=null;
    me.setCurrentItemType=function(useless1,useless2,type){
        me.currentItemType=type;
    };
    me.moveItemUp=function(index){
        me.instructionsArray.move(index,index-1);
    };
    me.moveItemDown=function(index){
        me.instructionsArray.move(index,index+1);
    };
    me.removeItem=function(index){
        me.instructionsArray.splice(index,1);
    };
}]);
App.directive('autoCompleteCondition', function($timeout) {
    return function(scope, iElement, iAttrs) {
        iElement.autocomplete({
            source: [
                "USER.RUID",
                "USER.ISCONNECTED",
                "USER.EMAIL",
                "USER.ISEMAILVALID",
                "USER.ISGEOLOCATED",
                "USER.SUBSCRIBEDTO",
                "PAGE.TIMEONPAGE",
                "PAGE.REFERRER",
                "PAGE.NBVIEWS",
                "SESSION.DURATION",
                "TIME"
            ],
            select: function() {
                $timeout(function() {
                    iElement.trigger('input');
                }, 0);
            }
        });
    };
});
App.directive('autoCompleteAction', function($timeout) {
    return function(scope, iElement, iAttrs) {
        iElement.autocomplete({
            source: [
                "PAGE.NBVIEWS"
            ],
            select: function() {
                $timeout(function() {
                    iElement.trigger('input');
                }, 0);
            }
        });
    };
});

