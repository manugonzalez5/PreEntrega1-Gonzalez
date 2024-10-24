export const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt="" style={{ width: "300px" }} />
    </div>
  );
};
