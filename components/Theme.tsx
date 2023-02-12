// @ts-nocheck
import * as React from "react";
import {
  PlasmicTheme
} from "./plasmic/color_tool/PlasmicTheme";

import { HomeContext } from "../pages";
import chroma from "chroma-js";

const config = {
  name:"Default",
  baseValue: "#0F3CC9",
  saturation: 0,
  darkSaturation: 0,
  stepsLighter: 10,
  stepsDarker: 10,
  lightLuminance: 0.85,
  darkLuminance: 0.008,
  lightHueShift: 225.48,
  darkHueShift: 225.48,
  lightDomain:[0,100],
  darkDomain:[0,100]
};

export const ColorsContext = React.createContext(config);
export const ConfigUpdateContext = React.createContext((data) => {
  setConfig(data);
});


function Theme_(props,ref) {
  const [_config, setConfig] = React.useState(props.config ? props.config : config)
  const [lightScrubColor, setLightScrubColor] = React.useState(
    _config.baseValue
    )
    const [darkScrubColor, setDarkScrubColor] = React.useState(_config.baseValue);
    const [outPut, setOutPut] = React.useState("empty");
    const [copied, setCopied] = React.useState(false);
    const [rawLightDomainLiteral, setRawLightDomainLiteral] = React.useState(_config.lightDomain.toString());
    const [rawDarkDomainLiteral, setRawDarkDomainLiteral] = React.useState(_config.darkDomain.toString());
    const [key, setKey] = React.useState(generateRandomString());
    const home = React.useContext(HomeContext);

    React.useEffect(() => {
      
      if (home.currentSaveData.length > 0){

        let isAlreadyIn = home.currentSaveData.some(n =>n.key===key || n.name===_config.name)
        if (!isAlreadyIn) home.onSaveChange([...home.currentSaveData,{..._config,key:key}]);
        else home.onSaveChange(home.currentSaveData.map(n => n.key===key ? {..._config,key:key} : n));
        
      } else  home.onSaveChange([{..._config,key:key}]);
    },[_config])



  function approximatelyEqual(a: number, b: number, threshold = 0.1) {
    return Math.abs(a - b) < threshold;
  }
  function generateRandomString() {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
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
          darkSaturation={{
            value: _config.darkSaturation.toString(),
            onChange: (e) => {
              setConfig({
                ..._config,
                darkSaturation: parseFloat(e.target.value.toString()),
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
                approximatelyEqual(
                  _config.lightHueShift,
                  chroma(_config.baseValue).hsl()[0].toFixed(2)
                ) &&
                approximatelyEqual(
                  _config.darkHueShift,
                  chroma(_config.baseValue).hsl()[0].toFixed(2)
                ),
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
                let out = JSON.parse(outPut);
                let r = out[0].reduce((obj, key, index) => {
                  obj[key] = out[1][index];
                  return obj;
                }, {});
                navigator.clipboard
                  .writeText(JSON.stringify(r).toUpperCase())
                  .then(function () {

                  });
                setCopied(true);
              },
              children: copied ? (
                <p style={{ fontSize: "14px", fontWeight: 400 }}>Copied ! </p>
              ) : (
                <p style={{ fontSize: "14px", fontWeight: 400 }}>Copy JSON</p>
              ),
              onMouseLeave: () => {
                setTimeout(() => {
                  setCopied(false);
                }, 1200);
              },
            },
          }}
          colors={{
            props: {
              uploaddata: (d) => setOutPut(d),
            },
          }}
          lightDomain={{
            input:{
              value:rawLightDomainLiteral,
            onChange: (e) => {
              setRawLightDomainLiteral( e.target.value)
              let raw =  e.target.value.split(",").map(n=> n==="" ?0: parseFloat(n))
              if (!Array.isArray(raw) || raw.length<2) return 
              else setConfig({
                ..._config,
                lightDomain:raw,
              });
            },
            }
          }}
          darkDomain={{
           input:{
            value: rawDarkDomainLiteral,
            onChange: (e) => {
              setRawDarkDomainLiteral( e.target.value)
              let raw =  e.target.value.split(",").map(n=> n==="" ?0: parseFloat(n))
              if (!Array.isArray(raw) || raw.length<2) return 
              else setConfig({
                ..._config,
                darkDomain:raw,
              });
            },
           }
          }}
          name={{
            input:{
              value: _config.name,
              onChange: (e) => {
                setConfig({
                  ..._config,
                  name: e.target.value,
                });
              },
            }
          }}
          remove={{
            props:{
              onClick:()=>{
                props.removeTheme(props.id)
                home.onSaveChange( home.currentSaveData.filter(n=>n.key !==key))
              }
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
