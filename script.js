//your JS code here. If required.
function updateDateTime(){
	const now = new Date();

	const dateOptions = {
		year : 'numeric',
		month: '2-digit',
		day : '2-digit',
	};

	const timeOptions = {
		hour: '2-digit',
		minute : '2-digit',
		second: '2-digit',
		hour12: true,
	};


	const formatteDate = now.toLocaleDateString('en-US', dateOptions);
    const formatteDate = now.toLocaleTimeString('en-US', timeOptions);

	document.getElementById('timer').textContent = `${formattedDate}, ${formatteTime}`;

	setInterval(updateDateTime, 1000);

	updateDateTime();
	




	