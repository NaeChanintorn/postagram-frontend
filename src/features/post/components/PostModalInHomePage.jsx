import { useState } from "react";
import { useEffect } from "react";
import Avatar from "../../../components/Avatar";
import useProfile from "../../profile/hooks/use-profile";
import usePost from "../hooks/use-post";
import formatTimeAgo from "../../../utilities/time-ago";
import EditComment from "../../../components/EditComment";

export default function PostModalInHomePage({
  onClose,
  postId,
  imageorvideo,
  caption,
  createdAt,
  like,
  src,
  userName,
}) {
  const [input, setInput] = useState("");
  const [onClick, setClick] = useState(false);
  //   console.log(postId);
  //   console.log(src);
  //   console.log(imageorvideo);

  const { commentData, getCommentContext, createCommentContext } = usePost();
  //   console.log(commentData, postData, allPosts);
  //   console.log(userProfile);
  // console.log(commentData);
  const checkImageOrVideo = imageorvideo.endsWith("mp4" || "MPEG-4");

  const handleSubmit = async (e) => {
    setClick((prev) => !prev);
    e.preventDefault();
    await createCommentContext(input, postId);
    setInput("");
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    getCommentContext(postId);
  }, [onClick]);

  let commentRender;

  if (commentData?.length > 0) {
    commentRender = commentData.map((el) => (
      <div key={el.id}>
        <div className="flex flex-row gap-3">
          <div className="ml-5">
            <Avatar src={el.commenter.profileImage} />
          </div>
          <span>{el.commenter.userName}</span>
          <EditComment
            postId={el.postId}
            id={el.commenterId}
            comment={el.comment}
            commentId={el.id}
          />
        </div>
        <div className="ml-14">
          <small>{formatTimeAgo(el.createdAt)}</small>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className="z-5 fixed bg-black inset-0 opacity-65"></div>
      <div className="z-50 fixed inset-0">
        <div className="flex  items-center justify-center min-h-full">
          <div className="bg-white overflow-auto   rounded-sm shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[95vh] w-[62.5vw] flex flex-col ">
            <div className="flex flex-row h-full">
              <div className="w-3/5 h-full">
                {checkImageOrVideo ? (
                  <video className="h-full w-full" src={imageorvideo} />
                ) : (
                  <img
                    className="h-full w-full"
                    src={imageorvideo}
                    alt="image"
                  />
                )}
              </div>
              {/* ---------------RIGTH SIDE--------------- */}
              <div className="w-2/5 flex flex-col">
                <div className="border-b flex flex-row items-center justify-between w-full h-[7vh] ">
                  <div className="flex flex-row gap-3">
                    <Avatar src={src} extendClassName="ml-5" />
                    <span>{userName}</span>
                  </div>
                  <button onClick={onClose} className="font-bold mr-5">
                    &#10005;
                  </button>
                </div>

                <div className="flex flex-col gap-3 w-full mt-5">
                  <div className="flex flex-col ">
                    <div className="flex flex-row gap-3">
                      <div className="ml-5">
                        <Avatar src={src} />
                      </div>
                      <span>{userName}</span>
                      <span>{caption}</span>
                    </div>
                    <div className="ml-14">
                      <small>{formatTimeAgo(createdAt)}</small>
                    </div>
                  </div>

                  {/* MAP ALL COMMENT IN POST */}
                  <div className="flex flex-col overflow-auto h-[62vh] border-b">
                    {commentRender}
                  </div>
                  {/* ----------------------*/}

                  {/* FOOTER */}
                  <div className="h-[16vh] flex flex-col gap-5 pt-5 ">
                    <div className="h-[5vh] flex flex-row gap-1 ml-5">
                      <h1>{like?.length}</h1>
                      <h1>like</h1>
                    </div>
                    <div className="h-[5vh]">
                      {input ? (
                        <form onSubmit={handleSubmit} className="relative">
                          <textarea
                            type="text"
                            className=" my-3 px-5 text-sm bg-[rgb(255, 255, 255)] w-4/5 resize-none focus:outline-none "
                            maxLength="150"
                            rows="1"
                            placeholder="Add a comment........"
                            value={input}
                            onChange={handleChangeInput}
                          />
                          <button className="absolute top-3 right-3 text-sm font-semibold text-blue-400 hover:text-blue-600">
                            post
                          </button>
                        </form>
                      ) : (
                        <form onSubmit={handleSubmit} className="relative">
                          <textarea
                            type="text"
                            className="z-0 my-3 px-5 text-sm bg-[rgb(255, 255, 255)] w-4/5 resize-none focus:outline-none "
                            maxLength="150"
                            rows="1"
                            placeholder="Add a comment........"
                            value={input}
                            onChange={handleChangeInput}
                          />
                          <button className="absolute top-3 right-3 text-sm font-semibold text-blue-400 hover:text-blue-600 hidden">
                            post
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
