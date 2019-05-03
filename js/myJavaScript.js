window.setTimeout(function loaders(){
	window.setTimeout(function showWELCOME(){
		document.getElementById('content').style.animation = "opacity0to1 0.6s ease-in-out 0s 1 normal";
		document.getElementById('content').style.display = "inline-block";
		document.getElementById('content').style.opacity = 1;
	}, 500);
}, 1000);
function hideNav(){
	document.getElementById('navbar').style.animation = "none";
	document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
	window.setTimeout(function asdf(){
		document.getElementById('navbar').style.left = '-14%';
	}, 300);
	document.getElementById('hideNav').style.display = "none";
	document.getElementById('showNav').style.display = "inline-block";
	window.setTimeout(function (){
		document.getElementsByClassName('buttons')[0].style.display = "none";
	}, 600);
}
function showNav(){
	document.getElementById('navbar').style.animation = "none";
	document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 reverse";
	window.setTimeout(function asdf(){
		document.getElementById('navbar').style.left = '0';
	}, 300);
	document.getElementById('hideNav').style.display = "inline-block";
	document.getElementById('showNav').style.display = "none";
	document.getElementsByClassName('buttons')[0].style.display = "inline-block";
}

function Navbar(){
	if (document.getElementById('hideNav').classList.contains('larr')) {
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('navImg').src = "images/arrow2.png";
		document.getElementById('hideNav').classList.remove('larr');
		document.getElementById('hideNav').classList.add('rarr');
	} 
	if (document.getElementById('hideNav').classList.contains('rarr')) {
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 reverse";
		window.setTimeout(function (){
		document.getElementById('navbar').style.left = '0';
		}, 300);
		document.getElementById('navImg').src = "images/arrow1.png";
		document.getElementById('hideNav').classList.remove('rarr');
		document.getElementById('hideNav').classList.add('larr');
	}
}






function moveBG(){
	document.getElementById('iBg').style.animation = "moveBG 0.3s linear 0s 1 normal";
	window.setTimeout(function asdfw(){
		document.getElementById('iBg').style.left = "-5%";
	}, 250);
}
function reversemoveBG(){
		document.getElementById('iBg').style.animation = "moveBG 0.3s linear 0s 1 reverse";
		window.setTimeout(function asdfw(){
			document.getElementById('iBg').style.left = "0";
		}, 250);
}

function getConten(){
	document.getElementsByClassName('content')[0].style.animation = "opacity0to1left 0.6s ease-in-out 0s 1 reverse";
	document.getElementsByClassName('content2')[0].style.animation = "opacity0to1right 0.6s ease-in-out 0.3s 1 normal";
	window.setTimeout(function (){
		document.getElementsByClassName('content')[0].style.opacity = 0;
	}, 600);
}


function getContent11(){
	if (document.getElementById('content').classList.contains('current')) {
		return;
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementById('content2').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content2').style.display = "none";
			document.getElementById('content').style.display = "inline-block";
			document.getElementById('content2').style.visibility = "hidden";
			document.getElementById('content').style.visibility = "visible";
			document.getElementById('content2').style.opacity = 0;
			document.getElementById('content').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content2').classList.remove('current');
		document.getElementById('content').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a1 = document.getElementsByClassName('a1colorSwap')[0];
		var a2 = document.getElementsByClassName('a2colorSwap')[0];
		a1.style.color = "orange";
		a2.style.color = "#ccc";
		/* remove courses */
		window.setTimeout(function (){
		document.getElementById('course_1').style.display = "none";
		document.getElementById('course_2').style.display = "none";
		document.getElementById('course_3').style.display = "none";
		document.getElementById('course_4').style.display = "none";
		}, 800);
	} 
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementById('content3').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content3').style.display = "none";
			document.getElementById('content').style.display = "inline-block";
			document.getElementById('content3').style.visibility = "hidden";
			document.getElementById('content').style.visibility = "visible";
			document.getElementById('content3').style.opacity = 0;
			document.getElementById('content').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content3').classList.remove('current');
		document.getElementById('content').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a1 = document.getElementsByClassName('a1colorSwap')[0];
		var a3 = document.getElementsByClassName('a3colorSwap')[0];
		a1.style.color = "orange";
		a3.style.color = "#ccc";

	} 
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementById('content4').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content4').style.display = "none";
			document.getElementById('content').style.display = "inline-block";
			document.getElementById('content4').style.visibility = "hidden";
			document.getElementById('content').style.visibility = "visible";
			document.getElementById('content4').style.opacity = 0;
			document.getElementById('content').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content4').classList.remove('current');
		document.getElementById('content').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a1 = document.getElementsByClassName('a1colorSwap')[0];
		var a4 = document.getElementsByClassName('a4colorSwap')[0];
		a1.style.color = "orange";
		a4.style.color = "#ccc";

	}
}

