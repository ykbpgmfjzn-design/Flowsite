import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 180, height = 72 }: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 120" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-all duration-300", className)}
      style={{ display: 'block' }}
    >
      <defs>
        {/* Filter for contrast on any background - doesn't change shape */}
        <filter id="contrast" x="-50%" y="-50%" width="200%" height="200%">
          {/* White outline for dark backgrounds */}
          <feMorphology operator="dilate" radius="0.5" in="SourceAlpha" result="thick"/>
          <feFlood floodColor="white" floodOpacity="0.9"/>
          <feComposite in2="thick" operator="in"/>
          <feGaussianBlur stdDeviation="1" result="whiteGlow"/>
          
          {/* Black outline for light backgrounds */}
          <feMorphology operator="dilate" radius="0.5" in="SourceAlpha" result="thick2"/>
          <feFlood floodColor="black" floodOpacity="0.7"/>
          <feComposite in2="thick2" operator="in"/>
          <feGaussianBlur stdDeviation="1" result="blackGlow"/>
          
          {/* Combine both */}
          <feMerge>
            <feMergeNode in="blackGlow"/>
            <feMergeNode in="whiteGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Star icon - positioned to the left of MAGNUM */}
      <g transform="translate(150, 50)">
        <path 
          d="M -25 0 L -20 -8 L -12 -8 L -18 -14 L -15 -22 L -25 -18 L -35 -22 L -32 -14 L -38 -8 L -30 -8 Z" 
          fill="currentColor" 
          opacity="0.9"
          filter="url(#contrast)"
        />
      </g>
      
      {/* MAGNUM text - perfectly centered */}
      <text 
        x="150" 
        y="50" 
        fontFamily="Arial, sans-serif" 
        fontSize="36" 
        fontWeight="bold" 
        textAnchor="middle" 
        dominantBaseline="central"
        fill="currentColor" 
        letterSpacing="0" 
        filter="url(#contrast)"
      >
        MAGNUM
      </text>
      
      {/* ESTATE text - perfectly centered */}
      <text 
        x="150" 
        y="85" 
        fontFamily="Arial, sans-serif" 
        fontSize="24" 
        fontWeight="300" 
        textAnchor="middle" 
        dominantBaseline="central"
        fill="currentColor" 
        letterSpacing="4" 
        filter="url(#contrast)"
      >
        ESTATE
      </text>
    </svg>
  )
}
