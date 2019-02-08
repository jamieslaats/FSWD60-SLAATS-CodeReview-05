$(document).ready(function(){
	for(i=0; i < movies.length; i++) {
		$(".moviepic:eq("+i+")").append("<img src=" +movies[i].image+" >");
		$(".movienameinfo:eq("+i+")").append("<h2>" +movies[i].name+"</h2> </br> <p>"+movies[i].description+"</p>");

	}




});






$(".lkbtn").on("click", function(e){
    var $counter = $(this).find(".count");
    var count = $counter.text() | 0; //corose current count to an int
    $counter.text(count + 1);//set new count
});
