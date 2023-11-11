import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <h2 className="main-title">BIENVENIDOS A T-BURGERS</h2>

      <div className="producto">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
