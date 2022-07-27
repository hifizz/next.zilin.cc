import React from 'react';
import {MDXProvider} from '@mdx-js/react';

export const MDXLayout: React.FC<{}> = ({children}) => {
  return (
    <MDXProvider>
      <main style={{padding: '80px 20px'}} className="article">
        <article className=" prose prose-zinc" style={{margin: '0 auto', }}>
          {children}
        </article>
      </main>
    </MDXProvider>
  );
};
