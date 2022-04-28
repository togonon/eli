import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home';
import Journals from './routes/journal/journals.component';
import SingleJournal from './routes/journal/journal.component';
import SignIn from './routes/sign-in/sign-in.component';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='journals' element={<Journals />} />
        <Route path='journals/single-journal' element={<SingleJournal />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
