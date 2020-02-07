import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const IndexPage = ({images}) => {
  const [selected, setSelected] = useState(new Set());
  const [size, setSize] = useState(78);
  const [sex, setSex] = useState('neutral');

  return (
    <div className="index-page">
      <header className="flex">
        <div className="flex-grow">Diverse UI</div>
        <div>About</div>
        <div>Sketch Plugin</div>
        <div>Submit</div>
      </header>
      <div className="sidebar">
        <div>slider at {size}</div>
        <label>
          Sex
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="neutral">Neutral</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
        <p>Download</p>
        <button type="button">All</button>
        <button type="button" disabled={selected.size === 0}>Selected ({selected.size})</button>
      </div>
      <div className="images">
        {
          images.map((image, i) => (
            <button
              key={i}
              onClick={() => {
                const newSelected = new Set(selected);
                newSelected.delete(image) || newSelected.add(image);
                setSelected(newSelected);
              }}
            >{image}</button>
          ))
        }
      </div>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js');
  // const json = await res.json();
  // return {photos: json.stargazers_count};
  return {
    images: ['bob', 'joe', 'darn']
  };
}

export default IndexPage;
