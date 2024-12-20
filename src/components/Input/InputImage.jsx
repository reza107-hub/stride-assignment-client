const InputImage = ({register, registerName}) => {
  return (
    <input
      type="file"
      className="file-input file-input-bordered file-input-info w-full max-w-xs"
      {...register(registerName)}
    />
  );
};

export default InputImage