import React from 'react';
import {MDXProvider} from '@mdx-js/react';

const components = {
  code(props) {
    return (
      <div className="code">
        <code {...props} />
      </div>
    );
  },
}

export const MDXLayout: React.FC<{}> = ({children}) => {
  return (
    <MDXProvider components={components}>
      <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
        <img
          src="/img/beams.jpg"
          alt=""
          className="fixed top-48 left-1/2 -translate-x-2/3 -translate-y-1/2 max-w-none"
          width="1308"
        />
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <article
            className=" prose prose-zinc"
            style={{margin: '0 auto'}}
          >
            {children}
          </article>
        </div>
      </div>
      {/* <main style={{padding: '80px 20px'}} className="article">
        
      </main> */}
    </MDXProvider>
  );
};
