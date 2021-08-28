import { useMemo } from 'react';
// import { ValidationRules } from 'react-hook-form';

export const useRequiredValidation = () =>
  useMemo(
    () => ({
      required: 'This field is required',
    }),
    []
  );

// export const useRequiredAndMinMaxValidation = (min: number, max: number) =>
//   useMemo<ValidationRules>(
//     () => ({
//       required: `This field is required`,
//       min: { value: min, message: `Value should be greater then ${min}` },
//       max: { value: max, message: `Value should be lower then ${max}` },
//     }),
//     [max, min],
//   );
