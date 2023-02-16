
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { HuePicker,SketchPicker } from 'react-color';
import {Segmented} from "antd"
import * as Slider from "@radix-ui/react-slider"
registerComponent(HuePicker,{
  name: "HuePicker",
  importPath: "react-color",
  props: {
    color:{
      type: "string",
      defaultValue:"#00FFFF"
    },
    onChange:{
      type: "string",

    },

  }
});

registerComponent(Slider.Root,{
  name: "Slider_Root",
  importPath: "@radix-ui/react-slider",
  props: {
    defaultValue:{
      type: "array",
      defaultValue: [50]
    },
    orientation:{
      type: "choice",
      options: ["horizontal","vertical"]
    },
    children:{
      type:"slot",
      defaultValue:[{
        type: "component",
        name:"Slider_Track",
      },
    {
      type: "component",
      name:"Slider_Thumb",
    }]
    }
  }
})
registerComponent(Slider.Track,{
  name: "Slider_Track",
  importPath: "@radix-ui/react-slider",
  props: {
    children:{
      type:"slot",
      defaultValue:{
        type: "component",
        name:"Slider_Range",
      }
    }
  }
})

registerComponent(Slider.Range,{
  name: "Slider_Range",
  importPath: "@radix-ui/react-slider",
  props: {
  }
})

registerComponent(Slider.Thumb,{
  name: "Slider_Thumb",
  importPath: "@radix-ui/react-slider",
  props: {
  }
})

registerComponent(SketchPicker,{
  name: "SketchPicker",
  importPath: "react-color",
  props: {
    color:{
      type: "string",
      defaultValue:"#00FFFF"
    },

    onChange:{
      type: "string",
    },
  
  }
});

registerComponent(Segmented,{
  name:"Segmented",
  importPath: "antd",
  props: {
    size:{
      type:"choice",
      options: ["small","middle","large"],
    },
    options:{
      type: 'array',
    },
    defaultValue:{
      type: 'string',
    },
    onChange:{
      type:"string",
      hidden: ()=>true
    },
    value:{
      type: 'string',
      readOnly: true,
      hidden: ()=>true,
    }
  }
})


export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
    