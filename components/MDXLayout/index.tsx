import React from 'react';
import {MDXProvider} from '@mdx-js/react';

export const MDXLayout: React.FC<{}> = ({children}) => {
  return (
    <MDXProvider>
      <article style={{maxWidth: '680px', margin: '0 auto'}}>
        {children}
      </article>
    </MDXProvider>
  );
};
