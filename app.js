// YOUR JS CODE HERE
const temperature = document.querySelector('.temperature')
const windSpeed = document.querySelector('.windSpeed')
const timezone = document.querySelector('.timezone')
const lastUpdate = document.querySelector('.lastUpdate')

fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const temp = data.current.temperature_2m  
    const temp_unit = data.current_units.temperature_2m
    temperature.append(`${temp}${temp_unit}`)

    const wind = data.current.wind_speed_10m
    const windUnit = data.current_units.wind_speed_10m
    windSpeed.append(` ${wind}${windUnit}`)
    
    timezone.append(data.timezone)

    const fullDate = new Date
    const date = fullDate.toLocaleDateString()
    const hours = fullDate.getHours()
    const minutes = fullDate.getMinutes()
    const seconds = fullDate.getSeconds()   
    lastUpdate.append(`${date}, ${hours}:${minutes}:${seconds} AM`)
  })
  .catch((error) => {
    console.log(error)
  })