// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dczqNaFYoArv9QmtqhGLsR
// Component: b0WRjvMctS
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
import { HuePicker } from "react-color"; // plasmic-import: 19Vq7b8_2Z/codeComponent
import Input from "../../Input"; // plasmic-import: 434vhQcoRkn/component

import { DarkValue, useDark } from "./PlasmicGlobalVariant__Dark"; // plasmic-import: AsCuTyckBi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicHueField.module.css"; // plasmic-import: b0WRjvMctS/css

export type PlasmicHueField__VariantMembers = {};

export type PlasmicHueField__VariantsArgs = {};
type VariantPropType = keyof PlasmicHueField__VariantsArgs;
export const PlasmicHueField__VariantProps = new Array<VariantPropType>();

export type PlasmicHueField__ArgsType = {
  children?: React.ReactNode;
  placeholder?: string;
  value?: any;
  step?: any;
  onScrub?: string;
};

type ArgPropType = keyof PlasmicHueField__ArgsType;
export const PlasmicHueField__ArgProps = new Array<ArgPropType>(
  "children",
  "placeholder",
  "value",
  "step",
  "onScrub"
);

export type PlasmicHueField__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  huePicker?: p.Flex<typeof HuePicker>;
  input?: p.Flex<typeof Input>;
};

export interface DefaultHueFieldProps {
  children?: React.ReactNode;
  placeholder?: string;
  value?: any;
  step?: any;
  onScrub?: string;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHueField__RenderFunc(props: {
  variants: PlasmicHueField__VariantsArgs;
  args: PlasmicHueField__ArgsType;
  overrides: PlasmicHueField__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          step: 1 as const
        },
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

  const globalVariants = ensureGlobalVariants({
    dark: useDark()
  });

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
        {p.renderPlasmicSlot({
          defaultContents: "baseValue",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenglobal_dark__true]: hasVariant(
              globalVariants,
              "dark",
              "_true"
            )
          })
        })}

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textglobal_dark__true]: hasVariant(
                globalVariants,
                "dark",
                "_true"
              )
            }
          )}
        >
          {":"}
        </div>

        <HuePicker
          data-plasmic-name={"huePicker"}
          data-plasmic-override={overrides.huePicker}
          className={classNames("__wab_instance", sty.huePicker, {
            [sty.huePickerglobal_dark__true]: hasVariant(
              globalVariants,
              "dark",
              "_true"
            )
          })}
          color={"#00FFFF" as const}
          onChange={args.onScrub}
        />

        <Input
          data-plasmic-name={"input"}
          data-plasmic-override={overrides.input}
          className={classNames("__wab_instance", sty.input, {
            [sty.inputglobal_dark__true]: hasVariant(
              globalVariants,
              "dark",
              "_true"
            )
          })}
          endIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__fjss0)}
              role={"img"}
            />
          }
          startIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__u49Cf)}
              role={"img"}
            />
          }
          step={args.step}
          type={"Number" as const}
        />
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "huePicker", "input"],
  text: ["text"],
  huePicker: ["huePicker"],
  input: ["input"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  huePicker: typeof HuePicker;
  input: typeof Input;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHueField__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHueField__VariantsArgs;
    args?: PlasmicHueField__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHueField__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHueField__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHueField__ArgProps,
          internalVariantPropNames: PlasmicHueField__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHueField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHueField";
  } else {
    func.displayName = `PlasmicHueField.${nodeName}`;
  }
  return func;
}

export const PlasmicHueField = Object.assign(
  // Top-level PlasmicHueField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    huePicker: makeNodeComponent("huePicker"),
    input: makeNodeComponent("input"),

    // Metadata about props expected for PlasmicHueField
    internalVariantProps: PlasmicHueField__VariantProps,
    internalArgProps: PlasmicHueField__ArgProps
  }
);

export default PlasmicHueField;
/* prettier-ignore-end */
