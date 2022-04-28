import Fragment from 'react-dom';
import HomeJournals from '../journal/home-journal.component';
import Footer from '../../components/footer/footer.component';
import Hero from '../../components/page-heros/home-hero.component';
import './home.styles.scss';

const Home = () => {
  return (
    <>
      <Hero />

      <div class='wrapper'>
        <div class='installation '>
          <h3 class='section__title'>Installation</h3>
          <div class='tab__container'>
            <ul class='tab__menu'>
              <li class='tab active' data-tab='mac'>
                mac
              </li>
              <li class='tab' data-tab='linux'>
                linux
              </li>
              <li class='tab' data-tab='win'>
                win
              </li>
            </ul>
            <pre class='nohighlight code'>
              <code class='tab__pane active mac'>$ brew install scribbler</code>
              <code class='tab__pane linux'>$ apt-get install scribbler</code>
              <code class='tab__pane win'>$ gem install scribbler</code>
            </pre>
          </div>
        </div>

        <div class='feature'>
          <div class='feature__item'>
            <h3 class='section__title'>Fast & Light</h3>
            <p>
              Start writing your notes immediately in any terminal! No more time
              wasted on navigating and opening your text editor.
            </p>
          </div>
          <div class='feature__item'>
            <h3 class='section__title'>File Syncing</h3>
            <p>
              Save your file in Dropbox then you can access to it from anywhere.
            </p>
          </div>
          <div class='feature__item'>
            <h3 class='section__title'>Secure</h3>
            <p>
              Encrypt your notes optionally. No one can get to your secrets!{' '}
            </p>
          </div>
          <div class='feature__item'>
            <h3 class='section__title'>Configuration</h3>
            <p>
              Maintain all your settings in a single{' '}
              <span class='code code--inline'>config.json</span> file. Never
              need to redo the setting every single time jotting down a note.
            </p>
          </div>
          <div class='feature__item'>
            <h3 class='section__title'>Highlightings</h3>
            <p>
              For better readability, scribbler has a clean, beautiful color
              scheme allow you to scan files fast.
            </p>
          </div>
          <div class='feature__item'>
            <h3 class='section__title'>Keybindings</h3>
            <p>
              You can expect common keybindings for scribbler. Customize{' '}
              <span class='code code--inline'>bindings.json</span> for your own
              liking!{' '}
            </p>
          </div>
        </div>

        <div class='keybinding'>
          <ul class='keybinding__detail'>
            <h3 class='keybinding__title'>Default Keybindings</h3>
            <li>
              Quit without saving <span class='keybinding__label'>Ctrl+C</span>
            </li>
            <li>
              Save <span class='keybinding__label'>Cmd+S</span>
            </li>
            <li>
              Save and Quit <span class='keybinding__label'>Ctrl+D</span>
            </li>
            <li>
              Undo <span class='keybinding__label'>Cmd+Z</span>
            </li>
          </ul>
          <ul class='keybinding__detail'>
            <h3 class='keybinding__title'>Markdown Keybindings</h3>
            <li>
              <span class='keybinding__label'>Ctrl+A</span> Insert Link Markdown
            </li>
            <li>
              <span class='keybinding__label'>Ctrl+I</span> Insert Image
              Markdown
            </li>
            <li>
              <span class='keybinding__label'>Ctrl+V</span> Insert YouTube Video
            </li>
            <li>
              <span class='keybinding__label'>Ctrl+T</span> Insert Table
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
