import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoCloseOutline }  from 'react-icons/io5';
import Swal from 'sweetalert2';

const AssessmentModal = ({ isOpen, onClose, children, header, uizardHTML }) => {

  if (!isOpen) {
    return null;
  }

  const handleUIzard = () => {
    Swal.fire({
      title: header.replace("-"," "),
      html: uizardHTML,
      showCloseButton: true,
      confirmButtonText: "Close",
      confirmButtonColor: "#3C65F5"
    });
  }


  return (
    <div className="assessment-modal" onClick={onClose}>
      <div className="assessment-modal-content" onClick={e => e.stopPropagation()}>
        <div className="assessment-modal-header">
          <div className="d-flex">
            <h5 className="text-reset">{header.replaceAll("-"," ")}</h5>
            <i className="uizard assessment-icon" onClick={handleUIzard}><IoIosInformationCircleOutline size={25}/></i>
          </div>
          <div className="close">
            <i className="assessment-icon d-flex justify-content-center align-items-center" onClick={onClose}><IoCloseOutline size={30} /></i>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AssessmentModal;
