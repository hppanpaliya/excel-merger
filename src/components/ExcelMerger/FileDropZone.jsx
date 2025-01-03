import { Upload } from 'lucide-react';

const FileDropZone = ({
  darkMode,
  dragActive,
  setDragActive,
  handleDrop,
  handleFileChange,
  isProcessing
}) => {
  return (
    <div
      onDragEnter={() => setDragActive(true)}
      onDragLeave={() => setDragActive(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={`mt-6 p-8 border-2 border-dashed rounded-lg transition-all duration-200 ${darkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-gray-50 border-gray-300'
        } ${dragActive ? 'scale-[1.02] border-blue-500' : ''}`}
    >
      <div className="flex flex-col items-center">
        <Upload
          className={`w-12 h-12 mb-4 text-blue-500 transition-transform duration-200 ${dragActive ? 'scale-110' : 'hover:scale-110'
            }`}
        />

        <label>
          <div className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer">
            Select Excel Files
          </div>
          <input
            type="file"
            multiple
            accept=".xlsx"
            onChange={handleFileChange}
            disabled={isProcessing}
            className="hidden"
          />
        </label>

        <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Drop your Excel files here or click to select
        </p>
      </div>
    </div>
  );
};

export default FileDropZone;