function getContent22(){
	if (document.getElementById('content2').classList.contains('current')) {
		return;
	}
	else if (document.getElementById('content').classList.contains('current')) {
		document.getElementById('content').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content2').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content').style.display = "none";
			document.getElementById('content2').style.display = "inline-block";
			document.getElementById('content').style.visibility = "hidden";
			document.getElementById('content2').style.visibility = "visible";
			document.getElementById('content').style.opacity = 0;
			document.getElementById('content2').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content').classList.remove('current');
		document.getElementById('content2').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a1 = document.getElementsByClassName('a1colorSwap')[0];
		var a2 = document.getElementsByClassName('a2colorSwap')[0];
		a2.style.color = "orange";
		a1.style.color = "#ccc";
		/* set courses animations */
		window.setTimeout(function (){
			document.getElementById('course_1').className += ' animated flipInY';
			document.getElementById('course_2').className += ' animated flipInY';
			document.getElementById('course_3').className += ' animated flipInY';
			document.getElementById('course_4').className += ' animated flipInY';
			window.setTimeout(function (){
				document.getElementById('course_1').style.display = "inline-block";
				document.getElementById('course_2').style.display = "inline-block";
				document.getElementById('course_3').style.display = "inline-block";
				document.getElementById('course_4').style.display = "inline-block";
			}, 1000);
		}, 600);
	}
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementById('content3').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content2').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content3').style.display = "none";
			document.getElementById('content2').style.display = "inline-block";
			document.getElementById('content3').style.visibility = "hidden";
			document.getElementById('content2').style.visibility = "visible";
			document.getElementById('content3').style.opacity = 0;
			document.getElementById('content2').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content3').classList.remove('current');
		document.getElementById('content2').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a3 = document.getElementsByClassName('a3colorSwap')[0];
		var a2 = document.getElementsByClassName('a2colorSwap')[0];
		a2.style.color = "orange";
		a3.style.color = "#ccc";
		/* set courses animations */
		window.setTimeout(function (){
			document.getElementById('course_1').className += ' animated fadeInLeft';
			document.getElementById('course_2').className += ' animated fadeInUp';
			document.getElementById('course_3').className += ' animated fadeInDown';
			document.getElementById('course_4').className += ' animated fadeInRight';
			window.setTimeout(function (){
				document.getElementById('course_1').style.display = "inline-block";
				document.getElementById('course_2').style.display = "inline-block";
				document.getElementById('course_3').style.display = "inline-block";
				document.getElementById('course_4').style.display = "inline-block";
			}, 1000);
		}, 600);
	} 
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementById('content4').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content2').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content4').style.display = "none";
			document.getElementById('content2').style.display = "inline-block";
			document.getElementById('content4').style.visibility = "hidden";
			document.getElementById('content2').style.visibility = "visible";
			document.getElementById('content4').style.opacity = 0;
			document.getElementById('content2').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content4').classList.remove('current');
		document.getElementById('content2').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a4 = document.getElementsByClassName('a4colorSwap')[0];
		var a2 = document.getElementsByClassName('a2colorSwap')[0];
		a2.style.color = "orange";
		a4.style.color = "#ccc";
		/* set courses animations */
		window.setTimeout(function (){
			document.getElementById('course_1').className += ' animated fadeInLeft';
			document.getElementById('course_2').className += ' animated fadeInUp';
			document.getElementById('course_3').className += ' animated fadeInDown';
			document.getElementById('course_4').className += ' animated fadeInRight';
			window.setTimeout(function (){
				document.getElementById('course_1').style.display = "inline-block";
				document.getElementById('course_2').style.display = "inline-block";
				document.getElementById('course_3').style.display = "inline-block";
				document.getElementById('course_4').style.display = "inline-block";
			}, 1000);
		}, 600);
	}
}

