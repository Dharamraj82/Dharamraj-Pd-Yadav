import React, { useState, useEffect } from 'react';

const UpdateModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    version: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        version: initialData.version || '',
        description: initialData.description || '',
        date: initialData.date || ''
      });
    } else {
      setFormData({
        version: '',
        description: '',
        date: ''
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl border border-gray-700 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit Update' : 'Add Website Update'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="updateForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Version <span className="text-red-500">*</span></label>
                <input type="text" name="version" value={formData.version} onChange={handleChange} required
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="E.g. v1.2.0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Date</label>
                <input type="text" name="date" value={formData.date} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="E.g. May 2024" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="4"
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="What was added or fixed..." />
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button type="submit" form="updateForm" className="px-5 py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {initialData ? 'Save Changes' : 'Publish Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
