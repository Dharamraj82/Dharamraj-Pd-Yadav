import React, { useState, useEffect } from 'react';

const BlogModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    date: '',
    read_time: '',
    author_name: '',
    author_role: '',
    author_avatar: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        image: initialData.image || '',
        category: initialData.category || '',
        date: initialData.date || '',
        read_time: initialData.read_time || '',
        author_name: initialData.author_name || '',
        author_role: initialData.author_role || '',
        author_avatar: initialData.author_avatar || ''
      });
    } else {
      setFormData({
        title: '',
        description: '',
        image: '',
        category: '',
        date: '',
        read_time: '',
        author_name: '',
        author_role: '',
        author_avatar: ''
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
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl border border-gray-700 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit Blog' : 'Add New Blog'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="blogForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Blog Title <span className="text-red-500">*</span></label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="E.g. How to use React" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="E.g. Web Development" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description (Content) <span className="text-red-500">*</span></label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Blog description or main content..." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Read Time</label>
                <input type="text" name="read_time" value={formData.read_time} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="E.g. 5 min read" />
              </div>
            </div>

            <div className="border-t border-gray-700 pt-4 mt-2">
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Author Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Author Name</label>
                  <input type="text" name="author_name" value={formData.author_name} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="E.g. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Author Role</label>
                  <input type="text" name="author_role" value={formData.author_role} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="E.g. Full Stack Dev" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Author Avatar URL</label>
                  <input type="text" name="author_avatar" value={formData.author_avatar} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="https://..." />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button type="submit" form="blogForm" className="px-5 py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {initialData ? 'Save Changes' : 'Publish Blog'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
