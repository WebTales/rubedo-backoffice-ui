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
        }
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
            icon:"add.png"
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
        console.log("dropped "+me.currentItemType);
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
        console.log(type);
        me.currentItemType=type;
    };
}]);