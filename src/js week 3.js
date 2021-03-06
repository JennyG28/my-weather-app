let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

weather.paris.temp = Math.floor (weather.paris.temp);
weather.tokyo.temp = Math.floor (weather.tokyo.temp);
weather.lisbon.temp = Math.floor (weather.lisbon.temp);
weather["san francisco"].temp = Math.floor (weather["san francisco"].temp);
weather.moscow.temp = Math.floor (weather.moscow.temp);


let city = prompt("Enter a city");
city = city.toLowerCase ();
city = city.trim ();

if (city === "paris"){  
  alert (`It is currently ${weather.paris.temp}°C (${weather.paris.temp*1.8+32}°F) in Paris with a humidity of ${weather.paris.humidity}%`);
}
else if (city === "tokyo"){  
  alert (`It is currently ${weather.tokyo.temp}°C (${weather.tokyo.temp*1.8+32}°F) in Tokyo with a humidity of ${weather.tokyo.humidity}%`);
}
else if (city === "lisbon"){  
  alert (`It is currently ${weather.lisbon.temp}°C (${weather.lisbon.temp*1.8+32}°F) in Lisbon with a humidity of ${weather.lisbon.humidity}%`);
}
else if (city === "san francisco"){  
  alert (`It is currently ${weather["san francisco"].temp}°C (${weather["san francisco"].temp*1.8+32}°F) in San Francisco with a humidity of ${weather["san francisco"].humidity}%`);
}
else if (city === "moscow"){  
  alert (`It is currently ${weather.moscow.temp}°C (${weather.moscow.temp*1.8+32}°F) in Moscow with a humidity of ${weather.moscow.humidity}%`);
}
else {
  alert (`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);
}
