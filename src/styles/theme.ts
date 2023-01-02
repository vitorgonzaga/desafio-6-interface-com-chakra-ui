import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    lightText: {
      "500": "#F5F8FA"
    },
    darkText: {
      "500": "#47585B"
    },
    infoText: {
      "500": "#999999",
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "#47585B",
      },
    },
  },
});
