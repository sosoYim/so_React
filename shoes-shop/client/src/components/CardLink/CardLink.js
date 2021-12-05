const { React } = window;

// TODO: id, size => image src 변환 함수

const CardLink = ({ id, headline, description, src, label, link }) => {
  return (
    <a href={link} key={id}>
      <div className='card-link__frame' title={label}>
        <div className='card-link__headline'>{headline}</div>
        <div className='card-link__description'>{description}</div>
        <img src={src} alt={label}></img>
      </div>
    </a>
  );
};

export const CardLinks = cardLinks => {
  return <div className='card-link__container'>{cardLinks.map(CardLink)}</div>;
};
