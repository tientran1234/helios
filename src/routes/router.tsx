
import Home from "../pages/home"
const publicRoutes = [
	{
		path: '/',
		element: <Home/>
	}
]

// const permissonRoutes = [
// 	{
// 		path: '',
// 		element: <MailLayout />,
// 		children: [
// 			{
// 				index: true,
// 				element: <h3>Home Page</h3>
// 			},
// 			{
// 				path: 'product',
// 				element: <h3>Product Page</h3>
// 			}
// 		]
// 	},

// 	{
// 		path: 'home',
// 		element: (
// 			<div>
// 				<h3>Home Page</h3>

// 				<Outlet />
// 			</div>
// 		),
// 		children: [
// 			{
// 				path: 'product',
// 				element: <h3>Product Page</h3>
// 			}
// 		]
// 	},

// 	{
// 		path: 'profile',
// 		element: <h3>Profile Page</h3>
// 	}
// ]

const getRoutesByPermission = (permisson = '*') => {
	switch (permisson) {
		// case 'Admin': {
		// 	return permissonRoutes
		// }

		default: {
			return publicRoutes
		}

		// case '*': {
		// 	return [...publicRoutes, ...permissonRoutes]
		// }
	}
}

export default getRoutesByPermission