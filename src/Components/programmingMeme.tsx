import React, { useState, useEffect } from "react";

const Memesapi = () => {
  const [memes, setMemes] = useState<any[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "609ae40dcamsh4d85f0784315d18p1894d0jsn772df768d63a",
        "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
      },
    };

    fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
      .then((response) => response.json())
      .then((response) => setMemes(response.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <p style={{ textAlign: "center", height: "60px" }}></p>
      <footer
        style={{
          minHeight: "100%",
          display: "flex",
        }}
      >
        {memes.map((meme) => (
          <img
            src={meme.image}
            alt={meme.title}
            key={meme.id}
            style={{
              display: "flex",
              maxWidth: "20%",
              minWidth: "20%",
              maxHeight: "5%",
              height: "24em",
            }}
          />
        ))}
      </footer>
      <p style={{ textAlign: "center", height: "60px" }}>
        {" "}
        Dennis matheuwezen - 2022
      </p>
    </div>
  );
};

export default Memesapi;
