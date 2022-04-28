import Fragment from 'react-dom';
import HomeJournals from '../journal/home-journal.component';
import Footer from '../../components/footer/footer.component';
import Hero from '../../components/page-heros/home-hero.component';
import './home.styles.scss';

const Home = () => {
  return (
    <>
      <Hero />

      <div className='wrapper'>
        <div className='installation '>
          <h3 className='section__title'>Installation</h3>
          <div className='tab__container'>
            <ul className='tab__menu'>
              <li className='tab active' data-tab='mac'>
                mac
              </li>
              <li className='tab' data-tab='linux'>
                linux
              </li>
              <li className='tab' data-tab='win'>
                win
              </li>
            </ul>
            <pre className='nohighlight code'>
              <code className='tab__pane active mac'>
                $ brew install scribbler
              </code>
              <code className='tab__pane linux'>
                $ apt-get install scribbler
              </code>
              <code className='tab__pane win'>$ gem install scribbler</code>
            </pre>
          </div>
        </div>

        <div className='feature'>
          <div className='feature__item'>
            <h3 className='section__title'>Fast & Light</h3>
            <p>
              Start writing your notes immediately in any terminal! No more time
              wasted on navigating and opening your text editor.
            </p>
          </div>
          <div className='feature__item'>
            <h3 className='section__title'>File Syncing</h3>
            <p>
              Save your file in Dropbox then you can access to it from anywhere.
            </p>
          </div>
          <div className='feature__item'>
            <h3 className='section__title'>Secure</h3>
            <p>
              Encrypt your notes optionally. No one can get to your secrets!{' '}
            </p>
          </div>
          <div className='feature__item'>
            <h3 className='section__title'>Configuration</h3>
            <p>
              Maintain all your settings in a single{' '}
              <span className='code code--inline'>config.json</span> file. Never
              need to redo the setting every single time jotting down a note.
            </p>
          </div>
          <div className='feature__item'>
            <h3 className='section__title'>Highlightings</h3>
            <p>
              For better readability, scribbler has a clean, beautiful color
              scheme allow you to scan files fast.
            </p>
          </div>
          <div className='feature__item'>
            <h3 className='section__title'>Keybindings</h3>
            <p>
              You can expect common keybindings for scribbler. Customize{' '}
              <span className='code code--inline'>bindings.json</span> for your
              own liking!{' '}
            </p>
          </div>
        </div>

        <div className='keybinding'>
          <ul className='keybinding__detail'>
            <h3 className='keybinding__title'>Default Keybindings</h3>
            <li>
              Quit without saving{' '}
              <span className='keybinding__label'>Ctrl+C</span>
            </li>
            <li>
              Save <span className='keybinding__label'>Cmd+S</span>
            </li>
            <li>
              Save and Quit <span className='keybinding__label'>Ctrl+D</span>
            </li>
            <li>
              Undo <span className='keybinding__label'>Cmd+Z</span>
            </li>
          </ul>
          <ul className='keybinding__detail'>
            <h3 className='keybinding__title'>Markdown Keybindings</h3>
            <li>
              <span className='keybinding__label'>Ctrl+A</span> Insert Link
              Markdown
            </li>
            <li>
              <span className='keybinding__label'>Ctrl+I</span> Insert Image
              Markdown
            </li>
            <li>
              <span className='keybinding__label'>Ctrl+V</span> Insert YouTube
              Video
            </li>
            <li>
              <span className='keybinding__label'>Ctrl+T</span> Insert Table
            </li>
          </ul>
        </div>

        {/* <div class='callout'>
          <p>
            Read our documentation for advanced keybindings and customization
          </p>
          <a href='journal' class='button--primary'>
            Journal
          </a>
          </div> */}
      </div>

      <HomeJournals />
      <Footer />
    </>
  );
};

export default Home;
