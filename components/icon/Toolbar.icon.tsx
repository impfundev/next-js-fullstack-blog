import { JSX, SVGProps } from "react";

export function Bold(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238zm366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z" />
    </svg>
  );
}

export function Italic(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}

export function Strike(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c.2 2.3.4 4.2.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 00-8-7.9z" />
    </svg>
  );
}

export function UnorderedList(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" />
    </svg>
  );
}

export function OrderedList(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z" />
    </svg>
  );
}

export function Undo(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z" />
    </svg>
  );
}