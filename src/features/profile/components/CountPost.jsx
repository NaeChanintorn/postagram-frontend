import useProfile from "../hooks/use-profile";
import * as userApi from "../../../api/user";

export default function CountPost() {
  const { userProfile, post, setUserProfile, getPostCount } = useProfile();

  const countPost = userProfile?.posts.length;

  //   useEffect(() => {
  //     // if (countPost > 0) {
  //     //   return;
  //     // }

  //     const fetchCountPost = async () => {
  //       // console.log(userId);
  //       const res = await userApi.getProfileByTargetUserId(userId);
  //       //   console.log(res);
  //       // console.log(userData);
  //       setUserProfile(res.data.profileUser);
  //     };
  //     fetchCountPost();
  //     if (userProfile) {
  //       getPostCount(userProfile.id);
  //       // console.log(userData);
  //     }
  //   }, [userId]);

  return (
    <div className="flex flex-row gap-2">
      <div className="font-medium">{countPost}</div>
      {countPost > 1 ? <h1>posts</h1> : <h1>post</h1>}
    </div>
  );
}
