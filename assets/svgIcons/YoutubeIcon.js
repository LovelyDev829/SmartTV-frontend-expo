import React from "react";
import Svg, {
    Circle,  Ellipse,  G,  TSpan,  TextPath,  Path,  Polygon,  Polyline,
    Line,  Rect,  Use,  Symbol,  Defs,  RadialGradient,
    Stop,  ClipPath,  Pattern,  Mask, } from 'react-native-svg';

function YoutubeIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-youtube"
      viewBox="0 0 24 24"
    >
      <Path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></Path>
      <Polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></Polygon>
    </Svg>
  );
}

export default YoutubeIcon;
