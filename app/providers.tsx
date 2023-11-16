"use client";

import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import store from "@/app/redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}
