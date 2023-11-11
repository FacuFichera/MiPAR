const ItemCount = ({
  cantidad,
  handleAgregarProducto,
  handleRestarProducto,
  handleAgregar,
}) => {
  return (
    <div>
      <div className="item-count">
        <button onClick={handleRestarProducto}>+</button>
        <p>{cantidad}</p>
        <button onClick={handleAgregarProducto}>-</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>
        Agregar al carro
      </button>
    </div>
  );
};

export default ItemCount;
