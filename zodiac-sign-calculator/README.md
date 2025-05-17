# Zodiac Sign Calculator

A fun and colorful Zodiac Sign Calculator built with React. This application allows users to input their birth date and discover their Zodiac sign along with unique characteristics and a pixel-style representation.

## Features

- **Date Input**: Users can select their birth date using a date picker.
- **Zodiac Sign Calculation**: The app determines the user's Zodiac sign based on the selected date.
- **ZodiacCard Component**: Displays the Zodiac sign name, date range, matching image, and a fun description with a vibrant background.
- **Animations**: Smooth animations enhance the user experience when rendering the ZodiacCard.
- **Galaxy-Themed Styling**: The app features a dark starry background with purple hues and gradients for a cosmic feel.

## Project Structure

```
zodiac-sign-calculator
├── public
│   ├── images
│   │   ├── aries.png
│   │   ├── taurus.png
│   │   ├── gemini.png
│   │   ├── cancer.png
│   │   ├── leo.png
│   │   ├── virgo.png
│   │   ├── libra.png
│   │   ├── scorpio.png
│   │   ├── sagittarius.png
│   │   ├── capricorn.png
│   │   ├── aquarius.png
│   │   └── pisces.png
│   └── index.html
├── src
│   ├── components
│   │   ├── ZodiacCard.jsx
│   │   └── DatePicker.jsx
│   ├── data
│   │   └── zodiacData.js
│   ├── styles
│   │   └── App.css
│   ├── App.jsx
│   ├── index.js
│   └── tailwind.config.js
├── package.json
├── README.md
└── .gitignore
```

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd zodiac-sign-calculator
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Application**: 
   ```
   npm start
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the app.

## Usage

- Select your birth date using the date picker.
- Click the "Discover My Sign" button to see your Zodiac sign along with its description and image.
- Enjoy the colorful animations and galaxy-themed styling!

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.