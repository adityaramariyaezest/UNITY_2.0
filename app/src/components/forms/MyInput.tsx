interface MyInputProps {
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
}

export const MyInput = ({ type, name, id, placeholder }: MyInputProps) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id ?? name}
        className="text-sm leading-6  text-gray-900 capitalize hidden"
      >
        {name}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id ?? name}
          className="capitalize block w-full rounded-sm border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
