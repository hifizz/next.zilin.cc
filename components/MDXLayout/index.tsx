import React from 'react';
import {MDXProvider} from '@mdx-js/react';

const components = {
  pre(props) {
    console.log('props', props);
    if (props.children && props.children?.type === 'code') {
      return (
        <div className="max-w-2xl mx-auto my-4" >
          <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-gray-100 border-t-0 w-full max-h-96 overflow-overlay rounded-b-lg">
            <pre {...props} style={{...props.style, margin: '0', borderRadius: '0', backgroundColor: 'transparent', fontSize: '12px'}} />
          </div>
        </div>
      );
    } else {
      return <pre {...props} />;
    }

    // <div className="code">

    // </div>
  },
};

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
