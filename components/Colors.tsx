// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicColors,
  DefaultColorsProps,
} from "./plasmic/color_tool/PlasmicColors";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Color from "./Color";
import chroma from "chroma-js";
import { ColorsContext, ConfigUpdateContext } from "./Theme";
import { HomeContext } from "../pages/index";
import { InterpolationMode } from "chroma-js";
import * as Slider from "@radix-ui/react-slider";
import ResetNob from "./ResetNob";
import { calcAPCA,  } from 'apca-w3';

export interface ColorsProps extends DefaultColorsProps {
  uploaddata: (data: any) => string[];
  manualAdjusting: "" | "l" | "s";
}

function Colors_(props: ColorsProps, ref: HTMLElementRefOf<"div">) {
  const config = React.useContext(ColorsContext);
  const updateConfig = React.useContext(ConfigUpdateContext);
  const home = React.useContext(HomeContext);

  let shades: string[] = [];
  let names: string[] = [];

  const contrast = (color: string) => {
    let whiteTextContrast =  Math.abs(calcAPCA(color, chroma( light).hex()) as number);
    let darkTextContrast = Math.abs(calcAPCA(color, chroma(dark).hex()) as number);
    
    return whiteTextContrast > darkTextContrast
      ? `${whiteTextContrast.toFixed(1)}`
      : `${darkTextContrast.toFixed(1)}`
  };

  let light = chroma(config.baseValue)
    .set("hsl.h", config.lightHueShift)
    .luminance(config.lightLuminance);

  let dark = chroma(config.baseValue)
    .set("hsl.h", config.darkHueShift)
    .luminance(config.darkLuminance);
  if (config.saturation > 0) {
    light = light.saturate(config.saturation);
  } else if (config.saturation < 0) {
    light = light.desaturate(-config.saturation);
  }
  if (config.darkSaturation > 0) {
    dark = dark.saturate(config.darkSaturation);
  } else if (config.darkSaturation < 0) {
    dark = dark.desaturate(-config.darkSaturation);
  }

  let lightScale = chroma
    .scale([config.baseValue, light.hex()])
    .mode(home.mode as InterpolationMode)
    .domain(config.lightDomain)
    .colors(config.stepsLighter + 1);
  let darkScale = chroma
    .scale([config.baseValue, dark.hex()])
    .mode(home.mode as InterpolationMode)
    .domain(config.darkDomain)
    .colors(config.stepsDarker + 1);

  for (let i = lightScale.length - 1; i > 0; i--) {
    let newShade = lightScale[i];
    shades.push(newShade);
    names.push(`L${i}`);
  }
  // add base
  shades.push(config.baseValue);
  names.push("Base");

  for (let i = 1; i < darkScale.length; i++) {
    let newShade = darkScale[i];
    shades.push(newShade);
    names.push(`D${i}`);
  }


let fixedHues = shades.map((color) => {
    return chroma(color).get("hsl.h").toFixed(2);
  });
  let originalLightness = shades.map((color) => {
    return chroma(color).get("hsl.l").toFixed(2);
  });
  let originalSaturation = shades.map((color) => {
    return chroma(color).get("hsl.s").toFixed(2);
  });
  //useState to manage to shade array
  const [allColors, setAllColors] = React.useState(shades);

  //useEffect for updating the color Array
  React.useEffect(() => {
    setAllColors(shades);
  }, [config.baseValue, config.saturation, config.darkSaturation, config.lightHueShift, config.darkHueShift, config.lightLuminance, config.darkLuminance, config.lightDomain, config.darkDomain, config.stepsLighter, config.stepsDarker, home.mode]);

  React.useEffect(() => {
    props.uploaddata(JSON.stringify([names, allColors]));
  }, [allColors]);

  function getValue(color:string,i:number):number {
    if (props.manualAdjusting === "s") {
      if (config.manualAdjustments?.saturation[i] === undefined || config.manualAdjustments?.saturation[i] === null) {
      return chroma(color).get(`hsl.${props.manualAdjusting}`) * 100;
      } else {
        return config.manualAdjustments.saturation[i] * 100;
      }
    }   else if (props.manualAdjusting === "l") {
      if (config.manualAdjustments?.lightness[i] === undefined || config.manualAdjustments?.lightness[i] === null) {
      return chroma(color).get(`hsl.${props.manualAdjusting}`) * 100;
      } else {
        return config.manualAdjustments.lightness[i] * 100;
      }
    }  else return 0
  }

  // updated colors
  const updatedColors = allColors

  if (config.manualAdjustments && config.manualAdjustments.lightness ) {
  Object.keys(config.manualAdjustments.lightness).forEach((key) => {
      updatedColors[+key] = chroma(updatedColors[+key]).set("hsl.h",fixedHues[+key]). set("hsl.l", config.manualAdjustments.lightness[+key]).hex()
  
  })}
  if (config.manualAdjustments && config.manualAdjustments.saturation){
  Object.keys(config.manualAdjustments.saturation).forEach((key) => {
      updatedColors[+key] = chroma(updatedColors[+key]).set("hsl.h",fixedHues[+key]). set("hsl.s", config.manualAdjustments.saturation[+key]).hex()
    
  })}
  props.uploaddata(JSON.stringify([names, updatedColors]));

  return (
    // @ts-ignore
    <PlasmicColors
      root={{
        ref,
      }}
      allColors={{
        props: {
          children: updatedColors.map((color, i) => {
            
            return (
              <Color
                key={i}
                onDark={chroma.contrast(light, color) < 2.5 ? true : false}
                color={color}
                name={names[i]}
                hexCode={
                  props.manualAdjusting !== ""
                    ? chroma(color)
                        .get(`hsl.${props.manualAdjusting}`)
                        .toFixed(2)
                    : color.toUpperCase()
                }
                // @ts-ignore
                resetNob={{
                  props: {
                    isHidden: (() => {
                      if (props.manualAdjusting === "s") {
                        let saturations = Object.keys(
                          config.manualAdjustments.saturation
                        );
                        if (saturations && saturations.length > 0) {
                          return saturations.some(
                            (saturation) => saturation === i.toString()
                          )
                            ? false
                            : true;
                        }
                      } else if (props.manualAdjusting === "l") {
                        let lightness = Object.keys(
                          config.manualAdjustments.lightness
                        );
                        if (lightness && lightness.length > 0) {
                          return lightness.some(
                            (light) => light === i.toString()
                          )
                            ? false
                            : true;
                        }
                      } 
                       return true;
                    })(),
                    style:{
                      bottom:(() => {
                        if (props.manualAdjusting === "s") {
                          return `${chroma(shades[i]).get('hsl.s')*100}%`
                        } else if (props.manualAdjusting === "l") {
                          return `${chroma(shades[i]).get('hsl.l')*100}%`
                        }
                      }) (),
                      color:chroma.contrast("white", color) < 2.5
                      ? "black"
                      : "white"
                    },
                    onClick: () => {
                      if (props.manualAdjusting==="s") {
                        let newConfig = config 
                        delete newConfig.manualAdjustments.saturation[`${i}`]
                        updateConfig(newConfig)
                        let updatedColors = [...allColors]
                        updatedColors[i] = shades[i]
                        setAllColors(updatedColors)
                      } else if (props.manualAdjusting==="l") {
                        let newConfig = config 
                        delete newConfig.manualAdjustments.lightness[`${i}`]
                        updateConfig(newConfig)
                        let updatedColors = [...allColors]
                        updatedColors[i] = shades[i]
                        setAllColors(updatedColors)
                      }
                    }
                  },
                }}
                // @ts-ignore
                contrast={contrast(color)}
                isLocked={color === config.baseValue}
                lock={{
                  props: {
                    stroke:
                      chroma.contrast(color, "#FFFFFF") < 2.5
                        ? "#000000"
                        : "#ffffff",
                  },
                }}
                darkTextColor={light.hex()}
                lightTextColor={dark.hex()}
                adjustingSaturation={props.manualAdjusting !== ""}
                slider={{
                  props: {
                    children: (
                      <Slider.Root
                        orientation="vertical"
                        value={[getValue(color, i)]}
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          width: 40,
                          height: "100%",
                        }}
                        onValueChange={(e) => {
                          if (names[i] === "Base") return;

                          // create a copy of the original state

                          if (props.manualAdjusting === "s") {
                            // update the value at the nth index of the light array
                            updateConfig({
                              ...config,
                              manualAdjustments: {
                                ...config.manualAdjustments,
                                saturation: {
                                  ...config.manualAdjustments?.saturation,
                                  [i]: e[0] / 100,
                                },
                              },
                            });
                          } else if (props.manualAdjusting === "l") {
                            // update the value at the nth index of the light array
                            updateConfig({
                              ...config,
                              manualAdjustments: {
                                ...config.manualAdjustments,
                                lightness: {
                                  ...config.manualAdjustments?.lightness,
                                  [i]: e[0] / 100,
                                },
                              },
                            });
                          }

                          const updatedColorSets = [...allColors];

                          if (props.manualAdjusting == "l") {
                            updatedColorSets[i] = chroma(shades[i])
                              .set("hsl.h", fixedHues[i])
                              .set(
                                "hsl.s",
                                config.manualAdjustments?.saturation[i]
                                  ? config.manualAdjustments.saturation[i]
                                  : originalSaturation[i]
                              )
                              .set(`hsl.l`, e[0] / 100)
                              .hex();
                          }
                          if (props.manualAdjusting == "s") {
                            updatedColorSets[i] = chroma(shades[i])
                              .set("hsl.h", fixedHues[i])
                              .set(`hsl.s`, e[0] / 100)
                              .set(
                                "hsl.l",
                                config.manualAdjustments?.lightness[i]
                                  ? config.manualAdjustments.lightness[i]
                                  : originalLightness[i]
                              )
                              .hex();
                          }

                          // Set the state with the updated items
                          setAllColors(updatedColorSets);
                        }}
                      >
                        <Slider.Track
                          style={{
                            flexGrow: 1,
                            position: "relative",
                            width: 3,
                          }}
                        ></Slider.Track>
                        <Slider.Thumb
                          style={{
                            display: "block",
                            width: 16,
                            height: 16,
                            backgroundColor:
                              chroma.contrast("white", allColors[i]) < 2.5
                                ? "black"
                                : "white",
                            borderRadius: "99px",
                          }}
                        />
                      </Slider.Root>
                    ),
                  },
                }}
              ></Color>
            );
          }),
        },
      }}
      adjustingSaturation={props.manualAdjusting !== ""}
      {...props}
    />
  );
}

const Colors = React.forwardRef(Colors_);
export default Colors;
