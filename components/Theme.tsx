// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicTheme,
  DefaultThemeProps
} from "./plasmic/color_tool/PlasmicTheme";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ThemeProps extends DefaultThemeProps {}
interface ThemeConfigType {
  baseValue: string;
  saturation: number;
  stepsLighter: number;
  stepsDarker: number;
  lightStep: number;
  darkStep: number;
}

const config = {
  baseValue: "#0F3CC9",
  saturation: 0,
  stepsLighter: 10,
  stepsDarker: 10,
  lightStep: 3.5,
  darkStep: 3.2,
};

export const ColorsContext = React.createContext(config);
export const ConfigUpdateContext = React.createContext((data:ThemeConfigType) => {
});

function Theme_(props: ThemeProps, ref: HTMLElementRefOf<"div">) {

  const [_config, setConfig] = React.useState(config);

  return (
    <ColorsContext.Provider value={_config}>
      <ConfigUpdateContext.Provider value={(data:ThemeConfigType) => {
        setConfig(data)
      }}>
      <PlasmicTheme baseValue={{
        placeholder: _config.baseValue,
        onChange: (e) => {
          setConfig({..._config, baseValue: e.target.value.length > 6 ? e.target.value : _config.baseValue})
        }
      }}
      saturation={{
        placeholder: _config.saturation.toString(),
        onChange: (e) => {
          setConfig({..._config, saturation: e.target.value})
        }
      }}
      stepsLighter={{
        placeholder: _config.stepsLighter.toString(),
        onChange: (e) => {
          setConfig({..._config, stepsLighter: e.target.value})
        }

      }}
      stepsDarker={{
        placeholder: _config.stepsDarker.toString(),
        onChange: (e) => {
          setConfig({..._config, stepsDarker: e.target.value})
        }

      }}
      lightStepDistance={{
        placeholder: _config.lightStep.toString(),
        onChange: (e) => {
          setConfig({..._config, lightStep: e.target.value})
        }
      }}
      darkStepDistance={{
        placeholder: _config.darkStep.toString(),
        onChange: (e) => {
          setConfig({..._config, darkStep: e.target.value})
        }
      }}
      root={{ ref }} {...props} />
      </ConfigUpdateContext.Provider>
      </ColorsContext.Provider>
  );
}

const Theme = React.forwardRef(Theme_);
export default Theme;
