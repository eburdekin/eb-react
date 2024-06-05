const SkillCards = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {items.map((item, index) => {
        const Icon = item.Icon;

        return (
          <div
            key={index}
            className="relative group block p-1 sm:p-2 h-full w-full"
          >
            <div className="skill-hover text-white rounded-md w-full p-1 sm:p-2 overflow-hidden group-hover:ring-1 ring-gray-600 relative z-20 transition-all duration-500">
              <div className="py-2 z-50 relative space-y-4">
                <Icon className="w-6 sm:w-8 h-6 sm:h-8 mx-auto" />
                <p className="text-md lg:text-lg text-center text-gray-300">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCards;
