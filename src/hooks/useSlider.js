import { useState } from "react"; //Custom hook -> samo logika koji radim ako tu istu logiku zelim reuse-at.

const useSlider = (sliderArr) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return [x, goLeft, goRight];
};

export default useSlider;
