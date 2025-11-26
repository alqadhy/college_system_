function FeatureBox({ icon, title, desc, learnMoreText }) {
  return (
    <div className="ft-box card">
      <div className="icon-container">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="/about" className="learn-more-btn">{learnMoreText}</a>
    </div>
  );
}

export default FeatureBox;