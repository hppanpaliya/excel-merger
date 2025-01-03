# Excel Merger

A modern web application built with React and Vite that allows users to merge multiple Excel (.xlsx) files into a single workbook. Each source file becomes a separate worksheet in the merged workbook, maintaining formatting and styles.

![Excel Merger Screenshot](./screenshot.png)

## Features

- 🔄 Drag and drop interface for file selection
- 📊 Supports .xlsx format files
- 🎨 Preserves original formatting and styles
- 🌓 Dark/Light mode with system preference detection
- ⚡ Dynamic loading of Excel processing library
- 📱 Responsive design for all screen sizes

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 - v20.18.1)
- npm (v9.0.0 or higher) or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hppanpaliya/excel-merger.git
cd excel-merger
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

## Development

To start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

To preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
├── components/
│   ├── ExcelMerger/
│   │   ├── index.jsx
│   │   ├── InfoSection.jsx
│   │   ├── FileDropZone.jsx
│   │   ├── StatusMessage.jsx
│   │   └── ThemeToggle.jsx
├── hooks/
│   └── useDarkMode.js
├── utils/
│   └── excelUtils.js
└── styles/
    └── animations.css
```

## Technical Details

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Excel Processing**: ExcelJS
- **Icons**: Lucide React
- **Code Quality**: ESLint
- **Performance**: Dynamic imports for Excel processing

## File Requirements

- Files must be in .xlsx format
- Each input file must contain exactly one worksheet
- Worksheet names are derived from file names (max 31 characters)
- Special characters in file names are replaced with underscores

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build directory

## Dependencies

### Production
- react: ^18.3.1
- react-dom: ^18.3.1
- exceljs: ^4.4.0
- lucide-react: ^0.469.0

### Development
- vite: ^6.0.5
- @vitejs/plugin-react-swc: ^3.5.0
- tailwindcss: ^3.4.17
- eslint: ^9.17.0
- autoprefixer: ^10.4.20
- postcss: ^8.4.49

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ExcelJS](https://github.com/exceljs/exceljs) for Excel file processing
- [Lucide](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Vite](https://vitejs.dev) for the build system

---

Made with ❤️ by Harshal Panpaliya