import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    title: 'Projects',
    description: 'Manage your portfolio projects.',
    path: '/admin/dashboard/projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: 'Blogs',
    description: 'Write and publish new blog posts.',
    path: '/admin/dashboard/blogs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    title: 'Certifications',
    description: 'Upload and manage your certificates.',
    path: '/admin/dashboard/certifications',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mb-4">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
  },
  {
    title: 'Website Updates',
    description: 'Publish updates and changelogs.',
    path: '/admin/dashboard/updates',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mb-4">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
  }
];

const AdminHome = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome to your Dashboard</h2>
        <p className="text-gray-400">Select an option below to manage your content.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-750 transition-all group shadow-lg flex flex-col items-start"
          >
            <div className="p-3 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">
              {link.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">{link.title}</h3>
            <p className="text-gray-400 text-sm flex-1">{link.description}</p>
            <span className="mt-4 text-sm font-medium text-primary group-hover:underline flex items-center gap-1">
              Manage {link.title}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
