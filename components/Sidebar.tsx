import React from 'react';
import { COLORS, CATEGORIES, ICONS } from '../constants';
import { Category } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCategorySelect?: (category: Category) => void;
  onInfoPageSelect?: (page: 'about' | 'privacy' | 'terms') => void;
  onSparesClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onCategorySelect,
  onInfoPageSelect,
  onSparesClick,
}) => {
  const closeSidebar = () => {
    onClose();
  };

  const handleSpares = () => {
    if (onSparesClick) onSparesClick();
    closeSidebar();
  };

  const renderMenu = () => (
    <div className="animate-fadeIn">
      {/* Featured: Spares */}
      <div className="px-4 pt-5 pb-2">
        <div
          onClick={handleSpares}
          className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-200 active:scale-[0.98] transition-transform cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
            <ICONS.Spares />
          </div>
          <div className="flex flex-col leading-tight flex-grow min-w-0">
            <span className="text-white font-black text-sm uppercase tracking-wider">
              Spares
            </span>
            <span className="text-white/80 text-[10px] font-semibold truncate">
              Genuine spare parts &amp; accessories
            </span>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            className="flex-shrink-0"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-5 py-4 text-[11px] font-black text-gray-400 uppercase tracking-[0.15em]">
        Shop Categories
      </div>
      <div className="px-4 grid grid-cols-3 gap-3 mb-8">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onCategorySelect && onCategorySelect(cat)}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 active:scale-95 transition-all group cursor-pointer"
          >
            <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
              {cat.icon}
            </span>
            <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* Info Sections */}
      <div className="px-5 py-4 text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] border-t border-gray-50">
        Company Information
      </div>
      <ul className="px-4 space-y-2">
        <li
          onClick={() => onInfoPageSelect && onInfoPageSelect('about')}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm active:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-700">About Baraka Sonko</span>
        </li>
        <li
          onClick={() => onInfoPageSelect && onInfoPageSelect('privacy')}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm active:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-700">Privacy Policy</span>
        </li>
        <li
          onClick={() => onInfoPageSelect && onInfoPageSelect('terms')}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm active:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-700">Terms of Service</span>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Dynamic Header */}
        <div className="p-5 border-b border-gray-100 flex items-center bg-gray-50/50">
          <div className="flex flex-col flex-grow">
            <div
              className="text-xl font-black italic tracking-tighter leading-none"
              style={{ color: COLORS.primary }}
            >
              BARAKA SONKO
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              Electronics
            </span>
          </div>
          <button
            onClick={closeSidebar}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-400 text-2xl font-light shadow-sm active:scale-90 transition-transform"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto no-scrollbar">{renderMenu()}</div>

        {/* Persistent Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="flex flex-col items-center text-center">
            <span className="text-[11px] font-black text-gray-800 tracking-wider uppercase">
              Official Store
            </span>
            <a
              href="https://barasonko.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-black text-orange-600 mt-1 hover:underline flex items-center"
            >
              barasonko.store
              <svg
                className="ml-1"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
            <p className="text-[9px] text-gray-400 mt-5 uppercase font-bold tracking-tighter">
              © 2025 BARAKA SONKO ELECTRONICS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
