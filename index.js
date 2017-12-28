const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

navigator.geolocation.watchPosition((data) => {
	console.log(data);
	speed.textContent = data.coords.speed * 0.621371;
	arrow.style.transform = `rotate(${data.coords.heading})`;
}, err => {
	console.log(err);
	alert('Location services are needed for this application to work');
});