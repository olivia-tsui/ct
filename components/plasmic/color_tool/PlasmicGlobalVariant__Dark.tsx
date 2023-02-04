// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type DarkValue = "_true" | "_false";
export const DarkContext = React.createContext<DarkValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useDark() {
  return React.useContext(DarkContext);
}

export default DarkContext;
/* prettier-ignore-end */
