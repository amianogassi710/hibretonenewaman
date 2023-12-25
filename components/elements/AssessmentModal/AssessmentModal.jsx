import React from 'react';

const AssessmentModal = ({ isOpen, onClose, children}) => {

  if (!isOpen) {
    return null;
  }


  return (
    <div className="assessment-modal" onClick={onClose}>
      <div className="assessment-modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default AssessmentModal;
