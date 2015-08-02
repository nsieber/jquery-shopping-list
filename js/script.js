$(document).ready(function() { 
	$('button').on('click', function() {
		var item = $("input[type='text']").val();
		$('p:last-child').remove();
		$('.list').append('<p><input type="checkbox">&nbsp;' + item + '<button type="button">remove</button></p>');
		$('.list').append('<p><input type="text" name="item"><button name="item">add</button></p>');
	});
	$('input[name="item"]').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('button[name="item"]').click();//Trigger search button click event
        }
    });
});