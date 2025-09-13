# Jonglei State Government Website

A modern, accessible, and responsive website for the Office of the Governor, Jonglei State, South Sudan. Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🎨 Design System

### Brand Identity
- **Primary Color**: `#04649c` (Jonglei State Blue)
- **Typography**: Inter + Source Sans 3 font family
- **Accessibility**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first design approach

### Design Tokens

#### Colors
```css
/* Primary Scale (Generated from #04649c) */
--color-primary-50: 210 100% 98%
--color-primary-100: 210 100% 96%
--color-primary-200: 210 100% 90%
--color-primary-300: 210 100% 80%
--color-primary-400: 210 100% 65%
--color-primary-500: 210 100% 50%  /* #04649c */
--color-primary-600: 210 100% 40%
--color-primary-700: 210 100% 30%
--color-primary-800: 210 100% 25%
--color-primary-900: 210 100% 20%

/* Semantic Colors */
--color-success: Green scale for success states
--color-warning: Yellow scale for warning states
--color-danger: Red scale for error/destructive states
--color-teal: Accent color for highlights
```

#### Typography
```css
/* Font Sizes */
--font-size-xs: 0.75rem    /* 12px */
--font-size-sm: 0.875rem   /* 14px */
--font-size-base: 1rem     /* 16px */
--font-size-lg: 1.125rem   /* 18px */
--font-size-xl: 1.25rem    /* 20px */
--font-size-2xl: 1.5rem    /* 24px */
--font-size-3xl: 1.875rem  /* 30px */
--font-size-4xl: 2.25rem   /* 36px */
--font-size-5xl: 3rem      /* 48px */
--font-size-6xl: 3.75rem   /* 60px */

/* Font Weights */
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

#### Spacing & Layout
```css
/* Spacing Scale (4/8 Grid) */
--spacing-1: 0.25rem   /* 4px */
--spacing-2: 0.5rem    /* 8px */
--spacing-4: 1rem      /* 16px */
--spacing-6: 1.5rem    /* 24px */
--spacing-8: 2rem      /* 32px */
--spacing-12: 3rem     /* 48px */
--spacing-16: 4rem     /* 64px */
--spacing-24: 6rem     /* 96px */

/* Container Widths */
--container-5xl: 64rem   /* 1024px */
--container-6xl: 72rem   /* 1152px */
--container-7xl: 80rem   /* 1280px */
```

## 🚀 Features

### Core Functionality
- **Real-time Alerts Bar**: Emergency notifications, warnings, and announcements
- **Global Search**: Search across news, projects, departments, and documents
- **Dark Mode**: System preference detection with manual toggle
- **Multi-language Support**: English and Arabic (placeholder)
- **Responsive Design**: Mobile-first approach with container queries

### Government-Specific Features
- **Citizen Portal**: Service requests and status tracking
- **Department Directory**: Government departments and services
- **Project Showcase**: Development projects and progress tracking
- **News & Announcements**: Government updates and press releases
- **Contact Management**: Multiple contact channels and feedback forms

### Accessibility Features
- **WCAG 2.1 AA Compliance**: High contrast ratios and keyboard navigation
- **Skip to Content**: Keyboard accessibility enhancement
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Reduced Motion**: Respects user motion preferences

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Components**: shadcn/ui + Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Query + Context API
- **Build Tool**: Vite
- **Package Manager**: npm/bun

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Main navigation
│   ├── Footer.tsx     # Site footer
│   ├── AlertsBar.tsx  # Real-time alerts
│   ├── ThemeToggle.tsx # Dark mode toggle
│   ├── Breadcrumbs.tsx # Navigation breadcrumbs
│   └── GlobalSearch.tsx # Global search functionality
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── data/               # Mock data and constants
└── index.css           # Design system tokens
```

## 🎯 Component Library

### Core Components
- **Buttons**: Primary, secondary, outline, and destructive variants
- **Forms**: Inputs, selects, checkboxes with validation
- **Navigation**: Header, mega-menu, breadcrumbs, pagination
- **Data Display**: Cards, tables, badges, progress indicators
- **Overlays**: Modals, popovers, tooltips, toasts
- **Layout**: Containers, grids, sections, dividers

