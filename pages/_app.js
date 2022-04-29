import "../styles/globals.css";
import { isMobileContext } from "../contexts/is-mobile";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";

function App({ Component, pageProps }) {
  //

  const [isMobileContextValue, setIsMobileContextValue] = useState(false);

  // ===================================================================
  // Handle responsiveness with context - start
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //
  // update "isMobileContext" on screen size change:
  useEffect(() => {
    setIsMobileContextValue(isMobile);
  }, [isMobile]);
  //
  // Handle responsiveness with context - end
  // --------------------------------------------------------------------

  return (
    <isMobileContext.Provider
      value={[isMobileContextValue, setIsMobileContextValue]}
    >
      <main>
        <Component {...pageProps} />
      </main>
    </isMobileContext.Provider>
  );
}

export default App;
