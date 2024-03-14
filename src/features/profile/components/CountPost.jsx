import useProfile from "../hooks/use-profile";
import * as userApi from "../../../api/user";

export default function CountPost() {
  const { userProfile } = useProfile();

  // console.log(userProfile);

  // const isDeleted = userProfile?.posts?.filter((el) => el.isDeleted === false);
  // const countPost = isDeleted?.length;
  const countPost = userProfile?.posts?.length;

  return (
    <div className="flex flex-row gap-2">
      {countPost && <div className="font-medium">{countPost}</div>}
      {countPost > 1 ? <h1>posts</h1> : <h1>post</h1>}
    </div>
  );
}
