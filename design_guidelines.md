# NeoVedic Design Guidelines

## Design Approach
**Reference-Based Design** inspired by DianApps, Linear, and Stripe - creating a premium, AI-forward tech aesthetic with bold gradients, modern typography, and sophisticated interactions.

## Color Palette

### Dark Mode (Primary)
- **Background Base**: 10 15% 8% (deep charcoal)
- **Surface Elevated**: 10 12% 12% (elevated cards)
- **Primary Brand**: 260 85% 65% (vibrant purple-blue)
- **Primary Hover**: 260 90% 70%
- **Accent Gradient**: Linear from 280 80% 60% to 200 85% 55% (purple to cyan)
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 0 0% 70%
- **Border Subtle**: 0 0% 20%

### Light Mode  
- **Background**: 0 0% 100%
- **Surface**: 0 0% 98%
- **Primary Brand**: 260 90% 58%
- **Text Primary**: 10 15% 15%
- **Text Secondary**: 0 0% 45%

## Typography

**Font Stack**: 
- Headlines: "Inter" (700-800 weight) via Google Fonts
- Body: "Inter" (400-500 weight)
- Accent Numbers: "Space Grotesk" (600 weight)

**Scale**:
- Hero H1: text-6xl md:text-7xl lg:text-8xl font-bold
- Section H2: text-4xl md:text-5xl lg:text-6xl font-bold  
- Service H3: text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg
- Caption: text-sm opacity-70

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Card padding: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-6

**Grid System**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Case Studies: grid-cols-1 lg:grid-cols-2
- Features: grid-cols-1 md:grid-cols-3

## Component Library

### Hero Section
Full viewport (min-h-screen) with animated gradient background, bold headline with gradient text effect, subheading, dual CTAs (primary solid + outline with backdrop blur), floating tech icons animation

### Navigation
Sticky header with blur backdrop, logo left, centered nav links (Services, Case Studies, About, Contact), CTA button right, mobile hamburger menu

### Service Cards
Glassmorphism cards with backdrop-blur, gradient border on hover, icon with gradient background, service title, 3-4 key features list, "Explore →" link, smooth scale transform on hover

### Stats/Metrics Section  
Large animated numbers with "+" suffix, gradient underline decoration, icon accompaniment, descriptive caption below, 2x3 grid layout with globe/tech imagery

### Case Studies
Large image cards with overlay gradient, client logo top-left, project title, key metrics (2-3 stats), "View Case Study" CTA, asymmetric layout alternating image position

### Technology Stack
Icon grid showcasing expertise, animated on scroll, categorized by service type (Frontend, Backend, Cloud, DevOps), logos with subtle hover lift effect

### Testimonials
Large quote with oversized quotation mark, client photo circle, name + title, company logo, navigation arrows, carousel implementation

### Contact Section
2-column layout: form (name, email, service dropdown, message) + company info (address, email, phone with icons), gradient button submit, floating decorative elements background

### Footer
4-column grid: Company (About, Careers), Services (all 4 links), Resources (Blog, Case Studies), Contact info, social icons, newsletter signup, copyright bottom

## Images

### Hero Section
**Large Hero Image**: Abstract 3D rendered tech visualization with purple-cyan gradient lighting (similar to DianApps banner animation) - positioned right side or full background with overlay

### Service Pages
**Header Images**: Full-width gradient banners (800px height) with service-specific iconography overlays for Web Development, DevOps, Cloud, Marketing

### Case Study Cards
**Project Screenshots**: Modern UI mockups on gradient backgrounds, approximately 600x400px per card, showcasing actual work

### About Section
**Team/Office Image**: Professional workspace or team collaboration shot with modern aesthetic

### Technology Icons
Use SVG icon library (Simple Icons via CDN) for: React, Node.js, AWS, Docker, Kubernetes, Next.js, Tailwind displayed in organized grid

### Background Elements
Subtle geometric patterns, gradient orbs, dotted grids as decorative elements throughout - never overwhelming content

## Key Interactions
- Smooth scroll behavior between sections
- Fade-in animations on scroll (Intersection Observer)
- Gradient text effects on headlines using background-clip
- Card lift effect: transform scale(1.02) with shadow increase
- Parallax subtle movement on hero elements
- Number counter animation for stats
- Magnetic button effect on primary CTAs (subtle cursor follow)