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
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <FormControl>
      <FormLabel id={`radio-group-${name}`}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={`radio-group-${name}`}
        name={name}
        value={value}
        onChange={onChange}
      >
        {data?.map((item) => {
          return (
            <FormControlLabel
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
