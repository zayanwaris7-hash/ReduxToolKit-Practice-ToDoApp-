import React from 'react'

function PopUp({message}) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
    
    {/* 1. THE BLUR LAYER: We use a separate div for the blur to keep it smooth */}
    <div 
      className="absolute inset-0 bg-black/60"
      style={{ 
        backdropFilter: 'blur(12px)', 
        WebkitBackdropFilter: 'blur(12px)' // For Safari support
      }}
    />

    {/* 2. THE POPUP CONTENT: Uses 'transform-gpu' to prevent lag */}
    <div className="relative z-10 bg-zinc-950 border border-indigo-500/50 p-10 rounded-[2.5rem] shadow-[0_0_100px_rgba(99,102,241,0.2)] transform-gpu animate-in zoom-in-95 fade-in duration-300 max-w-md w-full">
      
      <div className="flex flex-col items-center gap-6">
        {/* Animated Checkmark */}
        <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center border-2 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
          <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="text-center space-y-3">
          <h2 className="text-white font-black tracking-widest text-xl uppercase">
            Protocol <span className="text-indigo-400">Complete</span>
          </h2>
          <p className="text-zinc-400 text-sm font-mono italic">
            "{message}"
          </p>
        </div>

        {/* Cyber line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>
    </div>
  </div>
  )
}

export default PopUp