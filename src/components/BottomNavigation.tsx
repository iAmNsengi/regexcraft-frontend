import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BottomNavigation = ({
  backLink,
  frontLink,
}: {
  backLink?: string;
  frontLink?: string;
}) => {
  return (
    <div className="flex items-center justify-between py-7 lg:justify-around">
      <div className="font-bold underline">
        <Link
          to={`/${backLink}`}
          className="flex flex-col items-start font-bold text-gray-900 underline"
        >
          {backLink && (
            <>
              <IoMdArrowRoundBack className="text-2xl" />
              <p>{backLink} </p>
            </>
          )}
        </Link>
      </div>
      <div>
        <Link
          to={`/${frontLink}`}
          className="flex flex-col items-end font-bold text-gray-900 underline"
        >
          {frontLink && (
            <>
              <IoMdArrowRoundForward className="text-2xl" />
              <p>{frontLink}</p>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
