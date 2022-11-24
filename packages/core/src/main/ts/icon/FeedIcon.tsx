import React, { FC } from 'react'

import { Circle, Path, Svg } from '../primitive'

export interface FeedIconProps {
  size?: number
  color?: string
  active?: boolean
}

export const FeedIcon: FC<FeedIconProps> = ({
  size = 6,
  color = '#000',
  active = false,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" focusable="false">
    <Path
      d="M7.92 2.92A3 3 0 0110 2a3.2 3.2 0 012.88 2.23c.92.34 1.68.92 2.22 1.79.64 1.03.9 2.37.9 3.98 0 .87.16 1.39.35 1.72.18.35.44.6.79.89l.14.11c.31.26.74.6 1.06 1.06.42.57.66 1.28.66 2.22 0 1-.34 1.8-.98 2.33-.62.51-1.37.67-2.02.67h-3a3 3 0 11-6 0H4c-.65 0-1.4-.16-2.02-.67A2.91 2.91 0 011 16c0-.94.24-1.65.66-2.22.32-.46.75-.8 1.06-1.06l.14-.11c.35-.3.6-.54.8-.89.18-.33.34-.85.34-1.72 0-1.61.26-2.95.9-3.98a4.31 4.31 0 012.22-1.8c.15-.5.45-.95.8-1.3zM4 17h12c.35 0 .6-.09.73-.2.11-.1.27-.3.27-.8 0-.56-.13-.85-.28-1.06-.16-.22-.36-.38-.68-.65l-.18-.15c-.4-.33-.9-.77-1.27-1.46-.38-.7-.59-1.55-.59-2.68 0-1.43-.24-2.34-.6-2.93a2.5 2.5 0 00-1.64-1.1A1 1 0 0111 5c0-.17-.1-.43-.33-.67-.24-.23-.5-.33-.67-.33-.17 0-.43.1-.67.33-.23.24-.33.5-.33.67a1 1 0 01-.76.97c-.8.2-1.3.56-1.64 1.1-.36.59-.6 1.5-.6 2.93 0 1.13-.21 1.99-.6 2.68a4.98 4.98 0 01-1.44 1.61c-.32.27-.52.43-.68.65-.15.2-.28.5-.28 1.06 0 .5.16.7.27.8.13.11.38.2.73.2zm5 2a1 1 0 102 0H9z"
      fill={color}
    />
    {active ? <Circle cx="21" cy="3" r="3" fill="#ed4848" /> : null}
  </Svg>
)

FeedIcon.displayName = 'FeedIcon'

FeedIcon.defaultProps = {
  size: 6,
  color: '#000',
  active: false,
}