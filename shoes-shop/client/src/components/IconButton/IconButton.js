const { React } = window;

const labels = {
  hamburger: '메뉴',
  cart: '장바구니',
};

export const IconButton = ({ shape, size, color }) => {
  const d =
    shape === 'hamburger'
      ? 'M0 0H14V2H0V0ZM0 5H14V7H0V5ZM14 10H0V12H14V10Z'
      : 'M11.0173 3.00143H13H14V4.00143V13.0005V14.0005H13H1H0V13.0005V4.00143V3.00143H1H2.98286C3.4261 1.27523 4.99261 -0.000518799 6.85708 -0.000518799H7.14313C9.00761 -0.000518799 10.5741 1.27523 11.0173 3.00143ZM8.87517 2.99914H5.12504C5.47081 2.40154 6.117 1.99948 6.85708 1.99948H7.14313C7.88321 1.99948 8.52939 2.40153 8.87517 2.99914ZM2 12.0005V5.00143H12V12.0005H2Z';
  return (
    <button className='icon-button' title={labels[shape]}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill='none'>
        <path fillRule='evenodd' clipRule='evenodd' d={d} fill={color} />
      </svg>
    </button>
  );
};

IconButton.defaultProps = {
  shape: 'hamburger',
  size: 14,
  color: '#242CF8',
};
