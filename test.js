fetch("https://watchmode.p.rapidapi.com/search/?search_field=name&search_value=Breaking%20Bad", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "watchmode.p.rapidapi.com",
		"x-rapidapi-key": "d5a0f766b9msh396de5a1bc2ae8ep198417jsna45573810b34"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});