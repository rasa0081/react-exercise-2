const typeColors = {
  fire: "bg-danger",
  water: "bg-info",
  bug: "bg-success",
  normal: "bg-secondary",
  flying: "bg-warning",
};


const PokeCard = ({ name, type, image }) => {
  return (
    <div className="card shadow-sm p-3">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p className={`badge ${typeColors[type] || "bg-primary"}`}>{type}</p>
      </div>
    </div>
  );
};

export default PokeCard;