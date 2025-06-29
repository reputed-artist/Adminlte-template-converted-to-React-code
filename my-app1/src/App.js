// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Path from './components/Path';
// //import Sectionbody from './components/Sectionbody';

// import Dashboard from './pages/Dashboard';
// import Dashboard2 from './pages/Dashboard2';
// import Widget from './pages/Widget';
// import Calendar from './pages/calendar';

// import Chartjs from './pages/charts/chartjs';
// import Flot from './pages/charts/flot';
// import Inline from './pages/charts/inline';
// import Morris from './pages/charts/morris';

// import Boxed from './pages/layout/boxed';
// import CollapsedSidebar from './pages/layout/collapsedSidebar';
// import Fixed from './pages/layout/fixed';
// import TopNav from './pages/layout/topNav';

// import Compose from './pages/mailbox/compose';
// import Readmail from './pages/mailbox/readmail';
// import Mailbox from './pages/mailbox/mailbox';

// import Button from './pages/ui/button';
// import General from './pages/ui/general';
// import Icons from './pages/ui/icons';
// import Modals from './pages/ui/modals';
// import Timeline from './pages/ui/timeline';
// import Sliders from './pages/ui/sliders';

// import Generalz from './pages/forms/generalz';
// import Advanced from './pages/forms/advanced';
// import Editors from './pages/forms/Editors';

// import Simple from './pages/tables/simple';
// import Data from './pages/tables/data';

// import Error404 from './pages/examples/error404';
// import Error500 from './pages/examples/error500';
// import Blank from './pages/examples/blank';
// import Invoice from './pages/examples/invoice';
// import Lockscreen from './pages/examples/lockscreen';
// import Login from './pages/examples/login';
// import Pace from './pages/examples/pace';
// import Profile from './pages/examples/profile';
// import Register from './pages/examples/register';

// import Footer from './components/Footer';
// import Settings from './components/Settings';
// //import Widget from './pages/Widget';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//       <Header />
//       <Navbar />
//       <div className="content-wrapper">
//       <Path />
//       <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/Dashboard2" element={<Dashboard2 />} />
//           <Route path="/layout/boxed" element={<Boxed />} />
//           <Route path="/layout/collapsedSidebar" element={<CollapsedSidebar />} />
//           <Route path="/layout/fixed" element={<Fixed />} />
//           <Route path="/layout/topNav" element={<TopNav />} />
//           <Route path="/Widget" element={<Widget />} />
//           <Route path="/Calendar" element={<Calendar/>} />

//           <Route path="/mailbox/compose" element={<Compose/>} /> 
//           <Route path="/mailbox/mailbox" element={<Mailbox/>} />
//           <Route path="/mailbox/readmail" element={<Readmail/>} />

//           <Route path="/charts/chartjs" element={<Chartjs />} />
//           <Route path="/charts/morris" element={<Morris />} />
//           <Route path="/charts/flot" element={<Flot />} />
//           <Route path="/charts/inline" element={<Inline />} />

//           <Route path="/ui/button" element={<Button />} />
//           <Route path="/ui/general" element={<General />} />
//          <Route path="/ui/icons" element={<Icons />} /> 
//          <Route path="/ui/modals" element={<Modals />} />
//          <Route path="/ui/sliders" element={<Sliders />} /> 
//          <Route path="/ui/timeline" element={<Timeline />} />

//          <Route path="/forms/generalz" element={<Generalz />} />   
//          <Route path="/forms/advanced" element={<Advanced />} />
//          <Route path="/forms/editors" element={<Editors />} />

//           <Route path="/tables/simple" element={<Simple />} />
//           <Route path="/tables/data" element={<Data />} />

//            <Route path="/examples/error404" element={<Error404 />} />
//           <Route path="/examples/error500" element={<Error500 />} />
//           <Route path="/examples/blank" element={<Blank />} />
//           <Route path="/examples/invoice" element={<Invoice />} />
//          <Route path="/examples/profile" element={<Profile />} />
//           <Route path="/examples/pace" element={<Pace />} />



