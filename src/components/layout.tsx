import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  title: string;
  children: any;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>{title}</h1>
        <div>{children}</div>
      </main>
    </div>
  );
}
