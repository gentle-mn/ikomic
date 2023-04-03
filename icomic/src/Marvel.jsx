import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

const Marvel = () => {
  const [url, setUrl] = useState(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=42e6997b4f521fe13fe79814348b7ab4&hash=93307ea3c29f47a445edb714e21123b2"
  );
  const [item, setItem] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
      console.log(res.data.data.results);
    };
    fetch();
  }, [url]);
  return <div>{!item ? <p>NotFound</p> : <Card data={item} />}</div>;
};

export default Marvel;