function getContent33(){
	if (document.getElementById('content3').classList.contains('current')) {
		return;
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementById('content2').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content3').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content2').style.display = "none";
			document.getElementById('content3').style.display = "inline-block";
			document.getElementById('content2').style.visibility = "hidden";
			document.getElementById('content3').style.visibility = "visible";
			document.getElementById('content2').style.opacity = 0;
			document.getElementById('content3').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content2').classList.remove('current');
		document.getElementById('content3').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a3 = document.getElementsByClassName('a3colorSwap')[0];
		var a2 = document.getElementsByClassName('a2colorSwap')[0];
		a3.style.color = "orange";
		a2.style.color = "#ccc";
		/* remove courses */
		window.setTimeout(function (){
		document.getElementById('course_1').style.display = "none";
		document.getElementById('course_2').style.display = "none";
		document.getElementById('course_3').style.display = "none";
		document.getElementById('course_4').style.display = "none";
		}, 800);
	} 
	else if (document.getElementById('content').classList.contains('current')) {
		document.getElementById('content').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content3').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content').style.display = "none";
			document.getElementById('content3').style.display = "inline-block";
			document.getElementById('content').style.visibility = "hidden";
			document.getElementById('content3').style.visibility = "visible";
			document.getElementById('content').style.opacity = 0;
			document.getElementById('content3').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content').classList.remove('current');
		document.getElementById('content3').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a1 = document.getElementsByClassName('a1colorSwap')[0];
		var a3 = document.getElementsByClassName('a3colorSwap')[0];
		a3.style.color = "orange";
		a1.style.color = "#ccc";
	} 
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementById('content4').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content3').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content4').style.display = "none";
			document.getElementById('content3').style.display = "inline-block";
			document.getElementById('content4').style.visibility = "hidden";
			document.getElementById('content3').style.visibility = "visible";
			document.getElementById('content4').style.opacity = 0;
			document.getElementById('content3').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content4').classList.remove('current');
		document.getElementById('content3').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a3 = document.getElementsByClassName('a3colorSwap')[0];
		var a4 = document.getElementsByClassName('a4colorSwap')[0];
		a3.style.color = "orange";
		a4.style.color = "#ccc";
	}
}

function getContent44(){
	if (document.getElementById('content4').classList.contains('current')) {
		return;
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementById('content2').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content4').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content2').style.display = "none";
			document.getElementById('content4').style.display = "inline-block";
			document.getElementById('content2').style.visibility = "hidden";
			document.getElementById('content4').style.visibility = "visible";
			document.getElementById('content2').style.opacity = 0;
			document.getElementById('content4').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content2').classList.remove('current');
		document.getElementById('content4').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a4 = document.getElementsByClassName('a4colorSwap')[0];
		var a2 = document.getElementsByClassName('a2colorSwap')[0];
		a4.style.color = "orange";
		a2.style.color = "#ccc";
		/* remove courses */
		window.setTimeout(function (){
		document.getElementById('course_1').style.display = "none";
		document.getElementById('course_2').style.display = "none";
		document.getElementById('course_3').style.display = "none";
		document.getElementById('course_4').style.display = "none";
		}, 800);
	} 
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementById('content3').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content4').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content3').style.display = "none";
			document.getElementById('content4').style.display = "inline-block";
			document.getElementById('content3').style.visibility = "hidden";
			document.getElementById('content4').style.visibility = "visible";
			document.getElementById('content3').style.opacity = 0;
			document.getElementById('content4').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content3').classList.remove('current');
		document.getElementById('content4').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a4 = document.getElementsByClassName('a4colorSwap')[0];
		var a3 = document.getElementsByClassName('a3colorSwap')[0];
		a4.style.color = "orange";
		a3.style.color = "#ccc";
	} 
	else if (document.getElementById('content').classList.contains('current')) {
		document.getElementById('content').style.animation = "SwitchOut 0.8s ease-in-out 0s 1 reverse";
		document.getElementById('content4').style.animation = "opacity0to1right 0.6s ease-in-out 0s 1 normal";
		window.setTimeout(function (){
			document.getElementById('content').style.display = "none";
			document.getElementById('content4').style.display = "inline-block";
			document.getElementById('content').style.visibility = "hidden";
			document.getElementById('content4').style.visibility = "visible";
			document.getElementById('content').style.opacity = 0;
			document.getElementById('content4').style.opacity = 1;
		}, 800);
		
		//remove and add class
		document.getElementById('content').classList.remove('current');
		document.getElementById('content4').classList.add('current');
		/*hide nav */
		document.getElementById('navbar').style.animation = "none";
		document.getElementById('navbar').style.animation = "hideNav 0.3s ease-in-out 0s 1 normal";
		window.setTimeout(function asdf(){
			document.getElementById('navbar').style.left = '-14%';
		}, 300);
		document.getElementById('hideNav').style.display = "none";
		document.getElementById('showNav').style.display = "inline-block";
		window.setTimeout(function (){
			document.getElementsByClassName('buttons')[0].style.display = "none";
		}, 500);
		/* set Color of link */
		var a1 = document.getElementsByClassName('a1colorSwap')[0];
		var a4 = document.getElementsByClassName('a4colorSwap')[0];
		a4.style.color = "orange";
		a1.style.color = "#ccc";
		}
}


