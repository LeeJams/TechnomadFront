function IcoPerson({ onGreen }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g transform="translate(-4517 -12477)">
        <g transform="translate(4483 12151.771)">
          <g transform="translate(41 332.23)">
            <circle
              cx="2.225"
              cy="2.225"
              r="2.225"
              transform="translate(2.694)"
              fill="none"
              stroke={onGreen || "#2e2e2e"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <path
              d="M2.541,19.448c0-4.147,3.1-4.426,5.023-4.449s4.815.448,4.815,4.449"
              transform="translate(-2.541 -9.067)"
              fill="none"
              stroke={onGreen || "#2e2e2e"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </g>
          <rect
            width="16"
            height="16"
            transform="translate(38 329.229)"
            fill="none"
          />
        </g>
        <rect
          width="24"
          height="24"
          transform="translate(4517 12477)"
          fill="none"
        />
      </g>
    </svg>

    // <svg width="32" height="32" viewBox="0 0 32 32">
    //   <g transform="translate(7 7.004)">
    //     <circle
    //       cx="4.071"
    //       cy="4.071"
    //       r="4.071"
    //       transform="translate(4.929)"
    //       fill="none"
    //       stroke={onGreen || "#2e2e2e"}
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="1.5"
    //     />
    //     <path
    //       d="M2.541,23.14c0-7.589,5.674-8.1,9.19-8.14s8.81.82,8.81,8.14"
    //       transform="translate(-2.541 -4.145)"
    //       fill="none"
    //       stroke={onGreen || "#2e2e2e"}
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="1.5"
    //     />
    //   </g>
    //   <rect width="32" height="32" fill="none" />
    // </svg>
  );
}

export default IcoPerson;
