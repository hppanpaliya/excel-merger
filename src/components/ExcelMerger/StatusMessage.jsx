import { AlertCircle, CheckCircle, Upload } from 'lucide-react';

const StatusMessage = ({ status }) => {
  if (!status) return null;

  return (
    <div className={`mt-6 p-4 rounded flex items-start gap-3 ${status.includes('Error')
        ? 'bg-red-100 text-red-700'
        : status.includes('completed')
          ? 'bg-green-100 text-green-700'
          : 'bg-blue-100 text-blue-700'
      }`}>
      <div className="flex-shrink-0">
        {status.includes('Error') ? (
          <AlertCircle className="w-5 h-5" />
        ) : status.includes('completed') ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <div className="animate-spin">
            <Upload className="w-5 h-5" />
          </div>
        )}
      </div>
      <p className="flex-1 break-words">{status}</p>
    </div>
  );
};

export default StatusMessage;
