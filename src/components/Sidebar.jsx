import React from 'react';

import '../App.css';
import GripSVG from './GripSVG'; // Importing SVG component

// Sidebar component responsible for rendering the sidebar UI
const Sidebar = ({ handleDragStart, downloadConfigurations }) => {
  return (
    <div
      className="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 flex flex-col items-center"
      style={{ backgroundColor: '#2D2D2D' }}
    >
      {/* Block section */}
      <div className="w-full p-4">
        <h2 className="text-lg font-bold text-white mb-4">BLOCKS</h2>
        <div
          className="block rounded cursor-grab bg-gray-200 p-2 mb-2 flex items-center"
          draggable="true"
          onDragStart={e => handleDragStart(e, 1)}
        >
          <GripSVG />
          <h4>Label</h4>
        </div>
        <div
          className="block rounded cursor-grab bg-gray-200 p-2 mb-2 flex items-center"
          draggable="true"
          onDragStart={e => handleDragStart(e, 2)}
        >
          <GripSVG />
          <h4>Input</h4>
        </div>
        <div
          className="block rounded cursor-grab bg-gray-200 p-2 mb-2 flex items-center"
          draggable="true"
          onDragStart={e => handleDragStart(e, 3)}
        >
          <GripSVG />
          <h4>Button</h4>
        </div>
      </div>
      {/* Button for downloading configurations */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={downloadConfigurations}
      >
        Download Configurations
      </button>
    </div>
  );
};

export default Sidebar;
