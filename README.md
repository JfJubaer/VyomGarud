# VyomGarud - Modern Digital Solutions Platform

A sleek, dark-themed landing page built with Next.js 15, featuring a military/futuristic aesthetic with smooth animations and responsive design.

![VyomGarud Preview](./public/preview.png)

## 🚀 Features

- **Modern Design**: Dark, military/futuristic aesthetic with charcoal, white, and orange (#ff7b00) color scheme
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Built with Next.js 15 and React 19
- **Clean Typography**: Using Poppins, Inter, and Montserrat fonts
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with company name, tagline, and bold 3D visual
2. **About Section** - Mission statement with stats and company values
3. **Capabilities Section** - 4 service cards showcasing offerings (Web Dev, Mobile Apps, Cloud, AI)
4. **Highlights Section** - 3 key features with animated elements
5. **Contact/Footer** - Contact form, business info, social links, and newsletter signup

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **React**: 19.0.0
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Google Fonts (Poppins, Inter, Montserrat)
- **Package Manager**: npm

## 🎨 Color Palette

- **Charcoal**: `#232323` - Primary background
- **Dark Gray**: `#1a1a1a` - Secondary background
- **Orange**: `#ff7b00` - Primary accent
- **White**: `#ffffff` - Text and highlights

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JfJubaer/VyomGarud.git
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-app/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Capabilities.jsx
│       │   ├── Highlights.jsx
│       │   └── Contact.jsx
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── public/
├── postcss.config.mjs
└── package.json
```

## 🎯 Key Components

### Hero Component

- Animated company name with gradient text
- 3D geometric visual with rotating circles
- Dual CTA buttons with hover effects
- Stats section (500+ Projects, 98% Success Rate, 24/7 Support)

### About Component

- Mission statement and company values
- Animated stats grid
- Precision, Innovation, and Reliability highlights

### Capabilities Component

- 4 service cards with hover animations
- Feature lists for each service
- Military-style corner accents
- Learn More CTAs

### Highlights Component

- 3 key feature cards with icons
- Animated background lines
- Stats bar with performance metrics

### Contact Component

- Full contact form with validation
- Contact info cards (email, phone, location)
- Business hours section
- Social media links
- Footer with newsletter signup

## 🚀 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JfJubaer/VyomGarud)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy on Other Platforms

**Build the project:**

```bash
npm run build
```

**Start production server:**

```bash
npm start
```

## 🎨 Customization

### Update Colors

Edit `src/app/globals.css`:

```css
@theme {
  --color-charcoal: #232323;
  --color-orange: #ff7b00;
}
```

### Update Content

- **Hero**: Edit `src/app/components/Hero.jsx`
- **About**: Edit `src/app/components/About.jsx`
- **Services**: Edit the `services` array in `Capabilities.jsx`
- **Contact Info**: Edit the contact arrays in `Contact.jsx`

### Modify Animations

Adjust Framer Motion properties in component files:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🐛 Known Issues

- None currently reported

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**VyomGarud Team**

- Website: vyomgarud.com
- Email: contact@vyomgarud.com
- GitHub: [@JfJubaer](https://github.com/JfJubaer)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vercel for deployment platform

## 📸 Screenshots

### Desktop View

![Desktop View](./public/screenshots/desktop.png)

### Mobile View

![Mobile View](./public/screenshots/mobile.png)

### Tablet View

![Tablet View](./public/screenshots/tablet.png)

---

**Built with ❤️ by VyomGarud Team** | **Soar Above the Ordinary**
