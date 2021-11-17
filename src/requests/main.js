const unsecureApiKey = "4424f132028995c47bd7f67d8c5e44f9"
const getWeatherRequest = async () => { 
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${"Boulder"}&appid=${unsecureApiKey}&units=imperial`)

    return response.json()
}
const getWeatherRequestZip = async (zipCode) => { 
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${unsecureApiKey}&units=imperial`)

    return response.json()
}
export {getWeatherRequest,getWeatherRequestZip} 