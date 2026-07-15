# Digital Clock - Multiple Time Zones 🕐

A beautiful, responsive React application that displays current time in different time zones with both digital and analog clock views.

## 🎯 Features

✅ **Digital Clock View**
- Displays time in 12 different time zones simultaneously
- Real-time updates every second
- Clean, modern design with gradient background
- Responsive grid layout

✅ **Analog Clock View**
- Traditional clock face with hour markers
- Smooth hand animations
- Timezone selector dropdown
- Realistic clock design

✅ **Time Zones Supported**
- UTC
- EST (New York)
- CST (Chicago)
- PST (Los Angeles)
- GMT (London)
- CET (Berlin)
- IST (India)
- JST (Tokyo)
- AEST (Sydney)
- NZST (Auckland)
- EET (Kyiv)
- CST (Shanghai)

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Adaptive layouts
- Touch-friendly controls

✅ **Modern UI**
- Gradient backgrounds
- Smooth animations
- Glassmorphism effects
- Dark mode support

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 with animations
- **Build Tool:** Vite
- **Date/Time:** Native JavaScript Intl API

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Navigate to client directory**
```bash
cd client
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── DigitalClock.jsx      # Digital clock component
│   │   ├── Clock.css             # Digital clock styles
│   │   ├── AnalogClock.jsx       # Analog clock component
│   │   └── AnalogClock.css       # Analog clock styles
│   ├── ClockApp.jsx              # Main app component
│   ├── ClockApp.css              # App styles
│   ├── index.jsx                 # React entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
└── package.json                  # Dependencies
```

## 🎨 Features in Detail

### Digital Clock
- Grid layout with 12 time zones
- Color-coded timezone cards
- Real-time seconds display
- Timezone offset information

### Analog Clock
- Traditional 12-hour format
- Red second hand
- Smooth animations
- Time zone selector

### Responsive Layouts
- Desktop: 4-column grid
- Tablet: 2-3 column grid
- Mobile: 1-column layout

## 💡 How It Works

The app uses the JavaScript `Intl.DateTimeFormat` API to format time according to different timezones:

```javascript
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
```

This ensures accurate timezone conversions without external libraries.

## 🚀 Performance

- Updates only every second (not on every render)
- Optimized CSS animations
- Minimal re-renders with React hooks
- Clean interval cleanup to prevent memory leaks

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌙 Dark Mode

Automatically adapts to system dark mode preference using CSS media query:
```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

## 📝 Customization

### Add More Time Zones
Edit the `timezones` array in `DigitalClock.jsx`:
```javascript
const timezones = [
  { name: 'Your City', offset: 'Continent/City' },
  // ...
];
```

### Change Colors
Modify gradient colors in CSS:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adjust Clock Size
Change width/height in `AnalogClock.css`:
```css
.clock-face {
  width: 300px;  /* Change this */
  height: 300px; /* And this */
}
```

## 🐛 Troubleshooting

**Clock not updating?**
- Check browser console for errors
- Ensure JavaScript is enabled
- Try refreshing the page

**Incorrect timezone?**
- Verify timezone name is correct (IANA format)
- Check system timezone settings

## 📄 License

MIT

---

**Developed with ❤️ for global timekeeping** 🌍⏰
