( function () {
	'use strict';
	function configRoutes( $stateProvider, $urlRouterProvider ) {
		$stateProvider
	    	.state('home', {
		     	url: '/home',
		    	templateUrl: '/home/home.html',
		    	controller: 'HomeCtrl',
		    	controllerAs: 'home'
	    	})
	    	.state( 'post', {
		     	url: '/post/{postId}',
		    	templateUrl: '/post/post.html',
		    	controller: 'PostCtrl',
		    	controllerAs: 'post'
	    	});

	  	$urlRouterProvider.otherwise('home');
	}

	angular.module( 'app.config' )
		.config( configRoutes )
})();