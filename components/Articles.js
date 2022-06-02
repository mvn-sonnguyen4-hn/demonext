import Link from "next/link";

function Articles({ posts }) {
  return (
    <div>
      {posts &&
        posts.length &&
        posts.map((item) => (
          <div key={item._id} className="item">
            <Link href={"/article/" + item.id + "" ?? ""}>{item.title}</Link>
            <p>{item.content}</p>
          </div>
        ))}
      <style jsx>
        {`
         .item{
           border:1px solid green;
           padding:1rem;
           width:fit-content;
           border-radius:5px;
         }
        `}
      </style>
    </div>
  );
}

export default Articles;
