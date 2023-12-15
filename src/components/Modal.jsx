import { useState } from 'react';

import '../App.css';
import CrossSVG from './CrossSVG';

// Modal component for displaying a modal dialog after dragging and dropping block element
const Modal = ({ closeModal, saveConfig, config }) => {
  const [updatedConfig, setUpdatedConfig] = useState({ x: config.x, y: config.y });

  // Function to handle changes in input fields
  const handleChange = e => {
    const { name, value } = e.target;
    setUpdatedConfig(prevConfig => ({
      ...prevConfig,
      [name]: value
    }));
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <div className="flex justify-between items-center mx-auto">
                  <h3>Edit Label</h3>

                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={closeModal}
                  >
                    <CrossSVG />
                  </button>
                </div>
                {/* Input for updating the Label */}
                <div className="mt-4">
                  <label
                    htmlFor="label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Label:
                  </label>
                  <input
                    type="text"
                    id="label"
                    name="label"
                    value={updatedConfig.label}
                    onChange={handleChange}
                    className="mt-1 rounded-md border-gray-300 shadow-sm w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:w-auto"
                  />
                </div>
                {/* Input for updating the X coordinate */}
                <div className="mt-4">
                  <label htmlFor="x" className="block text-sm font-medium text-gray-700">
                    X coordinate:
                  </label>
                  <input
                    type="text"
                    id="x"
                    name="x"
                    value={updatedConfig.x}
                    onChange={handleChange}
                    className="mt-1 rounded-md border-gray-300 shadow-sm w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:w-auto"
                  />
                </div>
                {/* Input for updating the Y coordinate */}
                <div className="mt-2">
                  <label htmlFor="y" className="block text-sm font-medium text-gray-700">
                    Y coordinate:
                  </label>
                  <input
                    type="text"
                    id="y"
                    name="y"
                    value={updatedConfig.y}
                    onChange={handleChange}
                    className="mt-1 rounded-md border-gray-300 shadow-sm w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-start sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                onClick={() => {
                  saveConfig(updatedConfig); // Calls saveConfig with updated config values
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
