import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin'); // Redirect to login
    }
  }, [navigate, location.pathname]);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
      {/* Admin Header - Sticky */}
      <header className="bg-gray-800 border-b border-gray-700 h-16 flex items-center justify-between px-4 sm:px-6 z-30 shadow-sm sticky top-0 w-full">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden p-2 -ml-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors hidden sm:block">
            Portfolio
          </Link>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <Link to="/admin/dashboard" className="text-lg font-semibold tracking-wide hover:text-primary transition-colors">
            Dashboard
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-red-600/90 px-3 sm:px-4 py-2 rounded transition-colors"
        >
          Logout
        </button>
      </header>

      <div className="flex flex-1 relative w-full">
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Admin Sidebar - Sticky */}
        <aside className={`w-64 bg-gray-800 border-r border-gray-700 flex-shrink-0 fixed md:sticky top-16 z-20 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} overflow-y-auto custom-scrollbar`}>
          <nav className="p-4 flex flex-col gap-2">
            <Link
              to="/admin/dashboard"
              className={`px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                location.pathname === '/admin/dashboard'
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Home
            </Link>

            <Link
              to="/admin/dashboard/projects"
              className={`px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                location.pathname.includes('/projects')
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Projects
            </Link>

            <Link
              to="/admin/dashboard/tech"
              className={`px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                location.pathname.includes('/tech')
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Technologies
            </Link>

            <Link
              to="/admin/dashboard/blogs"
              className={`px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                location.pathname.includes('/blogs')
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Blogs
            </Link>

            <Link
              to="/admin/dashboard/certifications"
              className={`px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                location.pathname.includes('/certifications')
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              Certifications
            </Link>

            <Link
              to="/admin/dashboard/updates"
              className={`px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                location.pathname.includes('/updates')
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              Updates
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-900 p-4 sm:p-6 w-full relative min-h-full">
          <Outlet />

          {/* Floating Go to Top Button - Changed to use global scroll */}
          {showScrollTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1 z-50 flex items-center justify-center animate-fade-in"
              title="Go to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
