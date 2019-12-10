import React from "react";

//import Header from "./header";
import "../styles.css";
import Routes from "./routes";

const Home = () => {
  const title = "Demo Apps Script Web App";

  return (
    <div>
      <main>
        <h1>{title}</h1>
        <article>
          <p>
            This is a demo of a web app created with modern internet
            technologies, connecting G-Suite apps with an interface more user
            friendly than Google Sheets. Plus this is embedable into a Google
            Site!
          </p>
        </article>
        <article>
          <p>For more information contact me at howard.luong87@gmail.com</p>
        </article>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        Google Apps Script and React
      </footer>
    </div>
  );
};

// Layout.propTypes = {
//  children: PropTypes.node.isRequired
// };

export default Home;
