angular.module('OpiaBlog')
.directive('blogSummary',function() {
	return {
		restrict: 'E',
		scope: {
				id: '@',
				title: '@',
				author: '@',
				dateTimePostedString: '@',
				paragraphs: '=',
				imgUrl: '@'
		},
		controller: function($scope,$element) {
			$scope.dateTimePosted = new Date($scope.dateTimePostedString);
		},
		templateUrl: 'js/directives/templates/blog-summary.html'
	}
});