import React from "react";
import ToasterProvider from "./ToasterProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ToasterProvider>{children}</ToasterProvider>;
}
