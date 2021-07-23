const URL = "https://covid19.mathdro.id/api"
let app = angular.module('myApp', []);

app.controller('myCtrl', ($scope, $http)=>{
    $scope.title = "Stay Home Stay Safe";

    // calling api
    // then takes two prams, first one response success second one reponse fail

    $http.get(URL).then((response)=>{
        // success
        // console.log(response.data);

        $scope.all_data = response.data;
    },(error)=>{
        // error
        console.log(error);
    });
    
    // get country data
    $scope.get_c_data = ()=>{
        // getting value from input
        let country = $scope.countryName;
        if(country == ""){
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
        .then((response)=>{

            $scope.c_data = response.data

        },(error)=>{

        })
    };
});