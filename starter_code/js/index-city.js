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

			var city = $("#city-type").val(); 
			
			if ( city == "NY" || city == "New York" || city == "New York City") {
				    
				$("body").css("background", "url(images/nyc.jpg)");
			}

			else if ( city == "San Francisco" || city == "Bay Area" || city == "SF") {
				    
				$("body").css("background", "url(images/sf.jpg)");
			}

			else if ( city == "Los Angeles" || city == "LAX" || city == "LA") {
				    
				$("body").css("background", "url(images/la.jpg)");
			}

			else if ( city == "Sydney" || city == "SYD" ) {
				    
				$("body").css("background", "url(images/sydney.jpg)");
			}

			else {
				alert("Try capitolizing. Otherwise, we may not have pictures for that city yet. Upload one!");
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