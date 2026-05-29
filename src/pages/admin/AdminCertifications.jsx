import React, { useState, useEffect } from 'react';
import CertificationModal from '../../components/admin/CertificationModal';

const AdminCertifications = () => {
  const [certs, setCerts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCerts = async () => {
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/certifications');
      const data = await res.json();
      if (data.success) {
        setCerts(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch certifications', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCerts();
  }, []);

  const handleOpenAddModal = () => {
    setEditingCert(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (cert) => {
    setEditingCert(cert);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this certification?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/certifications/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        fetchCerts();
      } else {
        alert(data.error || 'Failed to delete certification');
      }
    } catch (err) {
      alert('Error deleting certification');
    }
  };

  const handleSubmitForm = async (formData) => {
    const token = localStorage.getItem('adminToken');
    const isEditing = !!editingCert;
    const url = isEditing 
      ? `${import.meta.env.VITE_API_URL}/certifications/${editingCert.id}`
      : import.meta.env.VITE_API_URL + '/certifications';
    
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
        fetchCerts();
      } else {
        alert(data.error || `Failed to ${isEditing ? 'update' : 'add'} certification`);
      }
    } catch (err) {
      alert('Error saving certification');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Certifications</h2>
        <button
          onClick={handleOpenAddModal}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Certification
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-800/50 text-xs uppercase text-gray-400 border-b border-gray-700">
              <tr>
                <th className="px-6 py-4 font-semibold w-16 text-center">Sl No.</th>
                <th className="px-6 py-4 font-semibold">Certification</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Issuer</th>
                <th className="px-6 py-4 font-semibold hidden sm:table-cell">Date Issued</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-400">Loading certifications...</td>
                </tr>
              ) : certs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-400">No certifications found. Add one to get started!</td>
                </tr>
              ) : (
                certs.map((cert, index) => (
                  <tr key={cert.id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-center text-gray-400 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-700 overflow-hidden flex-shrink-0 border border-gray-600 hidden sm:block">
                          {cert.image ? (
                            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">No Img</div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-base">{cert.title}</div>
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noreferrer" className="text-primary text-xs hover:underline mt-0.5 inline-block truncate max-w-[200px]">
                              View Certificate
                            </a>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-gray-400">
                      {cert.issuer || '-'}
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell text-gray-400 whitespace-nowrap">
                      {cert.certification_date || '-'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleOpenEditModal(cert)}
                          className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded transition-colors"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button
                          onClick={() => handleDelete(cert.id)}
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

      <CertificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitForm}
        initialData={editingCert}
      />
    </div>
  );
};

export default AdminCertifications;
