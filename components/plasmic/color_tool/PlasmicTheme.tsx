// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dczqNaFYoArv9QmtqhGLsR
// Component: 848il-tpeEh
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import InputField from "../../InputField"; // plasmic-import: AIPmHdmqsY/component
import ColorField from "../../ColorField"; // plasmic-import: -6Apr9wI1O5/component
import Button from "../../Button"; // plasmic-import: iXX9rwSFEyL/component
import Colors from "../../Colors"; // plasmic-import: dyZl0Y5DD8/component
import HueField from "../../HueField"; // plasmic-import: b0WRjvMctS/component

import { useScreenVariants as useScreenVariantspt71TlTNpDnZr } from "../blank_project/PlasmicGlobalVariant__Screen"; // plasmic-import: Pt71tlTNpDnZr/globalVariant
import { DarkValue, useDark } from "./PlasmicGlobalVariant__Dark"; // plasmic-import: AsCuTyckBi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicTheme.module.css"; // plasmic-import: 848il-tpeEh/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: B-EzNgU_VY/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Kv0ZYfEWi7y/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: JJ3xl_PURO/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: TO9aAi2aN/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: DhTNvOfuLF/icon

export type PlasmicTheme__VariantMembers = {};

export type PlasmicTheme__VariantsArgs = {};
type VariantPropType = keyof PlasmicTheme__VariantsArgs;
export const PlasmicTheme__VariantProps = new Array<VariantPropType>();

export type PlasmicTheme__ArgsType = {};
type ArgPropType = keyof PlasmicTheme__ArgsType;
export const PlasmicTheme__ArgProps = new Array<ArgPropType>();

export type PlasmicTheme__OverridesType = {
  root?: p.Flex<"div">;
  name?: p.Flex<typeof InputField>;
  baseValue?: p.Flex<typeof ColorField>;
  stepsLighter?: p.Flex<typeof InputField>;
  stepsDarker?: p.Flex<typeof InputField>;
  remove?: p.Flex<typeof Button>;
  copy?: p.Flex<typeof Button>;
  saturation?: p.Flex<typeof InputField>;
  lightDomain?: p.Flex<typeof InputField>;
  adjustSaturation?: p.Flex<typeof Button>;
  adjustLightness?: p.Flex<typeof Button>;
  darkDomain?: p.Flex<typeof InputField>;
  darkSaturation?: p.Flex<typeof InputField>;
  colors?: p.Flex<typeof Colors>;
  lightLuminance?: p.Flex<typeof InputField>;
  lightHue?: p.Flex<typeof HueField>;
  resetHueShift?: p.Flex<typeof Button>;
  darkHue?: p.Flex<typeof HueField>;
  darkLuminance?: p.Flex<typeof InputField>;
};

