import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main/Main'
import Destination from '../pages/Components/Destination/Destination'
import Hotel from '../pages/Components/Hotel/Hotel'
import Login from '../pages/Components/Login/Login'
import Register from '../pages/Components/Register/Register'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Destination />,
                loader: async () => fetch('https://travel-vios-server.vercel.app/places')
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/hotel/:id',
                element: <PrivateRoute>
                    <Hotel />
                </PrivateRoute>,
                loader: async ({ params }) => fetch(`https://travel-vios-server.vercel.app/places/${params.id}`)
            }
        ]
    }
])

export default router