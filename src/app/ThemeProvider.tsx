import React from "react";

import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
      violet: "bg-violet-light hover:bg-violet-medium",
      box: "bg-one hover:bg-two",
    },
  },
};

function ThemenProvider({ children }: { children: React.ReactNode }) {
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
}

export default ThemenProvider;
