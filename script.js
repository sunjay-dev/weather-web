async function getCity() {
  let location = document.getElementById("h3").value;
  location += ",Pak";
  
  const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
      location: location,
      contentType: 'json',
      unitGroup: 'metric',
      shortColumnNames: '0',
      hourly: '1',
      startDateTime: 'now',
      aggregateHours: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'ce670b6670msha0f6220fdbfcba7p1d6888jsnfd64eb1e8c81',
      'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    if (response.data.locations && response.data.locations[location]) {
      let locationData = response.data.locations[location];
      let temperature = locationData.values[0].temp;
      let humidity = locationData.values[0].humidity;
      let windSpeed = locationData.values[0].wspd;
      let recordedTime = locationData.values[0].datetimeStr;

       let recordedTimePK = recordedTime.toLocaleString("en-PK", { timeZone: "Asia/Karachi" });
      
      document.getElementById("temp").innerHTML = temperature;
      document.getElementById("humidity").innerHTML = humidity;
      document.getElementById("windSpeed").innerHTML = windSpeed;
      document.getElementById("time").innerHTML = recordedTimePK;
    
    } else {
      document.getElementById("temp").innerHTML = 'Weather data not available';
      document.getElementById("humidity").innerHTML = '';
      document.getElementById("windSpeed").innerHTML = '';
      document.getElementById("time").innerHTML = '';
    }
  } catch (error) {
    console.error(error);
  }
}
