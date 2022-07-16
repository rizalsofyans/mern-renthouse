import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Host, Listing, Listings, NotFound, User } from './sections';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/host" element={<Host />} />
				<Route path="/listing/:id" element={<Listing />} />
				<Route path="/listings/:location?" element={<Listings />} />
				<Route path="/user/:id" element={<User />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};
