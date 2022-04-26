import Fragment from 'react-dom';

const Journal = () => {
  return (
    <>
      <div class='changelog'>
        <div class='wrapper'>
          <h3 class='section__title'>Changelog</h3>
          <div class='changelog__item'>
            <div class='changelog__meta'>
              <h4 class='changelog__title'>v0.7</h4>
              <small class='changelog__date'>10/12/2017</small>
            </div>
            <div class='changelog__detail'>
              <ul>
                <li>Improving the writing workflow with better key bindings</li>
                <li>Design updates</li>
                <li>SSL Verification for web hooks</li>
                <li>Render Emoji</li>
              </ul>
            </div>
          </div>
          <div class='changelog__item'>
            <div class='changelog__meta'>
              <h4 class='changelog__title'>v0.6</h4>
              <small class='changelog__date'>7/30/2017</small>
            </div>
            <div class='changelog__detail'>
              <ul>
                <li>Adding Unicode support</li>
                <li>Basic text highlighting</li>
                <li>Fresh Design</li>
              </ul>
            </div>
          </div>
          <div class='changelog__item'>
            <div class='changelog__meta'>
              <h4 class='changelog__title'>v0.5</h4>
              <small class='changelog__date'>5/10/2017</small>
            </div>
            <div class='changelog__detail'>
              <ul>
                <li>Save default md file in new folders</li>
                <li>Ability to quick search on existing notes</li>
              </ul>
            </div>
          </div>

          <div class='changelog__callout'>
            <a href='#' class='button--secondary'>
              Checkout Full Log
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
