import { utcToZonedTime } from "date-fns-tz";
import { useState } from "react";
import { TabPages } from "./Components";
import { Box, Typography } from "@mui/material";
import { CustomTimeZonesType } from "./types/pages";

type DataProps = {
  user: {
    createdAt: string;
  };
  showRockStar: {
    datetime: string;
    timezone: string;
  };
};
const data: DataProps = {
  user: {
    createdAt: new Date().toISOString(),
  },
  showRockStar: {
    // Importante manter em UTC a data para não ter dor de cabeça
    datetime: "2024-02-12T22:00:00.000Z", // É bom manter as coisas separadas, datetime é o horário do show, timezone é o fuso horário do show
    timezone: "Europe/Lisbon", // Fuso horário do show
  },
};
function App() {
  const [userTimezone, setUserTimezone] =
    useState<CustomTimeZonesType>("America/Sao_Paulo");

  const createdAtConverted = utcToZonedTime(data.user.createdAt, userTimezone);
  // const showConverted = utcToZonedTime(
  //   data.showRockStar.datetime,
  //   data.showRockStar.timezone
  // );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Header></Header>
      <TabPages
        timezone={userTimezone}
        setUserTimezone={setUserTimezone}
        createdAtConverted={createdAtConverted}
      />
      <Footer></Footer>
    </Box>
  );
}

export default App;

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: "#9C384F",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <Typography>Apenas Dark mode</Typography>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#333",
        width: "100vw",
        height: "5vh",
        display : "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>
        Feito com ❤️ por{" "}
        <a href="https://github.com/pedro-demeu" target="_blank" style={{
          color: "#9C384F",
          fontWeight: "bold",

        }}>
          Pedro Demeu
        </a>
      </Typography>
    </Box>
  );
};
