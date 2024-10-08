export default function materialDashboard(){
	const backgroundImage = async() => {
		var widthLimit = 991
        var windowWidth = window.innerWidth
        if(windowWidth <= widthLimit) {
            document.getElementById('page_header').style.backgroundImage = "url('/assets/img/illustrations/signup.webp')"
            document.getElementById('page_header').style.backgroundSize = "cover"
            document.getElementById('page_header').style.backgroundPosition = "center"
        }

        window.addEventListener('resize', function () {
        	var currentWidth = window.innerWidth
        	if (currentWidth <= widthLimit) {
        		if(document.getElementById('page_header')){
        			document.getElementById('page_header').style.backgroundImage = "url('/assets/img/illustrations/signup.webp')"
              		document.getElementById('page_header').style.backgroundSize = "cover"
              		document.getElementById('page_header').style.backgroundPosition = "center"
        		}
        	}
            else {
            	if(document.getElementById('page_header')){
            		document.getElementById('page_header').removeAttribute('style')
            	}
            }
        })
	}
	const useRipple = async() => {
	  // Ripple Effect
	  var ripples = document.querySelectorAll('.btn');

	  for (var i = 0; i < ripples.length; i++) {
	    ripples[i].addEventListener('click', function(e) {
	      var targetEl = e.target;
	      var rippleDiv = targetEl.querySelector('.ripple');

	      rippleDiv = document.createElement('span');
	      rippleDiv.classList.add('ripple');
	      rippleDiv.style.width = rippleDiv.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
	      targetEl.appendChild(rippleDiv);

	      rippleDiv.style.left = (e.offsetX - rippleDiv.offsetWidth / 2) + 'px';
	      rippleDiv.style.top = (e.offsetY - rippleDiv.offsetHeight / 2) + 'px';
	      rippleDiv.classList.add('ripple');
	      setTimeout(function() {
	        rippleDiv.parentElement.removeChild(rippleDiv);
	      }, 600);
	    }, false);
	  }
	}
	const useInput = async() => {
		// when input is focused add focused class for style
		function focused(el) {
		  if (el.parentElement.classList.contains("input-group")) {
		    el.parentElement.classList.add("focused");
		  }
		}

		// when input is focused remove focused class for style
		function defocused(el) {
		  if (el.parentElement.classList.contains("input-group")) {
		    el.parentElement.classList.remove("focused");
		  }
		}

		// helper for adding on all elements multiple attributes
		function setAttributes(el, options) {
		  Object.keys(options).forEach(function (attr) {
		    el.setAttribute(attr, options[attr]);
		  });
		}
		
		// adding on inputs attributes for calling the focused and defocused functions
		if (document.querySelectorAll('.input-group').length != 0) {
		  var allInputs = document.querySelectorAll('input.form-control');
		  allInputs.forEach(el => setAttributes(el, {
		    "onfocus": "focused(this)",
		    "onfocusout": "defocused(this)"
		  }));
		}

		// Material Design Input function
	  var inputs = document.querySelectorAll('input');

	  for (var i = 0; i < inputs.length; i++) {
	    inputs[i].addEventListener('focus', function(e) {
	      this.parentElement.classList.add('is-focused');
	    }, false);

	    inputs[i].onkeyup = function(e) {
	      if (this.value != "") {
	        this.parentElement.classList.add('is-filled');
	      } else {
	        this.parentElement.classList.remove('is-filled');
	      }
	    };

	    inputs[i].addEventListener('focusout', function(e) {
	      if (this.value != "") {
	        this.parentElement.classList.add('is-filled');
	      }
	      this.parentElement.classList.remove('is-focused');
	    }, false);
	  }
	}
	const usePerfectScrollbar = async() => {
		var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

	  if (isWindows) {
	    // if we are on windows OS we activate the perfectScrollbar function
	    if (document.getElementsByClassName('main-content')[0]) {
	      var mainpanel = document.querySelector('.main-content');
	      var ps = new PerfectScrollbar(mainpanel);
	    };

	    if (document.getElementsByClassName('sidenav')[0]) {
	      var sidebar = document.querySelector('.sidenav');
	      var ps1 = new PerfectScrollbar(sidebar);
	    };

	    if (document.getElementsByClassName('navbar-collapse')[0]) {
	      var fixedplugin = document.querySelector('.navbar:not(.navbar-expand-lg) .navbar-collapse');
	      var ps2 = new PerfectScrollbar(fixedplugin);
	    };

	    if (document.getElementsByClassName('fixed-plugin')[0]) {
	      var fixedplugin = document.querySelector('.fixed-plugin');
	      var ps3 = new PerfectScrollbar(fixedplugin);
	    };
	  };
	}
	const useToggleSidebar = async() => {
		const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
		const iconSidenav = document.getElementById('iconSidenav');
		const sidenav = document.getElementById('sidenav-main');
		let body = document.getElementsByTagName('body')[0];
		let className = 'g-sidenav-pinned';

		if (iconNavbarSidenav) {
		  iconNavbarSidenav.addEventListener("click", toggleSidenav);
		}

		if (iconSidenav) {
		  iconSidenav.addEventListener("click", toggleSidenav);
		}

		function toggleSidenav() {
		  if (body.classList.contains(className)) {
		    body.classList.remove(className);
		    setTimeout(function() {
		      sidenav.classList.remove('bg-white');
		    }, 100);
		    sidenav.classList.remove('bg-transparent');

		  } else {
		    body.classList.add(className);
		    sidenav.classList.add('bg-white');
		    sidenav.classList.remove('bg-transparent');
		    iconSidenav.classList.remove('d-none');
		  }
		}
	}
	return{
		backgroundImage,
		useRipple,
		useInput,
		usePerfectScrollbar,
		useToggleSidebar
	}
}