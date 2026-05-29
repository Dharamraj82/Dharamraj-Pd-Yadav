import React, { useState, useEffect } from 'react';
import ProjectModal from '../../components/admin/ProjectModal';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [techOptions, setTechOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Pagination states
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const fetchProjects = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?page=${pageNum}&limit=10`);
      const data = await res.json();
      if (data.success) {
        if (pageNum === 1) {
          setProjects(data.data);
        } else {
          setProjects(prev => [...prev, ...data.data]);
        }
        setTotal(data.total);
        setHasMore(data.data.length === 10);
      }
    } catch (err) {
      console.error('Failed to fetch projects', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects(1);
    setPage(1);
    fetchTechOptions();
  }, []);

  const fetchTechOptions = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/tech');
      const data = await res.json();
      if (data.success) {
        setTechOptions(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch tech options', err);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProjects(nextPage);
  };

  const handleOpenAddModal = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setPage(1);
        fetchProjects(1);
      } else {
        alert(data.error || 'Failed to delete project');
      }
    } catch (err) {
      alert('Error deleting project');
    }
  };

  const handleSubmitForm = async (formData) => {
    const token = localStorage.getItem('adminToken');
    const isEditing = !!editingProject;
    const url = isEditing 
      ? `${import.meta.env.VITE_API_URL}/projects/${editingProject.id}`
      : import.meta.env.VITE_API_URL + '/projects';
    
    try {
      const res = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        setPage(1);
        fetchProjects(1);
      } else {
        alert(data.error || `Failed to ${isEditing ? 'update' : 'create'} project`);
      }
    } catch (err) {
      alert('Error saving project');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Projects <span className="text-gray-400 text-sm ml-2 font-normal">({total} total)</span></h2>
        <button
          onClick={handleOpenAddModal}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Project
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-800/50 text-xs uppercase text-gray-400 border-b border-gray-700">
              <tr>
                <th className="px-6 py-4 font-semibold w-16 text-center">Sl No.</th>
                <th className="px-6 py-4 font-semibold">Project</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Technologies</th>
                <th className="px-6 py-4 font-semibold hidden sm:table-cell">Last Updated</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {loading && page === 1 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-400">Loading projects...</td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-400">No projects found. Add one to get started!</td>
                </tr>
              ) : (
                projects.map((project, index) => (
                  <tr key={project.id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-center text-gray-400 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-700 overflow-hidden flex-shrink-0 border border-gray-600 hidden sm:block">
                          {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">No Img</div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-base">{project.title}</div>
                          <div className="flex gap-2 mt-1">
                            {project.live_url && (
                              <a href={project.live_url} target="_blank" rel="noreferrer" className="text-primary text-xs hover:underline inline-flex items-center gap-1">
                                Live Demo <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                              </a>
                            )}
                            {project.github_url && (
                              <a href={project.github_url} target="_blank" rel="noreferrer" className="text-gray-400 text-xs hover:text-white hover:underline inline-flex items-center gap-1">
                                GitHub <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {project.project_tech && project.project_tech.length > 0 ? project.project_tech.map((pt, i) => (
                          pt.tech ? (
                            <span key={i} className="text-xs px-2 py-1 rounded-md text-white shadow-sm flex items-center gap-1" style={{ backgroundColor: pt.tech.color || '#374151' }}>
                              {pt.tech.skill}
                            </span>
                          ) : null
                        )) : '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell text-gray-400 whitespace-nowrap">
                      {new Date(project.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleOpenEditModal(project)}
                          className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded transition-colors"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {hasMore && projects.length > 0 && (
        <div className="flex justify-center mt-2">
          <button 
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 transition-colors font-medium flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitForm}
        initialData={editingProject}
        techOptions={techOptions}
      />
    </div>
  );
};

export default AdminProjects;
