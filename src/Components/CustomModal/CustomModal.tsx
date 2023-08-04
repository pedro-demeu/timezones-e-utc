import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PageNumberType } from "../../types/pages";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  width: "70%",
  height: "auto",
  overflow: "overlay",
  bgcolor: "#242424",
  color: "#ffffff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IModal {
  open: boolean;
  handleClose: () => void;
}
interface CustomIModal extends IModal {
  pageNumber: PageNumberType;
}
export const CustomModal = ({
  open,
  handleClose,
  pageNumber,
}: CustomIModal) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        overflow: "scroll",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
        {pageNumber !== 0 ? (
          <ModalEventPage {...{ open, handleClose }} />
        ) : (
          <ModalUserCreatedPage {...{ open, handleClose }} />
        )}
      </Box>
    </Modal>
  );
};

const ModalEventPage = ({ handleClose }: IModal) => {
  return (
    <Box>
      <Typography variant="h4" component="h1">
        Data Fixa em Timezone Específico
      </Typography>
      <br />
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        O conceito de ter uma data fixa em um fuso horário específico é útil em
        eventos como shows, onde a data e hora do evento são definidas
        previamente e não mudam, independentemente do local em que o show é
        realizado. <br />A estabilidade da data permite que o usuário saiba
        exatamente quando o show acontecerá, evitando confusões causadas por
        mudanças de fuso horário.
      </Typography>
      <br />
      <Typography>
        o usuário pode experimentar o conceito de ter uma data de show fixa em
        um fuso horário específico. Isso garante que a data e hora do evento
        permaneçam constantes, fornecendo informações precisas e confiáveis
        sobre o show. O uso dessa funcionalidade é especialmente útil em eventos
        agendados, onde a sincronização temporal é fundamental para que o
        usuário não perca o evento.
      </Typography>
      <br />
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#9C384F",
        }}
      >
        Exemplo:
      </Typography>
      <Box
        sx={{
          border: "1px solid #9C384F",
          borderRadius: "5px",
          padding: "1rem",
        }}
      >
        Quando o usuário seleciona uma data para o show usando o seletor de
        data, a página registra essa data com base no fuso horário específico
        escolhido pelo usuário. Isso significa que a data e hora escolhidas são
        tratadas como absolutas e não são afetadas por mudanças de fuso horário do usuário.
        Porque o fuso horário do evento já foi definido.
      </Box>
      <br />
      <br />

      <br />
      <Button variant="contained" color="primary" onClick={() => handleClose()}>
        Fechar
      </Button>
    </Box>
  );
};

const ModalUserCreatedPage = ({ handleClose }: IModal) => {
  return (
    <Box>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Flexibilidade da Data com Fuso Horário
      </Typography>
      <br />
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        A data de criação do usuário é flexível e pode ser alterada conforme o
        fuso horário selecionado porque diferentes regiões do mundo têm horários
        distintos. Cada fuso horário possui uma hora local específica, o que
        significa que um mesmo momento no tempo pode corresponder a horas
        diferentes em locais diferentes. <br />
        <br />
        Ao considerar essa variação dos fusos horários, é necessário que a data
        seja ajustada para que ela permaneça consistente, independentemente da
        localização geográfica do usuário e isso é fundamental para garantir que
        a informação seja precisa e confiável, especialmente em situações onde a
        sincronização temporal é importante, como agendamento de compromissos,
        rastreamento de eventos e outros registros de atividades. <br />
        <br />
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#9C384F",
          }}
        >
          Exemplo:
        </Typography>
        <Box
          sx={{
            border: "1px solid #9C384F",
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          Imagine, por exemplo, que um usuário tenha sido criado em uma
          determinada data e hora no fuso horário A. Se essa data não fosse
          flexível e permanecesse inalterada, ao mudar para o fuso horário B, a
          data de criação seria exibida como se tivesse ocorrido em um momento
          diferente. Essa falta de flexibilidade poderia causar confusão e
          dificultar a interpretação correta das informações. Ao ajustar a data
          automaticamente com base no fuso horário selecionado, o sistema
          garante que a informação permaneça consistente e reflita o momento
          exato em que o usuário foi criado, independentemente da sua
          localização geográfica. Isso torna a experiência do usuário mais
          fluida e confiável, permitindo que ele tenha informações precisas em
          qualquer lugar do mundo.
        </Box>
        <br />
        <br />
        Em resumo, a flexibilidade da data com base no fuso horário é essencial
        para manter a estabilidade e a consistência das informações, evitando
        confusões e tornando a experiência do usuário mais confiável e precisa.
      </Typography>

      <br />
      <Button variant="contained" color="primary" onClick={() => handleClose()}>
        Fechar
      </Button>
    </Box>
  );
};
