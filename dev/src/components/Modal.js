import React from 'react'

function Modal() {
  return (
    <div class="modal" id="my-modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">This is currently under cunstruction</h3>
        <p class="py-4">
          Please type dotnet. This is only for security purpose
        </p>
        <input
          type={'text'}
          id="pin"
          className="input w-full outline-1 bg-slate-600"
        />
        <div class="modal-action">
          <a href="#" class="btn">
            Download
          </a>
        </div>
      </div>
    </div>
  )
}

export default Modal
