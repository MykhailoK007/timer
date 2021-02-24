import React from 'react';
interface FormGroupInterface {
  type: string;
  placeholder?: string | undefined;
  value?: string;
}
export const FormGroup = (props: FormGroupInterface) => {
  const { type, placeholder, value } = props;
  return (
    <div className='form__group'>
      {type === 'radio' && (
        <>
          <input type={type} placeholder={placeholder} id='form__remember-me' />
          <label htmlFor='form__remember-me'>Remember me</label>
        </>
      )}
      {type !== 'radio' && <input type={type} placeholder={placeholder} value={value} />}
    </div>
  );
};
