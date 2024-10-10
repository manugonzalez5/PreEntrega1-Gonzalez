export const Card = ({ title, price, stock }) => {
  return (
    <div
      style={{
        border: "2px solid white",
        width: "200px",
        height: "200px",
        color: "#eee",
        margin: "20px",
        padding: "10px",
      }}
    >
      <h2> {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
      {/* <img src={props.image} alt="" /> */}
    </div>
  );
};
