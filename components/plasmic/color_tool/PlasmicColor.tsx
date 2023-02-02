// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dczqNaFYoArv9QmtqhGLsR
// Component: YczP2_j8Fh
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_color_tool.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicColor.module.css"; // plasmic-import: YczP2_j8Fh/css

export type PlasmicColor__VariantMembers = {};
export type PlasmicColor__VariantsArgs = {};
type VariantPropType = keyof PlasmicColor__VariantsArgs;
export const PlasmicColor__VariantProps = new Array<VariantPropType>();

export type PlasmicColor__ArgsType = {};
type ArgPropType = keyof PlasmicColor__ArgsType;
export const PlasmicColor__ArgProps = new Array<ArgPropType>();

export type PlasmicColor__OverridesType = {
  root?: p.Flex<"div">;
  name?: p.Flex<"div">;
  hexCode?: p.Flex<"div">;
};

export interface DefaultColorProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicColor__RenderFunc(props: {
  variants: PlasmicColor__VariantsArgs;
  args: PlasmicColor__ArgsType;
  overrides: PlasmicColor__OverridesType;

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
      <div
        data-plasmic-name={"name"}
        data-plasmic-override={overrides.name}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.name)}
      >
        {"Name"}
      </div>

      <div
        data-plasmic-name={"hexCode"}
        data-plasmic-override={overrides.hexCode}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.hexCode
        )}
      >
        {"#HexCode"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "name", "hexCode"],
  name: ["name"],
  hexCode: ["hexCode"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  name: "div";
  hexCode: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColor__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColor__VariantsArgs;
    args?: PlasmicColor__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicColor__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicColor__ArgsType,
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
          internalArgPropNames: PlasmicColor__ArgProps,
          internalVariantPropNames: PlasmicColor__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicColor__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColor";
  } else {
    func.displayName = `PlasmicColor.${nodeName}`;
  }
  return func;
}

export const PlasmicColor = Object.assign(
  // Top-level PlasmicColor renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _name: makeNodeComponent("name"),
    hexCode: makeNodeComponent("hexCode"),

    // Metadata about props expected for PlasmicColor
    internalVariantProps: PlasmicColor__VariantProps,
    internalArgProps: PlasmicColor__ArgProps
  }
);

export default PlasmicColor;
/* prettier-ignore-end */
