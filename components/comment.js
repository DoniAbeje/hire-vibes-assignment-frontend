export default function Comment({ comment }) {
  return (
    <div
      className="card text-black bg-light mb-3"
    >
      <div className="card-header">
        <h5 className="card-title">{comment.name}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {comment.comment}
        </p>
      </div>
    </div>
  );
}
