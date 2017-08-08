angular.module('OpiaBlog')
.factory('slideShowSlides',function() {
	var slides = [
		{
			id: 0,
			imgUrl: 'images/header-background-1.jpg',
			title: 'Blog Header',
			intro: 'Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea.'
		},
		{
			id: 1,
			imgUrl: 'images/header-background-2.jpg',
			title: 'Blog Header 2',
			intro: 'Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea.'
		},
		{
			id: 2,
			imgUrl: 'images/header-background-3.jpg',
			title: 'Blog Header 3',
			intro: 'Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea.'
		},
		{
			id: 4,
			imgUrl: 'images/header-background-4.jpg',
			title: 'Blog Header 4',
			intro: 'Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea.'
		}
	]
	return slides;
});