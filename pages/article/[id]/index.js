import axios from "axios";
import Link from "next/link";

function index({ article }) {
  console.log(article);
  return (
    <div>
      {article && article.title}
      <div>
        <button>
          <Link href="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${context.params.id}`
  );
  return {
    props: { article: data }, // will be passed to the page component as props
  };
}

export default index;
