angular.module('OpiaBlog')
.factory('blogPostsFactory',function() {
	var posts = {
		data: [
			{
				id: 0,
				title: 'The life of a blog title',
				author: "Blog Admin",
				dateTimePosted: "2017-02-22 13:15:00",
				paragraphs: [
					"Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea. Pro admodum contentiones ad, sint efficiantur qui in, ut partiendo consetetur reprehendunt nam. Ceteros cotidieque philosophia nec an, quaeque consequat cu sed, iusto commune ne sed. Cum cibo dicta definiebas eu, sea possim eleifend eloquentiam ei. Qui ut sumo animal moderatius, ut prima delicata concludaturque eam."
				],
				imgUrl: 'images/post-summary-img.jpg'
			},
			{
				id: 1,
				title: 'Just another title',
				author: "Blog Admin",
				dateTimePosted: "2017-02-22 13:15:00",
				paragraphs: [
					"Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea. Pro admodum contentiones ad, sint efficiantur qui in, ut partiendo consetetur reprehendunt nam. Ceteros cotidieque philosophia nec an, quaeque consequat cu sed, iusto commune ne sed. Cum cibo dicta definiebas eu, sea possim eleifend eloquentiam ei. Qui ut sumo animal moderatius, ut prima delicata concludaturque eam."
				],
				imgUrl: 'images/post-summary-img.jpg'
			},
			{
				id: 2,
				title: 'Threesy does it',
				author: "Blog Admin",
				dateTimePosted: "2017-02-22 13:15:00",
				paragraphs: [
					"Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea. Pro admodum contentiones ad, sint efficiantur qui in, ut partiendo consetetur reprehendunt nam. Ceteros cotidieque philosophia nec an, quaeque consequat cu sed, iusto commune ne sed. Cum cibo dicta definiebas eu, sea possim eleifend eloquentiam ei. Qui ut sumo animal moderatius, ut prima delicata concludaturque eam."
				],
				imgUrl: 'images/post-summary-img.jpg'
			},
			{
				id: 3,
				title: 'One final blog heading',
				author: "Blog Admin",
				dateTimePosted: "2017-02-22 13:15:00",
				paragraphs: [
					"Lorem ipsum dolor sit amet, pro an error patrioque, at esse decore integre mea. Pro admodum contentiones ad, sint efficiantur qui in, ut partiendo consetetur reprehendunt nam. Ceteros cotidieque philosophia nec an, quaeque consequat cu sed, iusto commune ne sed. Cum cibo dicta definiebas eu, sea possim eleifend eloquentiam ei. Qui ut sumo animal moderatius, ut prima delicata concludaturque eam."
				],
				imgUrl: 'images/post-summary-img.jpg'
			}

		]
	}
	return posts;
});