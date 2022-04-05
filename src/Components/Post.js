export const Post = (props) => {
  const {title, id, body} = props.data;
  const {handleRemove} = props;

  const handleDelete = () => {
    handleRemove(id);
  };
  return (
    <div>
      <span>{id}</span>
      <h3>{title}</h3>
      <p>{body}</p>

      <button type="button">Edit</button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
