import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const FILTER_TYPES = [
  {
    filterType: "all",
  },
  { filterType: "full-stack" },
  { filterType: "front-end" },
  { filterType: "back-end" },
];
const StyledButton = styled(Button)(({ theme }) => ({
  minHeight: "35px",
  maxWidth: "120px",
}));

export const FilterButton = ({ handleFilterEvent, currentFilterType }) => {
  console.log(currentFilterType);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto 2rem auto",
        gap: "1rem",
        minHeight: "50px",
        maxWidth: "750px",
      }}
    >
      {FILTER_TYPES.map(({ filterType, index }) => {
        return (
          <>
            {currentFilterType !== filterType ? (
              <StyledButton size="medium" onClick={handleFilterEvent} key={filterType} id={filterType}>
                {filterType}
              </StyledButton>
            ) : null}
          </>
        );
      })}
    </div>
  );
};
