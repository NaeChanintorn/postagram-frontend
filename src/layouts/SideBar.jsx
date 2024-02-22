import { Link } from "react-router-dom";
import Postagram from "../components/Postagram";
import Topic from "../components/Topic";
import { CreateIcon, HomeIcon, MoreIcon, SearchIcon } from "../icons/Icons";
import Avatar from "../components/Avatar";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { CreateModal } from "../components/Modal";
import Dropdown from "../components/Dropdown";
import useAuth from "../hooks/use-auth";
import useProfile from "../features/profile/hooks/use-profile";

export default function SideBar() {
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { logout, userData } = useAuth();
  // console.log(userData);

  const handleOpenSearchBar = () => {
    setSearch(!search);
  };

  return (
    <>
      {!search ? (
        <div className="z-40 flex flex-col justify-between w-[17.5vw] h-screen border-r border-gray-300 fixed">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row">
              <Link to="/">
                <Postagram className="font-cur mt-10 mx-5 text-2xl font-extrabold bg-gradient-to-r from-purple-800 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text hover:cursor-pointer" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <Topic
                  symbol={
                    <>
                      <HomeIcon />
                    </>
                  }
                  title="Home"
                />
              </Link>
              <Topic
                onClick={handleOpenSearchBar}
                symbol={
                  <>
                    <SearchIcon fill="#000000" />
                  </>
                }
                title="Search"
              />
              {/* MODAL CREATE */}
              <Topic
                symbol={
                  <>
                    <CreateIcon />
                  </>
                }
                title="Create"
                onClick={() => setModal(true)}
              />
              {modal && <CreateModal onClose={() => setModal(false)} />}
              {/* ---------------------------------------- */}
              <Link to={`/profile/${userData?.id}`}>
                <Topic
                  symbol={
                    <>
                      <Avatar src={userData?.profileImage} />
                    </>
                  }
                  title="Profile"
                />
              </Link>
            </div>
          </div>
          <div className="mb-3 relative">
            <Topic
              symbol={
                <>
                  <MoreIcon />
                </>
              }
              title="More"
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown && (
              <Dropdown onClick={logout} extendClassName="left-4 -top-11" />
            )}
          </div>
        </div>
      ) : (
        <SearchBar />
      )}
    </>
  );
}
