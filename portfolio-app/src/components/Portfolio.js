import React from "react";
import {Link} from 'react-router-dom'
const Portfolio = () => (
  <div>
    this is the main portfolio
    <Link to='/portfolio/1'>Item One</Link>
    <Link to='/portfolio/2'>Item Two</Link>
  </div>
);
export default Portfolio;
