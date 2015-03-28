( function () {
	'use strict';

	function PostCtrl( $stateParams) {
		var self = this;
		self.title = 'dummy data',
		self.id = 0,
		self.comments = [
				{ author: 'jerome', body : 'this is a body', upvotes: 0 },
				{ author : 'jerome', body : 'this is !dbody', upvotes: 100 }
		];
	}

	angular
		.module( 'app.post' )
		.controller( 'PostCtrl', PostCtrl );
})();