$(document).ready(function(){
	for(i=0; i < movies.length; i++) {
		//Run the for loop with jQuery to be able to pull in the JSON data of the films. 
		$(".moviepic:eq("+i+")").append("<img src=" +movies[i].image+" >");
		$(".movienameinfo:eq("+i+")").append("<h2>" +movies[i].name+"</h2>");
		$(".movienameinfo:eq("+i+")").append("<p>"+movies[i].description+"</p>");
		}
		});

//jQuery Code to be able to set the hight of the movienameinfo column equally across the page. 
jQuery(document).ready(function($){
        var container_height = $('#row2').height(); // Get the height of our container
        $('.movienameinfo').height(container_height);  // Set target DIVs height to container height
      });

//jQuery Code to be able to set the hight of the movienameinfo column equally across the page. 
jQuery(document).ready(function($){
        var header_height = $('#headerdiv').height(); // Get the height of our container
        $('#sortbutton').height(header_height);  // Set target DIVs height to container height
      });

//jQuery Code to be able to apply likes to all the like buttons and adds value. Currently, though with refresh it resets. 
$(".lkbtn").on("click", function(e){
    var $counter = $(this).find(".count");
    var count = $counter.text() | 0; //corose current count to an integer
    $counter.text(count + 1);//set new count
	});
