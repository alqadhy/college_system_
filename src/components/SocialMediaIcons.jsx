function SocialMediaIcons({ websites }) {
  return (
    <div className="social-media-icons">
      {
        websites.map((ele, i) => {
          return <a key={i} style={{ ["--website-theme-color"]: ele.theme_color }} className="social-link"
            href={ele.link} target="_blank">{ele.icon}</a>;
        })
      }
    </div >
  );
}

export default SocialMediaIcons;