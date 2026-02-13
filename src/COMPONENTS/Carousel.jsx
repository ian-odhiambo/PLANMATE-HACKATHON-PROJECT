import React from 'react'

const containerStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: '12px 0',
}

const trackStyle = {
  display: 'inline-flex',
  gap: 12,
  animation: 'scroll 14s linear infinite',
}

const cardStyle = {
  display: 'inline-block',
  width: 160,
  background: '#fff',
  padding: 10,
  borderRadius: 8,
  boxShadow: '0 6px 18px rgba(30,41,59,0.06)',
  textAlign: 'center',
}

const imgStyle = { width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }

const Carousel = ({ items = [], onSelect }) => {
  if (!items.length) return null

  // duplicate items to make scrolling smooth
  const display = [...items, ...items]

  return (
    <div style={containerStyle}>
      <style>{`@keyframes scroll { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
      <div style={trackStyle}>
        {display.map((it, idx) => (
          <div key={idx} style={cardStyle} onClick={() => onSelect && onSelect(it)}>
            <img src={it.image} alt={it.name} style={imgStyle} />
            <div style={{ fontWeight: 600 }}>{it.name}</div>
            <div style={{ color: '#6b7280', fontSize: 13 }}>{it.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
