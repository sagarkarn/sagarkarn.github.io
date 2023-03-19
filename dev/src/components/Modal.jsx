import React from 'react'

function Modal({title, body, action}) {
  return (
    <div className="modal" id="my-modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">
          <div className='text-center'>
          <a href="http://linkedin.com/in/sagarkarn" target="_blank" rel="noreferrer" className='btn btn-primary'>click here</a>
          </div>
        </p>
        <div className="modal-action">
        <a href="#" className="btn btn-ghost" rel='noreferrer'>Close</a>
        </div>
      </div>
    </div>
  )
}

export default Modal
