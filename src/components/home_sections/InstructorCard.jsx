function InstructorCard({ img, name, department }) {
  return (
    <div className="instr-card">
      <div className="img-wrapper">
        <img src={img} alt={name} title={name} />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <span>{department}</span>
      </div>
    </div>
  );
}

export default InstructorCard;