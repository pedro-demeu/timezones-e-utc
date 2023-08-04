import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { SelectTimeZone } from "../../Components";
import { CustomTimeZonesType } from "../../types/pages";

interface UserCreatedPageProps {
  timezone: CustomTimeZonesType;
  setUserTimezone: (userTimezone: CustomTimeZonesType) => void;
  createdAtConverted: Date;
}
export const UserCreatedPage = ({
  timezone,
  setUserTimezone,
  createdAtConverted,
}: UserCreatedPageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
        }}
      >
        {timezone}
      </Typography>
      <br />
      <Typography
        variant="h2"
        sx={{
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Usuário criado em: <br />
        {format(createdAtConverted, "dd/MM/yyyy HH:mm:ss")}
      </Typography>

      <SelectTimeZone
        userTimeZone={timezone}
        setUserTimezone={setUserTimezone}
      />
    </Box>
  );
};
