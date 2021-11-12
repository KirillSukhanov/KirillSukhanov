console.log('job');
$(document).ready (function() {
	$('#newslinks a').click(function(){
		let url=$(this).attr('href');
		$('#headlines').load(url + ' #newsItem');
		return false;
		console.log('job2');
	});
});	