export interface DefaultThemeProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTheme__RenderFunc(props: {
  variants: PlasmicTheme__VariantsArgs;
  args: PlasmicTheme__ArgsType;
  overrides: PlasmicTheme__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspt71TlTNpDnZr(),
    dark: useDark()
  });

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root
        )}
      >
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4U85)}
          >
            {true ? (
              <InputField
                data-plasmic-name={"name"}
                data-plasmic-override={overrides.name}
                className={classNames("__wab_instance", sty.name)}
                step={0.1 as const}
                type={"Text" as const}
              >
                {"Name"}
              </InputField>
            ) : null}

            <ColorField
              data-plasmic-name={"baseValue"}
              data-plasmic-override={overrides.baseValue}
              className={classNames("__wab_instance", sty.baseValue, {
                [sty.baseValueglobal_dark__true]: hasVariant(
                  globalVariants,
                  "dark",
                  "_true"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tEsny,
                  {
                    [sty.textglobal_dark__true__tEsnYuQts4]: hasVariant(
                      globalVariants,
                      "dark",
                      "_true"
                    )
                  }
                )}
              >
                {"Base Color"}
              </div>
            </ColorField>

            {true ? (
              <InputField
                data-plasmic-name={"stepsLighter"}
                data-plasmic-override={overrides.stepsLighter}
                className={classNames("__wab_instance", sty.stepsLighter, {
                  [sty.stepsLighterglobal_dark__true]: hasVariant(
                    globalVariants,
                    "dark",
                    "_true"
                  )
                })}
                min={1 as const}
                type={"Number" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sfkjO,
                    {
                      [sty.textglobal_dark__true__sfkjOuQts4]: hasVariant(
                        globalVariants,
                        "dark",
                        "_true"
                      )
                    }
                  )}
                >
                  {"Steps Lighter"}
                </div>
              </InputField>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"stepsDarker"}
                data-plasmic-override={overrides.stepsDarker}
                className={classNames("__wab_instance", sty.stepsDarker)}
                min={1 as const}
                type={"Number" as const}
              >
                {"Steps Darker"}
              </InputField>
            ) : null}

            <Button
              data-plasmic-name={"remove"}
              data-plasmic-override={overrides.remove}
              className={classNames("__wab_instance", sty.remove)}
              isDanger={true}
              showStartIcon={true}
              simple={true}
              startIcon={
                true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__dt3Rb)}
                  >
                    <Icon6Icon
                      className={classNames(projectcss.all, sty.svg___1Thal)}
                      role={"img"}
                    />
                  </div>
                ) : null
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__o1TQ
                )}
              >
                {"Remove Scale"}
              </div>
            </Button>

            <Button
              data-plasmic-name={"copy"}
              data-plasmic-override={overrides.copy}
              className={classNames("__wab_instance", sty.copy)}
              showStartIcon={true}
              simple={true}
              startIcon={
                true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ok0G1)}
                  >
                    <Icon5Icon
                      className={classNames(projectcss.all, sty.svg__dode0, {
                        [sty.svgglobal_dark__true__dode0UQts4]: hasVariant(
                          globalVariants,
                          "dark",
                          "_true"
                        )
                      })}
                      role={"img"}
                    />
                  </div>
                ) : null
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p1SIn
                )}
              >
                {"Copy JSON"}
              </div>
            </Button>
          </p.Stack>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jo9H0)}
          >
            {true ? (
              <InputField
                data-plasmic-name={"saturation"}
                data-plasmic-override={overrides.saturation}
                className={classNames("__wab_instance", sty.saturation)}
                step={0.01 as const}
                type={"Number" as const}
              >
                {"Light Saturation(±)"}
              </InputField>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"lightDomain"}
                data-plasmic-override={overrides.lightDomain}
                className={classNames("__wab_instance", sty.lightDomain)}
                type={"Text" as const}
              >
                {"Light Domain Partition"}
              </InputField>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___500Kj)}>
                <Button
                  data-plasmic-name={"adjustSaturation"}
                  data-plasmic-override={overrides.adjustSaturation}
                  className={classNames("__wab_instance", sty.adjustSaturation)}
                  showStartIcon={true}
                  simple={true}
                  startIcon={
                    true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xogkm
                        )}
                      >
                        <Icon13Icon
                          className={classNames(projectcss.all, sty.svg__u6Tik)}
                          role={"img"}
                        />
                      </div>
                    ) : null
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cMpHy
                    )}
                  >
                    {"Adjust S"}
                  </div>
                </Button>

                <Button
                  data-plasmic-name={"adjustLightness"}
                  data-plasmic-override={overrides.adjustLightness}
                  className={classNames("__wab_instance", sty.adjustLightness)}
                  showStartIcon={true}
                  simple={true}
                  startIcon={
                    true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__iYrSl
                        )}
                      >
                        <Icon14Icon
                          className={classNames(projectcss.all, sty.svg__un72G)}
                          role={"img"}
                        />
                      </div>
                    ) : null
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qOpx
                    )}
                  >
                    {"Adjust L"}
                  </div>
                </Button>
              </div>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"darkDomain"}
                data-plasmic-override={overrides.darkDomain}
                className={classNames("__wab_instance", sty.darkDomain)}
                type={"Text" as const}
              >
                {"Dark Domain Partition"}
              </InputField>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"darkSaturation"}
                data-plasmic-override={overrides.darkSaturation}
                className={classNames("__wab_instance", sty.darkSaturation)}
                step={0.01 as const}
                type={"Number" as const}
              >
                {"Dark Saturation(±)"}
              </InputField>
            ) : null}
          </p.Stack>
        ) : null}
        {true ? (
          <Colors
            data-plasmic-name={"colors"}
            data-plasmic-override={overrides.colors}
            className={classNames("__wab_instance", sty.colors)}
          />
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mViK)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wpWem)}
              >
                {true ? (
                  <InputField
                    data-plasmic-name={"lightLuminance"}
                    data-plasmic-override={overrides.lightLuminance}
                    className={classNames("__wab_instance", sty.lightLuminance)}
                    max={0.999 as const}
                    maxLength={3 as const}
                    min={0.001 as const}
                    step={0.001 as const}
                    type={"Number" as const}
                  >
                    {"Light Luminance"}
                  </InputField>
                ) : null}

                <HueField
                  data-plasmic-name={"lightHue"}
                  data-plasmic-override={overrides.lightHue}
                  className={classNames("__wab_instance", sty.lightHue)}
                  onScrub={undefined}
                  step={1 as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zlvRs
                    )}
                  >
                    {"Hue Rotation°"}
                  </div>
                </HueField>
              </p.Stack>
            ) : null}

            <Button
              data-plasmic-name={"resetHueShift"}
              data-plasmic-override={overrides.resetHueShift}
              className={classNames("__wab_instance", sty.resetHueShift)}
              simple={true}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___0VwAy)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oz6I
                )}
              >
                {"Reset Hue Rotation"}
              </div>
            </Button>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eZ3Ci)}
              >
                <HueField
                  data-plasmic-name={"darkHue"}
                  data-plasmic-override={overrides.darkHue}
                  className={classNames("__wab_instance", sty.darkHue)}
                  step={1 as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__thpsX
                    )}
                  >
                    {"Hue Rotation°"}
                  </div>
                </HueField>

                {true ? (
                  <InputField
                    data-plasmic-name={"darkLuminance"}
                    data-plasmic-override={overrides.darkLuminance}
                    className={classNames("__wab_instance", sty.darkLuminance)}
                    max={0.999 as const}
                    maxLength={3 as const}
                    min={0.001 as const}
                    step={0.001 as const}
                    type={"Number" as const}
                  >
                    {"Dark Luminance"}
                  </InputField>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "name",
    "baseValue",
    "stepsLighter",
    "stepsDarker",
    "remove",
    "copy",
    "saturation",
    "lightDomain",
    "adjustSaturation",
    "adjustLightness",
    "darkDomain",
    "darkSaturation",
    "colors",
    "lightLuminance",
    "lightHue",
    "resetHueShift",
    "darkHue",
    "darkLuminance"
  ],
  name: ["name"],
  baseValue: ["baseValue"],
  stepsLighter: ["stepsLighter"],
  stepsDarker: ["stepsDarker"],
  remove: ["remove"],
  copy: ["copy"],
  saturation: ["saturation"],
  lightDomain: ["lightDomain"],
  adjustSaturation: ["adjustSaturation"],
  adjustLightness: ["adjustLightness"],
  darkDomain: ["darkDomain"],
  darkSaturation: ["darkSaturation"],
  colors: ["colors"],
  lightLuminance: ["lightLuminance"],
  lightHue: ["lightHue"],
  resetHueShift: ["resetHueShift"],
  darkHue: ["darkHue"],
  darkLuminance: ["darkLuminance"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  name: typeof InputField;
  baseValue: typeof ColorField;
  stepsLighter: typeof InputField;
  stepsDarker: typeof InputField;
  remove: typeof Button;
  copy: typeof Button;
  saturation: typeof InputField;
  lightDomain: typeof InputField;
  adjustSaturation: typeof Button;
  adjustLightness: typeof Button;
  darkDomain: typeof InputField;
  darkSaturation: typeof InputField;
  colors: typeof Colors;
  lightLuminance: typeof InputField;
  lightHue: typeof HueField;
  resetHueShift: typeof Button;
  darkHue: typeof HueField;
  darkLuminance: typeof InputField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTheme__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTheme__VariantsArgs;
    args?: PlasmicTheme__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTheme__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTheme__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTheme__ArgProps,
          internalVariantPropNames: PlasmicTheme__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTheme__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTheme";
  } else {
    func.displayName = `PlasmicTheme.${nodeName}`;
  }
  return func;
}

