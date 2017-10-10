import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>
      Not found! <Link to="/">Homepage</Link>
    </p>
  </div>
);

export default NotFoundPage;
