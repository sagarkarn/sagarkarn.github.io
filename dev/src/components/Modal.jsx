import React from 'react'

function Modal({title, body, action}) {
  return (
    <div class="modal" id="my-modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{title}</h3>
        {body}
        <div class="modal-action">
        <a href="#" className="btn">Close</a>
        </div>
      </div>
    </div>
  )
}

export default Modal
