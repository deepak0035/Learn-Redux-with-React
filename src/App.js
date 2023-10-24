import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber } from './redux/actions/index'

const App = () =>
{
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);
  console.log(myState);

  const handleIncrement = (event) =>
  {
    event.preventDefault();
    dispatch(incNumber(1))
  }

  const handleDecrement = (event) =>
  {
       event.preventDefault();
       dispatch(decNumber(1));
    };

  return (
    <div class="flex justify-center items-center h-[100vh]">
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-center">Redux</h1>
        </div>
        <div className="custom-number-input h-10 ">
          <div className="flex items-center justify-center">
            <label
              htmlFor="custom-input-number"
              className=" text-gray-700 text-lg font-semibold "
            >
              Increment/Decrement
            </label>
          </div>

          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              data-action="decrement"
              onClick={handleDecrement}
              disabled={myState<1 && true}
              className="bg-red-700 text-white hover:bg-red-900 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-semibold">−</span>
            </button>
            <input
              className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={myState}
            />
            <button
              data-action="increment"
              onClick={handleIncrement}
              className="bg-green-700 text-white hover:bg-green-900 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-semibold">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
