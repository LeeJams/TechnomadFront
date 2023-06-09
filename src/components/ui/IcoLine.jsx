function IcoLine({ onGreen }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill={onGreen}
          d="M3 12h2v9H3v-8zm14-4h2v13h-2V8zm-7-6h2v19h-2V2z"
        />
      </g>
    </svg>
  );
}

export default IcoLine;
