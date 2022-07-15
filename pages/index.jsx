import Link from "next/link";
import React from "react";

import "../src/style.module.css"

// import "../src/style.css"

//Above will throw the following error, to means simply use module.css or import from App component

/*

./src/style.css
Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).
Read more: https://nextjs.org/docs/messages/css-global
Location: pages/index.jsx

*/

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
