import React, { FC } from "react";

interface Fill {
  fill?: string,
  width?: string,
  height?: string
}
const Behance: FC<Fill> = ({ fill, width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width && "24.001"} height={height && "24.001"} viewBox="0 0 24.001 24.001">
      <g id="behance-2161" transform="translate(126.036 126.036)">
        <g id="Group_90" data-name="Group 90" transform="translate(-126.036 -126.036)">
          <path id="Path_589" data-name="Path 589" d="M152.329,116.267a1.232,1.232,0,0,0-.927.341,1.6,1.6,0,0,0-.414.92h2.677a1.3,1.3,0,0,0-.415-.939A1.356,1.356,0,0,0,152.329,116.267Z" transform="translate(-136.612 -105.197)" fill={fill} />
          <path id="Path_590" data-name="Path 590" d="M78.747,99.224a.784.784,0,0,0,.337-.729.743.743,0,0,0-.446-.765,3.135,3.135,0,0,0-.979-.13H76.115v1.83H77.87A1.663,1.663,0,0,0,78.747,99.224Z" transform="translate(-68.867 -88.307)" fill={fill} />
          <path id="Path_591" data-name="Path 591" d="M78.722,131.389a2.075,2.075,0,0,0-.83-.141H76.112v2.211h1.753a1.948,1.948,0,0,0,.84-.146,1.046,1.046,0,0,0,.545-1.036A.89.89,0,0,0,78.722,131.389Z" transform="translate(-68.865 -118.752)" fill={fill} />
          <path id="Path_592" data-name="Path 592" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm2.033,8.2h3.341v.83H14.034Zm-2.269,6.772a2.294,2.294,0,0,1-.587.652,2.268,2.268,0,0,1-.936.417,5.8,5.8,0,0,1-1.172.112H5.334v-8.3H9.34a2.548,2.548,0,0,1,2.149.884A2.112,2.112,0,0,1,11.869,10a1.846,1.846,0,0,1-.383,1.221,1.955,1.955,0,0,1-.632.472,1.842,1.842,0,0,1,.957.733,2.194,2.194,0,0,1,.323,1.215A2.421,2.421,0,0,1,11.764,14.968Zm6.9-1.612H14.339a1.42,1.42,0,0,0,.621,1.254,1.564,1.564,0,0,0,.857.223A1.207,1.207,0,0,0,17,14.153h1.586a1.932,1.932,0,0,1-.576,1.074,2.887,2.887,0,0,1-2.235.867,3.243,3.243,0,0,1-2.093-.731,2.888,2.888,0,0,1-.906-2.381,3.219,3.219,0,0,1,.818-2.369,2.866,2.866,0,0,1,2.126-.824,3.387,3.387,0,0,1,1.4.278,2.408,2.408,0,0,1,1.026.88,2.931,2.931,0,0,1,.474,1.229A7.774,7.774,0,0,1,18.666,13.356Z" fill={fill} />
        </g>
      </g>
    </svg>
  )
}
export default Behance
