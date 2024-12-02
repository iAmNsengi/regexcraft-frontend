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
    <div className="flex items-center justify-between lg:justify-around py-7">
      <div className="font-bold underline">
        <Link
          to={`/${backLink}`}
          className="font-bold underline flex flex-col items-start text-gray-900"
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
          className="font-bold underline flex flex-col items-end text-gray-900"
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
