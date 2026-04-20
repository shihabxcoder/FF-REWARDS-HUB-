tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Hind Siliguri', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            colors: {
                ff: {
                    orange: '#FF5722',
                    yellow: '#FFC107',
                    dark: '#0f172a',
                    darker: '#020617',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(255, 87, 34, 0.5)' },
                    '50%': { opacity: .7, boxShadow: '0 0 40px rgba(255, 87, 34, 0.8)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        }
    }
}
