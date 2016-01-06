var app = angular.module("myModule",[]).controller("myController",function($scope,$http){
	
	var employees=[
	{firstname:"John",Lastname:"Doe",Email:"john@example.com"},
		{firstname:"Mary",Lastname:"Moe",Email:"mary@example.com"},
			{firstname:"July",Lastname:"Dooley",Email:"july@example.com"},
				{firstname:"Raghu",Lastname:"bikkumala",Email:"raghu.bikumalla@gmail.com"}
	]	
	
	$scope.employees = employees;
	 $http({
        url: 'http://www.webservicex.net/globalweather.asmx/GetCitiesByCountry',
        method: "POST",
        data: { 'CountryName' : "India" }
    })
    .then(function(response) {
            // success
    }, 
    function(response) { // optional
            // failed
    });
	 

});



