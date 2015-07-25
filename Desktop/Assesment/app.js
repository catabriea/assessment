(document).ready(function(){

	var clicks =0; //create a variable for clicks and set it at start point of 0

    $(".clickMe").on('click', function(){ //create a click me button function
    	clicks++; //this will increment the click counter every time the Click Me buttn is clicked
    
    	//console.log("Button Clicked!");

    	$("body").append("<div class='newDiv' data-color-toggle='1'></div"); //this will create the functionality we see on the DOM? 
		var el = $("body").children().last(); //each time clicked it gets added to the end of the lise
		el.append("<p>Here are the number of clicks: " + clicks + "</p>"); //self-explanitory for the elements that get appended
		el.append("<button class='removeButton'>Remove</button");			
		el.append("<button class='changeColor'>Change Color</button>");
		});

	$("body").on("click", ".changeColor", function(){ //this is the actual changeColor function that enables it to ...change color lol
		var parentEl = $(this).parent();

		if(parentEl.data('colorToggle') == 1){
			parentEl.data("colorToggle", 2);
			parentEl.css("background-color", "#FF0000");
		} else {
			parentEl.data("colorToggle", 1);
			parentEl.css("background-color", "#00FF00");
		}
	});

	$("body").on("click", ".removeButton", function(){ //remove button function that will take out that line click representation
		var parentEl = $(this).parent();

		parentEl.remove(); //I understand parent and child now
	});
});
	

	//original assessment day notes - I was so very lost
// test anxiety!!!! ahhhghghghgh

// 	var i = 0;
// 	var remove = true; // added this 

// 	$('#button').click(function(e) {
//     $('<div/>').attr({
//         'id' : i
//     }).addClass('circle').css({
//         'top' : e.pageY - 20,
//         'left' : e.pageX - 20
//     }).appendTo('#area'); // append to new container
//     i++;
// });

// $('#area').on('click','.circle',function (){ // corrected spelling and changed to on()
//     if(remove){ 
//         $(this).remove();
//     } else {
//         //just to see if it was clicked
//         $(this).css({'background-color': 'red'});
//     }
// });

// $('#btn').toggle(function() {
//     $('#btn').val('add');
//     remove = true;
// }, function() {
//     $('#btn').val('remove');
//     remove = false;
