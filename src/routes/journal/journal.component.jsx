import Fragment from 'react-dom';
import Footer from '../../components/footer/footer.component';
import './journals.style.scss';

const Journal = () => {
  return (
    <>
      <div className='wrapper'>
        <h3 className='section__title'>Single Journal</h3>
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

        {/* <div className='changelog__callout'>
          <a href='#' className='button--secondary'>
            More coding journals
          </a>
  </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Journal;
