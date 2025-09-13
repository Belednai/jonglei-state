import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./index.html",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
				'2xl': '3rem',
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px',
				'3xl': '1600px',
				'4xl': '1920px',
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				ringOffset: 'hsl(var(--ring-offset))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					50: 'hsl(var(--color-primary-50))',
					100: 'hsl(var(--color-primary-100))',
					200: 'hsl(var(--color-primary-200))',
					300: 'hsl(var(--color-primary-300))',
					400: 'hsl(var(--color-primary-400))',
					500: 'hsl(var(--color-primary-500))',
					600: 'hsl(var(--color-primary-600))',
					700: 'hsl(var(--color-primary-700))',
					800: 'hsl(var(--color-primary-800))',
					900: 'hsl(var(--color-primary-900))',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					muted: 'hsl(var(--primary-muted))',
					border: 'hsl(var(--primary-border))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					muted: 'hsl(var(--secondary-muted))',
					border: 'hsl(var(--secondary-border))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					muted: 'hsl(var(--accent-muted))',
					border: 'hsl(var(--accent-border))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					muted: 'hsl(var(--success-muted))',
					border: 'hsl(var(--success-border))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
					muted: 'hsl(var(--warning-muted))',
					border: 'hsl(var(--warning-border))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
					muted: 'hsl(var(--destructive-muted))',
					border: 'hsl(var(--destructive-border))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					border: 'hsl(var(--muted-border))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Government-specific colors - Brand Color Only
				gov: {
					primary: 'hsl(var(--color-primary-600))',
					secondary: 'hsl(var(--color-primary-400))',
					accent: 'hsl(var(--color-primary-100))',
					border: 'hsl(var(--gov-border-accent))'
				}
			},
			fontFamily: {
				sans: ['var(--font-family-sans)', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Open Sans', 'sans-serif'],
				display: ['var(--font-family-display)', 'Open Sans', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				mono: ['var(--font-family-mono)', 'Roboto Mono', 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace']
			},
			fontSize: {
				'xs': ['var(--font-size-xs)', { lineHeight: 'var(--line-height-normal)' }],
				'sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-normal)' }],
				'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
				'lg': ['var(--font-size-lg)', { lineHeight: 'var(--line-height-normal)' }],
				'xl': ['var(--font-size-xl)', { lineHeight: 'var(--line-height-snug)' }],
				'2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-snug)' }],
				'3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-tight)' }],
				'4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-snug)' }],
				'5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-tight)' }],
				'6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-tight)' }],
				'7xl': ['var(--font-size-7xl)', { lineHeight: 'var(--line-height-tight)' }]
			},
			fontWeight: {
				light: 'var(--font-weight-light)',
				normal: 'var(--font-weight-normal)',
				medium: 'var(--font-weight-medium)',
				semibold: 'var(--font-weight-semibold)',
				bold: 'var(--font-weight-bold)',
				extrabold: 'var(--font-weight-extrabold)',
				black: 'var(--font-weight-black)'
			},
			lineHeight: {
				tight: 'var(--line-height-tight)',
				snug: 'var(--line-height-snug)',
				normal: 'var(--line-height-normal)',
				relaxed: 'var(--line-height-relaxed)',
				loose: 'var(--line-height-loose)'
			},
			spacing: {
				'0': 'var(--spacing-0)',
				'1': 'var(--spacing-1)',
				'2': 'var(--spacing-2)',
				'3': 'var(--spacing-3)',
				'4': 'var(--spacing-4)',
				'5': 'var(--spacing-5)',
				'6': 'var(--spacing-6)',
				'8': 'var(--spacing-8)',
				'10': 'var(--spacing-10)',
				'12': 'var(--spacing-12)',
				'16': 'var(--spacing-16)',
				'20': 'var(--spacing-20)',
				'24': 'var(--spacing-24)',
				'32': 'var(--spacing-32)',
				'40': 'var(--spacing-40)'
			},
			borderRadius: {
				none: 'var(--radius-none)',
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)',
				'3xl': 'var(--radius-3xl)',
				full: 'var(--radius-full)'
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				'2xl': 'var(--shadow-2xl)',
				inner: 'var(--shadow-inner)',
				glow: 'var(--shadow-glow)',
				brand: 'var(--shadow-brand)'
			},
			zIndex: {
				dropdown: 'var(--z-dropdown)',
				sticky: 'var(--z-sticky)',
				fixed: 'var(--z-fixed)',
				'modal-backdrop': 'var(--z-modal-backdrop)',
				modal: 'var(--z-modal)',
				popover: 'var(--z-popover)',
				tooltip: 'var(--z-tooltip)',
				toast: 'var(--z-toast)'
			},
			transitionDuration: {
				fast: 'var(--transition-fast)',
				normal: 'var(--transition-normal)',
				slow: 'var(--transition-slow)',
				bounce: 'var(--transition-bounce)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-from-top': {
					from: { transform: 'translateY(-100%)' },
					to: { transform: 'translateY(0)' }
				},
				'slide-in-from-bottom': {
					from: { transform: 'translateY(100%)' },
					to: { transform: 'translateY(0)' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
				'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.4s ease-out forwards'
			},
			backdropBlur: {
				xs: '2px',
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '16px',
				'2xl': '24px',
				'3xl': '40px'
			},
			screens: {
				'xs': '475px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px',
				'3xl': '1600px',
				'4xl': '1920px',
				// Device-specific breakpoints
				'mobile': {'max': '767px'},
				'tablet': {'min': '768px', 'max': '1023px'},
				'laptop': {'min': '1024px', 'max': '1279px'},
				'desktop': {'min': '1280px', 'max': '1919px'},
				'ultrawide': {'min': '1920px'},
				// Modern device breakpoints
				'phone-sm': {'max': '374px'},
				'phone': {'min': '375px', 'max': '639px'},
				'tablet-sm': {'min': '640px', 'max': '767px'},
				'tablet-lg': {'min': '768px', 'max': '1023px'},
				// High DPI screens
				'retina': {'raw': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'},
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/2': '3 / 2',
				'2/3': '2 / 3',
				'9/16': '9 / 16',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
