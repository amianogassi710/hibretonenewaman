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
        <div className="enquiry-modal-header pt-20 pb-20">
          <div className="d-flex text-center">
            <div className="col">
              <h3 className="text-reset">Enquiry</h3>
            </div>
          </div>
          <div className="assessment-modal-close mr-10">
            <i className="assessment-icon" onClick={onClose}><IoCloseOutline size={27.5} /></i>
          </div>
        </div>
        <div className="enquiry-modal-body px-5 pt-30 pb-50">
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
            <div className="formgroup mb-10 d-flex align-items-start">
              <input className="col-1 mt-5" id="permission" type="checkbox" />
              <label className="col-11" htmlFor='permission'>I consent to my details being shared with this 3rd party.</label>
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
