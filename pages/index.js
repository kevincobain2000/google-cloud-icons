import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Icons from '../variables/Icons';
import { TextInput } from "@primer/components";
import unescape from 'lodash/unescape';
import Fuse from 'fuse.js';

const Index = props => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    setIcons(props.icons)
  }, []);

  let options = {
    keys: ['name', 'category'],
  };
  let fuse = new Fuse(props.icons, options)
  let filterIcons = (name) => {
    let icons = {}
    if (name) {
      icons = fuse.search(name)
    } else {
      icons = [...props.icons]
    }
    setIcons(icons)
  }
  return (
    <Layout>
      <TextInput onChange={e => filterIcons(e.target.value)} size="small" />
      <ul>
        {icons.map((icon, key) => (
          <li key={key}>
            <img className="icon-thumb" src={`${icon.path}.svg`} alt={`${icon.path}`.svg}/>
            {icon.category} {icon.name}
          </li>
        ))}
        </ul>
    </Layout>
  );
}

Index.getInitialProps = () => {
  // There is just one directory
  const productsAndServicesDir = Icons[0].contents
  const directories = productsAndServicesDir.map(directory => {
    return directory
  })
  const icons = []
  for (const dir of directories) {
    const fileElement = dir.contents;
    fileElement.map(file  => {
      if (file.name.endsWith('.svg')) {
        const filename = file.name.replace(/\..+$/, '')
        let icon = {
          path: unescape('./static/GCP Icons/Products & Services/' + dir.name + '/' + filename),
          category: unescape(dir.name),
          name: unescape(filename),
        }
        return icons.push(icon)
      }
    })
  }
  return { icons }
};

export default Index;
