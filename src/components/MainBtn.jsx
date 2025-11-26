function MainBtn({ path, content, isSec = false }) {
  return (
    <a href={path} className={`main-btn ${isSec ? "sec-btn" : ''}`}>{content}</a>
  );
}

export default MainBtn;