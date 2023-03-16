import chroma from "chroma-js";
export function download(data,name) {

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `${name}.json`)
    link.click()
}
export function reformat(configs) {
  let outputs = []
  configs.forEach((config) => {
    outputs.push(reformatOne(config))
  });
  let scale = {}
   outputs.forEach((n,i)=>{
    
    return scale[toKebabCase(configs[i]['name'])]=n
  })
  // scale.json
  download(  {
    brand: {
      color: {
       scale
      },
    },
  },"scale")

  
  // light.json
  let lightColor = {}
  let light = {
    brand:{
      color:lightColor
    }
  }
  configs.forEach((config) => {
    let scaleName = toKebabCase( config.name)
    lightColor[scaleName]={
      "weak-6": {
        value: `{brand.color.scale.${scaleName}.l12}`,
        type: "color",
      },
      "weak-5": {
        value: `{brand.color.scale.${scaleName}.l10}`,
        type: "color",
      },
      "weak-4": {
        value: `{brand.color.scale.${scaleName}.l08}`,
        type: "color",
      },
      "weak-3": {
        value: `{brand.color.scale.${scaleName}.l06}`,
        type: "color",
      },
      "weak-2": {
        value: `{brand.color.scale.${scaleName}.l04}`,
        type: "color",
      },
      "weak-1": {
        value: `{brand.color.scale.${scaleName}.l02}`,
        type: "color",
      },
      base: {
        value: `{brand.color.scale.${scaleName}.base}`,
        type: "color",
      },
      "strong-1": {
        value: `{brand.color.scale.${scaleName}.d02}`,
        type: "color",
      },
      "strong-2": {
        value: `{brand.color.scale.${scaleName}.d04}`,
        type: "color",
      },
      "strong-3": {
        value: `{brand.color.scale.${scaleName}.d06}`,
        type: "color",
      },
      "strong-4": {
        value: `{brand.color.scale.${scaleName}.d08}`,
        type: "color",
      },
      "strong-5": {
        value: `{brand.color.scale.${scaleName}.d10}`,
        type: "color",
      },
      "strong-6": {
        value: `{brand.color.scale.${scaleName}.d12}`,
        type: "color",
      },
    }
  })
  download(light,"light")
 
  // dark.json
  let darkColor={}
  let dark = {
    brand:{
      color:darkColor
    }
  }
  configs.forEach((config) => {
    let scaleName = toKebabCase( config.name)
    darkColor[scaleName]={"strong-6": {
    "value": `{brand.color.scale.${scaleName}.l12}`,
    "type": "color",
  },
  "strong-5": {
    "value": `{brand.color.scale.${scaleName}.l11}`,
    "type": "color",
  },
  "strong-4": {
    "value": `{brand.color.scale.${scaleName}.l09}`,
    "type": "color",
  },
  "strong-3": {
    "value": `{brand.color.scale.${scaleName}.l07}`,
    "type": "color",
  },
  "strong-2": {
    "value": `{brand.color.scale.${scaleName}.l05}`,
    "type": "color",
  },
  "strong-1": {
    "value": `{brand.color.scale.${scaleName}.l03}`,
    "type": "color",
  },
  "base": {
    "value": `{brand.color.scale.${scaleName}.l01}`,
    "type": "color",
  },
  "weak-1": {
    "value": `{brand.color.scale.${scaleName}.d01}`,
    "type": "color",
  },
  "weak-2": {
    "value": `{brand.color.scale.${scaleName}.d03}`,
    "type": "color",
  },
  "weak-3": {
    "value": `{brand.color.scale.${scaleName}.d05}`,
    "type": "color",
  },
  "weak-4": {
    "value": `{brand.color.scale.${scaleName}.d07}`,
    "type": "color",
  },
  "weak-5": {
    "value": `{brand.color.scale.${scaleName}.d09}`,
    "type": "color",
  },
  "weak-6": {
    "value": `{brand.color.scale.${scaleName}.d12}`,
    "type": "color",
  }}
})
  download(dark,"dark")

  // dim.json
  let dimColor={}
  let dim = {
    brand: {
      color: dimColor,
    },
  };
  configs.forEach((config) => {
    let scaleName = toKebabCase( config.name)
    dimColor[scaleName]={
      "strong-6": {
        "value": `{brand.color.scale.${scaleName}.l12}`,
        "type": "color",
      },
      "strong-5": {
        "value": `{brand.color.scale.${scaleName}.l09}`,
        "type": "color",
      },
      "strong-4": {
        "value": `{brand.color.scale.${scaleName}.l07}`,
        "type": "color",
      },
      "strong-3": {
        "value": `{brand.color.scale.${scaleName}.l05}`,
        "type": "color",
      },
      "strong-2": {
        "value": `{brand.color.scale.${scaleName}.l03}`,
        "type": "color",
      },
      "strong-1": {
        "value": `{brand.color.scale.${scaleName}.l01}`,
        "type": "color",
      },
      "base": {
        "value": `{brand.color.scale.${scaleName}.d01}`,
        "type": "color",
      },
      "weak-1": {
        "value": `{brand.color.scale.${scaleName}.d03}`,
        "type": "color",
      },
      "weak-2": {
        "value": `{brand.color.scale.${scaleName}.d05}`,
        "type": "color",
      },
      "weak-3": {
        "value": `{brand.color.scale.${scaleName}.d07}`,
        "type": "color",
      },
      "weak-4": {
        "value": `{brand.color.scale.${scaleName}.d09}`,
        "type": "color",
      },
      "weak-5": {
        "value": `{brand.color.scale.${scaleName}.d11}`,
        "type": "color",
      },
      "weak-6": {
        "value": `{brand.color.scale.${scaleName}.d12}`,
        "type": "color",
      }
    }
  })
  download(dim,"dim")

}

function toKebabCase(str) {
  return str
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();
}
 function reformatOne(config) {
   let shades = [];
   let names = [];
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
     .mode("hsl")
     .domain(config.lightDomain)
     .colors(config.stepsLighter + 1);
   let darkScale = chroma
     .scale([config.baseValue, dark.hex()])
     .mode("hsl")
     .domain(config.darkDomain)
     .colors(config.stepsDarker + 1);

   for (let i = lightScale.length - 1; i > 0; i--) {
     let newShade = lightScale[i];
     shades.push(newShade);
     names.push(`l${i}`);
   }
   // add base
   shades.push(config.baseValue);
   names.push("base");

   for (let i = 1; i < darkScale.length; i++) {
     let newShade = darkScale[i];
     shades.push(newShade);
     names.push(`d${i}`);
   }
   let fixedHues = shades.map((color) => {
     return chroma(color).get("hsl.h").toFixed(2);
   });

   // updated colors
   const updatedColors = shades;

   if (config.manualAdjustments && config.manualAdjustments.lightness) {
     Object.keys(config.manualAdjustments.lightness).forEach((key) => {
       updatedColors[+key] = chroma(updatedColors[+key])
         .set("hsl.h", fixedHues[+key])
         .set("hsl.l", config.manualAdjustments.lightness[+key])
         .hex();
     });
   }
   if (config.manualAdjustments && config.manualAdjustments.saturation) {
     Object.keys(config.manualAdjustments.saturation).forEach((key) => {
       updatedColors[+key] = chroma(updatedColors[+key])
         .set("hsl.h", fixedHues[+key])
         .set("hsl.s", config.manualAdjustments.saturation[+key])
         .hex();
     });
   }
   let output = {};
   names = names.reverse()
   updatedColors.reverse().forEach((color, index) => {
     output[ names[index]] = {
       value: color,
       type: "color",
     };
   });
   return output;
 }