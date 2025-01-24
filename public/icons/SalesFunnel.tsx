const SalesFunnel = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='23' height='23' fill='url(#pattern0_1027_126)' />
      <defs>
        <pattern
          id='pattern0_1027_126'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_1027_126' transform='scale(0.00195312)' />
        </pattern>
        <image
          id='image0_1027_126'
          width='512'
          height='512'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export default SalesFunnel;
