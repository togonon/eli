// import hljs from 'highlight.js';

import React, { Component } from 'react';

const Hero = () => {
  // const highlightedCode = hljs.highlightAuto('Hello World!').value;
  let i = 0;
  const myIntroText = `Hi, I'm Eli.
  
                      I'm a front-end developer.

                      # my skills are

                      - Javascript
                      - React, Vue, Svelte, & Angular
                      - Node.js, Next.js, Nuxt.js, Express.js
                      - PostgreSQL, MongoDB, & MySQL
                      - HTML/CSS & Sass

                      Please, feel free to look around. Thank you!
                      `;
  const speed = 60;
  const typeItOut = () => {
    if (i < myIntroText.length) {
      document.getElementsByClassName('code-intro')[0].innerHTML +=
        myIntroText.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  };

  setTimeout(typeItOut, 1800);

  return (
    <div className='hero-warp'>
      <div className='hero'>
        <h1 className='hero__title'>Eliezer Togonon</h1>
        <p className='hero__description'>Front-end Developer</p>
      </div>

      <div className='hero__terminal'>
        <pre>
          {/* <!-- Place your demo code here --> */}
          <code className='shell-session code-intro'>bot ~ $ </code>
        </pre>
      </div>
    </div>
  );
};

export default Hero;