/* Color change onmouseenter and onmouseleave for navbar links */
function addOrange1(){
	document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	document.getElementsByClassName('a4colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a2colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a3colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a5colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content').classList.contains('current')) {
		document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	}
}
function addOrange2(){
	document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	document.getElementsByClassName('a1colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a4colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a3colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a5colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content').classList.contains('current')) {
		document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	}
}
function addOrange3(){
	document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	document.getElementsByClassName('a1colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a2colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a4colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a5colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content').classList.contains('current')) {
		document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	}
}
function addOrange4(){
	document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	document.getElementsByClassName('a1colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a2colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a3colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a5colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content').classList.contains('current')) {
		document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	}
}
function addOrange5(){
	document.getElementsByClassName('a5colorSwap')[0].style.color = "orange";
	document.getElementsByClassName('a1colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a2colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a3colorSwap')[0].style.color = "#ddd";
	document.getElementsByClassName('a4colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content').classList.contains('current')) {
		document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content2').classList.contains('current')) {
		document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content3').classList.contains('current')) {
		document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	}
	else if (document.getElementById('content4').classList.contains('current')) {
		document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	}
}
function removeOrange1(){
	document.getElementsByClassName('a1colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content').classList.contains('current')) {
		document.getElementsByClassName('a1colorSwap')[0].style.color = "orange";
	}
}
function removeOrange2(){
	document.getElementsByClassName('a2colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content2').classList.contains('current')) {
		document.getElementsByClassName('a2colorSwap')[0].style.color = "orange";
	}
}
function removeOrange3(){
	document.getElementsByClassName('a3colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content3').classList.contains('current')) {
		document.getElementsByClassName('a3colorSwap')[0].style.color = "orange";
	}
}
function removeOrange4(){
	document.getElementsByClassName('a4colorSwap')[0].style.color = "#ddd";
	if (document.getElementById('content4').classList.contains('current')) {
		document.getElementsByClassName('a4colorSwap')[0].style.color = "orange";
	}
}
function removeOrange5(){
	document.getElementsByClassName('a5colorSwap')[0].style.color = "#ddd";
}
/* Swap Addresses */
function swapAddresses(){
	if (document.getElementById('swapAddressButton').classList.contains('firstAddress')) {
		document.getElementById('firstAdd').className += ' animated bounceOutUp';
		window.setTimeout(function (){
			document.getElementById('firstAdd').style.display = "none";
			document.getElementById('secondAdd').style.display = "inline-block";
			document.getElementById('secondAdd').className += ' animated bounceInDown';
		}, 800);
		document.getElementById('swapAddressButton').classList.remove('firstAddress');
		document.getElementById('swapAddressButton').classList.add('secondAddress');

		document.getElementById('secondAdd').classList.remove('animated');
		document.getElementById('secondAdd').classList.remove('bounceInDown');
		document.getElementById('secondAdd').classList.remove('bounceOutUp');
	} else {
		document.getElementById('secondAdd').className += ' animated bounceOutUp';
		window.setTimeout(function (){
			document.getElementById('firstAdd').style.display = "inline-block";
			document.getElementById('secondAdd').style.display = "none";
			document.getElementById('firstAdd').className += ' animated bounceInDown';
		}, 800);
		document.getElementById('swapAddressButton').classList.remove('secondAddress');
		document.getElementById('swapAddressButton').classList.add('firstAddress');

		document.getElementById('firstAdd').classList.remove('animated');
		document.getElementById('firstAdd').classList.remove('bounceInDown');
		document.getElementById('firstAdd').classList.remove('bounceOutUp');
	}
}
function addComment(){
	if (document.getElementById('addComment').classList.contains('addNothing')) {
		return;
	}
	else if (document.getElementById('addComment').classList.contains('addSecondComment') &&
	 document.getElementById('addComment').classList.contains('addThirdComment')) {
		document.getElementsByClassName('commentBox3')[0].style.display = "inline-block";
		document.getElementsByClassName('commentBox3')[0].className += ' animated rotateInUpLeft';
		
		document.getElementById('addComment').className += ' addNothing';
	}
	 else if  (document.getElementById('addComment').classList.contains('addSecondComment')) {
	 	document.getElementsByClassName('commentBox2')[0].style.display = "inline-block";
		document.getElementsByClassName('commentBox2')[0].className += ' animated rotateInUpLeft';

		document.getElementById('addComment').className += ' addThirdComment';	
}
}

function accountInfo(){
	var info = document.getElementById('account-info');
	var userIcon = document.getElementById('userIcon');
	/*if (true) { info = document.getElementById('show-account-info'); }
		  else { info = document.getElementById('account-info'); } */
	if (info.style.display == "none") {
		info.style.display = "block";
		userIcon.style.backgroundColor = "orange";
	} else { info.style.display = "none"; userIcon.style.backgroundColor = "transparent";}
}