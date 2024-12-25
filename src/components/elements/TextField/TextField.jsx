function TextField({
  name,
  title,
  type = "text",
  register,
  errors,
  errMessage,
  pattern,
  minLength,
  maxLength,
}) {
  return (
    <div className="flex-grow text-[12px] lg:text-[14px]">
      <div className="relative rounded-[5px] border border-black/50 px-[10px] py-[7px] lg:py-[9.5px]">
        <input
          type={type}
          placeholder=""
          className="peer w-full border-none outline-none"
          {...register(name, {
            required: errMessage,
            pattern,
            minLength,
            maxLength,
          })}
        />
        <label className="pointer-events-none absolute right-[5px] top-auto -translate-y-[20px] scale-90 bg-white px-[5px] transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[20px] peer-focus:scale-90">
          {title}
        </label>
      </div>
      {errors && errors[name] && (
        <span className="right-[10px] top-full text-red">{errMessage}</span>
      )}
    </div>
  );
}

export default TextField;
