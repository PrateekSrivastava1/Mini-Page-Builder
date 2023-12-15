import React, { useState } from 'react';

import './App.css';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import DragAndDropPage from './components/DragAndDropPage';

function App() {
  // State to manage blocks and their configurations
  const [blocks, setBlocks] = useState(() => {
    // Retrieves blocks from local storage or sets default blocks if not present
    const storedBlocks = localStorage.getItem('blocks');
    return storedBlocks
      ? JSON.parse(storedBlocks)
      : [
          { id: 1, type: 'Label', left: 0, top: 0, showBlock: false, label: 'Label' },
          { id: 2, type: 'Input', left: 0, top: 0, showBlock: false, label: 'Input' },
          { id: 3, type: 'Button', left: 0, top: 0, showBlock: false, label: 'Button' }
        ];
  });

  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // State to store the configuration of the block being modified in the modal
  const [config, setConfig] = useState({
    x: 0,
    y: 0,
    type: '',
    label: ''
  });

  // Handler for dragging blocks
  const handleDragStart = (e, blockId) => {
    e.dataTransfer.setData('blockId', blockId);
  };

  // Handler for dropping blocks on the workspace
  const handleDrop = e => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData('blockId');

    // Calculate coordinates for dropped block and prepare modal configuration
    const playgroundRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - playgroundRect.left;
    const y = e.clientY - playgroundRect.top;
    console.log('blocks: ', blocks);
    setConfig({
      x,
      y,
      type: blocks.find(block => block.id === parseInt(blockId))?.type || '',
      label: blocks.find(block => block.id === parseInt(blockId))?.label || ''
    });

    setShowModal(true); // Show the modal for block configuration
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handler to save the updated block configuration
  const handleSaveConfig = updatedConfig => {
    const blockIndex = blocks.findIndex(block => block.type === config.type);

    if (blockIndex !== -1) {
      const updatedBlocks = [...blocks];
      updatedBlocks[blockIndex] = {
        ...updatedBlocks[blockIndex],
        label: updatedConfig.label,
        left: updatedConfig.x,
        top: updatedConfig.y,
        showBlock: true
      };

      setBlocks(updatedBlocks); // Update blocks with the new configuration
      localStorage.setItem('blocks', JSON.stringify(updatedBlocks)); // Store updated blocks in local storage
    }

    setShowModal(false); // Close the modal after saving the configuration
  };

  // Handler to download configurations in JSON format
  const downloadConfigurations = () => {
    const configurations = localStorage.getItem('blocks');
    const parsedConfigurations = JSON.parse(configurations);
    const data = JSON.stringify(parsedConfigurations, null, 2); // Convert blocks data to JSON format

    // Create a downloadable JSON file
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'configurations.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App h-screen flex flex-col sm:flex-row md:flex-row lg:flex-row">
      {/* Component for the drag-and-drop workspace */}
      <DragAndDropPage
        handleDrop={handleDrop}
        handleDragStart={handleDragStart}
        blocks={blocks}
      />

      {/* Sidebar component with blocks and download configurations button */}
      <Sidebar
        handleDragStart={handleDragStart}
        downloadConfigurations={downloadConfigurations}
      />

      {/* Modal component to edit block configurations */}
      {showModal && (
        <Modal
          closeModal={handleCloseModal}
          saveConfig={handleSaveConfig}
          config={config}
        />
      )}
    </div>
  );
}

export default App;
