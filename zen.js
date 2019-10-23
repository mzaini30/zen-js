// source: github.com/mzaini30/zen-js

// Auto hide menu for Bootstrap 3 after click menu item

$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

// jQuery contains for case insensitive

$.expr[':'].contains = $.expr.createPseudo(function(arg){
	return function(elem){
		return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
	}
})

// To top

to_top = function(){
	$('html, body').animate({
		scrollTop: 0
	}, 600);
}