// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



window.onload = function () {
	burger =  document.getElementById('hamburger'); 
	menu = document.getElementById('mobileMenu');
	saleBtn = document.getElementById('saleBtn');
	saleMenu = document.getElementById('sale');
	housBtn = document.getElementById('housBtn');
	housMenu = document.getElementById('housing');
	jobsBtn = document.getElementById('jobsBtn');
	jobsMenu = document.getElementById('jobs');

	saleBtn.addEventListener("mouseover", mouseOverSale);
	saleBtn.addEventListener("mouseout", mouseOutSale);
	saleMenu.addEventListener("mouseout", mouseOutSale);
	saleMenu.addEventListener("mouseover", mouseOverSale);

	housBtn.addEventListener("mouseover", mouseOverHouse);
	housBtn.addEventListener("mouseout", mouseOutHouse);
	housMenu.addEventListener("mouseout", mouseOutHouse);
	housMenu.addEventListener("mouseover", mouseOverHouse);

	jobsBtn.addEventListener("mouseover", mouseOverJobs);
	jobsBtn.addEventListener("mouseout", mouseOutJobs);
	jobsMenu.addEventListener("mouseout", mouseOutJobs);
	jobsMenu.addEventListener("mouseover", mouseOverJobs);

	function mouseOverSale() {
	    saleMenu.style.display = "flex";
	}

	function mouseOutSale() {
	    saleMenu.style.display = "none";
	}

	function mouseOverHouse() {
	    housMenu.style.display = "flex";
	}

	function mouseOutHouse() {
	    housMenu.style.display = "none";
	}

	function mouseOverJobs() {
	    jobsMenu.style.display = "flex";
	}

	function mouseOutJobs() {
	    jobsMenu.style.display = "none";
	}

	burger.addEventListener("click", btnTransform);

	function btnTransform() {
		burger.classList.toggle('change');

		 if (menu.classList.contains('contract')) {
			menu.classList.remove("contract");
			menu.classList.add("expand");
		} else {
			menu.classList.remove("expand");
			menu.classList.add("contract");
		}
	}
}

