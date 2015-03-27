( function () {
	'use strict';

	function PostCtrl() {
		var self = this;

		self.posts.push( {
			title : self.title,
			link : self.link,
			upvotes : 0,
			comments : [
				{ author: 'jerome', body : 'this is a body', upvotes: 0 },
				{ author : 'jerome', body : 'this is !dbody', upvotes: 100 }
			]
		});
	}

	angular
		.module( 'app.post' )
		.controller( 'PostCtrl', PostCtrl );
})();