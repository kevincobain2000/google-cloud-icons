import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Icons from "../variables/Icons";
import unescape from "lodash/unescape";
import Fuse from "fuse.js";

const Index = props => {
  const [icons, setIcons] = useState(props.icons);

  let options = {
    keys: ["name", "category"]
  };
  let fuse = new Fuse(props.icons, options);
  let filterIcons = name => {
    let icons = name && name.trim() ? fuse.search(name) : [...props.icons];
    setIcons(icons);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Layout>
      <h1>
        <img className="icon-image" src="./static/gcp.png" alt="gcp icon" />
        Search Google Cloud Icons
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            autoFocus
            type="text"
            className="input is-info"
            placeholder="Type here..."
            onChange={e => filterIcons(e.target.value)}
          />
          <br />
          <br />
        </fieldset>
      </form>
      <div className="columns is-multiline">
        {icons.map((icon, key) => (
          <div className="column is-4" key={key}>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">{icon.category}</p>
                <a
                  href="#"
                  className="card-header-icon"
                  aria-label="more options"
                >
                  <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  <img
                    className="card-thumb-image"
                    src={`${icon.path}.svg`}
                    alt={`${icon.path}`}
                  />
                  <br />
                  <br />
                  <b>{icon.name}</b>
                </div>
              </div>
              <footer className="card-footer">
                <a
                  href={`${icon.path}.png`}
                  download
                  className="card-footer-item"
                >
                  Download Png
                </a>
                <a
                  href={`${icon.path}.svg`}
                  download
                  className="card-footer-item"
                >
                  Download Svg
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = () => {
  // There is just one directory
  const productsAndServicesDir = Icons[0].contents;
  const directories = productsAndServicesDir.map(directory => {
    return directory;
  });
  const icons = [];
  for (const dir of directories) {
    const fileElement = dir.contents;
    fileElement.map(file => {
      if (file.name.endsWith(".svg")) {
        // remove extension
        const filename = file.name.replace(/\..+$/, "");
        let icon = {
          path: unescape(
            "./static/GCP Icons/Products & Services/" +
              dir.name +
              "/" +
              filename
          ),
          category: unescape(dir.name),
          name: unescape(filename)
        };
        return icons.push(icon);
      }
    });
  }
  return { icons };
};

export default Index;
