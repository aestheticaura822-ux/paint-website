// frontend/src/pages/admin/MessagesAdmin.jsx
import { useState, useEffect } from 'react';
import ContactMessages from '../../components/admin/ContactMessages';
import { contactService } from '../../services/contactService';
import toast from 'react-hot-toast';

const MessagesAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const data = await contactService.getAll();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await contactService.markAsRead(id);
      setMessages(messages.map(msg =>
        msg.id === id ? { ...msg, status: 'read' } : msg
      ));
      toast.success('Marked as read');
    } catch (error) {
      toast.error('Failed to mark as read');
    }
  };

  const deleteMessage = async (id) => {
    try {
      await contactService.delete(id);
      setMessages(messages.filter(msg => msg.id !== id));
      toast.success('Message deleted');
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-[#1E2A5A] border-t-[#FF9B50] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1E2A5A] mb-6">Contact Messages</h1>
      <ContactMessages
        messages={messages}
        onMarkRead={markAsRead}
        onDelete={deleteMessage}
      />
    </div>
  );
};

export default MessagesAdmin;