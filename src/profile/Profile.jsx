import React, { useState } from "react";
import { User } from "./Constant";
import "./custom.css";
function Profile() {
  const [data, setData] = useState(Object.keys(User));

  const value = data.slice(4, 12);
  value.splice(4, 1);
  const DataValue = Object.values(User);

  const DataValue2 = DataValue.slice(4, 12);
  DataValue2.splice(4, 1);

  function changeFormat(value) {
    if (typeof value === "string") {
      const name2 = value?.split("");
      const firstLetter = name2[0]?.toUpperCase();
      name2?.splice(0, 1, firstLetter);
      const formatedText = name2?.join("");
      return formatedText;
    } else {
      return value;
    }
  }
  return (
    <>
      <div className="bg-gray-200">
        <div className="w-[85%] mx-auto py-4 rounded">
         
          <div className="bg-[#bf6d4fcc] flex justify-center ">
            <div className="py-3 px-[3rem] flex flex-col items-center">
              <img
                className="w-28 h-28 rounded-full bg-gray-500 shadow-lg shadow-gray-500/50"
                src="./img.webp"
                alt="image"
              />
              <h1 className="text-white text-2xl font-semibold ">Profile</h1>
            </div>
            <div className=" heading text-white m-auto font-semibold text-2xl pl-[3rem]">
              <h1 className="drop-shadow-2xl">Full Stack development</h1>
              <h5>fullstacklearning@.com</h5>
            </div>
          </div>

          <div className="bg-gray-100 pb-8">
            <div className=" grid grid-cols-2 mx-auto justify-between font-bold text-3xl py-5 pl-2 ">
              <h1>Personal Details</h1>
              <h1>Additional Details</h1>
            </div>
            <div className="grid grid-cols-2 gap-2 pl-2">
              <div className="flex gap-2 ">
                <div className=" flex flex-col gap-2  font-semibold  ">
                  {data?.slice(0, 4)?.map((userData, index) => {
                    return <div key={index}>{changeFormat(userData)}:</div>;
                  })}
                </div>
                <div className="flex flex-col gap-2 ">
                  {DataValue?.slice(0, 4)?.map((userData, index) => {
                    return <div key={index}>{changeFormat(userData)}</div>;
                  })}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 font-semibold ">
                  {value?.map((user, index) => {
                    return (
                      <>
                        <div key={index}>{changeFormat(user)}:</div>
                      </>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-2 ">
                  {DataValue2?.map((user, index) => {
                    return (
                      <>
                        <div key={index}>{changeFormat(user)}</div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
