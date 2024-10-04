export const Card = ({ title, price, stock }) => {
  return (
    <div style={{ width: "200px" }}>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{stock}</p>
    </div>
  );
};
