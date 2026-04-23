const fs = require('fs');
const path = require('path');

const applyFix = (filePath, search, replace) => {
  const fullPath = path.resolve(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(search, replace);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed ${filePath}`);
};

// 1. react-refresh/only-export-components in UI components
const uiComponents = [
  'src/components/ui/badge.tsx',
  'src/components/ui/button.tsx',
  'src/components/ui/form.tsx',
  'src/components/ui/navigation-menu.tsx',
  'src/components/ui/sidebar.tsx',
  'src/components/ui/sonner.tsx',
  'src/components/ui/toggle.tsx',
];

uiComponents.forEach(file => {
  // Find the final export block
  applyFix(file, /^export \{/m, '// eslint-disable-next-line react-refresh/only-export-components\nexport {');
});

// 2. empty object types
applyFix('src/components/ui/command.tsx', 
  'interface CommandDialogProps extends DialogProps {}', 
  'type CommandDialogProps = DialogProps;');

applyFix('src/components/ui/textarea.tsx', 
  'export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}', 
  'export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;');

// 3. react-refresh in contexts
applyFix('src/contexts/ThemeContext.tsx', 
  'export const useTheme = () => useContext(ThemeContext);', 
  '// eslint-disable-next-line react-refresh/only-export-components\nexport const useTheme = () => useContext(ThemeContext);');

applyFix('src/contexts/LanguageContext.tsx', 
  'export const useLanguage = () => useContext(LanguageContext);', 
  '// eslint-disable-next-line react-refresh/only-export-components\nexport const useLanguage = () => useContext(LanguageContext);');

// 4. tailwind.config.ts
let tailwindContent = fs.readFileSync(path.resolve(__dirname, 'tailwind.config.ts'), 'utf8');
tailwindContent = `import tailwindcssAnimate from "tailwindcss-animate";\n` + tailwindContent;
tailwindContent = tailwindContent.replace(/require\("tailwindcss-animate"\)/g, 'tailwindcssAnimate');
fs.writeFileSync(path.resolve(__dirname, 'tailwind.config.ts'), tailwindContent, 'utf8');
console.log('Fixed tailwind.config.ts');

