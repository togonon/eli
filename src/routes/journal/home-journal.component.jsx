import Fragment from 'react-dom';

const HomeJournals = () => {
  return (
    <>
      <div className='changelog'>
        <div className='wrapper'>
          <h3 className='section__title'>Coding Journal</h3>
          <div className='changelog__item'>
            <div className='changelog__meta'>
              <h4 className='changelog__title'>v0.7</h4>
              <small className='changelog__date'>10/12/2017</small>
            </div>
            <div className='changelog__detail'>
              <ul>
                <li>Improving the writing workflow with better key bindings</li>
                <li>Design updates</li>
                <li>SSL Verification for web hooks</li>
                <li>Render Emoji</li>
              </ul>
            </div>
          </div>
          <div className='changelog__item'>
            <div className='changelog__meta'>
              <h4 className='changelog__title'>v0.6</h4>
              <small className='changelog__date'>7/30/2017</small>
            </div>
            <div className='changelog__detail'>
              <ul>
                <li>Adding Unicode support</li>
                <li>Basic text highlighting</li>
                <li>Fresh Design</li>
              </ul>
            </div>
          </div>
          <div className='changelog__item'>
            <div className='changelog__meta'>
              <h4 className='changelog__title'>v0.5</h4>
              <small className='changelog__date'>5/10/2017</small>
            </div>
            <div className='changelog__detail'>
              <ul>
                <li>Save default md file in new folders</li>
                <li>Ability to quick search on existing notes</li>
              </ul>
            </div>
          </div>

          <div className='changelog__callout'>
            <a href='/journals' className='button--secondary'>
              More coding journals
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeJournals;
