import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div>
      Hello world!
      <p><Link to={'/blog'}>Blog</Link></p>
      <p><Link to={'/account'}>Account</Link></p>
    </div>
  );
};
