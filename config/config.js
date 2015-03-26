( function () {
	'use strict';
	function configRoutes( $stateProvider, $urlRouterProvider ) {
		$stateProvider
	    	.state('home', {
	     	url: '/home',
	    	templateUrl: '/home/home.html',
	    	controller: 'HomeCtrl',
	    	controllerAs: 'home'
	    });

	  	$urlRouterProvider.otherwise('home');
	}

	angular.module( 'app.config' )
		.config( configRoutes )
})();