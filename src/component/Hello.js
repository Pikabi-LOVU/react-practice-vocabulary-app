//export default fuction Hello () {} 한줄로도 okay

import World from "./World";

const Hello = () => {
  //function () is okay too
  return (
    <>
      <h1> Hello </h1>
      <World />
    </>
  );
};

export default Hello;
