import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Follow({ following, follower }) {
  // const { userId } = useParams();

  // const user = follow.filter;

  // const showFollower = () => setShowFollow(1);
  // const showFollowing = () => setShowFollow(2);

  // useEffect(async () => {
  //   try {
  //     const res = await getAllFollow()
  //     setFollow()
  //   } catch (error) {

  //   }
  // }, [userId]);

  // follow.map((el) => {
  //   console.log(el.followingId);
  // });

  return (
    <>
      <div className="flex flex-row gap-2">
        <h1 className="font-medium">{follower || 0}</h1>
        {follower > 1 ? <h1>followers</h1> : <h1>follower</h1>}
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-medium">{following || 0}</h1>
        <h1>following</h1>
      </div>
    </>
  );
}
