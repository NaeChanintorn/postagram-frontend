import { Link } from "react-router-dom";
import Postagram from "../components/Postagram";
import Topic from "../components/Topic";
import { CreateIcon, HomeIcon, MoreIcon, SearchIcon } from "../icons/Icons";
import Avatar from "../components/Avatar";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CreateModal from "../components/CreateModal";

export default function SideBar() {
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);

  const handleOpenSearchBar = () => {
    setSearch(!search);
  };

  return (
    <>
      {!search ? (
        <div className="flex flex-col justify-between w-[17.5vw] h-screen border-r border-gray-300 fixed">
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
                    <SearchIcon />
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
              <Link to="/profile/:userId">
                <Topic
                  symbol={
                    <>
                      <Avatar />
                    </>
                  }
                  title="Profile"
                />
              </Link>
            </div>
          </div>
          <div className="mb-3">
            <Topic
              symbol={
                <>
                  <MoreIcon />
                </>
              }
              title="More"
            />
          </div>
        </div>
      ) : (
        <SearchBar />
      )}
    </>
  );
}
