import React from 'react'

const ShimerButton = ({ title, icon, position, handleClick, otherClasses }: { title: string, icon: React.ReactNode, position: string, handleClick?: () => void, otherClasses?: String; }) => {
  return (
    
        // Button code
        <button className={`inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-[#7E29FC] bg-[linear-gradient(110deg,#0E0125,45%,#7E29FC,55%,#0E0125)] bg-[length:200%_100%] px-7 text-sm font-medium text-white transition-colors gap-2 ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
      
  )
}

export default ShimerButton