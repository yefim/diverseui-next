import { useState } from 'react';
import { useEntity, useTransact } from 'homebase-react'
import fetch from 'isomorphic-unfetch';

import Image from '../components/image';

const IndexPage = ({images}) => {
  const [userPreferences] = useEntity(1);
  const [transact] = useTransact();

  const gender = userPreferences.get('gender');
  const size = userPreferences.get('size');
  const selected = userPreferences.get('selected');

  return (
    <>
      <div className="sidebar">
        <div>slider at {size}</div>
        <label>
          Gender
          <select
              value={gender}
              onChange={(e) => {
                transact([
                  {
                    userPreferences: {
                      id: 1,
                      gender: e.target.value,
                    }
                  }
                ]);
              }}>
            <option value="everyone">Everyone</option>
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
                transact([
                  {
                    userPreferences: {
                      id: 1,
                      selected: newSelected,
                    }
                  }
                ]);
              }}
            />
          ))
        }
      </div>
    </>
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
