import { Info } from 'lucide-react';

const InfoSection = ({ darkMode }) => {
  return (
    <div className={`mb-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'
      } p-6`}>
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-semibold text-blue-500">
          About Excel File Merger
        </h2>
      </div>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        A simple tool to combine multiple Excel files into a single workbook. Each worksheet in the merged file will be named after its source file.
      </p>
      <div className={`h-px w-full my-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
      <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Requirements:
      </p>
      <ul className={`list-disc pl-5 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <li>Files must be in .xlsx format</li>
        <li>Each file must contain exactly one worksheet</li>
        <li>Worksheet names will be derived from file names</li>
        <li>Maximum 31 characters for worksheet names</li>
        <li>Special characters in file names will be replaced with underscores</li>
      </ul>
    </div>
  );
};

export default InfoSection;
