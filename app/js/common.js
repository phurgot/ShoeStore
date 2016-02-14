$(function() {
	Route.listen();
	Route.map('#/category-all').to(function(){
		$('#content').load('category-all.html');
	});
	Route.map('#/category/categoryId').to(function(){
		$('#content').load('category.html');
	});

	var searchElement = $('#search');

	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

	searchElement.on('blur', function() {
		if(searchElement.val()=='') {
			searchElement.animate({width:'0'},200)
		}
	});
	$('.search-icon').on('click hover', function() {
		searchElement.animate({width:'186px'},200);
		searchElement.focus();
	})
});
