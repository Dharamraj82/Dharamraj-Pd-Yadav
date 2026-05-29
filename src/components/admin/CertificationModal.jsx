import React, { useState, useEffect } from 'react';

const CertificationModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    image: '',
    link: '',
    month: '',
    year: ''
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    if (initialData) {
      let m = '';
      let y = '';
      if (initialData.certification_date) {
        const parts = initialData.certification_date.split(' ');
        if (parts.length >= 2) {
          m = parts[0];
          y = parts[1];
        } else {
          y = parts[0];
        }
      }
      
      setFormData({
        title: initialData.title || '',
        issuer: initialData.issuer || '',
        image: initialData.image || '',
        link: initialData.link || '',
        month: m,
        year: y
      });
    } else {
      setFormData({
        title: '',
        issuer: '',
        image: '',
        link: '',
        month: '',
        year: ''
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Merge month and year into certification_date
    const certDate = formData.month && formData.year 
      ? `${formData.month} ${formData.year}`
      : formData.year || formData.month || '';

    const submitData = {
      title: formData.title,
      issuer: formData.issuer,
      image: formData.image,
      link: formData.link,
      certification_date: certDate
    };

    onSubmit(submitData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg border border-gray-700 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit Certification' : 'Add New Certification'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="certForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Certification Title <span className="text-red-500">*</span></label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="E.g. AWS Certified Developer" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Issuer / Organization</label>
              <input type="text" name="issuer" value={formData.issuer} onChange={handleChange}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="E.g. Amazon Web Services" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Certificate Link</label>
                <input type="text" name="link" value={formData.link} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://..." />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Certification Date (Month & Year)</label>
              <div className="flex gap-3">
                <select 
                  name="month" 
                  value={formData.month} 
                  onChange={handleChange}
                  className="w-1/2 p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select Month</option>
                  {months.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <input 
                  type="text" 
                  name="year" 
                  value={formData.year} 
                  onChange={handleChange}
                  placeholder="e.g. 2024"
                  className="w-1/2 p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button type="submit" form="certForm" className="px-5 py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {initialData ? 'Save Changes' : 'Add Certification'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
