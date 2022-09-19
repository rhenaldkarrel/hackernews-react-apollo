import LinkList from "components/LinkList";
import CreateLink from "components/CreateLink";
import Header from "components/Header";
import Login from "components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