//         </Routes>
      
//       </div>
//       <Footer />
//       <Settings />
//       </Router>      
      
      
  
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Path from './components/Path';
import Footer from './components/Footer';
import Settings from './components/Settings';

import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';
import Widget from './pages/Widget';
import Calendar from './pages/calendar';
import Chartjs from './pages/charts/chartjs';
import Flot from './pages/charts/flot';
import Inline from './pages/charts/inline';
import Morris from './pages/charts/morris';
import Boxed from './pages/layout/boxed';
import CollapsedSidebar from './pages/layout/collapsedSidebar';
import Fixed from './pages/layout/fixed';
import TopNav from './pages/layout/topNav';
import Compose from './pages/mailbox/compose';
import Readmail from './pages/mailbox/readmail';
import Mailbox from './pages/mailbox/mailbox';
import Button from './pages/ui/button';
import General from './pages/ui/general';
import Icons from './pages/ui/icons';
import Modals from './pages/ui/modals';
import Timeline from './pages/ui/timeline';
import Sliders from './pages/ui/sliders';
import Generalz from './pages/forms/generalz';
import Advanced from './pages/forms/advanced';
import Editors from './pages/forms/Editors';
import Simple from './pages/tables/simple';
import Data from './pages/tables/data';
import Error404 from './pages/examples/error404';
import Error500 from './pages/examples/error500';
import Blank from './pages/examples/blank';
import Invoice from './pages/examples/invoice';
import Lockscreen from './pages/examples/lockscreen';
import Login from './pages/examples/login';
import Pace from './pages/examples/pace';
import Register from './pages/examples/register';

function LayoutWrapper({ children }) {
  const location = useLocation();

  // List of routes that need a blank layout (no header/navbar/footer)
  const noLayoutRoutes = ['/examples/register'];

  const shouldHideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      {!shouldHideLayout && <Navbar />}
      <div className="content-wrapper">
        {!shouldHideLayout && <Path />}
        {children}
      </div>
      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <Settings />}
    </>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard2" element={<Dashboard2 />} />
            <Route path="/layout/boxed" element={<Boxed />} />
            <Route path="/layout/collapsedSidebar" element={<CollapsedSidebar />} />
            <Route path="/layout/fixed" element={<Fixed />} />
            <Route path="/layout/topNav" element={<TopNav />} />
            <Route path="/Widget" element={<Widget />} />
            <Route path="/Calendar" element={<Calendar />} />

            <Route path="/mailbox/compose" element={<Compose />} />
            <Route path="/mailbox/mailbox" element={<Mailbox />} />
            <Route path="/mailbox/readmail" element={<Readmail />} />

            <Route path="/charts/chartjs" element={<Chartjs />} />
            <Route path="/charts/morris" element={<Morris />} />
            <Route path="/charts/flot" element={<Flot />} />
            <Route path="/charts/inline" element={<Inline />} />

            <Route path="/ui/button" element={<Button />} />
            <Route path="/ui/general" element={<General />} />
            <Route path="/ui/icons" element={<Icons />} />
            <Route path="/ui/modals" element={<Modals />} />
            <Route path="/ui/sliders" element={<Sliders />} />
            <Route path="/ui/timeline" element={<Timeline />} />

            <Route path="/forms/generalz" element={<Generalz />} />
            <Route path="/forms/advanced" element={<Advanced />} />
            <Route path="/forms/editors" element={<Editors />} />

            <Route path="/tables/simple" element={<Simple />} />
            <Route path="/tables/data" element={<Data />} />

            <Route path="/examples/error404" element={<Error404 />} />
            <Route path="/examples/error500" element={<Error500 />} />
            <Route path="/examples/blank" element={<Blank />} />
            <Route path="/examples/invoice" element={<Invoice />} />
            
            <Route path="/examples/pace" element={<Pace />} />
            <Route path="/examples/register" element={<Register />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    );
  }
}

export default App;
