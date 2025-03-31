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


	const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

	document.getElementById('timer').textContent = `${formattedDate}, ${formattedTime}`;  
}

	setInterval(updateDateTime, 1000);

	updateDateTime();
	




	