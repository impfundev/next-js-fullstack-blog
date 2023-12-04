"use client";

import ThemeRegistry from "@/app/ThemeRegistry";
import { Provider } from "react-redux";
import store from "@/app/lib/redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>
    </Provider>
  );
}
