import { Box, TextField } from "@mui/material";
import HeadingBox from "./components/HeadingBox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StyleTextfield from "./components/StyledTextfield";

// import { useForm } from "react-hook-form";

const RegisterForm = () => {
  // const { ,formState} = useForm();
  // const {errors} = formState;
  const [currentSection, setCurrentSection] = useState(1);
  const { handleSubmit, register, watch, formState } = useForm();
  const handleNextButton = (e) => {
    e.preventDefault();
    setCurrentSection(currentSection + 1);
  };
  const handleData = handleSubmit((data) => {
    console.log(data);
  });

  console.log(currentSection, formState.errors, "27");
  return (
    <Box>
      <form noValidate>
        {currentSection === 1 && (
          <Box>
            <HeadingBox heading={"Personal Details"} />
            <StyleTextfield
              name={"name"}
              label={"Name"}
              register={register}
              placeholder={"your name"}
            />
            <StyleTextfield
              name={"email"}
              label={"Email"}
              register={register}
              placeholder={"your email"}
              pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
              type={"email"}
            />
            <StyleTextfield
              name={"phoneNo"}
              label={"PhoneNo"}
              register={register}
              placeholder={"your phone no"}
              type={"number"}
            />
            <StyleTextfield
              name={"DateOfBirth"}
              label={"Date of Birth"}
              register={register}
              type={"date"}
            />
            <button onClick={handleNextButton}>Next </button>
          </Box>
        )}
        {/* //Residental Detail */}
        {currentSection === 2 && (
          <Box>
            <StyleTextfield
              name={"parentName"}
              label={"Parent / Guardian / Spouse Name"}
              register={register}
              placeholder={"name"}
              type={"text"}
            />
            <StyleTextfield
              name={"parentPhoneNo"}
              label={"Parent / Guardian / Spouse Phone"}
              register={register}
              type={"number"}
            />
            <button onClick={handleNextButton}>Next </button>
          </Box>
        )}
        {/* educational detail */}
        {currentSection === 3 && (
          <>
            <Box>
              <StyleTextfield
                name={"LastAttainedQualification"}
                label={"Last Attained Qualification"}
                register={register}
                type={"text"}
              />
            </Box>
            <button onClick={handleData} type="submit">
              Submit
            </button>
          </>
        )}
      </form>
    </Box>
  );
};

export default RegisterForm;
