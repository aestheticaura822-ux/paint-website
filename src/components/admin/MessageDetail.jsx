// src/components/admin/MessageDetail.jsx
import { Mail, User, Calendar, Reply, Trash2, CheckCircle } from 'lucide-react';

const MessageDetail = ({ message, onMarkRead, onDelete, onClose }) => {
  if (!message) return null;

  const handleReply = () => {
    window.location.href = `mailto:${message.email}?subject=Reply to your message`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-[#1E2A5A]">Message Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-gray-400" />
                <span className="font-semibold text-lg">{message.name}</span>
                {message.status === 'unread' && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">Unread</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>{message.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <Calendar size={16} />
                <span>{new Date(message.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button 
              onClick={handleReply}
              className="flex items-center gap-2 bg-[#1E2A5A] text-white px-4 py-2 rounded-lg hover:bg-[#2C3E6A] transition"
            >
              <Reply size={18} /> Reply
            </button>
            {message.status === 'unread' && (
              <button 
                onClick={() => onMarkRead(message.id)}
                className="flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-50 transition"
              >
                <CheckCircle size={18} /> Mark as Read
              </button>
            )}
            <button 
              onClick={() => onDelete(message.id)}
              className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;