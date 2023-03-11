// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dczqNaFYoArv9QmtqhGLsR
// Component: -6Apr9wI1O5
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import Input from "../../Input"; // plasmic-import: 434vhQcoRkn/component
import { SketchPicker } from "react-color"; // plasmic-import: HV4wY_pYon/codeComponent

import { DarkValue, useDark } from "./PlasmicGlobalVariant__Dark"; // plasmic-import: AsCuTyckBi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicColorField.module.css"; // plasmic-import: -6Apr9wI1O5/css

export type PlasmicColorField__VariantMembers = {
  showPanel: "showPanel";
};

export type PlasmicColorField__VariantsArgs = {
  showPanel?: SingleBooleanChoiceArg<"showPanel">;
};

type VariantPropType = keyof PlasmicColorField__VariantsArgs;
export const PlasmicColorField__VariantProps = new Array<VariantPropType>(
  "showPanel"
);

export type PlasmicColorField__ArgsType = {
  children?: React.ReactNode;
  placeholder?: string;
  value?: any;
  step?: any;
  onScrub?: string;
};

type ArgPropType = keyof PlasmicColorField__ArgsType;
export const PlasmicColorField__ArgProps = new Array<ArgPropType>(
  "children",
  "placeholder",
  "value",
  "step",
  "onScrub"
);

export type PlasmicColorField__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  input?: p.Flex<typeof Input>;
  display?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  picker?: p.Flex<typeof SketchPicker>;
  cover?: p.Flex<"div">;
};

export interface DefaultColorFieldProps {
  children?: React.ReactNode;
  placeholder?: string;
  value?: any;
  step?: any;
  onScrub?: string;
  showPanel?: SingleBooleanChoiceArg<"showPanel">;
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

function PlasmicColorField__RenderFunc(props: {
  variants: PlasmicColorField__VariantsArgs;
  args: PlasmicColorField__ArgsType;
  overrides: PlasmicColorField__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

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

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showPanel",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.showPanel
          : undefined
      },

      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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

        <Input
          data-plasmic-name={"input"}
          data-plasmic-override={overrides.input}
          className={classNames("__wab_instance", sty.input, {
            [sty.inputshowPanel]: hasVariant($state, "showPanel", "showPanel")
          })}
          endIcon={
            <svg
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
          onChange={(...args) => {
            p.generateStateOnChangeProp($state, ["input", "value"])(
              (e => e.target?.value).apply(null, args)
            );
          }}
          showStartIcon={true}
          startIcon={
            <div
              data-plasmic-name={"display"}
              data-plasmic-override={overrides.display}
              className={classNames(projectcss.all, sty.display)}
            />
          }
          step={args.step}
          type={"Text" as const}
          value={p.generateStateValueProp($state, ["input", "value"])}
        />

        {(
          hasVariant($state, "showPanel", "showPanel")
            ? (() => {
                try {
                  return true;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return true;
                  }
                  throw e;
                }
              })()
            : false
        ) ? (
          <SketchPicker
            data-plasmic-name={"picker"}
            data-plasmic-override={overrides.picker}
            className={classNames("__wab_instance", sty.picker, {
              [sty.pickershowPanel]: hasVariant(
                $state,
                "showPanel",
                "showPanel"
              )
            })}
            color={"#00FFFF" as const}
          />
        ) : null}
        {(hasVariant($state, "showPanel", "showPanel") ? true : true) ? (
          <div
            data-plasmic-name={"cover"}
            data-plasmic-override={overrides.cover}
            className={classNames(projectcss.all, sty.cover, {
              [sty.covershowPanel]: hasVariant($state, "showPanel", "showPanel")
            })}
          />
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "input", "display", "svg", "picker", "cover"],
  text: ["text"],
  input: ["input", "display", "svg"],
  display: ["display"],
  svg: ["svg"],
  picker: ["picker"],
  cover: ["cover"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  input: typeof Input;
  display: "div";
  svg: "svg";
  picker: typeof SketchPicker;
  cover: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColorField__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColorField__VariantsArgs;
    args?: PlasmicColorField__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicColorField__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicColorField__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicColorField__ArgProps,
          internalVariantPropNames: PlasmicColorField__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicColorField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColorField";
  } else {
    func.displayName = `PlasmicColorField.${nodeName}`;
  }
  return func;
}

export const PlasmicColorField = Object.assign(
  // Top-level PlasmicColorField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    input: makeNodeComponent("input"),
    display: makeNodeComponent("display"),
    svg: makeNodeComponent("svg"),
    picker: makeNodeComponent("picker"),
    cover: makeNodeComponent("cover"),

    // Metadata about props expected for PlasmicColorField
    internalVariantProps: PlasmicColorField__VariantProps,
    internalArgProps: PlasmicColorField__ArgProps
  }
);

export default PlasmicColorField;
/* prettier-ignore-end */
