import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "./Post";
import {PostPagination} from "./PostPagination";
import {PostForm} from "./PostForm";
import {ImageUpload} from "./ImageUpload";

export const Pagination = () => {
  const [Posts, setPosts] = useState([]);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const BaseURL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${BaseURL}/posts`)
        .then((res) => {
          return setPosts(res.data);
        })
        .catch((err) => console.log(`Error on the ${err}`));
    };
    fetchData();
  }, []);

  const handletTitle = (e) => {
    let title = e.target.value;
    setTitle(title.trim());
  };

  const handleContent = (e) => {
    let content = e.target.value;
    setContent(content.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      title: Title,
      body: Content,
    };
    e.target.reset();
    PostData(data);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`${BaseURL}/posts/${id}`)
      .then((res) =>
        console.log(`Delated id-${id} sucessfully, status ${res.status}`)
      )
      .catch((err) => console.log(`Error while deleting the post`));
  };

  const PostData = async (data) => {
    await axios
      .post(`${BaseURL}/posts`, {data})
      .then((res) => {
        console.log(`Response is successfull ${res.status}`);
        return console.log(res.data);
      })
      .catch((err) =>
        console.log(`there is an error while sending the data ${err}...`)
      );
  };

  return (
    <div className="row m-0">
      <PostForm
        handletitle={handletTitle}
        handlecontent={handleContent}
        handlesubmit={handleSubmit}
      />

      <PostPagination
        data={Posts}
        RenderComponent={Post}
        title="Posts"
        pageLimit={5}
        dataLimit={20}
        handledelete={handleDelete}
      />
    </div>
  );
};
