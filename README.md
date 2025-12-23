# 🛰️ International Space Station Tracker

A real-time web application that tracks the current location of the International Space Station (ISS) using live data and displays it on an interactive map.

![ISS Tracker](https://img.shields.io/badge/Project-ISS%20Tracker-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Leaflet](https://img.shields.io/badge/Map-Leaflet.js-green)
![API](https://img.shields.io/badge/API-Where%20The%20ISS%20At-orange)

## 🌍 Project Description

Track the International Space Station in real-time as it orbits Earth! This application fetches live location data from the "Where the ISS at?" API and displays the station's current position on an interactive OpenStreetMap, updated every second.

## ✨ Features

- **Real-Time Tracking**: Updates ISS position every second
- **Interactive Map**: Powered by Leaflet.js with OpenStreetMap tiles
- **Live Coordinates**: Displays current latitude and longitude
- **Custom ISS Icon**: Visual representation of the space station on the map
- **Automatic Updates**: Continuous tracking without manual refresh
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Demo

Watch as the ISS travels at approximately 28,000 km/h (17,500 mph) around Earth, completing one orbit every ~90 minutes!

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iss-tracker.git
cd iss-tracker
```

2. Make sure all files are in place (no build process required)

3. Open `index.html` in your web browser

**Note**: This is a client-side application and requires an internet connection to fetch ISS data and map tiles.

## 📁 Project Structure

```
iss-tracker/
│
├── index.html                  # Main HTML file with map container
├── style.css                   # Styling for the application
├── main.js                     # Core tracking logic and API integration
│
└── icon/                       # Icon assets folder
    └── International_Space_Station.svg  # ISS marker icon
```

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Core functionality
- **Leaflet.js**: Interactive map library
- **OpenStreetMap**: Map tile provider
- **Where the ISS at? API**: Real-time ISS location data

### API Information

**Endpoint**: `https://api.wheretheiss.at/v1/satellites/25544`

**Satellite ID**: 25544 (International Space Station)

**Update Frequency**: 1 second (1000ms)

**Response Data**:
```json
{
  "latitude": 12.3456,
  "longitude": 78.9012,
  "altitude": 408.5,
  "velocity": 27500,
  ...
}
```

### Map Configuration

- **Initial View**: [0, 0] (Equator, Prime Meridian)
- **Zoom Level**: 3 (Global view)
- **Icon Size**: 50×95 pixels
- **Marker**: Updates position dynamically with ISS movement

### Code Highlights

- **Async/Await**: Modern JavaScript for API calls
- **setInterval**: Automatic 1-second updates
- **Leaflet Markers**: Dynamic marker positioning
- **Real-time Data**: Live latitude and longitude display

## 🎯 How It Works

1. **Initialization**: Creates a Leaflet map centered at [0, 0] with zoom level 3
2. **API Fetch**: Requests current ISS position from the API
3. **Data Processing**: Extracts latitude and longitude from JSON response
4. **Map Update**: Updates marker position on the map
5. **Display Coordinates**: Shows numerical latitude/longitude values
6. **Repeat**: Process repeats every second for real-time tracking

## 📊 ISS Facts

- **Orbit Altitude**: ~408 km (254 miles)
- **Orbital Speed**: ~28,000 km/h (17,500 mph)
- **Orbit Period**: ~90 minutes
- **Orbits per Day**: ~16
- **Crew Capacity**: Up to 7 astronauts

## 🌐 Browser Compatibility

- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Opera

## 🚀 Future Enhancements

- [ ] Show ISS altitude and velocity
- [ ] Display crew information
- [ ] Add ground track (path prediction)
- [ ] Show day/night overlay on map
- [ ] Add country/location labels
- [ ] Notification when ISS passes overhead
- [ ] Historical path tracking
- [ ] Multiple satellite tracking
- [ ] 3D globe view option
- [ ] Pass predictor for user location
- [ ] Add ISS live video feed link
- [ ] Dark mode for night viewing

## 🎨 Customization

### Change Update Frequency

Modify the interval in `main.js`:
```javascript
setInterval(getISI, 1000); // Change 1000 to desired milliseconds
```

### Adjust Map Zoom

Modify the zoom level:
```javascript
const map = L.map('ISS_map').setView([latitude, longitude], 3); // Change 3 to desired zoom (1-18)
```

### Change Icon Size

Modify icon dimensions in `main.js`:
```javascript
iconSize: [50, 95], // [width, height] in pixels
```

## 🐛 Troubleshooting

**Map not loading?**
- Check internet connection
- Verify OpenStreetMap tiles are accessible
- Check browser console for errors

**ISS not updating?**
- Verify API endpoint is accessible
- Check browser console for fetch errors
- Ensure JavaScript is enabled

**Icon not displaying?**
- Verify icon path: `./icon/International_Space_Station.svg`
- Check that SVG file exists in the icon folder

## 📝 API Credits

ISS location data provided by [Where the ISS at?](https://wheretheiss.at/) API

## 🗺️ Map Credits

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [@Neerah_Dhyani](https://github.com/Neeraj-Dhyani)

## 🙏 Acknowledgments

- [Leaflet.js](https://leafletjs.com/) - Interactive map library
- [Where the ISS at?](https://wheretheiss.at/) - Free ISS tracking API
- [OpenStreetMap](https://www.openstreetmap.org/) - Map tile provider
- NASA - For the International Space Station

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Track the ISS and explore space from your browser! 🌌🛰️**

*Made with ❤️ and JavaScript | Updated every second*
