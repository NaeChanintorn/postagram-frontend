import { useState } from "react";
import PostInProfile from "../../../components/PostInProfile";
import { useEffect } from "react";
import * as userApi from "../../../api/user";
import { useParams } from "react-router-dom";
import useProfile from "../hooks/use-profile";

export default function PostProfile() {
  const [posts, setPosts] = useState([]);

  const { userProfile } = useProfile();
  const { userId } = useParams();
  // console.log(userProfile, "..............");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await userApi.getProfileByTargetUserId(userId);
      // console.log(res.data.profileUser.posts);
      setPosts(res.data.profileUser.posts);
    };
    fetchPosts();
  }, [userId]);

  const postRender = posts.map((post) => (
    <PostInProfile key={post.id} src={post.imageOrVideo} />
  ));

  return <div className="grid grid-cols-3 gap-1">{postRender}</div>;
}
