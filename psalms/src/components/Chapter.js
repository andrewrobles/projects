import { useEffect, useState } from "react";
import Link from '@mui/material/Link'
import api from "../api/index";

const Chapter = (props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const content = await api.useChapter(props.index);
      setText(content);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {/* <Link href="/" index={props.index}/> */}
      <Link href="/">{`Psalm ${props.index}`}</Link>
      <div>{text}</div>
    </div>
  );
};

export default Chapter;
