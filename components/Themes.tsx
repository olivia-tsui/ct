import * as React from "react";
import {
  PlasmicThemes,
  DefaultThemesProps,
} from "./plasmic/color_tool/PlasmicThemes";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Theme from "./Theme";

export interface ThemesProps extends DefaultThemesProps {}

function Themes_(props: ThemesProps, ref: HTMLElementRefOf<"div">) {
  const defaultConfig = {
    key: "Ra5GY78",
    name: "Default",
    baseValue: "#0F3CC9",
    saturation: 0,
    darkSaturation: 0,
    stepsLighter: 12,
    stepsDarker: 12,
    lightLuminance: 0.85,
    darkLuminance: 0.008,
    lightHueShift: 225.48,
    darkHueShift: 225.48,
    lightDomain: [0, 100],
    darkDomain: [0, 100],
    manualAdjustments: {
      lightness: [],
      saturation: [],
    },
  };
  const [themesNodes, setThemesNodes] = React.useState<React.ReactElement[]>([
    <Theme
      key={generateRandomString()}
      config={defaultConfig}
      id={generateRandomString()}
      removeTheme={removeTheme}
    ></Theme>,
  ]);

  React.useEffect(() => {
    let import_ = localStorage.getItem("import");
    if (import_ && import_.length > 0) {
      let parsed = JSON.parse(import_);
      // @ts-ignore
      setThemesNodes(
        parsed.map((config:any) => {
          // @ts-ignore
          let key = config.key;
          // @ts-ignore

          return (
            <Theme
              config={config}
              removeTheme={removeTheme}
              key={key}
              id={generateRandomString()}
            ></Theme>
          );
        })
      );
    }
  }, []);

  function removeTheme(id: string) {
    setThemesNodes((prevThemesNodes) => {
      return prevThemesNodes.filter((n) => {
        return n.props.id !== id;
      });
    });
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
    <PlasmicThemes
      count={themesNodes}
      add={{
        props: {
          onClick: () => {
            let id = generateRandomString();
            setThemesNodes([
              ...themesNodes,
              <Theme
                config={{ ...defaultConfig, key: generateRandomString() }}
                key={id}
                id={id}
                removeTheme={removeTheme}
              ></Theme>,
            ]);
          },
        },
      }}
      root={{ ref }}
      {...props}
    />
  );
}

const Themes = React.forwardRef(Themes_);
export default Themes;
