function StatsBox({ isPlus, number, unit, title }) {
  return (
    <div className="card st-box">
      <p>
        {isPlus ? '+' : ''}
        <span>{number}</span>
        {unit}
      </p>
      <h3>{title}</h3>
    </div>
  );
}

export default StatsBox;