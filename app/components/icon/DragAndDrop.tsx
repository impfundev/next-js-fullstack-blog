import { JSX, SVGProps } from "react";

export function IconDragDrop(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M19 11V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2h2" />
      <path d="M13 13l9 3-4 2-2 4-3-9M3 3v.01M7 3v.01M11 3v.01M15 3v.01M3 7v.01M3 11v.01M3 15v.01" />
    </svg>
  );
}

export function IconFile(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6m-.5 14v3h-3v-3H8l4-4 4 4h-2.5M13 9V3.5L18.5 9H13z" />
    </svg>
  );
}
