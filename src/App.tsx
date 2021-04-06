import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { Location } from './pages/Location';

import customTheme from './theme';
import './sass/default.scss';

const App: React.FC<{}> = () => {
	return (
		<ChakraProvider resetCSS={true} theme={customTheme}>
			<Router>
				{/* <Route path='*' render={() => <Maintenance />} /> */}
				<Route
					render={({ location }) => (
						// <AnimatePresence initial={false} exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" render={() => <Home />} />
							<Route path="/location" render={() => <Location />} />
						</Switch>
						// </AnimatePresence>
					)}
				/>
			</Router>
		</ChakraProvider>
	);
};

export default App;
