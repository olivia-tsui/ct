import chroma from "chroma-js";

export function download(data, name) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${name}.json`);
  link.click();
}

export function reformat(configs) {
  let outputs = configs.map(generateColorScale);

  let scale = {};
  outputs.forEach((n, i) => {
    return (scale[toKebabCase(configs[i]["name"])] = n);
  });

  download(
    {
      brand: {
        color: {
          scale,
        },
      },
    },
    "scale"
  );

  let prefix = "brand.color.scale";
  let stepsLight = {
    weak: ["l2", "l4", "l6", "l8", "l10", "l12"],
    strong: ["d2", "d4", "d6", "d8", "d10", "d12"],
    light: ["l2", "l4", "l6", "l8", "l10", "l12"],
    dark: ["d2", "d4", "d6", "d8", "d10", "d12"],
    base: "base"
  };
  let stepsDark = {
    weak: ["d1", "d3", "d5", "d7", "d9", "d12"],
    strong: ["l3", "l5", "l7", "l9", "l11", "l12"],
    light: ["l3", "l5", "l7", "l9", "l11", "l12"],
    dark: ["d1", "d3", "d5", "d7", "d9", "d12"],
    base: "l1"
  };
  let stepsDim = {
    weak: ["d3", "d5", "d7", "d9", "d11", "d12"],
    strong: ["l1", "l3", "l5", "l7", "l9", "l12"],
    light: ["l1", "l3", "l5", "l7", "l9", "l12"],
    dark: ["d3", "d5", "d7", "d9", "d11", "d12"],
    base: "d1"
  };
  
  let light = createColorObject(configs, stepsLight, prefix);
  let dark = createColorObject(configs, stepsDark, prefix);
  let dim = createColorObject(configs, stepsDim, prefix);


  download(light, "light");
  download(dark, "dark");
  download(dim, "dim");
}

function createColorObject(configs, steps, prefix) {
  let colorObj = {};

  configs.forEach((config) => {
    let scaleName = toKebabCase(config.name);
    colorObj[scaleName] = {};

    // Add weak colors
    for (let index = steps['weak'].length - 1; index >= 0; index--) {
      const step = steps['weak'][index];
      colorObj[scaleName][`weak-${index + 1}`] = {
        value: `{${prefix}.${scaleName}.${step}}`,
        type: "color",
      };
    }

    // Add base color
    colorObj[scaleName]["base"] = {
      value: `{${prefix}.${scaleName}.${steps['base']}}`,
      type: "color",
    };

    // Add strong colors
    steps['strong'].forEach((step, index) => {
      colorObj[scaleName][`strong-${index + 1}`] = {
        value: `{${prefix}.${scaleName}.${step}}`,
        type: "color",
      };
    });

    // Add light colors
    for (let index = steps['light'].length - 1; index >= 0; index--) {
      const step = steps['light'][index];
      colorObj[scaleName][`light-${index + 1}`] = {
        value: `{${prefix}.${scaleName}.${step}}`,
        type: "color",
      };
    }

    // Add base color
    colorObj[scaleName]["_base"] = {
      value: `{${prefix}.${scaleName}.${steps['base']}}`,
      type: "color",
    };

    // Add dark colors
    steps['dark'].forEach((step, index) => {
      colorObj[scaleName][`dark-${index + 1}`] = {
        value: `{${prefix}.${scaleName}.${step}}`,
        type: "color",
      };
    });

  });
  

  return {
    brand: {
      color: colorObj,
    },
  };
}


function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function generateColorScale(config) {
  let light = chroma(config.baseValue)
    .set("hsl.h", config.lightHueShift)
    .luminance(config.lightLuminance)
    .saturate(config.saturation > 0 ? config.saturation : -config.saturation);

  let dark = chroma(config.baseValue)
    .set("hsl.h", config.darkHueShift)
    .luminance(config.darkLuminance)
    .saturate(config.darkSaturation > 0 ? config.darkSaturation : -config.darkSaturation);

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

  let shades = [
    ...lightScale.slice(1).reverse(),
    config.baseValue,
    ...darkScale.slice(1)
  ];

  let names = [
    ...lightScale.slice(1).map((_, i) => `l${i + 1}`).reverse(),
    "base",
    ...darkScale.slice(1).map((_, i) => `d${i + 1}`)
  ];

  let fixedHues = shades.map((color) => chroma(color).get("hsl.h").toFixed(2));

  // Apply manual adjustments
  if (config.manualAdjustments) {
    const { lightness, saturation } = config.manualAdjustments;
    shades = shades.map((color, index) => {
      let adjustedColor = chroma(color).set("hsl.h", fixedHues[index]);
      if (lightness && lightness[index] !== undefined) {
        adjustedColor = adjustedColor.set("hsl.l", lightness[index]);
      }
      if (saturation && saturation[index] !== undefined) {
        adjustedColor = adjustedColor.set("hsl.s", saturation[index]);
      }
      return adjustedColor.hex();
    });
  }

  let output = {};
  shades.forEach((color, index) => {
    output[names[index]] = {
      value: color,
      type: "color",
    };
  });

  return output;
}

