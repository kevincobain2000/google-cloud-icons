import { BorderBox } from '@primer/components';
import '../css/styles.scss';
import '../css/styles.css';

const Layout = props => (
  <BorderBox>
    {props.children}
  </BorderBox>
);

export default Layout;
