import { useRouter } from "next/router";
import styled from "@emotion/styled";

// Components
import Button from "@mui/material/Button";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  .message {
    margin-bottom: 15px;
    text-align: center;
  }
  .icon {
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 40px;
  }
`;

export default function NotFound() {
  //

  const router = useRouter();

  //
  const handleContinueClick = (e, value) => {
    // REFACTOR THIS!
    // This should be dynamic!
    router.push("/products/1");
  };

  //
  return (
    <Main className="box">
      <div className="message">
        <div className="icon">: (</div>
        <p>There is nothing intersting here! Sorry.</p>
      </div>
      <Button onClick={handleContinueClick} variant="contained">
        Continue
      </Button>
    </Main>
  );
}
