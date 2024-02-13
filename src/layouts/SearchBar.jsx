import { Link } from "react-router-dom";
import PostagramIcon, {
  CloseIcon,
  CreateIcon,
  HomeIcon,
  MoreIcon,
  SearchIcon,
} from "../icons/Icons";
import Avatar from "../components/Avatar";
import { useState } from "react";
import SideBar from "./SideBar";
import CreateModal from "../components/CreateModal";
import FriendProfile from "../components/FriendProfile";

const defaultClassName =
  "hover:cursor-pointer hover:bg-gray-100 flex justify-center items-center rounded-lg p-3 mx-3";

export default function SearchBar() {
  const [search, setSearch] = useState(true);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);

  const handleOpenSearchBar = () => {
    setSearch(!search);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteInput = (e) => {
    setInput("");
  };

  return (
    <>
      {search === true ? (
        <div className="flex flex-row fixed">
          <div className="flex flex-col justify-between w-[4vw] h-screen border-r border-gray-300">
            <div className="flex flex-col gap-10">
              <div className={`mt-6 ${defaultClassName}`}>
                <Link to="/">
                  <PostagramIcon />
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <div className={defaultClassName}>
                  <Link to="/">
                    <HomeIcon />
                  </Link>
                </div>
                <div
                  onClick={handleOpenSearchBar}
                  className={`border border-gray-300 ${defaultClassName}`}
                >
                  <SearchIcon />
                </div>

                {/* CREATE MODAL */}
                <div
                  className={defaultClassName}
                  onClick={() => setModal(true)}
                >
                  <CreateIcon />
                </div>
                {modal && <CreateModal onClose={() => setModal(false)} />}

                {/* ----------------------------------- */}
                <div className={defaultClassName}>
                  <Link to="/profile/:userId">
                    <Avatar />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`mb-7 ${defaultClassName}`}>
              <MoreIcon />
            </div>
          </div>

          {/* Search Popup Bar */}
          <div className="w-[20.5vw] h-screen border-r border-gray-300 rounded-2xl shadow-[8px_0px_20px_1px_#00000024]">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-medium my-6 ml-5">
                <h1>Search</h1>
              </div>
              <div className="relative mx-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 font-light text-sm focus:outline-none px-3 py-3 w-[19vw] rounded-lg"
                  value={input}
                  onChange={handleChangeInput}
                />
                <button
                  onClick={handleDeleteInput}
                  className="absolute top-3 right-3 focus:outline-none"
                >
                  <CloseIcon />
                </button>
              </div>
              <hr />
              <div className="flex flex-row justify-around gap-52">
                <h1 className="font-medium text-sm">Recent</h1>
                <h1 className="font-medium text-sm text-blue-500 hover:cursor-pointer">
                  Clear all
                </h1>
              </div>
              <FriendProfile name="John Doe" symbol="&#x2715;" />
              <FriendProfile name="Jane Doe" symbol="&#x2715;" />
              <FriendProfile name="John Ddsadasd" symbol="&#x2715;" />
            </div>
          </div>
        </div>
      ) : (
        <SideBar />
      )}
    </>
  );
}