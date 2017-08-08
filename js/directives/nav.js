angular.module('OpiaBlog')
.directive('nav',function() {
	return {
		restrict: 'E',
		controller: function($scope,$element) {
			$scope.navBar = $element[0].querySelector('ul.nav-bar');
			$scope.toggleMobileMenu = function() {
				$scope.navBar.classList.toggle('active');				
			};
		},
		templateUrl: 'js/directives/templates/nav.html',
	}
});