import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Icons from "../variables/Icons";
import unescape from "lodash/unescape";
import Fuse from "fuse.js";

const Index = props => {
  const [icons, setIcons] = useState(props.icons);

  let options = {
    keys: [
      {
        name: "name",
        weight: 0.3
      },
      {
        name: "category",
        weight: 0.7
      }
    ]
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
            <Card icon={icon} />
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
        const filename = unescape(file.name.replace(/\..+$/, ""));
        const dirname = unescape(dir.name);
        let icon = {
          path:
            "./static/GCP Icons/Products & Services/" +
            dirname +
            "/" +
            filename,
          category: dirname,
          name: filename
        };
        return icons.push(icon);
      }
    });
  }
  return { icons };
};

export default Index;
