import React, { useState, useEffect } from 'react';

const TechModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    skill: '',
    icon_name: '',
    color: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        skill: initialData.skill || '',
        icon_name: initialData.icon_name || '',
        color: initialData.color || ''
      });
    } else {
      setFormData({
        skill: '',
        icon_name: '',
        color: ''
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
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg border border-gray-700 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit Technology' : 'Add New Technology'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="techForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Skill Name <span className="text-red-500">*</span></label>
              <input type="text" name="skill" value={formData.skill} onChange={handleChange} required
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="E.g. React.js" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Icon Name (React Icons)<span className="text-red-500">*</span></label>
              <input type="text" name="icon_name" value={formData.icon_name} onChange={handleChange} required
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="E.g. SiReact" />
              <p className="text-xs text-gray-500 mt-1">Must match a valid react-icons/si icon name.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Color (Hex code)</label>
              <input type="text" name="color" value={formData.color} onChange={handleChange}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="E.g. #61DAFB" />
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button type="submit" form="techForm" className="px-5 py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {initialData ? 'Save Changes' : 'Add Technology'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechModal;
