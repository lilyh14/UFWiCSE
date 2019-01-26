var $document = $(document), $element = $('.navbar');

navbarSolid = 'bg-light';
lightLetters = "navbar-dark";
darkLetters = "navbar-light";

fadeInDown = 'fadeInDown';
fadeInUp = 'fadeInUp';

$document.scroll(function() {
	var menuToggle = document.getElementById("solidify-toggler").getAttribute("aria-expanded");

	if ($document.scrollTop() >= 100 && menuToggle == "false") {
		// user scrolled more than 100 pixels
		$element.removeClass(lightLetters);
		$element.removeClass(fadeInUp);
		$element.addClass(navbarSolid);
		$element.addClass(darkLetters);
		$element.addClass(fadeInDown);
	}
	else {
		if (menuToggle == "false") {
			$element.removeClass(navbarSolid);
			$element.removeClass(darkLetters);
			$element.removeClass(fadeInDown);
			$element.addClass(lightLetters);
			$element.addClass(fadeInUp);
		}
	}
});

// solidifies the navbar when user is in front page and menu button is toggled
function solidify() {
	var menuToggle = document.getElementById("solidify-toggler").getAttribute("aria-expanded");

	if (menuToggle == "false") {
		$element.removeClass(lightLetters);
		$element.removeClass(fadeInUp);
		$element.addClass(navbarSolid);
		$element.addClass(darkLetters);
		$element.addClass(fadeInDown);
	} 
	else {
		if($document.scrollTop() < 100) {
			$element.removeClass(navbarSolid);
			$element.removeClass(darkLetters);
			$element.removeClass(fadeInDown);
			$element.addClass(lightLetters);
			$element.addClass(fadeInUp);
		}
	}
}