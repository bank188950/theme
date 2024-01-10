import React from "react";

import ThemenProvider from "./ThemeProvider";

function LoginProvider({ children }: { children: React.ReactNode }) {
  return <ThemenProvider>{children}</ThemenProvider>;
}

export default LoginProvider;
