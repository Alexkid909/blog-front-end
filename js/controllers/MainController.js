angular.module('OpiaBlog')
.controller('MainController',[
	'$scope',
	'blogPostsFactory',
	function($scope,blogPostsFactory) {
		$scope.posts = blogPostsFactory.data;
}]);