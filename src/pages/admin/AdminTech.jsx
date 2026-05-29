import React, { useState, useEffect } from 'react';
import TechModal from '../../components/admin/TechModal';

const AdminTech = () => {
  const [techList, setTechList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTech, setEditingTech] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);

  const fetchTech = async () => {
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/tech');
      const data = await res.json();
      if (data.success) {
        setTechList(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch tech', err);
    }
    setLoading(false);
    setSelectedIds([]);
  };

  useEffect(() => {
    fetchTech();
  }, []);

  const handleOpenAddModal = () => {
    setEditingTech(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (tech) => {
    setEditingTech(tech);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this technology?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tech/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        fetchTech();
      } else {
        alert(data.error || 'Failed to delete technology');
      }
    } catch (err) {
      alert('Error deleting technology');
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(techList.map(t => t.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(itemId => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDeleteSelected = async () => {
    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} technologies?`)) return;
    const token = localStorage.getItem('adminToken');
    setLoading(true);
    
    try {
      await Promise.all(selectedIds.map(id => 
        fetch(`${import.meta.env.VITE_API_URL}/tech/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ));
      setSelectedIds([]);
      fetchTech();
    } catch (err) {
      alert('Error deleting technologies');
      setLoading(false);
    }
  };

  const handleSubmitForm = async (formData) => {
    const token = localStorage.getItem('adminToken');
    const isEditing = !!editingTech;
    const url = isEditing 
      ? `${import.meta.env.VITE_API_URL}/tech/${editingTech.id}`
      : import.meta.env.VITE_API_URL + '/tech';
    
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
        fetchTech();
      } else {
        alert(data.error || `Failed to ${isEditing ? 'update' : 'add'} technology`);
      }
    } catch (err) {
      alert('Error saving technology');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Technologies</h2>
        <div className="flex gap-3">
          {selectedIds.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg shadow-red-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              Delete Selected ({selectedIds.length})
            </button>
          )}
          <button
            onClick={handleOpenAddModal}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add Tech
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-800/50 text-xs uppercase text-gray-400 border-b border-gray-700">
              <tr>
                <th className="px-6 py-4 w-12 text-center">
                  <input type="checkbox" onChange={handleSelectAll} checked={techList.length > 0 && selectedIds.length === techList.length} className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-600 w-4 h-4 cursor-pointer" />
                </th>
                <th className="px-6 py-4 font-semibold w-24 text-center">SL No</th>
                <th className="px-6 py-4 font-semibold">Skill</th>
                <th className="px-6 py-4 font-semibold">Icon Name</th>
                <th className="px-6 py-4 font-semibold">Color</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-400">Loading technologies...</td>
                </tr>
              ) : techList.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-400">No technologies found. Add one to get started!</td>
                </tr>
              ) : (
                techList.map((tech, index) => (
                  <tr key={tech.id} className={`hover:bg-gray-700/30 transition-colors ${selectedIds.includes(tech.id) ? 'bg-gray-700/50' : ''}`}>
                    <td className="px-6 py-4 text-center">
                      <input type="checkbox" checked={selectedIds.includes(tech.id)} onChange={() => handleSelectOne(tech.id)} className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-600 w-4 h-4 cursor-pointer" />
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-white">
                      {tech.skill}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {tech.icon_name}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        {tech.color && (
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tech.color }}></div>
                        )}
                        {tech.color || '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleOpenEditModal(tech)}
                          className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded transition-colors"
                          title="Edit"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button
                          onClick={() => handleDelete(tech.id)}
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

      <TechModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitForm}
        initialData={editingTech}
      />
    </div>
  );
};

export default AdminTech;
