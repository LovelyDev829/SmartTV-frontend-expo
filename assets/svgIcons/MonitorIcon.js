import React from "react";
import Svg, {
    Circle,  Ellipse,  G,  TSpan,  TextPath,  Path,  Polygon,  Polyline,
    Line,  Rect,  Use,  Symbol,  Defs,  RadialGradient,
    Stop,  ClipPath,  Pattern,  Mask, } from 'react-native-svg';

function MonitorIcon() {
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
      className="feather feather-monitor"
      viewBox="0 0 24 24"
    >
      <Rect width="20" height="14" x="2" y="3" rx="2" ry="2"></Rect>
      <Line x1="8" x2="16" y1="21" y2="21"></Line>
      <Line x1="12" x2="12" y1="17" y2="21"></Line>
    </Svg>
  );
}

export default MonitorIcon;