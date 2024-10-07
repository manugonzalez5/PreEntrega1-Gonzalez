export const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    fontSize: "20px",
    color: "#333",
  };

  return <div style={containerStyle}>{greeting}</div>;
};
