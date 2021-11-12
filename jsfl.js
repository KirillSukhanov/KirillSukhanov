$(document).ready (function() {
    $('#login').submit(function() {
    	let formData = $(this).serialize();
    	$.post('login.php', formData, processData);
    	function processData(data) {
    		if(data==='pass') {
    			$('main').html('<p>Вы авторизованы!</p>');
    		}
    		else {
    			if($('#fail').length === 0) {
                    $('#login').prepend('<p id="fail">Вы ввели неправельнные данные. Попробуйте ещё раз </p>');
                }
            }
        }
        return false;
    });
});
