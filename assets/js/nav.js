function resize() {
	window.addEventListener('resize', function() {
			var width = document.body.clientWidth;
			var sidenav = document.getElementById("Sidenav");


			if (width < 964 ) {

				closeNav();

			}

			else {

				openNav(0);

			}
		});

}

function openNav(num) {

	console.log(num);
	document.getElementById("nav-btn").style.visibility = 'collapse';
	document.getElementById("Sidenav").style.width = "60px";
	if (num == 1) {
		document.getElementById("close-btn").style.display = 'block';
	}
	else {
		document.getElementById("close-btn").style.display = 'none';
	}
	
	
	

}

function closeNav() {

	document.getElementById("Sidenav").style.width = "0";
	document.getElementById("nav-btn").style.visibility = 'visible';
	
	

}