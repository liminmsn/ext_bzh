import React from 'react'
import { createRoot } from 'react-dom/client'

export default function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>🚀 WXT React 新标签页</h1>
      <p>这是一个 React 项目的启动页</p>
    </div>
  )
}

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(<App />)
}
