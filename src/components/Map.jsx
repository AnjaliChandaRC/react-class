import React, { useState } from "react";
import { MapDataNew } from "../common/Helper";
const Map = () => {
  const [value, setValue] = useState(false);

  console.log(value);
  return (
    <>
      {/* RUN MAP */}
      <div>
        {MapDataNew.map((val, index) => {
          return (
            <div key={index}>
              <p>{val.name}</p>
              <h1>{val.rollno}</h1>
            </div>
          );
        })}
      </div>
      {/* CALL BUTTON WITH FUNCTION */}
      <div>
        <p className={`${value ? "text-info" : "text-danger"} fs-4`}>{`${
          value ? "Anjali" : "Chanda"
        }`}</p>
        <button onClick={() => setValue(!value)}>Submit</button>
      </div>
    </>
  );
};

export default Map;

// import React, { useState } from "react";

// const array = [
//   {
//     value: "1",
//   },
//   {
//     value: "2",
//   },
//   {
//     value: "3",
//   },
//   {
//     value: "4",
//   },
// ];

// const Map = () => {
//   const [arrayData, setArrayData] = useState([]);
//   const [arrayData2, setArrayData2] = useState(false);

//   const clickHandler = () => {
//     setArrayData(array);
//     setArrayData2(!arrayData2);
//   };
//   return (
//     <div>
//       <button onClick={() => clickHandler()}>ShowData</button>
//       {arrayData2 ? (
//         <>
//           {" "}
//           {arrayData.map((val, i) => {
//             return <h1 key={i}>{val.value}</h1>;
//           })}
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default Map;
