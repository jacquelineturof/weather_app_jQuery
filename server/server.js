require('./config/config');
const hbs        = require('hbs');
const path       = require('path');
const axios      = require('axios');
const express    = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/weather', async (req, res) => {
    const zip = req.body.zip;

    const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const fullUrl = baseUrl + zip + '&key=' + process.env.API_KEY;

    try {
        const response = await axios.get(fullUrl);
        if (!response) throw new Error('Could not find address');
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        const location = { lat, lng };
        res.render('results', { location });
    } catch (e) {
        res.status(404).send(e.message);
    }
    
    
});

app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
});