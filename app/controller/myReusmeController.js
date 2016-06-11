(function(){
    var myResumeController = function($scope,profileFactory){
       // $scope.userProfile = profileFactory.getProfile();
        $scope.projectUrl = "components/projectList.html";
        $scope.skillUrl = "components/skillList.html";
        $scope.sectionTemplates = profileFactory.getUrlTemplates();
       // console.log('$scope.userProfile');
    };

    angular.module('myResumeApp').controller('myResumeController',['$scope','profileFactory',myResumeController]);
})()