# Next.js + Tailwind CSS + shadcn/ui Starter Template

A modern, production-ready starter template featuring Next.js 15, Tailwind CSS v4, and shadcn/ui components.

## Features

- ⚡ **Next.js 15** - The latest version of the React framework
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with the newest features
- 🧩 **shadcn/ui** - Beautiful, accessible, and customizable UI components
- 📘 **TypeScript** - Full type safety and improved developer experience
- 🔍 **ESLint** - Code linting for better code quality
- 🚀 **App Router** - Next.js 13+ app directory structure

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/f3lixel/NEXT.js-shadcn-UI-tailwind.git
cd NEXT.js-shadcn-UI-tailwind
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with Tailwind CSS
├── components/          # React components
│   └── ui/             # shadcn/ui components
│       ├── button.tsx  # Button component
│       └── card.tsx    # Card component
├── lib/                # Utility functions
│   └── utils.ts        # Class name utilities (cn)
├── public/             # Static assets
├── components.json     # shadcn/ui configuration
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── postcss.config.mjs  # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Adding Components

This template is configured to work with shadcn/ui. To add more components:

1. Browse available components at [ui.shadcn.com](https://ui.shadcn.com)
2. Add a component using the CLI:
```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
```

## Customization

### Theme

The theme can be customized by modifying the CSS variables in `app/globals.css`. The template includes both light and dark mode support.

### Tailwind Configuration

Tailwind CSS v4 uses a new `@theme` directive. Customize your theme in `app/globals.css`:

```css
@theme {
  --color-primary: 222.2 47.4% 11.2%;
  --color-secondary: 210 40% 96.1%;
  /* Add your custom colors */
}
```

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/f3lixel/NEXT.js-shadcn-UI-tailwind)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
