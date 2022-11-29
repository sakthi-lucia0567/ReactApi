import * as React from "react";
import fetchData from "./utils/fetchData";
import { useEffect, useState } from "react";

/**
 *  ? Alternative for promises
 * todo : Alternative for promises
 *
 */

// const apiData = fetchData("https://dog.ceo/api/breeds/image/random/50");
// console.log(`"this is api data" ${apiData}`);
// console.log("this is Gallery");

/**
 *  ? Alternative for promises
 * todo : instead we can useEffect
 */

const Gallery = () => {
  //const data = apiData.read();
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const funCall = () => {
      fetch("https://dog.ceo/api/breeds/image/random/50")
        .then((res) => res.json())
        .then((res) => {
          setImage(res.message);
          setLoading(false);
        });
    };
    funCall();
  }, []);
  console.log(image);
  return (
    <div className="gallery">
      {loading ? (
        <>Hello World</>
      ) : (
        image.map((item, index) => (
          <img alt={`index`} src={item} key={`gallery-${index + 1}`} />
        ))
      )}
    </div>
  );
};

export default Gallery;
