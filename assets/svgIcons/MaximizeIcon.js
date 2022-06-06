import React from "react";
import Svg, {
    Circle,  Ellipse,  G,  TSpan,  TextPath,  Path,  Polygon,  Polyline,
    Line,  Rect,  Use,  Symbol,  Defs,  RadialGradient,
    Stop,  ClipPath,  Pattern,  Mask, } from 'react-native-svg';

function MaximizeIcon() {
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
      className="feather feather-maximize-2"
      viewBox="0 0 24 24"
    >
      <Polyline points="15 3 21 3 21 9"></Polyline>
      <Polyline points="9 21 3 21 3 15"></Polyline>
      <Line x1="21" x2="14" y1="3" y2="10"></Line>
      <Line x1="3" x2="10" y1="21" y2="14"></Line>
    </Svg>
  );
}

export default MaximizeIcon;
