function StepCard({ icon, title }) {
  return (
    <div className="step-card card">
      <div className="icon-container">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default StepCard;