import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ExcelMerger from './components/ExcelMerger';
import './components/styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExcelMerger />
  </StrictMode>,
);