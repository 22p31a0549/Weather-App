const weatherIcon=document.querySelector(".weather-icon");
		const apiKey="324893e8fa6fc74e0cbc3bd843bf1b3e";
		const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
		const searchBox= document.querySelector(".search input");
		const searchBtn=document.querySelector(".search button");


		async function checkWeather(city)
		{
			const response =await fetch(apiUrl+city + `&appid=${apiKey}`);
			if(response.status== 404)
			{
				document.querySelector(".error").style.display="block";
				document.querySelector(".weather").style.display="none";
			}
			else{
				var data =await response.json();

			document.querySelector(".city").innerHTML= data.name;
			document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
			document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
			document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";
			if(data.weather[0].main=="Clouds"){
				weatherIcon.src="images/clouds.jpg";
			}
			else if(data.weather[0].main=="Clear")
			{
				weatherIcon.src="images/clear.jpg";
			}
			else if(data.weather[0].main=="Rain")
			{
				weatherIcon.src="images/rain.jpg";
			}
			else if(data.weather[0].main=="Drizzle")
			{
				weatherIcon.src="images/drizzle.jpg";
			}
			else if(data.weather[0].main=="Mist")
			{
				weatherIcon.src="images/mist.jpg";
			}
			else if(data.weather[0].main=="Snow")
			{
				weatherIcon.src="images/snow.jpg";
			}
			document.querySelector(".weather").style.display="block";
			document.querySelector(".error").style.display="none";
			}
			

		}


		searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value);})