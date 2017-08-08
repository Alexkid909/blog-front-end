angular.module('OpiaBlog')
.controller('SlideShowController',['$scope','slideShowSlides',
	function($scope,slideShowSlides) {
		$scope.slides = slideShowSlides;
	}
]);