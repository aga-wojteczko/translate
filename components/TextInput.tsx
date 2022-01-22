import React from 'react';

type TextInputProps = {
  onChange: () => void
}

export const TextInput = (props: TextInputProps) => {
  const { onChange } = props;
  // TODO please move placeholder to props, so it can be passed from the translate.tsx.
  // You should be able to do it by looking on how onChange is passed, remeber to set a proper type for this property
  return (
    <input onChange={onChange} type="text" placeholder="translation" />
  )
};
