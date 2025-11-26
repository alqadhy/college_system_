function DepartmentCard({ icon, title }) {
  return (
    <div className="dp-card card">
      {icon}
      <h3>{title}</h3>
    </div>
  );
}

export default DepartmentCard;