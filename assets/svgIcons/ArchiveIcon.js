import React from "react";
import Svg, {
    Circle,  Ellipse,  G,  TSpan,  TextPath,  Path,  Polygon,  Polyline,
    Line,  Rect,  Use,  Symbol,  Defs,  RadialGradient,
    Stop,  ClipPath,  Pattern,  Mask, } from 'react-native-svg';

function ArchiveIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-archive"
      viewBox="0 0 24 24"
    >
      <Polyline points="21 8 21 21 3 21 3 8"></Polyline>
      <Rect width="22" height="5" x="1" y="3"></Rect>
      <Line x1="10" x2="14" y1="12" y2="12"></Line>
    </Svg>
  );
}

export default ArchiveIcon;