export const PlasmicTheme = Object.assign(
  // Top-level PlasmicTheme renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _name: makeNodeComponent("name"),
    baseValue: makeNodeComponent("baseValue"),
    stepsLighter: makeNodeComponent("stepsLighter"),
    stepsDarker: makeNodeComponent("stepsDarker"),
    remove: makeNodeComponent("remove"),
    copy: makeNodeComponent("copy"),
    saturation: makeNodeComponent("saturation"),
    lightDomain: makeNodeComponent("lightDomain"),
    adjustSaturation: makeNodeComponent("adjustSaturation"),
    adjustLightness: makeNodeComponent("adjustLightness"),
    darkDomain: makeNodeComponent("darkDomain"),
    darkSaturation: makeNodeComponent("darkSaturation"),
    colors: makeNodeComponent("colors"),
    lightLuminance: makeNodeComponent("lightLuminance"),
    lightHue: makeNodeComponent("lightHue"),
    resetHueShift: makeNodeComponent("resetHueShift"),
    darkHue: makeNodeComponent("darkHue"),
    darkLuminance: makeNodeComponent("darkLuminance"),

    // Metadata about props expected for PlasmicTheme
    internalVariantProps: PlasmicTheme__VariantProps,
    internalArgProps: PlasmicTheme__ArgProps
  }
);

export default PlasmicTheme;
/* prettier-ignore-end */
