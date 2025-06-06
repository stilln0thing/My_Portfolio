import type React from "react"

interface TerminalProps {
  children: React.ReactNode
}

export function Terminal({ children }: TerminalProps) {
  return (
    <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-md p-6 font-mono text-gray-300 shadow-lg shadow-purple-900/10">
      {children}
    </div>
  )
}
