const request = require('postman-request');
const urlCuaca = 
'http://api.weatherstack.com/current?access_key=5606cfeb6fd07d3921b3c0f443fe42c9&query=-0.8886443736412998, 100.42317399108163&units=m';

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        console.log('Saat ini suhu diluar mencapai ' + 
            response.body.current.temperature + 
            ' derajat celcius. Kemungkinan terjadinya hujan adalah ' +
            response.body.current.precip + 
            '%');

        // Menampilkan deskripsi cuaca dari weather_descriptions array
        console.log('Deskripsi cuaca: ' + response.body.current.weather_descriptions[0]);
    }
});