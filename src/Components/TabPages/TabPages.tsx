import { Box, Button } from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import { EventPage, UserCreatedPage } from "../../Pages";
import { CustomModal } from "..";
import { CustomTimeZonesType, PageNumberType } from "../../types/pages";

type TabPagesProps = {
  timezone: CustomTimeZonesType;
  setUserTimezone: (userTimezone: CustomTimeZonesType) => void;
  createdAtConverted: Date;
};

export const TabPages = ({
  timezone,
  setUserTimezone,
  createdAtConverted,
}: TabPagesProps) => {

  const [activeButton, setActiveButton] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pageNumber, setPageNumber] = useState<PageNumberType>(0);

  const handleClick = () => {
    setActiveButton(!activeButton);
    setPageNumber(pageNumber === 0 ? 1 : 0);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
      }}
    >
      {activeButton ? (
        <EventPage
          {...{
            timezone,
            setUserTimezone,
          }}
        />
      ) : (
        <UserCreatedPage
          {...{
            timezone,
            setUserTimezone,
            createdAtConverted,
          }}
        />
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button variant="outlined" onClick={handleClick}>
          {activeButton ? (
            <ArrowBackIcon color="primary" />
          ) : (
            <ArrowForwardIcon color="primary" />
          )}
        </Button>

        <Button variant="outlined" onClick={handleOpen}>
          <InfoIcon />
        </Button>
      </Box>
      <CustomModal
        {...{
          open,
          handleClose,
          pageNumber,
        }}
      />
    </Box>
  );
};
