import { useState } from "react";

export default function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
