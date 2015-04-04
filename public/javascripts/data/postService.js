( function () {
	'use strict';

	function postService() {
		return  {
			get : [
				{title: 'post 1', upvotes: 5, id : 1},
				{title: 'post 2', upvotes: 2, id : 2},
				{title: 'post 3', upvotes: 15, id:3},
				{title: 'post 4', upvotes: 9, id: 4},
				{title: 'post 5', upvotes: 4, id:5}
			]
		};
	}

	angular.module( 'app.data' )
		.factory( 'postService', postService );
})();