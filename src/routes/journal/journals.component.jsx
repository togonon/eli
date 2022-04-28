import { Fragment } from 'react';
import JournalsHero from '../../components/page-heros/journals-hero.component';
import Footer from '../../components/footer/footer.component';
import './journals.style.scss';

const Journals = () => {
  return (
    <>
      <JournalsHero />
      <div className='coding-journals'>
        <div className='wrapper'>
          <h1 className='section__title'>Coding Journals</h1>
          <div className='changelog__item'>
            <div className='changelog__meta'>
              <h3 className='changelog__title'>
                <a href='journals/single-journal'>v0.7</a>
              </h3>
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
              <h3 className='changelog__title'>
                <a href='#'>v0.6</a>
              </h3>
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
              <h3 className='changelog__title'>
                <a href='#'>v0.5</a>
              </h3>
              <small className='changelog__date'>5/10/2017</small>
            </div>
            <div className='changelog__detail'>
              <ul>
                <li>Save default md file in new folders</li>
                <li>Ability to quick search on existing notes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Journals;
