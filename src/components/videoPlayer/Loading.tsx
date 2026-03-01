import React from 'react'

const Loading = () => {
  return (
    <div className="w-[320px] h-[180px] sm:w-[500px] sm:h-[281px] rounded-md bg-muted relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />

      {/* Play button placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-foreground/20 ml-0.5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom bar placeholder */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-foreground/5 flex items-center gap-2 px-3">
        <div className="w-6 h-3 rounded-sm bg-foreground/10" />
        <div className="flex-1 h-1 rounded-full bg-foreground/10" />
        <div className="w-6 h-3 rounded-sm bg-foreground/10" />
      </div>
    </div>
  )
}

export default Loading
