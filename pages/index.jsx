import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>This is a link to note</a>
      </Link>
    </div>
  );
};

export default Page;
