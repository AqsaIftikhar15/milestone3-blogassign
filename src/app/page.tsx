import Link from "next/link";


export default function Home() {
  return (
    <div className="parentdiv">
      <div className="content">
        <h2 style={{"padding":50,"fontSize":40}}>NOT BEING MENTALLY WELL CAN BE OVERWHELMING</h2>
        <p style={{"margin":50,"fontSize":25}}>Here are some of our blogs which can help you cope it up virtually!</p>
        <Link href="/blogs">
          <button className="blog-button">Go to Blogs</button>
        </Link>
      </div>

    </div>
  );
}
