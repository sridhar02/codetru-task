export const SidebarItem = ({ iconPath, title, expanded }) => {
  const salesExpanded = false;
  return (
    <div className="flex items-center space-x-2 p-2 text-white cursor-pointer hover:bg-gray-700 w-full">
      <img src={iconPath} alt="" className="h-6 w-6" />
      {expanded && <span className="text-lg text-black pl-4">{title}</span>}
      {title === "Sales" && salesExpanded && (
        <div className="flex flex-col gap-4 border-l-2 border-blue-600">
          <p>Payments</p>
          <p>Bills</p>
        </div>
      )}
    </div>
  );
};
