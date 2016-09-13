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
            icon:"remove.png"
        },
        {
            title:"Show modal",
            icon:"windows.png"
        },
        {
            title:"Show block",
            icon:"application_add.png"
        },
        {
            title:"Hide block",
            icon:"application_remove.png"
        }
    ];
    me.instructionsArray=[

    ];
    me.dropInMain=function(){
        me.mainDropClass="alert-info";
        var type=angular.copy(me.currentItemType);
        if(me.instructionTypes[type]){
            me.instructionsArray.push({
                type:type,
                config:me.instructionTypes[type].instructionDefaultConfig
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
App.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
        iElement.autocomplete({
            source: [
                "USER.RUID"
            ],
            select: function() {
                $timeout(function() {
                    iElement.trigger('input');
                }, 0);
            }
        });
    };
});