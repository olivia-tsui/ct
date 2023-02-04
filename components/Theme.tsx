// @ts-nocheck
import * as React from "react";
import {
  PlasmicTheme,
  DefaultThemeProps,
} from "./plasmic/color_tool/PlasmicTheme";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { setConfig } from "next/config";
import chroma from "chroma-js";

const config = {
  baseValue: "#0F3CC9",
  saturation: 0,
  stepsLighter: 10,
  stepsDarker: 10,
  lightLuminance: 0.85,
  darkLuminance: 0.008,
  lightHueShift: 225.48,
  darkHueShift: 225.48,
};

export const ColorsContext = React.createContext(config);
export const ConfigUpdateContext = React.createContext((data) => {
  setConfig(data);
});


function Theme_(props, ref) {
  const [_config, setConfig] = React.useState(config);
  const [lightScrubColor, setLightScrubColor] = React.useState(
    _config.baseValue
  );
  const [darkScrubColor, setDarkScrubColor] = React.useState(_config.baseValue);
  const [outPut, setOutPut] = React.useState("empty");
    const [copied, setCopied] = React.useState(false);
  return (
    <ColorsContext.Provider value={_config}>

      <ConfigUpdateContext.Provider
        value={(data) => {
          setConfig(data);
        }}
      >
        <PlasmicTheme
          saturation={{
            value: _config.saturation.toString(),
            onChange: (e) => {
              setConfig({
                ..._config,
                saturation: parseFloat(e.target.value.toString()),
              });
            },
          }}
          stepsLighter={{
            value: _config.stepsLighter.toString(),
            onChange: (e) => {
              setConfig({
                ..._config,
                stepsLighter: parseFloat(e.target.value),
              });
            },
          }}
          stepsDarker={{
            value: _config.stepsDarker.toString(),
            onChange: (e) => {
              setConfig({
                ..._config,
                stepsDarker: parseFloat(e.target.value),
              });
            },
          }}
          lightLuminance={{
            value: _config.lightLuminance.toString(),
            onChange: (e) => {
              setConfig({
                ..._config,
                lightLuminance: parseFloat(e.target.value),
              });
            },
          }}
          darkLuminance={{
            value: _config.darkLuminance.toString(),
            onChange: (e) => {
              setConfig({
                ..._config,
                darkLuminance: parseFloat(e.target.value),
              });
            },
          }}
          lightHue={{
            onScrub: (e) => {
              setLightScrubColor(e.hex);
              setConfig({
                ..._config,
                lightHueShift: chroma(e.hex).hsl()[0].toFixed(2),
              });
            },
            input: {
              value: _config.lightHueShift.toString(),
              onChange: (e) => {
                setConfig({
                  ..._config,
                  lightHueShift: parseFloat(e.target.value),
                });
                setLightScrubColor(
                  chroma(_config.baseValue).set("hsl.h", e.target.value).hex()
                );
              },
            },
           
            huePicker: {
              props: {
                color: lightScrubColor,
              },
            },
          }}
          darkHue={{
            onScrub: (e) => {
              setDarkScrubColor(e.hex);
              setConfig({
                ..._config,
                darkHueShift: chroma(e.hex).hsl()[0].toFixed(2),
              });
            },
            input: {
              value: _config.darkHueShift.toString(),
              onChange: (e) => {
                setConfig({
                  ..._config,
                  darkHueShift: parseFloat(e.target.value),
                });
                setDarkScrubColor(
                  chroma(_config.baseValue).set("hsl.h", e.target.value).hex()
                );
              },
            },
           
            huePicker: {
              props: {
                color: darkScrubColor,
              },
            },
          }}
          resetHueShift={{
            props: {
              notRendered:
                _config.lightHueShift ===
                  chroma(_config.baseValue).hsl()[0].toFixed(2) &&
                _config.darkHueShift ===
                  chroma(_config.baseValue).hsl()[0].toFixed(2),
              onClick: () => {
                setConfig({
                  ..._config,
                  lightHueShift: chroma(_config.baseValue).hsl()[0].toFixed(2),
                  darkHueShift: chroma(_config.baseValue).hsl()[0].toFixed(2),
                });
                setLightScrubColor(_config.baseValue);
                setDarkScrubColor(_config.baseValue);
              },
            },
          }}
          copy={{
            props: {
              onClick: () => {
                let out = JSON.parse(outPut)
                let r = out[0].reduce((obj, key, index) => {
                  obj[key] = out[1][index];
                  return obj;
                }, {});
                navigator.clipboard.writeText(JSON.stringify(r).toUpperCase()).then(function() {
                  console.log("Result copied to clipboard");
                });
                setCopied(true)
              },
              children: copied ? <p style={{fontSize:"14px", fontWeight:400}}>Copied ! </p> : <p style={{fontSize:"14px",fontWeight:400}}>Copy JSON</p>,
              onMouseLeave: () => {
                setTimeout(() => {
                  setCopied(false)
                }, 1200);
               
              }
            }
          }}
          colors={{
            props: {
              uploaddata:(d)=>setOutPut(d)
            }
          }}
          root={{ ref }}
          {...props}
        />
      </ConfigUpdateContext.Provider>

    </ColorsContext.Provider>
  );
}

const Theme = React.forwardRef(Theme_);
export default Theme;
