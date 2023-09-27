import "./ItemListConteiner.css";

export const ItemListContainer = ({ greetings }) => {
  return (
    <div className="greetings">
      <h1>{greetings}</h1>
    </div>
  );
};
