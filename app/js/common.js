$(function() {

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
