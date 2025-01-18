import '../styles/components/Card.scss';

const Card = ({
  image,
  extraImage,
  name,
  titleText,
  quoteText,
  backgoundColor,
  profileNameColor,
  profileTitleColor,
  cardTitleColor,
  cardQuoteColor,
  className,
}) => {
  const renderExtraImage = () => {
    return extraImage ? <img className="image-extra" src={extraImage} alt="" /> : null;
  };

  return (
    <div className={`card ${className}`} style={{ background: backgoundColor }}>
      <div className="wrapper-profile">
        <img className="image-card" src={image} alt="" />
        <div className="wrapper-profile-text">
          <p className="text-profile-name" style={{ color: profileNameColor }}>
            {name}
          </p>
          <small className="text-profile-title" style={{ color: profileTitleColor }}>
            Verified Graduate
          </small>
        </div>
      </div>
      <p className="text-card-title" style={{ color: cardTitleColor }}>
        {titleText}
      </p>
      <p className="text-card-quote" style={{ color: cardQuoteColor }}>
        {quoteText}
      </p>
      {renderExtraImage()}
    </div>
  );
};

export default Card;
