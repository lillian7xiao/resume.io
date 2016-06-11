(function(){
    var profileFactory = function($http,$q){
        return{
            getvalue :function(){
                return 1;
            },
            getUrlTemplates:function(){
                var urlTemplates = [
                    {
                        name:'profileSummary',
                        url:'components/profileList.html'
                    },
                    {
                        name: 'skillTemp',
                        url: 'components/skillList.html'
                    },
                    {
                        name: 'projectTemp',
                        url: 'components/projectList.html'
                    },
                    {
                        name: 'educationList',
                        url: 'components/educationList.html'
                    }
                ];
                return urlTemplates;
            }
        }

    }
    angular.module('myResumeApp').factory('profileFactory',['$http','$q',profileFactory]);
})()