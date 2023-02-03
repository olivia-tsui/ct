
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { HuePicker } from 'react-color';


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
    onChangeComplete:{
      type: "string",

    }

  }
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
    