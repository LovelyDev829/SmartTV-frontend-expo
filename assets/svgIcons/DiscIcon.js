import React from "react";
import Svg, {
    Circle,  Ellipse,  G,  TSpan,  TextPath,  Path,  Polygon,  Polyline,
    Line,  Rect,  Use,  Symbol,  Defs,  RadialGradient,
    Stop,  ClipPath,  Pattern,  Mask, } from 'react-native-svg';

function DiscIcon() {
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
      className="feather feather-disc"
      viewBox="0 0 24 24"
    >
      <Circle cx="12" cy="12" r="10"></Circle>
      <Circle cx="12" cy="12" r="3"></Circle>
    </Svg>
  );
}

export default DiscIcon;
