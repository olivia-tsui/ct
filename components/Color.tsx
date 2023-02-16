// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicColor,
  DefaultColorProps,
} from "./plasmic/color_tool/PlasmicColor";
import chroma from "chroma-js";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ColorProps extends DefaultColorProps {
  color?: string;
  name?: string;
  hexCode?: string;
  darkTextColor?: string;
  lightTextColor?: string;
  manualSaturation: boolean;
}

function Color_(props: ColorProps, ref: HTMLElementRefOf<"div">) {

  let [backgroundColor, setBackgroundColor] = React.useState(props.color);

  React.useEffect(() => {

    setBackgroundColor(props.color);

  }, [props.color]);
  return (
    //@ts-ignore
    <PlasmicColor
      name={props.name}
      style={{
        backgroundColor: backgroundColor,
        color: props.onDark ? props.lightTextColor : props.darkTextColor,
      }}
    
      root={{ ref }}
      {...props}
    />
  );
}

const Color = React.forwardRef(Color_);
export default Color;
