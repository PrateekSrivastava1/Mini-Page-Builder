import React from 'react';

import '../App.css';

// DragAndDropPage component responsible for rendering the drag-and-drop area
const DragAndDropPage = ({ handleDrop, handleDragStart, blocks }) => {
  return (
    // Container for the drag-and-drop area
    <div
      className="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 flex flex-col items-center relative"
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
    >
      <div className="bg-gray-200 w-full h-full">
        {blocks?.map(
          block =>
            block.showBlock && (
              <div
                key={block.id}
                className="block cursor-grab mb-2 border border-transparent hover:border-red-500"
                draggable="true"
                onDragStart={e => handleDragStart(e, block.id)} // Handles the drag start event
                style={{
                  position: 'absolute',
                  top: block.top,
                  left: block.left
                }}
              >
                <h4>{block.label}</h4>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DragAndDropPage;
