
import React from 'react';

// Overlay style
const overlayStyle = {
  position: 'fixed', // Fixed to the screen
  top: 0,
  left: 0,
  width: '100%', // Full width
  height: '100%', // Full height
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  zIndex: '10', // Behind the popup
};

// Popup styles (PDF iframe area)
const popupStyle = {
  padding: '0', // Remove padding to allow iframe to use full space
  borderRadius: '8px', // Add border-radius for a more refined popup look
  height: '80vh', // Set a height for the popup to fit within the viewport
  width: '43%',
  height: '72%', // Set a height for the popup to fit within the viewport
  position: 'fixed', // Keep the popup fixed on the screen
  top: '18.9%', // Position from the top of the screen
  left: '50%', // Center the popup horizontally
  transform: 'translateX(-50%)', // Center the popup properly
  overflow: 'hidden', // Hide any overflow (no scrollbar)
  backgroundColor: '#fff', // White background for the popup
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Add shadow for the popup
  zIndex: '20', // Ensure the popup is above the overlay
};

// Close button style for the popup
const closeButtonStyle = {
  position: 'absolute',
  top: '20px',
  left: '350px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  color: '#0c1336',
  cursor: 'pointer',
  zIndex: '30', // Ensure the close button is above everything
};

// Styles for the iframe itself (scrollable independently)
const iframeStyle = {
  border: 'none',
  width: '100%',
  height: '100%', // Use the full height of the popup
  margin: 0, // Ensure no margin on iframe
  padding: 0, // Ensure no padding on iframe
  overflow: 'auto', // Allow scrolling inside the iframe
};

export default function Pdf({ pdfUrl, closeModal }) {
  return (
    <div>
      {/* Overlay */}
      <div style={overlayStyle} onClick={closeModal} />

      {/* Popup content */}
      <div style={popupStyle}>
        {/* Close button */}
        <button className="close-button" style={closeButtonStyle} onClick={closeModal}>
          X
        </button>

        {/* Popup content */}
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          style={iframeStyle} // Popup iframe
        />
      </div>
    </div>
  );
}
