import Search from "../../../assets/icons/search.svg?react";
import Menu from "../../../assets/icons/menu.svg?react";
import Input from "../../../components/UI/Input";
import CardRow from "../../../components/CardRow";

const Searchbar = () => {
  return (
    <CardRow >
      <div className="flex items-center  ">
        <Search className="w-4 h-4" />
        <Input
          placeholder="search here..."
          className="focus-visible:border-none border-none shadow-none"
        />
      </div>
      <Menu />
    </CardRow>
  );
};

export default Searchbar;
