import React from 'react'

function Notification() {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>Looking for building</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>cool stuff ?</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>
            <a href="#my-modal" className="btn btn-sm btn-secondary">
              Visit my linkedin
            </a>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Notification
