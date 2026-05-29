import React, { useState, useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, onSubmit, initialData, techOptions = [] }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    live_url: '',
    github_url: '',
    docs_url: '',
    type: '',
    tech_ids: []
  });

  useEffect(() => {
    if (initialData) {
      const existingTechIds = initialData.project_tech 
        ? initialData.project_tech.map(pt => pt.tech?.id).filter(Boolean)
        : [];

      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        image: initialData.image || '',
        live_url: initialData.live_url || '',
        github_url: initialData.github_url || '',
        docs_url: initialData.docs_url || '',
        type: initialData.type || '',
        tech_ids: existingTechIds
      });
    } else {
      setFormData({
        title: '',
        description: '',
        image: '',
        live_url: '',
        github_url: '',
        docs_url: '',
        type: '',
        tech_ids: []
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTechChange = (techId) => {
    setFormData(prev => {
      const current = prev.tech_ids;
      if (current.includes(techId)) {
        return { ...prev, tech_ids: current.filter(id => id !== techId) };
      } else {
        return { ...prev, tech_ids: [...current, techId] };
      }
    });
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
            {initialData ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-scroll overscroll-contain custom-scrollbar touch-pan-y">
          <form id="projectForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Project Title <span className="text-red-500">*</span></label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="E.g. E-Commerce Website" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="3"
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describe the project..." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Project Type</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Frontend, Full Stack..." />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-1">Technologies</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-gray-900 rounded-lg border border-gray-700">
                {techOptions.map(tech => (
                  <label key={tech.id} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">
                    <input 
                      type="checkbox" 
                      checked={formData.tech_ids.includes(tech.id)} 
                      onChange={() => handleTechChange(tech.id)}
                      className="rounded border-gray-600 bg-gray-700 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                    />
                    {tech.skill}
                  </label>
                ))}
                {techOptions.length === 0 && <span className="text-gray-500 text-xs col-span-2">No tech options available. Add some in Tech tab.</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Live Demo URL</label>
                <input type="text" name="live_url" value={formData.live_url} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">GitHub URL</label>
                <input type="text" name="github_url" value={formData.github_url} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://github.com/..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Docs URL</label>
                <input type="text" name="docs_url" value={formData.docs_url} onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://docs..." />
              </div>
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button type="submit" form="projectForm" className="px-5 py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {initialData ? 'Save Changes' : 'Create Project'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
