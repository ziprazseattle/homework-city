$(document).ready(function(){



/* JS IS CONNECTED - THX SARAH! 
function myFunction() {
    alert("Hello!");
}
myFunction();
*/ 

/* THIS WORKS

	$("#city-form").submit(showCity);
	

		function showCity() {
			event.preventDefault();
			$("body").css("background", "url(images/nyc.jpg)");
		}
*/


	$("#city-form").submit(showCity);
	

		function showCity() {
			event.preventDefault();

		var c = $("#city-type").val(); 
		
		if ( c == "NY" || c == "New York" || c == "New York City") {
			    
			$("body").css("background", "url(images/nyc.jpg)");
		}

	}

	

/*

var = "city"

//when user submits a var ("city") 
//don't do the usual submit behavior 
//get the variable? val 


$("").on(submit) 
	event.preventDefault();
	e.preventDefault();


//if var is New York, New York City, or NY
//then change the bkgd img to nyc.jpg 
	
	if city == "New York" || "New York City" || "NY"
		$("body").css("background-image", "nyc.jpg")

//else if var is San Francisco, Bay Area, or SF
//then change bkgd img to sf.jpg
	else if city == "San Francisco" || "Bay Area" || "SF"
		$("body").css("background-image", "nyc.jpg")

//else if var is Los Angeles, LAX, or LA 
//then change bkgd img to la.jpg

//else if var is Sydney or SYD
//then change bkgd img to sydney 

//else if var none of the above
//display alert ("We don't have pictures for that city yet")
//"Upload picture" 

	else alert("We don't have pictures for that city yet. <a href="#">Upload a picture</a>")
*/ 

//end doc ready 
});