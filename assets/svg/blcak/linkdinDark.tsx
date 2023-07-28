import React, { FC } from "react";

interface Fill {
  fill?: string,
  width?: string,
  height?: string
}
const LinkdinGold: FC<Fill> = ({ fill, width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width && "24"} height={height && "24"} viewBox="0 0 24 24">
      <path id="linkdin" d="M86.081,64H66.051A1.958,1.958,0,0,0,64,65.869V85.943A2.112,2.112,0,0,0,66.051,88H86.074A2,2,0,0,0,88,85.943V65.869A1.84,1.84,0,0,0,86.081,64ZM71.439,84.005H68V73.315h3.438Zm-1.6-12.316h-.025a1.869,1.869,0,1,1,.025,0ZM84.005,84.005H80.567V78.16c0-1.4-.5-2.357-1.744-2.357a1.881,1.881,0,0,0-1.763,1.269,2.315,2.315,0,0,0-.119.844v6.089H73.5V73.315h3.438V74.8a3.48,3.48,0,0,1,3.1-1.738c2.257,0,3.964,1.488,3.964,4.695Z" transform="translate(-64 -64)" fill={fill} />
    </svg>
  )
}
export default LinkdinGold