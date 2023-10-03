export default function materialDashboard(){
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
	const useTabsNavigation = async() => {
		var total = document.querySelectorAll('.nav-pills');

		function initNavs() {
		  total.forEach(function(item, i) {
		    var moving_div = document.createElement('div');
		    var first_li = item.querySelector('li:first-child .nav-link');
		    var tab = first_li.cloneNode();
		    tab.innerHTML = "-";

		    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
		    moving_div.appendChild(tab);
		    item.appendChild(moving_div);

		    var list_length = item.getElementsByTagName("li").length;

		    moving_div.style.padding = '0px';
		    moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
		    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
		    moving_div.style.transition = '.5s ease';

		    item.onmouseover = function(event) {
		      let target = getEventTarget(event);
		      let li = target.closest('li'); // get reference
		      if (li) {
		        let nodes = Array.from(li.closest('ul').children); // get array
		        let index = nodes.indexOf(li) + 1;
		        item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function() {
		          moving_div = item.querySelector('.moving-tab');
		          let sum = 0;
		          if (item.classList.contains('flex-column')) {
		            for (var j = 1; j <= nodes.indexOf(li); j++) {
		              sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
		            }
		            moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
		            moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
		          } else {
		            for (var j = 1; j <= nodes.indexOf(li); j++) {
		              sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
		            }
		            moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
		            moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
		          }
		        }
		      }
		    }
		  });
		}

		setTimeout(function() {
		  initNavs();
		}, 100);

		// Tabs navigation resize

		window.addEventListener('resize', function(event) {
		  total.forEach(function(item, i) {
		    item.querySelector('.moving-tab').remove();
		    var moving_div = document.createElement('div');
		    var tab = item.querySelector(".nav-link.active").cloneNode();
		    tab.innerHTML = "-";

		    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
		    moving_div.appendChild(tab);

		    item.appendChild(moving_div);

		    moving_div.style.padding = '0px';
		    moving_div.style.transition = '.5s ease';

		    let li = item.querySelector(".nav-link.active").parentElement;

		    if (li) {
		      let nodes = Array.from(li.closest('ul').children); // get array
		      let index = nodes.indexOf(li) + 1;

		      let sum = 0;
		      if (item.classList.contains('flex-column')) {
		        for (var j = 1; j <= nodes.indexOf(li); j++) {
		          sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
		        }
		        moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
		        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
		        moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
		      } else {
		        for (var j = 1; j <= nodes.indexOf(li); j++) {
		          sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
		        }
		        moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
		        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';

		      }
		    }
		  });

		  if (window.innerWidth < 991) {
		    total.forEach(function(item, i) {
		      if (!item.classList.contains('flex-column')) {
		        item.classList.remove('flex-row');
		        item.classList.add('flex-column', 'on-resize');
		        let li = item.querySelector(".nav-link.active").parentElement;
		        let nodes = Array.from(li.closest('ul').children); // get array
		        let index = nodes.indexOf(li) + 1;
		        let sum = 0;
		        for (var j = 1; j <= nodes.indexOf(li); j++) {
		          sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
		        }
		        var moving_div = document.querySelector('.moving-tab');
		        moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
		        moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';

		      }
		    });
		  } else {
		    total.forEach(function(item, i) {
		      if (item.classList.contains('on-resize')) {
		        item.classList.remove('flex-column', 'on-resize');
		        item.classList.add('flex-row');
		        let li = item.querySelector(".nav-link.active").parentElement;
		        let nodes = Array.from(li.closest('ul').children); // get array
		        let index = nodes.indexOf(li) + 1;
		        let sum = 0;
		        for (var j = 1; j <= nodes.indexOf(li); j++) {
		          sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
		        }
		        var moving_div = document.querySelector('.moving-tab');
		        moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
		        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
		      }
		    })
		  }
		});

		// Function to remove flex row on mobile devices
		if (window.innerWidth < 991) {
		  total.forEach(function(item, i) {
		    if (item.classList.contains('flex-row')) {
		      item.classList.remove('flex-row');
		      item.classList.add('flex-column', 'on-resize');
		    }
		  });
		}

		function getEventTarget(e) {
		  e = e || window.event;
		  return e.target || e.srcElement;
		}
	}
	return{
		useRipple,
		useInput,
		usePerfectScrollbar,
		useToggleSidebar,
		useTabsNavigation
	}
}