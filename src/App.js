import Header from '~/Header';
import Content from '~/Content';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '~/Global/Global.scss';
function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
