// JavaScript Document

// USEFUL FUNCTIONS
function openUrl(url, opt){
  if (opt == 0) // current window
	window.location = url;
  else if (opt == 1) // new window
	window.open(url);
  else if (opt == 2) // background window
	{window.open(url); self.focus();}
}

function openWindow(url, title, width, height) {
  if(!width) width = 500;
  if(!height) height = 400;
  window.open(url, title,"width = " + width + ", height =" + height + ", toolbar=0, menubar=0, status=0");	
}

//Converts 2017-01-15 to Jan 15, 2017
function formatDate(dateToFormat) {
	var dateToFormatParts = dateToFormat.split("-");
	var dateToFormatDay = dateToFormatParts[2];
	var dateToFormatMonth = dateToFormatParts[1];
	var dateToFormatYear = dateToFormatParts[0];
	
	
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var returnString = months[dateToFormatMonth - 1] + " " + dateToFormatDay + ", " + dateToFormatYear;
	return returnString;
}

//for settings dialog tabs
	function setActive(targetID, target){
	targetID = '#' + targetID + ' li';
	$(targetID).removeClass('active'); 
	target.parentNode.className += ' active';
	}

function deleteEvent(id, sid, callback) {
	var r = confirm("Are you sure you wish to delete this event (ID: " + id + ")?");
	if (r == true) {
		//window.location = "/news/events/" + id + "/" + sid + "/delete";
		var jqxhr = $.get( "/news/events/" + id + "/" + sid + "/delete", function( data ) {
			callback();
			//location.reload();
		});
		jqxhr.always(function() {
			callback();
		    //location.reload();
		});
	} else {
		//Cancel clicked
	}
}