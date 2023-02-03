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

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Colors from "../../Colors"; // plasmic-import: dyZl0Y5DD8/component
import Color from "../../Color"; // plasmic-import: YczP2_j8Fh/component
import ColorField from "../../ColorField"; // plasmic-import: b0WRjvMctS/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicTheme.module.css"; // plasmic-import: 848il-tpeEh/css

export type PlasmicTheme__VariantMembers = {};

export type PlasmicTheme__VariantsArgs = {};
type VariantPropType = keyof PlasmicTheme__VariantsArgs;
export const PlasmicTheme__VariantProps = new Array<VariantPropType>();

export type PlasmicTheme__ArgsType = {};
type ArgPropType = keyof PlasmicTheme__ArgsType;
export const PlasmicTheme__ArgProps = new Array<ArgPropType>();

export type PlasmicTheme__OverridesType = {
  root?: p.Flex<"div">;
  baseValue?: p.Flex<typeof InputField>;
  saturation?: p.Flex<typeof InputField>;
  stepsLighter?: p.Flex<typeof InputField>;
  stepsDarker?: p.Flex<typeof InputField>;
  colors?: p.Flex<typeof Colors>;
  lightLuminance?: p.Flex<typeof InputField>;
  lightHue?: p.Flex<typeof ColorField>;
  darkHue?: p.Flex<typeof ColorField>;
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

function PlasmicTheme__RenderFunc(props: {
  variants: PlasmicTheme__VariantsArgs;
  args: PlasmicTheme__ArgsType;
  overrides: PlasmicTheme__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

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

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

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
            className={classNames(projectcss.all, sty.freeBox__jo9H0)}
          >
            {true ? (
              <InputField
                data-plasmic-name={"baseValue"}
                data-plasmic-override={overrides.baseValue}
                className={classNames("__wab_instance", sty.baseValue)}
                type={"" as const}
              >
                {"Base Value"}
              </InputField>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"saturation"}
                data-plasmic-override={overrides.saturation}
                className={classNames("__wab_instance", sty.saturation)}
                step={0.1 as const}
                type={"Number" as const}
              >
                {"Saturation(±)"}
              </InputField>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"stepsLighter"}
                data-plasmic-override={overrides.stepsLighter}
                className={classNames("__wab_instance", sty.stepsLighter)}
                type={"Number" as const}
              >
                {"Steps Lighter"}
              </InputField>
            ) : null}
            {true ? (
              <InputField
                data-plasmic-name={"stepsDarker"}
                data-plasmic-override={overrides.stepsDarker}
                className={classNames("__wab_instance", sty.stepsDarker)}
                type={"Number" as const}
              >
                {"Steps Darker"}
              </InputField>
            ) : null}
          </p.Stack>
        ) : null}
        {true ? (
          <Colors
            data-plasmic-name={"colors"}
            data-plasmic-override={overrides.colors}
            className={classNames("__wab_instance", sty.colors)}
          >
            <Color className={classNames("__wab_instance", sty.color__avIB)} />

            <Color className={classNames("__wab_instance", sty.color__qotr1)} />

            <Color className={classNames("__wab_instance", sty.color__qxMe)} />
          </Colors>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__mViK)}>
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
                    step={0.001 as const}
                    type={"Number" as const}
                  >
                    {"Start Luminance"}
                  </InputField>
                ) : null}

                <ColorField
                  data-plasmic-name={"lightHue"}
                  data-plasmic-override={overrides.lightHue}
                  className={classNames("__wab_instance", sty.lightHue)}
                  onChange={undefined}
                  step={1 as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zlvRs
                    )}
                  >
                    {"←Hue Shift"}
                  </div>
                </ColorField>
              </p.Stack>
            ) : null}
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eZ3Ci)}
              >
                <ColorField
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
                    {"→Hue Shift"}
                  </div>
                </ColorField>

                {true ? (
                  <InputField
                    data-plasmic-name={"darkLuminance"}
                    data-plasmic-override={overrides.darkLuminance}
                    className={classNames("__wab_instance", sty.darkLuminance)}
                    step={0.001 as const}
                    type={"Number" as const}
                  >
                    {"End Luminance"}
                  </InputField>
                ) : null}
              </p.Stack>
            ) : null}
          </div>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "baseValue",
    "saturation",
    "stepsLighter",
    "stepsDarker",
    "colors",
    "lightLuminance",
    "lightHue",
    "darkHue",
    "darkLuminance"
  ],
  baseValue: ["baseValue"],
  saturation: ["saturation"],
  stepsLighter: ["stepsLighter"],
  stepsDarker: ["stepsDarker"],
  colors: ["colors"],
  lightLuminance: ["lightLuminance"],
  lightHue: ["lightHue"],
  darkHue: ["darkHue"],
  darkLuminance: ["darkLuminance"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  baseValue: typeof InputField;
  saturation: typeof InputField;
  stepsLighter: typeof InputField;
  stepsDarker: typeof InputField;
  colors: typeof Colors;
  lightLuminance: typeof InputField;
  lightHue: typeof ColorField;
  darkHue: typeof ColorField;
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
    baseValue: makeNodeComponent("baseValue"),
    saturation: makeNodeComponent("saturation"),
    stepsLighter: makeNodeComponent("stepsLighter"),
    stepsDarker: makeNodeComponent("stepsDarker"),
    colors: makeNodeComponent("colors"),
    lightLuminance: makeNodeComponent("lightLuminance"),
    lightHue: makeNodeComponent("lightHue"),
    darkHue: makeNodeComponent("darkHue"),
    darkLuminance: makeNodeComponent("darkLuminance"),

    // Metadata about props expected for PlasmicTheme
    internalVariantProps: PlasmicTheme__VariantProps,
    internalArgProps: PlasmicTheme__ArgProps
  }
);

export default PlasmicTheme;
/* prettier-ignore-end */
