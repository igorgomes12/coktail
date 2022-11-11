import React from "react";
import {
  Container,
  Text,
  Logo,
  Text1,
  Input,
  Botao,
} from "./styles";
import { serviceDrink } from "../service";

const App: React.FC = () => {
  const [digitado, setDigitado] = React.useState("");
  const [strDrink, setStrDrink] = React.useState("");
  const [strInstructions, setstrInstructions] = React.useState("");
  const [strDrinkThumb, setstrDrinkThumb] = React.useState("");
  const [strIngredient1, setstrIngredient1] = React.useState("");
  const [strIngredient2, setstrIngredient2] = React.useState("");
  const [strIngredient3, setstrIngredient3] = React.useState("");
  const [strIngredient4, setstrIngredient4] = React.useState("");
  const [clicado, setClicado] = React.useState(false);

  const ingredientes = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  ];
  const listaIngredientes = ingredientes.map((i) => <p>{i}</p>);

  const handleDrink = async () => {
    const data = await serviceDrink(digitado);
    setStrDrink(data.drinks[0].strDrink);
    setstrInstructions(data.drinks[0].strInstructions);
    setstrDrinkThumb(data.drinks[0].strDrinkThumb);
    setstrIngredient1(data.drinks[0].strIngredient1);
    setstrIngredient2(data.drinks[0].strIngredient2);
    setstrIngredient3(data.drinks[0].strIngredient3);
    setstrIngredient4(data.drinks[0].strIngredient4);
    setClicado(true);
  };

  return (
    <Container>
       <Text>Digite sua Bebida:</Text>

      <Input
        type="text"
        onChange={(e) => setDigitado(e.target.value)}
        placeholder="Digite sua bebida"
      />
      <Botao id="btn1" onClick={handleDrink}>
        Buscar
      </Botao>
      {clicado ? (
        <>
          <Text1>{strDrink}</Text1>

          <Text>Imagem</Text>

          <Logo src={strDrinkThumb} alt="logo" />

          <Text>Ingredientes</Text>
          <Text1>{listaIngredientes}</Text1>

          <Text>Como montar seu Drink: </Text>
          <Text1>{strInstructions}</Text1>
        </>
      ) : (
        <Container></Container>
      )}
    </Container>
  );
};

export default App;
