import * as React from "react";
import {
  PlasmicInput,
  DefaultInputProps
} from "./plasmic/color_tool/PlasmicInput";
import { TextInputRef } from "@plasmicapp/react-web";

interface InputProps extends DefaultInputProps {}

function Input_(props: InputProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicInput.useBehavior<InputProps>(props, ref);
  return <PlasmicInput {...plasmicProps} />;
}

const Input = React.forwardRef(Input_);

export default Object.assign(Input, {
  __plumeType: "text-input"
});
