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
import Field from "../../Field"; // plasmic-import: AIPmHdmqsY/component
import Colors from "../../Colors"; // plasmic-import: dyZl0Y5DD8/component
import Color from "../../Color"; // plasmic-import: YczP2_j8Fh/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_color_tool.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
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
  freeBox?: p.Flex<"div">;
  baseValue?: p.Flex<typeof Field>;
  saturation?: p.Flex<typeof Field>;
  stepsLighter?: p.Flex<typeof Field>;
  stepsDarker?: p.Flex<typeof Field>;
  lightStepDistance?: p.Flex<typeof Field>;
  darkStepDistance?: p.Flex<typeof Field>;
  colors?: p.Flex<typeof Colors>;
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
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root
        )}
      >
        {true ? (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {true ? (
              <Field
                data-plasmic-name={"baseValue"}
                data-plasmic-override={overrides.baseValue}
                className={classNames("__wab_instance", sty.baseValue)}
              >
                {"Base Color(hex)"}
              </Field>
            ) : null}
            {true ? (
              <Field
                data-plasmic-name={"saturation"}
                data-plasmic-override={overrides.saturation}
                className={classNames("__wab_instance", sty.saturation)}
              >
                {"Saturation(±)"}
              </Field>
            ) : null}
            {true ? (
              <Field
                data-plasmic-name={"stepsLighter"}
                data-plasmic-override={overrides.stepsLighter}
                className={classNames("__wab_instance", sty.stepsLighter)}
              >
                {"Steps Lighter"}
              </Field>
            ) : null}
            {true ? (
              <Field
                data-plasmic-name={"stepsDarker"}
                data-plasmic-override={overrides.stepsDarker}
                className={classNames("__wab_instance", sty.stepsDarker)}
              >
                {"Steps Darker"}
              </Field>
            ) : null}
            {true ? (
              <Field
                data-plasmic-name={"lightStepDistance"}
                data-plasmic-override={overrides.lightStepDistance}
                className={classNames("__wab_instance", sty.lightStepDistance)}
              >
                {"Light Step Distance"}
              </Field>
            ) : null}
            {true ? (
              <Field
                data-plasmic-name={"darkStepDistance"}
                data-plasmic-override={overrides.darkStepDistance}
                className={classNames("__wab_instance", sty.darkStepDistance)}
              >
                {"Dark Step Distance"}
              </Field>
            ) : null}
          </div>
        ) : null}
        {true ? (
          <Colors
            data-plasmic-name={"colors"}
            data-plasmic-override={overrides.colors}
            className={classNames("__wab_instance", sty.colors)}
          >
            <Color className={classNames("__wab_instance", sty.color__calWr)} />

            <Color className={classNames("__wab_instance", sty.color__qotr1)} />

            <Color className={classNames("__wab_instance", sty.color__qxMe)} />
          </Colors>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "baseValue",
    "saturation",
    "stepsLighter",
    "stepsDarker",
    "lightStepDistance",
    "darkStepDistance",
    "colors"
  ],
  freeBox: [
    "freeBox",
    "baseValue",
    "saturation",
    "stepsLighter",
    "stepsDarker",
    "lightStepDistance",
    "darkStepDistance"
  ],
  baseValue: ["baseValue"],
  saturation: ["saturation"],
  stepsLighter: ["stepsLighter"],
  stepsDarker: ["stepsDarker"],
  lightStepDistance: ["lightStepDistance"],
  darkStepDistance: ["darkStepDistance"],
  colors: ["colors"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  baseValue: typeof Field;
  saturation: typeof Field;
  stepsLighter: typeof Field;
  stepsDarker: typeof Field;
  lightStepDistance: typeof Field;
  darkStepDistance: typeof Field;
  colors: typeof Colors;
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
    /* Specify args directly as props*/ Omit<
      PlasmicTheme__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
    freeBox: makeNodeComponent("freeBox"),
    baseValue: makeNodeComponent("baseValue"),
    saturation: makeNodeComponent("saturation"),
    stepsLighter: makeNodeComponent("stepsLighter"),
    stepsDarker: makeNodeComponent("stepsDarker"),
    lightStepDistance: makeNodeComponent("lightStepDistance"),
    darkStepDistance: makeNodeComponent("darkStepDistance"),
    colors: makeNodeComponent("colors"),

    // Metadata about props expected for PlasmicTheme
    internalVariantProps: PlasmicTheme__VariantProps,
    internalArgProps: PlasmicTheme__ArgProps
  }
);

export default PlasmicTheme;
/* prettier-ignore-end */
