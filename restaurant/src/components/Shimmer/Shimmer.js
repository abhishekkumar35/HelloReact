import "../common.css";

function Shimmer() {
  return (
    <div className="card">
      {Array(15)
        .fill("")
        .map((i) => (
          <div className="card-body background"></div>
        ))}
    </div>
  );
}

export default Shimmer;
