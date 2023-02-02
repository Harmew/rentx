declare module "*.svg" {
  // Import React in order to use JSX
  import React = require("react");
  // Import React Native SVG in order to use the React Native SVG components in JSX (e.g. Circle, Rect, etc.)
  import { SvgProps } from "react-native-svg";
  // Define the content of the SVG file as a React component
  const content: React.FC<SvgProps>;
  // Export the content of the SVG file as a React component
  export default content;
}
