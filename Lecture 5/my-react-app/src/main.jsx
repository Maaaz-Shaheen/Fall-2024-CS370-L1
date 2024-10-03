import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function AssignmentFeedback() {
  return (
    <div>
      Best assignment ever!
    </div>
  )
}

function GradedAssignment2 () {
  return (
    <div>
      <AssignmentFeedback />
      <AssignmentFeedback />
      <AssignmentFeedback />
    </div>
  )
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GradedAssignment2 />
  </StrictMode>,
)
