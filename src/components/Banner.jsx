export function Banner({ image }) {
  return (
    <div className="banner-container">
      <dir className="filter"></dir>
      <img src={image} alt="banniere" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}
