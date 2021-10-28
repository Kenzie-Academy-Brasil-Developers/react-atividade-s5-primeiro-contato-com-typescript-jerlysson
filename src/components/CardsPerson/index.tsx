const CardsPerson = ({ person }: any) => {
  return (
    <>
      <h2>{person.name}</h2>
      <p>
        <b>Idade:</b> {person.idade}
      </p>
      <p>
        <b>Hobby:</b> {person.hobby}
      </p>
    </>
  );
};

export default CardsPerson;
