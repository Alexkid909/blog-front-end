angular.module('OpiaBlog')
.directive('slide',function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/templates/slide.html',
		scope: {
			slideId: '=',
			imgUrl: '=',
			title: '=',
			intro: '='
		},
		controller: function($scope) {
		}
	}
});