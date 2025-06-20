import React from 'react';

const Card = ({ item }) => {
  const { title, category, price, img, desc } = item;

  const cardStyle = {
    width: '700px',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    transform: 'scale(1)',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.02)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  };

  const imageStyle = {
    width: '40%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const categoryStyle = {
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    color: '#6366f1',
    fontWeight: '600',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#111827',
  };

  const descStyle = {
    fontSize: '0.95rem',
    color: '#4b5563',
    lineHeight: '1.4',
  };

  const priceStyle = {
    color: '#f59e0b',
    fontWeight: '700',
    fontSize: '1rem',
    marginTop: '4px',
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={hovered ? cardHoverStyle : cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} alt={title} style={imageStyle} />
      <div style={contentStyle}>
        <div style={categoryStyle}>{category}</div>
        <div style={titleStyle}>{title}</div>
        <p style={descStyle}>{desc}</p>
        <p style={priceStyle}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
