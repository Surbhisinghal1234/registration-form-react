import React, { useState } from "react";
import { objectValue } from "../Constant";

const EditTest = () => {
  const [fieldValue, setFieldValue] = useState(Object.values(objectValue));
  const [key, setKey] = useState(Object.keys(objectValue));
  const [editable, setEditable] = useState(false);
  console.log(fieldValue, objectValue, "8");
  const handleChange = (e, edititem, editIndex) => {
    console.log(e, edititem, "l");

    setFieldValue((prev) => {
      return prev?.map((item, index) => {
        editIndex === index ?  e.target.value  : item;
      });
    });
  };

  return (
    <div>
      {key?.map((item, index) => {
        return <label>{item}</label>;
      })}
      {fieldValue.map((item, index) => {
        return (
          <input
            type="text"
            onDoubleClick={() => {
              setEditable(true);
            }}
            value={item}
            onChange={(e) => {
              handleChange(e, item, index);
            }}
            readOnly={!editable}
          />
        );
      })}
      {/* <button
        onDoubleClick={}
      >
        edit
      </button> */}
    </div>
  );
};

export default EditTest;
