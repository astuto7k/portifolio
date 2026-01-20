/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#0b0b0b',
                'brand-red': '#e10600',
                'brand-dark': '#121212',
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                'float-slow': 'floatSlow 15s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
                'sparkle': 'sparkle 4s ease-in-out infinite',
                'spin-slow': 'spin 10s linear infinite',
            },
            keyframes: {
                floatSlow: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(8px, -12px) rotate(0.5deg)' },
                    '66%': { transform: 'translate(-12px, 8px) rotate(-0.5deg)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                sparkle: {
                    '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.6' },
                    '50%': { transform: 'scale(1.2) rotate(45deg)', opacity: '1' },
                }
            }
        }
    },
    plugins: [],
}
