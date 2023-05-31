function Heart({ heartColor }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g transform="translate(-4569 -12477)">
        <g transform="translate(4426.526 11483.359)">
          <path
            d="M160.081,1003.5a2.888,2.888,0,0,0-3.035-2.857,3.034,3.034,0,0,0-2.768,1.793,3.032,3.032,0,0,0-2.768-1.793,2.888,2.888,0,0,0-3.035,2.857,4.266,4.266,0,0,0,.759,2.143c1.572,2.3,4.661,5,5.045,5,.441,0,3.455-2.712,4.956-5A6.25,6.25,0,0,0,160.081,1003.5Z"
            fill={heartColor}
            stroke="#2e2e2e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
        <rect
          width="24"
          height="24"
          transform="translate(4569 12477)"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default Heart;
