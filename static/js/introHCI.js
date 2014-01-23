'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
				
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(changeProject)
}
/*
a function that prevents the default behavior
*/
function projectClick(e) {
	//prevent the page from reloading
	e.preventDefault();
	//In an event handler, $(this) refers to
	//the object that triggered the event

	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.hide();
 
    }
}

function changeProject(e) {
	var projectSelected = $("#project").val();
	$(projectSelected).animate({width: $('#width').val()});

	var newDescription = $('#description').val();
	console.log(newDescription);
	$(projectSelected + " .project-description").text(newDescription);
}