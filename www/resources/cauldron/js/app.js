var App = angular.module('cauldron', []);
App.controller('CauldronController', ['$scope',function($scope) {
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
      console.log("test");
    };
}]);