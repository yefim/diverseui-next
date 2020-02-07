const Image = ({gender, url, size, selected, onClick}) => (
  <button type="button" onClick={onClick}>
    <img
      src={`https://static.diverseui.com/${url}`}
      width={selected ? size * 2 : size}
      height={size}
    />
  </button>
);

export default Image;
