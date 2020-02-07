import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Image from '../components/image';

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
            <Image
              key={i}
              size={size}
              selected={selected.has(image)}
              {...image}
              onClick={() => {
                const newSelected = new Set(selected);
                newSelected.delete(image) || newSelected.add(image);
                setSelected(newSelected);
              }}
            />
          ))
        }
      </div>
      <style jsx>{`
        .index-page {
          display: grid;
          grid-template:
            "header  header"
            "sidebar images"
        }

        header {
          grid-area: header;
        }

        .sidebar {
          grid-area: sidebar;
        }

        .images {
          grid-area: images;
        }
      `}</style>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js');
  // const json = await res.json();
  // return {photos: json.stargazers_count};
  const data = '[{"gender":"female","url":"female-72.jpg"},{"gender":"male","url":"male-72.png"},{"gender":"male","url":"male-70.JPG"},{"gender":"male","url":"male-47.jpg"},{"gender":"female","url":"female-38.jpg"}]';
  return {
    images: JSON.parse(data)
  };
}

export default IndexPage;
