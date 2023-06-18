import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    url:
      "https://assets.ccbp.in/frontend/react-js/mango-img.png",
  },
  {
    id: 3,
    url:
      "https://assets.ccbp.in/frontend/react-js/banana-img.png",
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="CardBoard">
        <div className="Board" ref={drop}>
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
        <div className="Board" >
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
        <div className="Board" >
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DragDrop;
