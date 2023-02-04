
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { HuePicker,SketchPicker } from 'react-color';
import {Segmented} from "antd"

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
    