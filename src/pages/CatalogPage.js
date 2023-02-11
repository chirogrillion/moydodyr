import React from 'react';
import {useParams} from 'react-router-dom';

import Heading from '../components/Main/Heading/Heading';
import Catalog from '../components/Main/Catalog/Catalog';

const CatalogPage = () => {

  const params = useParams();
  const category = params.ctgrid ? Number(params.ctgrid) : 0;

  return (
    <React.Fragment>
      <Heading pageId={category}/>
      <Catalog categoryId={category}/>
    </React.Fragment>
  );

};

export default CatalogPage;