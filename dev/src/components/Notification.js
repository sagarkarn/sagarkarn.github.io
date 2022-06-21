import React from 'react'

function Notification() {
  return (
    <div className="absolute bottom-4 right-4">
      <div class="mockup-code">
        <pre data-prefix="$">
          <code>Looking for job change</code>
        </pre>
        <pre data-prefix=">" class="text-warning">
          <code>as dotnet developer</code>
        </pre>
        <pre data-prefix=">" class="text-success">
          <code>
            <a href="#my-modal" className="btn btn-sm btn-secondary">
              Download resume
            </a>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Notification