### Government Components
- **AlertsBar**: Real-time government announcements
- **GlobalSearch**: Site-wide search with filters
- **Breadcrumbs**: Page navigation context
- **ThemeToggle**: Dark/light mode switching
- **SkipToContent**: Accessibility enhancement

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Mobile-First Approach
- Touch-friendly hit targets (minimum 44px)
- Responsive typography with fluid scaling
- Optimized navigation for mobile devices
- Container queries for component-level responsiveness

## 🌙 Dark Mode

### Implementation
- **System Preference**: Automatically detects user preference
- **Manual Toggle**: User can override system preference
- **Persistence**: Remembers user choice in localStorage
- **Consistent**: All components support both themes

### Color Adaptation
- Automatic contrast adjustments
- Semantic color mapping
- Accessible color ratios maintained
- Smooth transitions between themes

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks

### Accessibility Features
- Skip to content link
- Proper form labels and error messages
- Alt text for images and icons
- Reduced motion support
- High contrast mode compatibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd jonglei-connect-main

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Build Commands
```bash
# Development build
npm run build:dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📝 Adding New Pages

### 1. Create Page Component
```tsx
// src/pages/NewPage.tsx
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function NewPage() {
  return (
    <main id="main-content" className="gov-section">
      <div className="gov-container">
        <Breadcrumbs />
        <h1>Page Title</h1>
        {/* Page content */}
      </div>
    </main>
  );
}
```

### 2. Add Route
```tsx
// src/App.tsx
import NewPage from "./pages/NewPage";

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

### 3. Update Navigation
```tsx
// src/components/Header.tsx
// Add to navigationItems array
```

## 🎨 Customizing the Design System

### Adding New Colors
```css
/* src/index.css */
:root {
  --color-custom-50: 200 100% 98%;
  --color-custom-500: 200 100% 50%;
  --color-custom-900: 200 100% 20%;
}
```

### Extending Tailwind Config
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      custom: {
        50: 'hsl(var(--color-custom-50))',
        500: 'hsl(var(--color-custom-500))',
        900: 'hsl(var(--color-custom-900))',
      }
    }
  }
}
```

## 🧪 Testing

### Accessibility Testing
```bash
# Install axe-core for accessibility testing
npm install --save-dev @axe-core/react

# Run accessibility tests
npm run test:a11y
```

### Performance Testing
```bash
# Build and analyze bundle
npm run build
npm run analyze

# Lighthouse testing
npm run lighthouse
```

## 📊 Performance

### Optimization Strategies
- **Code Splitting**: Route-level lazy loading
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Regular bundle size monitoring
- **Caching**: HTTP caching headers and service worker
- **Lazy Loading**: Images and non-critical components

### Performance Targets
- **Lighthouse Performance**: ≥ 90
- **Lighthouse Accessibility**: ≥ 95
- **Lighthouse Best Practices**: ≥ 95
- **Lighthouse SEO**: ≥ 90

## 🔧 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standardized commit messages

### Component Development
- **Props Interface**: Define all props with TypeScript
- **Accessibility**: Include ARIA labels and roles
- **Responsive**: Test on multiple screen sizes
- **Dark Mode**: Ensure both themes work correctly

### State Management
- **Local State**: Use useState for component state
- **Global State**: Use Context API for theme/auth
- **Server State**: Use React Query for API data
- **Form State**: Use React Hook Form with Zod validation

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [Axe Core](https://github.com/dequelabs/axe-core)

### Government Standards
- [Digital Government Services](https://www.gov.uk/service-manual)
- [Accessibility Requirements](https://www.section508.gov/)

## 🤝 Contributing

### Development Workflow
1. Create feature branch from main
2. Implement changes with tests
3. Ensure accessibility compliance
4. Update documentation
5. Submit pull request

### Code Review Checklist
- [ ] TypeScript types are correct
- [ ] Accessibility requirements met
- [ ] Responsive design verified
- [ ] Dark mode compatibility
- [ ] Performance impact assessed
- [ ] Documentation updated

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For technical support or questions about the design system:
- Create an issue in the repository
- Contact the development team
- Review the documentation

---

**Built with ❤️ for the people of Jonglei State**
