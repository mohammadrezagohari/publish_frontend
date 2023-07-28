import React, { FC } from "react";

interface Fill {
  fill?: string,
  width?: string,
  height?: string
}
const dribbbleIcon: FC<Fill> = ({ fill, width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width && "24.001"} height={height && "24"} viewBox="0 0 24.001 24">
       <g id="_dribbble_icon" transform="translate(-3.722 -5.157)">
    <path id="Path_580" data-name="Path 580" d="M21.037,28.475c.1-.032.195-.061.293-.09-.187-.423-.39-.846-.6-1.264A27.134,27.134,0,0,1,13.09,28.18c0,.08-.006.157-.006.237a7.4,7.4,0,0,0,1.906,4.97l0,0A11.772,11.772,0,0,1,21.037,28.475Z" transform="translate(-4.8 -11.26)" fill={fill}/>
    <path id="Path_581" data-name="Path 581" d="M20.277,20.263a44.741,44.741,0,0,0-2.761-4.286,7.446,7.446,0,0,0-4.105,5.194A27.568,27.568,0,0,0,20.277,20.263Z" transform="translate(-4.967 -5.547)" fill={fill}/>
    <path id="Path_582" data-name="Path 582" d="M31.415,16.375a7.441,7.441,0,0,0-6.666-1.647,37.913,37.913,0,0,1,2.781,4.34A8.115,8.115,0,0,0,31.415,16.375Z" transform="translate(-10.78 -4.8)" fill={fill}/>
    <path id="Path_583" data-name="Path 583" d="M24.666,14.963a.077.077,0,0,0-.025.006l.023-.006Z" transform="translate(-10.725 -5.027)" fill={fill}/>
    <path id="Path_584" data-name="Path 584" d="M18.79,41.676v0c-.055-.043-.114-.082-.168-.128C18.723,41.625,18.79,41.676,18.79,41.676Z" transform="translate(-7.64 -18.655)" fill={fill}/>
    <path id="Path_585" data-name="Path 585" d="M31.63,23.029c.173.355.34.716.5,1.078.054.131.108.258.16.385a17.3,17.3,0,0,1,5.181.242,7.4,7.4,0,0,0-1.691-4.649A9.58,9.58,0,0,1,31.63,23.029Z" transform="translate(-14.308 -7.654)" fill={fill}/>
    <path id="Path_586" data-name="Path 586" d="M24.8,32.261A10.089,10.089,0,0,0,18.968,36.9a7.426,7.426,0,0,0,7.474.988,30.976,30.976,0,0,0-1.59-5.648Z" transform="translate(-7.816 -13.887)" fill={fill}/>
    <path id="Path_587" data-name="Path 587" d="M15.722,5.157a12,12,0,1,0,12,12A12,12,0,0,0,15.722,5.157Zm8.024,15.391a8.578,8.578,0,0,1-.8,1.479,8.743,8.743,0,0,1-1.063,1.289,8.885,8.885,0,0,1-1.288,1.063,8.7,8.7,0,0,1-9.741,0,8.885,8.885,0,0,1-1.288-1.063,8.686,8.686,0,0,1-2.375-4.4,8.826,8.826,0,0,1,0-3.507A8.684,8.684,0,0,1,8.5,12.287a8.742,8.742,0,0,1,3.832-3.155,8.607,8.607,0,0,1,1.636-.507,8.788,8.788,0,0,1,3.509,0,8.629,8.629,0,0,1,1.636.507,8.732,8.732,0,0,1,1.48.8A8.9,8.9,0,0,1,21.88,11a8.768,8.768,0,0,1,1.063,1.289,8.66,8.66,0,0,1,1.31,3.117,8.731,8.731,0,0,1,0,3.507A8.581,8.581,0,0,1,23.747,20.548Z" fill={fill}/>
    <path id="Path_588" data-name="Path 588" d="M33.9,31.412a32.292,32.292,0,0,1,1.448,5.313,7.438,7.438,0,0,0,3.187-4.989A10.8,10.8,0,0,0,33.9,31.412Z" transform="translate(-15.474 -13.399)" fill={fill}/>
  </g>
    </svg>
  )
}
export default dribbbleIcon