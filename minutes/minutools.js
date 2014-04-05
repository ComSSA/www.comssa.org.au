(function() {
	function pad2(value) {
		return ('0' + String(value)).slice(-2);
	}
	var tags = document.querySelectorAll('time');
	for (var i = 0; i < tags.length; i++) {
		var date = new Date(tags[i].dateTime);
		var hours = date.getHours() % 12 || 12;
		var minutes = date.getMinutes();
		var ampm = date.getHours() < 12 ? 'a.m.' : 'p.m.';
		tags[i].textContent = hours + ':' + minutes + ' ' + ampm;
	}
})();
