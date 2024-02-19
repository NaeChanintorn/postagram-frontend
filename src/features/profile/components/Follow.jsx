import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllFollow } from "../../../api/follow";

export default function Follow({ countFollower, countFollowing }) {
  const { userId } = useParams();
  const [showFollow, setShowFollow] = useState(1);
  const [follow, setFollow] = useState([]);

  const following = follow.filter((el) => +el.followerId === +userId);
  const follower = follow.filter((el) => +el.followingId === +userId);
  const user = follow.filter;

  const showFollower = () => setShowFollow(1);
  const showFollowing = () => setShowFollow(2);

  // useEffect(async () => {
  //   try {
  //     const res = await getAllFollow()
  //     setFollow()
  //   } catch (error) {

  //   }
  // }, [userId]);

  return (
    <>
      <div className="flex flex-row gap-2">
        <h1 className="font-medium">{follower.length}</h1>
        {follower?.length > 1 ? <h1>followers</h1> : <h1>follower</h1>}
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-medium">{following?.length}</h1>
        <h1>following</h1>
      </div>
    </>
  );
}
