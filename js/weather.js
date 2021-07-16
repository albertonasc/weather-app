const APIKey = 'LhDpkKGs8MigkAeh1jDNlB2GDZiZWGPP'
const baseUrl = 'https://dataservice.accuweather.com/'

const getCityUrl = cityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => 
    `${baseUrl}currentconditions/v1/${Key}?apitkey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('Não foi possivel obter os dados')
        }
    
        return response.json()
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
    const [cityData] = await getCityData(cityName)
    return await fetchData(getWeatherUrl(cityData))
}

getCityWeather('São Paulo')
    .then(console.log)
