function IcoCrew({ onGreen }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(0 -0.005)">
        <rect
          width="32"
          height="32"
          transform="translate(0 0.005)"
          fill="none"
        />
        <g transform="translate(5 5.005)">
          <path
            d="M840.795,403.6a.6.6,0,1,1-.6-.6A.6.6,0,0,1,840.795,403.6Z"
            transform="translate(-832.937 -394.387)"
            fill={onGreen}
            stroke={onGreen}
            strokeWidth="1"
          />
          <path
            d="M850.981,403.6a.6.6,0,1,1-.6-.6A.6.6,0,0,1,850.981,403.6Z"
            transform="translate(-839.438 -394.387)"
            fill={onGreen}
            stroke={onGreen}
            strokeWidth="1"
          />
          <path
            d="M861.166,403.6a.6.6,0,1,1-.6-.6A.6.6,0,0,1,861.166,403.6Z"
            transform="translate(-845.937 -394.387)"
            fill={onGreen}
            stroke={onGreen}
            strokeWidth="1"
          />
          <path
            d="M832.149,378.029A9.11,9.11,0,0,0,824.1,391.4l-2.519,4.185,5.3-1.015-.007-.01a9.11,9.11,0,1,0,5.278-16.534Z"
            transform="translate(-821.576 -378.029)"
            fill="none"
            stroke={onGreen}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M854.151,405.209a7.7,7.7,0,0,1,.21,7.578l2.129,3.536-4.48-.858.005-.008a7.69,7.69,0,0,1-11.027-2.248"
            transform="translate(-834.331 -395.888)"
            fill="none"
            stroke={onGreen}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
}

export default IcoCrew;
