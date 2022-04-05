export const PostForm = (props) => {
  const {handlecontent, handletitle, handlesubmit} = props;
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <fieldset>
          <input
            type="text"
            name="post-title"
            placeholder="Title.."
            onChange={handletitle}
          />
        </fieldset>
        <fieldset>
          <textarea
            name="post-content"
            placeholder="Content.."
            onChange={handlecontent}
          ></textarea>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
