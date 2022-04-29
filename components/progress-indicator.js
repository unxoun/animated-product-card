import styled from "@emotion/styled";

// Components
import CircularProgress from "@mui/material/CircularProgress";

const Main = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ccc;
  .MuiCircularProgress-root {
    margin-bottom: 15px;
  }
`;
export default function ProgressIndicator({
  visibility = true,
  message = "Loading...",
}) {
  return (
    <>
      {visibility ? (
        <Main>
          <CircularProgress />
          <div>{message}</div>
        </Main>
      ) : null}
    </>
  );
}
