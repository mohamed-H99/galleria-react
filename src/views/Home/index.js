/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Home({ loading, data }) {
  const [columns, setColumns] = useState([]);

  const calcColumns = () => {
    const len = data?.length;
    for (let i = 6; i >= 1; i--) {
      if (len % i === 0) {
        const colCount = i,
          colLength = len / i,
          cols = [];
        for (let j = 1; j <= colCount; j++) {
          cols.push({
            id: j,
            items: data?.slice((j - 1) * colLength, j * colLength),
          });
        }
        setColumns(cols);
        break;
      }
    }
  };

  useEffect(() => {
    calcColumns();
  }, [data]);

  return (
    <div className="_home">
      <div className="_container-fluid">
        <div className="_columns gap-4 grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {columns?.map((col) => (
            <div className={`_column flex flex-col gap-4`} key={col.id}>
              {col.items?.map((obj) => (
                <Fade key={obj.id}>
                  <Card data={obj} />
                </Fade>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
