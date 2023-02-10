import React from 'react';
import {useParams} from 'react-router-dom';

import PageHeading from '../components/Main/PageHeading/PageHeading';
import Sidebar from '../components/Main/Sidebar/Sidebar';
import Content from '../components/Main/Content/Content';

const PageCatalog = () => {

  const params = useParams();
  const category = params.ctgrid ? Number(params.ctgrid) : 0;

  return (
    <React.Fragment>
      <PageHeading pageId={category}/>
      <Sidebar/>
      <Content/>
    </React.Fragment>
  );

};

export default PageCatalog;