// src/components/admin/ContactMessages.jsx
import { useState } from 'react';
import { Mail, CheckCircle, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactMessages = ({ messages, onMarkRead, onDelete }) => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredMessages = messages.filter(m => 
    filter === 'all' ? true : m.status === filter
  );

  const handleDelete = (id) => {
    if (window.confirm('Delete this message?')) {
      onDelete(id);
      toast.success('Message deleted');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Messages List */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#1E2A5A]">Messages</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1 border rounded-lg text-sm"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>

        <div className="divide-y">
          {filteredMessages.map((message) => (
            <div 
              key={message.id} 
              className={`p-4 cursor-pointer hover:bg-gray-50 transition ${message.status === 'unread' ? 'bg-blue-50' : ''}`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail size={16} className="text-gray-400" />
                    <span className="font-semibold">{message.name}</span>
                    {message.status === 'unread' && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{message.email}</p>
                  <p className="text-gray-500 text-sm line-clamp-2">{message.message}</p>
                  <p className="text-gray-400 text-xs mt-2">{new Date(message.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2">
                  {message.status === 'unread' && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); onMarkRead(message.id); }}
                      className="p-1 text-green-500 hover:text-green-700"
                    >
                      <CheckCircle size={18} />
                    </button>
                  )}
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDelete(message.id); }}
                    className="p-1 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Detail */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        {selectedMessage ? (
          <>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold text-[#1E2A5A]">Message Details</h2>
              <button 
                onClick={() => setSelectedMessage(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">From</p>
                <p className="font-semibold">{selectedMessage.name}</p>
                <p className="text-sm text-gray-600">{selectedMessage.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-sm">{new Date(selectedMessage.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Message</p>
                <p className="text-gray-700 mt-1">{selectedMessage.message}</p>
              </div>
              <button className="w-full bg-[#1E2A5A] text-white py-2 rounded-lg hover:bg-[#2C3E6A] transition">
                Reply via Email
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Mail size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">Select a message to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMessages;