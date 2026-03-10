import React from 'react'

function EmptyState() {
  return (
   <div className="flex flex-col items-center justify-center py-20 px-4 border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/10 backdrop-blur-sm">
    <div className="relative mb-4">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full" />
      <svg 
        className="relative w-12 h-12 text-zinc-700" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    </div>
    <h3 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase">No Protocols Found</h3>
    <p className="text-xs text-zinc-600 mt-1 font-mono">Awaiting task initiation...</p>
  </div>
  )
}

export default EmptyState