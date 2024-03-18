import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import HeadingBox from "./components/HeadingBox";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StyleTextfield from "./components/StyledTextfield";
import ForwardedTextInput from "./components/StyledTextfield";

// import { useForm } from "react-hook-form";

const RegisterForm = () => {
  // const { ,formState} = useForm();
  // const {errors} = formState;
  const [currentSection, setCurrentSection] = useState(1);
  const [permanentAddress, setPermanentAddress] = useState(false);
  const { handleSubmit, register, watch, formState, setValue, getValues } =
    useForm();
  const errors = formState?.errors;
  const handleNextButton = (e) => {
    e.preventDefault();
    setCurrentSection(currentSection + 1);
  };
  const handleData = handleSubmit((data) => {
    if (Object.keys(errors).length === 0) {
      // If there are no errors, proceed to the next section
      setCurrentSection(currentSection + 1);
    }
    console.log(data, "kkk");
  });
  const values = getValues();
  const handleAddress = () => {
    setPermanentAddress((prev) => !prev);
  };

  useEffect(() => {
    if (permanentAddress === true) {
      setValue("permanentAddress", values?.localAddress);
    } else {
      setValue("permanentAddress", "");
    }
  }, [permanentAddress]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit(handleData)} noValidate>
        {currentSection === 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "10px",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <HeadingBox heading={"Personal Details"} />
            <ForwardedTextInput
              label="Username"
              type="text"
              error={errors?.name ? true : false}
              helperText={errors?.name?.message}
              placeholder="username"
              isRequired
              {...register("name", {
                required: "Name is Required",
              })}
            />
            <ForwardedTextInput
              label="Email"
              type="text"
              error={errors?.email ? true : false}
              helperText={errors?.email?.message}
              placeholder="email"
              isRequired
              {...register("email", {
                required: "Email is Required",
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <ForwardedTextInput
              label="Phone No"
              type="number"
              error={errors?.phoneNo ? true : false}
              helperText={errors?.phoneNo?.message}
              placeholder="phoneNo"
              isRequired
              {...register("phoneNo", {
                required: "PhoneNo is Required",
              })}
            />
            <ForwardedTextInput
              label="DOB"
              type="date"
              error={errors?.dob ? true : false}
              helperText={errors?.dob?.message}
              placeholder="dob"
              isRequired
              {...register("dob", {
                required: "dob is Required",
              })}
            />

            <Button
              sx={{ border: "1px solid black" }}
              onClick={handleNextButton}
            >
              Next{" "}
            </Button>
            <Button
              sx={{ backgroundColor: "blue", color: "white", padding: "10px" }}
              onClick={handleData}
              type="submit"
            >
              Save and next
            </Button>
          </Box>
        )}
        {/* //Residental Detail */}
        {currentSection === 2 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "10px",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <HeadingBox heading={"Parent / Guardian Details"} />
            <ForwardedTextInput
              label="Parent / Guardian / Spouse Name"
              type="text"
              error={errors?.parentName ? true : false}
              helperText={errors?.parentName?.message}
              placeholder="parentName"
              isRequired
              {...register("parentName", {
                required: "parentName is Required",
              })}
            />
            <ForwardedTextInput
              label="Parent / Guardian / Spouse Name"
              type="number"
              error={errors?.parentNo ? true : false}
              helperText={errors?.parentNo?.message}
              placeholder="parentNo"
              isRequired
              {...register("parentNo", {
                required: "parentNo is Required",
              })}
            />

            <Button
              sx={{ border: "1px solid black" }}
              onClick={handleNextButton}
            >
              Next{" "}
            </Button>
            <Button
              sx={{ backgroundColor: "blue", color: "white", padding: "10px" }}
              onClick={handleData}
              type="submit"
            >
              Save and next
            </Button>
          </Box>
        )}
        {/* educational detail */}
        {currentSection === 3 && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <HeadingBox heading={"Residential Details"} />
              <ForwardedTextInput
                label="Local Address"
                type="text"
                error={errors?.localAddress ? true : false}
                helperText={errors?.localAddress?.message}
                placeholder="localAddress"
                isRequired
                {...register("localAddress", {
                  required: "localAddress is Required",
                })}
              />
              <FormControlLabel
                defaultValue={false}
                control={<Switch checked={permanentAddress} />}
                label="same as local"
                onChange={handleAddress}
              />
              <ForwardedTextInput
                label="Permanent Address"
                type="text"
                error={errors?.permanentAddress ? true : false}
                helperText={errors?.permanentAddress?.message}
                placeholder="permanentAddress"
                isRequired
                {...register("permanentAddress", {
                  required: "permanentAddress is Required",
                })}
              />
              <Button
                sx={{ border: "1px solid black" }}
                onClick={handleNextButton}
              >
                Next{" "}
              </Button>
              <Button
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px",
                }}
                onClick={handleData}
                type="submit"
              >
                Save and next
              </Button>
            </Box>
          </>
        )}
        {currentSection === 4 && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <HeadingBox heading={"Educational Details"} />
              <ForwardedTextInput
                label="Designation"
                type="text"
                error={errors?.designation ? true : false}
                helperText={errors?.designation?.message}
                placeholder="permanentAddress"
                isRequired
                {...register("designation", {
                  required: "designation is Required",
                })}
              />
              <ForwardedTextInput
                label="Company"
                type="text"
                error={errors?.company ? true : false}
                helperText={errors?.company?.message}
                placeholder="company"
                isRequired
                {...register("company", {
                  required: "company is Required",
                })}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <HeadingBox heading={"Course Details"} />
              <ForwardedTextInput
                label="Course"
                type="text"
                error={errors?.course ? true : false}
                helperText={errors?.course?.message}
                placeholder="course"
                isRequired
                {...register("course", {
                  required: "course is Required",
                })}
              />
              <ForwardedTextInput
                label="Company"
                type="text"
                error={errors?.company ? true : false}
                helperText={errors?.company?.message}
                placeholder="company"
                isRequired
                {...register("company", {
                  required: "company is Required",
                })}
              />
            </Box>
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                width: "100%",
              }}
              onClick={handleData}
              type="submit"
            >
              Submit
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};

export default RegisterForm;
