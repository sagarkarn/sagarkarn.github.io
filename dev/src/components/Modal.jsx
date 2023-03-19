import React from 'react'

function Modal({title, body, action}) {
  return (
    <div className="modal" id="my-modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        {body}
        <div className="modal-action">
        <a href="#" className="btn">Close</a>
        </div>
      </div>
    </div>
  )
}

export default Modal
