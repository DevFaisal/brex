const CustomButton = () => {
  return (
    <div className="flex w-lg py-2 px-2 focus:ring-1 ring-blue-500 border-[1px] border-gray-300 rounded-2xl">
      <input className="flex-1 text-sm outline-none pl-3" type="text" placeholder="Enter your work mail" />
      <button className="bg-[#F46934] px-3 py-3 rounded-lg text-sm text-white">Get Started</button>
    </div>
  );
};

export default CustomButton;
