export function Banner({ image, title }) {
  return (
    <div className="banner-container">
      <div className="filter"></div>
      <img src={image} alt="banniere" />
      <p dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}
