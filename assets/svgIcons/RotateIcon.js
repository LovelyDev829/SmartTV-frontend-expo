import React from "react";
import Svg, {
    Circle,  Ellipse,  G,  TSpan,  TextPath,  Path,  Polygon,  Polyline,
    Line,  Rect,  Use,  Symbol,  Defs,  RadialGradient,
    Stop,  ClipPath,  Pattern,  Mask, } from 'react-native-svg';

function RotateIcon() {
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
      className="feather feather-rotate-cw"
      viewBox="0 0 24 24"
    >
      <Polyline points="23 4 23 10 17 10"></Polyline>
      <Path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></Path>
    </Svg>
  );
}

export default RotateIcon;
