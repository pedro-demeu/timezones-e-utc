import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { CustomTimeZonesType } from "../../types/pages";

export const SelectEventTimeZone = ({
  setEventTimeZone,
}: {
  setEventTimeZone: (timezone: CustomTimeZonesType) => void;
}) => {
  const [active, setActive] = useState<CustomTimeZonesType>('America/Sao_Paulo');

  const handleClick = (timezone: CustomTimeZonesType) => {
    setEventTimeZone(timezone);
    setActive(timezone);
  };

  return (
    <Box
      sx={{
        mt: "2rem",
        mb: "2rem",
      }}
    >
      <Typography>Escolha onde será o show</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          mt: "1rem",
          mb: "1rem",
        }}
      >
        <Button
          variant={active === "America/Sao_Paulo" ? "contained" : "outlined"}
          onClick={() => handleClick("America/Sao_Paulo")}
        >
          São Paulo
        </Button>
        <Button
          variant={active === "Europe/Lisbon" ? "contained" : "outlined"}
          onClick={() => handleClick("Europe/Lisbon")}
        >
          Lisboa
        </Button>
        <Button
          variant={active === "America/Los_Angeles" ? "contained" : "outlined"}
          onClick={() => handleClick("America/Los_Angeles")}
        >
          Los Angeles
        </Button>
      </Box>
    </Box>
  );
};
