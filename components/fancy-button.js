//==========================================================
//==========================================================
//==========================================================
//==========================================================
//==========================================================
// This is a wraper for the MUI Button to apply some-
// stylings.
//==========================================================

import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const Main = styled(Button)`
  border-radius: 7px;
  padding: 6px 20px;
  background: rgb(241, 54, 90);
  background: linear-gradient(
    0deg,
    rgba(241, 54, 90, 1) 0%,
    rgba(255, 92, 104, 1) 36%,
    rgba(251, 134, 108, 1) 100%
  );
  font-family: "BarlowCondensed-Regular";
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;

export default function FancyButton({ children, startIcon }) {
  return (
    <Main className="buy-button" variant="contained" startIcon={startIcon}>
      {children}
    </Main>
  );
}
