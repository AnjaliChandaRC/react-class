import React, { useState } from "react";
import { dataValue, questionsFirst, questionsSecond } from "../common/Helper";

const ReactPractice = () => {
  var a;
  a = [9, 10, 11, 12, 13, 14, 15, 16];
  console.log(a[2]);
  var b;
  b = [{ N: "P" }, { N: "M" }, { N: "T" }];
  console.log(b[2].N);
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const handleChange = () => {
    setData(dataValue);
    setData2(!data2);
  };
  return (
    <>
      <div className="py-5 my-5 text-center">
        <div>
          {/* QUESTIONS ONE */}
          <h1>QUESTIONS ONE</h1>
          <p className="fs-1 text-danger">{a[2]}</p>
        </div>
        <div className="mt-5">
          {/* QUESTIONS TWO */}
          <h1>QUESTIONS TWO</h1>
          <p className="fs-1 text-danger">{b[2].N}</p>
        </div>
        <div className="mt-5">
          {/* QUESTIONS THREE */}
          <h1>QUESTIONS ONE MAP</h1>
          {questionsFirst.map((val, index) => {
            return (
              <>
                <div key={index}>
                  <p className="text-danger fs-1">{val.numbers}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-5">
          {/* QUESTIONS FOUR */}
          <h1>QUESTIONS TWO MAP</h1>
          {questionsSecond.map((val, index) => {
            return (
              <>
                <div key={index}>
                  <p className="text-danger fs-1">{val.N}</p>
                </div>
              </>
            );
          })}
        </div>

        {/* QUESTIONS FIVE */}
        <h1 className="mt-5">QUESTIONS THIRD</h1>
        <div className="pt-3">
          <button
            className="text-danger bg-transparent rounded py-1 px-4 fs-3 mb-3"
            onClick={() => handleChange()}
          >
            Run Map{" "}
          </button>
          {data2 ? (
            <>
              {dataValue.map((val, index) => {
                return (
                  <>
                    <div key={index}>
                      <h2 className="text-danger">{val.val}</h2>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ReactPractice;
