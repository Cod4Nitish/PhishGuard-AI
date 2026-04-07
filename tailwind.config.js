/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a',
        carbon: '#1a1a1a',
        neon: {
          green: '#39FF14',
          red: '#DC143C',
          blue: '#007BFF',
        }
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)',
        'neon-red': '0 0 10px rgba(220, 20, 60, 0.5), 0 0 20px rgba(220, 20, 60, 0.3)',
        'neon-blue': '0 0 10px rgba(0, 123, 255, 0.5), 0 0 20px rgba(0, 123, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
