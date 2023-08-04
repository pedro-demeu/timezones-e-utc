import { Box, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";
import { useState } from "react";
import { SelectEventTimeZone, SelectTimeZone } from "../../Components";
import { CustomTimeZonesType } from "../../types/pages";
import { utcToZonedTime } from "date-fns-tz";

interface EventPageProps {
  timezone: CustomTimeZonesType;
  setUserTimezone: (userTimezone: CustomTimeZonesType) => void;
}
export const EventPage = ({ timezone, setUserTimezone }: EventPageProps) => {
  const [dateTimeEvent, setDateTimeEvent] = useState<string>(
    "2023-12-12T22:00:00.000Z"
  );
  const [eventTimeZone, setEventTimeZone] =
    useState<CustomTimeZonesType>("America/Sao_Paulo");

  const translateTimeZone = (timezone: CustomTimeZonesType) => {
    if (timezone === "America/Sao_Paulo") return "São Paulo";
    if (timezone === "Europe/Lisbon") return "Lisboa";
    if (timezone === "America/Los_Angeles") return "Los Angeles";
  };

  const showConverted = dateTimeEvent
    ? utcToZonedTime(dateTimeEvent, eventTimeZone)
    : null;

  console.log({
    dateTimeEvent: new Date(dateTimeEvent).toISOString(),
    eventTimeZone,
    showConverted,
  });
  return (
    <Box>
      <DateTimePicker
        label="Selecione a data do show"
        sx={{
          width: "100%",
          mb: "2rem",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "& .MuiFormLabel-root": {
            color: "#ffffff",
          },
          "& .MuiInputBase-input": {
            color: "#ffffff",
          },

          "& .MuiSvgIcon-root": {
            color: "#ffffff",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "&:hover .MuiFormLabel-root": {
            color: "#ffffff",
          },
        }}
        onChange={(newValue) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setDateTimeEvent(new Date(newValue.$d).toISOString());
        }}
      />
      <SelectEventTimeZone setEventTimeZone={setEventTimeZone} />

      {showConverted && (
        <Typography
          sx={{
            border: "1px solid #ffffff",
            borderRadius: "5px",
            padding: "1rem",
            mt: "2rem",
            mb: "2rem",
          }}
        >
          Não perca o Show
          <Typography display="flex" color="primary" fontWeight="bold">
            UTC: {translateTimeZone(eventTimeZone)}
          </Typography>
          <Typography display="flex" color="primary" fontWeight="bold">
            Data: {format(new Date(showConverted), "dd/MM/yyyy HH:mm:ss")}
          </Typography>
        </Typography>
      )}
      <br />
      <br />
      <br />
      <SelectTimeZone userTimeZone={timezone} setUserTimezone={setUserTimezone} />
    </Box>
  );
};
