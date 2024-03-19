import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useController } from "react-hook-form";

const ControlledRadioButtonsGroup = ({
  label,
  name,
  defaultValue,
  control,
  data,
}) => {
  const {
    field: { onChange, value },
  } = useController({ name, control, defaultValue });

  return (
    <FormControl>
      <FormLabel id={`radio-group-${name}`}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={`radio-group-${name}`}
        name={name}
        value={value || ""}
        onChange={onChange}
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        {data?.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item?.value}
              control={<Radio />}
              label={item?.name}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default ControlledRadioButtonsGroup;
