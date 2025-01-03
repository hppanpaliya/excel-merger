import { useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { processExcelFiles } from '../../utils/excel';
import ThemeToggle from './ThemeToggle';
import InfoSection from './InfoSection';
import FileDropZone from './FileDropZone';
import StatusMessage from './StatusMessage';

const ExcelMerger = () => {
  const [status, setStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    await processExcelFiles(files, setStatus, setIsProcessing);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await processExcelFiles(e.dataTransfer.files, setStatus, setIsProcessing);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <InfoSection darkMode={darkMode} />

        <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'
          } p-8`}>
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Excel File Merger
          </h1>

          <FileDropZone
            darkMode={darkMode}
            dragActive={dragActive}
            setDragActive={setDragActive}
            handleDrop={handleDrop}
            handleFileChange={handleFileChange}
            isProcessing={isProcessing}
          />
          {isProcessing && (
            <div className="mt-6">
              <div className="h-1 w-full bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-blue-500 animate-progress-indeterminate" />
              </div>
            </div>
          )}

          <StatusMessage status={status} />
        </div>
      </div>
    </div>
  );
};

export default ExcelMerger;