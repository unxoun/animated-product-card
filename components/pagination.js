//==========================================================
//==========================================================
//==========================================================
//==========================================================
//==========================================================
// Updates the router.
//==========================================================

import { useRouter } from "next/router";

// Components
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationWrap(props) {
  //
  const router = useRouter();

  // Update the router:
  const handleChange = (e, value) => {
    router.push(`/${props.route}/${value}`);
  };

  //
  return (
    <Stack spacing={2}>
      <Pagination
        // REFACTOR THIS!
        // "count" attr should be dynamic!
        count={20}
        page={props.page}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
}
