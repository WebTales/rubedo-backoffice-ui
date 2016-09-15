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
App.controller('CauldronController', ['$scope','$q','$location',function($scope,$q,$location) {
    var me=this;
    me.instructionTypes={
        ifThen:{
            template:"templates/ifThen.html",
            instructionDefaultConfig:{
                conditionsArray:[{
                    property:null,
                    operator:" = ",
                    value:null
                }],
                conditionsOperator:" AND ",
                executionsArray:[]
            },
            toInstruction:function(config){
                var executionArray=[];
                angular.forEach(config.executionsArray,function(instruction){
                    var type=angular.copy(instruction.type);
                    if(me.instructionTypes[type]){
                        executionArray.push(me.instructionTypes[type].toInstruction(angular.copy(instruction.config)));
                    }
                });
                var conditionsArray=[];
                angular.forEach(config.conditionsArray,function(conditionOri){
                    var condition=angular.copy(conditionOri);
                    if(!condition.operator){
                        condition.operator="";
                    }
                    if(!condition.value){
                        condition.value="";
                    }
                    conditionsArray.push(isNaN(parseFloat(condition.value))&&condition.value!="" ? condition.property+condition.operator+"'"+condition.value+"'" : condition.property+condition.operator+condition.value);
                });
                return "IF "+conditionsArray.join(config.conditionsOperator)+" THEN "+executionArray.join('; ');

            }
        },
        whenDo:{
            template:"templates/whenDo.html",
            instructionDefaultConfig:{
                eventName:null,
                executionsArray:[]
            },
            toInstruction:function(config){
                var executionArray=[];
                angular.forEach(config.executionsArray,function(instruction){
                    var type=angular.copy(instruction.type);
                    if(me.instructionTypes[type]){
                        executionArray.push(me.instructionTypes[type].toInstruction(angular.copy(instruction.config)));
                    }
                });
                return "WHEN "+config.eventName+" DO "+executionArray.join('; ');

            }
        },
        setVar:{
            template:"templates/setVar.html",
            instructionDefaultConfig:{
                property:null,
                value:1
            },
            toInstruction:function(config){
                return isNaN(parseFloat(config.value)) ? "SET("+config.property+",'"+config.value+"')" : "SET("+config.property+","+config.value+")";
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
            icon:"next.png",
            type:"ifThen"
        },
        {
            title:"When ... DO ...",
            icon:"flag.png",
            type:"whenDo"
        },
        {
            title:"Set variable",
            icon:"page_next.png",
            type:"setVar"
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
    me.instructionsArray=[];
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
    me.saveChanges=function(){
        console.log(JSON.stringify(me.instructionsArray));
    };
    var stringConfig=$location.search().config;
    if(stringConfig){
        me.instructionsArray=angular.copy(JSON.parse(stringConfig));
    }
}]);
App.controller('WhenDoController', ['$scope','$q',function($scope,$q) {
    var me=this;
    me.dropInMain=function(){
        me.mainDropClass="alert-info";
        var type=angular.copy($scope.cauldron.currentItemType);
        if(type!="ifThen"&&type!="whenDo"&&$scope.cauldron.instructionTypes[type]){
            $scope.instruction.config.executionsArray.push({
                type:type,
                config:angular.copy($scope.cauldron.instructionTypes[type].instructionDefaultConfig)
            });
        }
        var deferred = $q.defer();
        deferred.reject();
        return deferred.promise;
    };
    me.mainDropClass="alert-info";
    me.onMainOver=function(){
        var type=angular.copy($scope.cauldron.currentItemType);
        me.mainDropClass=type!="ifThen"&&type!="whenDo" ? "alert-success" : "alert-danger";
        $scope.$apply();
    };
    me.onMainOut=function(){
        me.mainDropClass="alert-info";
        $scope.$apply();
    };
    me.moveItemUp=function(index){
        $scope.instruction.config.executionsArray.move(index,index-1);
    };
    me.moveItemDown=function(index){
        $scope.instruction.config.executionsArray.move(index,index+1);
    };
    me.removeItem=function(index){
        $scope.instruction.config.executionsArray.splice(index,1);
    };
    me.getInstLength=function(){
        return $scope.instruction.config.executionsArray.length-1;
    };
}]);
App.controller('IfThenController', ['$scope','$q',function($scope,$q) {
    var me=this;
    me.dropInMain=function(){
        me.mainDropClass="alert-info";
        var type=angular.copy($scope.cauldron.currentItemType);
        if(type!="ifThen"&&type!="whenDo"&&$scope.cauldron.instructionTypes[type]){
            $scope.instruction.config.executionsArray.push({
                type:type,
                config:angular.copy($scope.cauldron.instructionTypes[type].instructionDefaultConfig)
            });
        }
        var deferred = $q.defer();
        deferred.reject();
        return deferred.promise;
    };
    me.mainDropClass="alert-info";
    me.onMainOver=function(){
        var type=angular.copy($scope.cauldron.currentItemType);
        me.mainDropClass=type!="ifThen"&&type!="whenDo" ? "alert-success" : "alert-danger";
        $scope.$apply();
    };
    me.onMainOut=function(){
        me.mainDropClass="alert-info";
        $scope.$apply();
    };
    me.moveItemUp=function(index){
        $scope.instruction.config.executionsArray.move(index,index-1);
    };
    me.moveItemDown=function(index){
        $scope.instruction.config.executionsArray.move(index,index+1);
    };
    me.removeItem=function(index){
        $scope.instruction.config.executionsArray.splice(index,1);
    };
    me.getInstLength=function(){
        return $scope.instruction.config.executionsArray.length-1;
    };
    me.moveCondItemUp=function(index){
        $scope.instruction.config.conditionsArray.move(index,index-1);
    };
    me.moveCondItemDown=function(index){
        $scope.instruction.config.conditionsArray.move(index,index+1);
    };
    me.removeCondItem=function(index){
        $scope.instruction.config.conditionsArray.splice(index,1);
    };
    me.addCondition=function(){
        $scope.instruction.config.conditionsArray.push({
            property:null,
            operator:" = ",
            value:null
        });
    };
    me.conditionOperators=[
        "",
        " = ",
        " NOT = ",
        " < ",
        " > ",
        " <= ",
        " >= "
    ];
    me.conditionInterOperators=[
        " AND ",
        " OR "
    ];

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

