# Joke Generator 😂

A fun React application that fetches random jokes from the Official Joke API and displays them with interactive features.

## 🎯 Features

✅ **Multiple Joke Types**
- Random jokes
- Programming jokes
- Knock-knock jokes

✅ **Interactive Features**
- Get another joke with one click
- Add jokes to favorites
- Copy joke to clipboard
- Share jokes (web share API)
- View joke history

✅ **Favorites Management**
- Save favorite jokes
- View all favorites
- Remove jokes from favorites
- Numbered list display

✅ **Error Handling**
- Network error management
- Retry functionality
- Loading states

✅ **Responsive Design**
- Works on desktop, tablet, mobile
- Touch-friendly buttons
- Adaptive layouts

✅ **Modern UI**
- Gradient backgrounds
- Smooth animations
- Glassmorphism effects
- Dark mode support

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 with animations
- **API:** Official Joke API (https://official-joke-api.appspot.com/)
- **Build Tool:** Vite

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
client/src/
├── components/
│   ├── JokeGenerator.jsx          # Joke component
│   ├── JokeGenerator.css          # Joke styles
│   ├── DigitalClock.jsx           # Clock component
│   ├── Clock.css                  # Clock styles
│   ├── AnalogClock.jsx            # Analog clock
│   └── AnalogClock.css            # Analog styles
├── AppContainer.jsx               # Multi-app container
├── AppContainer.css               # Container styles
├── index.jsx                      # Entry point
├── index.css                      # Global styles
└── index.html                     # HTML template
```

## 🎨 Features in Detail

### Random Joke Fetching
- Automatically loads a joke on component mount
- Uses Official Joke API (free, no auth needed)
- Handles different joke types

### Joke Types
1. **Random** - Any type of joke
2. **Programming** - Code-related humor
3. **Knock-Knock** - Classic knock-knock jokes

### Actions
- **🔄 Get Another Joke** - Load next joke
- **❤️ Add to Favorites** - Save to favorites
- **📋 Copy Joke** - Copy to clipboard
- **📤 Share** - Share via web share API

### Favorites Display
- Persistent favorites list
- Numbered display
- Individual removal
- Shows setup and punchline

## 🔌 API Integration

### Official Joke API
```javascript
// Random joke
https://official-joke-api.appspot.com/random_joke

// Programming joke
https://official-joke-api.appspot.com/jokes/programming/random

// Knock-knock joke
https://official-joke-api.appspot.com/jokes/knock-knock/random
```

### Response Format
```json
{
  "type": "general",
  "setup": "Why did the scarecrow win an award?",
  "punchline": "Because he was outstanding in his field!",
  "id": 1
}
```

## 💡 How It Works

1. **Load Joke** - Component mounts and fetches first joke
2. **Display** - Joke is formatted and displayed
3. **Interact** - User can get new joke, favorite, copy, or share
4. **Manage** - Favorites are stored in component state

## 📊 Code Example

```jsx
// Fetch joke from API
const fetchJoke = async (type = 'random') => {
  const url = `https://official-joke-api.appspot.com/...`;
  const response = await fetch(url);
  const data = await response.json();
  setJoke(data);
};

// Add to favorites
const addToFavorites = () => {
  setFavorites([...favorites, joke]);
};
```

## 🌙 Dark Mode

Automatically adapts to system dark mode preference:
```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 🎯 Customization

### Add More Joke Types
Edit joke type selector in `JokeGenerator.jsx`:
```javascript
const timezones = [
  { value: 'random', label: 'Random' },
  { value: 'custom', label: 'My Jokes' }
];
```

### Change API
Replace fetch URL with another joke API:
- JokeAPI
- Jokes by API Ninjas
- Chuck Norris jokes

### Modify Styling
Update gradient colors in CSS:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🐛 Troubleshooting

**Jokes not loading?**
- Check browser console for errors
- Verify internet connection
- API might be down (rare)
- Try different joke type

**Copy to clipboard not working?**
- Ensure HTTPS connection (required for security)
- Check browser permissions
- Try alternative: manual selection + copy

**Share button missing?**
- Web Share API not supported in your browser
- Manual share still available via copy

## 📄 License

MIT

---

**Have a laugh! 😂** Powered by Official Joke API
