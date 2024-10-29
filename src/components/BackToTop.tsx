import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface IBackToTopProps {
  onClick: () => void;
}

const BackToTop: React.FC<IBackToTopProps> = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-5 py-1 right-4 px-3 rounded bg-black"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowUp} size="2xl" color="#49d6db" />
    </button>
  );
};

export default BackToTop;
