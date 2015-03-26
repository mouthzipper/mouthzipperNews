( function () {
	'use strict';

	function HomeCtrl( postService ) {
		var self = this;
		self.addPost = addPost;
		self.incrementUpvotes = incrementUpvotes;

		self.posts = postService.get;

		function incrementUpvotes ( post ) {
			post.upvotes += 1;
		}

		function addPost() {
			 if( !self.title || self.title === '' ) {
			 	return;
			 }
			self.posts.push( { title : self.title, link : self.link, upvotes : 0 } );
			self.title='';
			self.link='';
		}
	}

	HomeCtrl.$inject = [ 'postService'];
	angular.module( 'app.home' )
	.controller( 'HomeCtrl', HomeCtrl );
})();