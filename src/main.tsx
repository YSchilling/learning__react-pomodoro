import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Placeholder() {
  return(
    <img src="https://placehold.co/640x360" alt="Placeholder Image" />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello</h1>
    <Placeholder />
    <Placeholder />
  </StrictMode>,
)
