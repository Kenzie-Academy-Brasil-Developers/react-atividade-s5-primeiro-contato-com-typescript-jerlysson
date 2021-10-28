import { useState } from "react";
import CardsPerson from "../CardsPerson";
import { Input } from "../Input";
import { CardBox, ContainerCards } from "./style";

interface Person {
  name: string;
  idade: number;
  hobby: string;
}
const Form = () => {
  const [list, setList] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [idade, setIdade] = useState(0);
  const [hobby, setHobby] = useState("");

  const handleSubmit = () => {
    const person = { name, idade, hobby };

    setList([...list, person]);
  };

  return (
    <>
      <Input
        onChange={(e) => setName(e.target.value)}
        label={"Nome"}
        placeholder="insira seu nome"
      />
      <Input
        onChange={(e) => setIdade(Number(e.target.value))}
        label={"Idade"}
        placeholder="Sua Idade"
      />
      <Input
        onChange={(e) => setHobby(e.target.value)}
        label={"Hobby"}
        placeholder="Seu Hobby"
      />
      <button onClick={handleSubmit}>Adcionar</button>
      <ContainerCards>
        <ul>
          {list.map((person) => (
            <CardBox>
              <CardsPerson person={person} />
            </CardBox>
          ))}
        </ul>
      </ContainerCards>
    </>
  );
};
export default Form;
