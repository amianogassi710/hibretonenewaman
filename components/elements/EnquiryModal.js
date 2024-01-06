import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoCloseOutline }  from 'react-icons/io5';

const EnquiryModal = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }


  return (
    <div className="enquiry-modal" onClick={onClose}>
      <div className="enquiry-modal-content" onClick={e => e.stopPropagation()}>
        <div className="enquiry-modal-header d-flex justify-content-space-between pr-20 pl-20">
          <div className="d-flex">
            <h4 className="text-reset">Enquiry</h4>
          </div>
          <div className="close">
            <i className="assessment-icon d-flex justify-content-center align-items-center" onClick={onClose}><IoCloseOutline size={32.5} /></i>
          </div>
        </div>
        <div className="enquiry-modal-body px-5 py-3">
          <form>
            <div className="formgroup mb-10">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="formgroup mb-10">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="formgroup mb-10">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="formgroup mb-10">
              <textarea type="text" placeholder="Type here..." />
            </div>
            <div className="formgroup mb-10">
              <input id="permission" type="checkbox" />
              <label className="fs-6 ml-10" htmlFor='permission'>I consent to my details being shared with this 3rd party.</label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
