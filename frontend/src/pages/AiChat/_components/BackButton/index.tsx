import { ChevronLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router";

const BackButton = () => {
  return (
    <Link to="/">
      <Button
        variant={"outline"}
        size="icon"
        className="size-8 fixed top-4 md:top-8 left-4 md:left-8 z-50"
      >
        <ChevronLeft />
      </Button>
    </Link>
  );
};

export default BackButton;
