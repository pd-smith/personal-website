import ReactDOM from 'react-dom';
import { ReactLocation, Router } from 'react-location';
import { Home } from './pages';
const reactLocation = new ReactLocation();

function AppEntry(): JSX.Element {
    return (
        <div style={{ minHeight: '100vh', height: '1px' }}>
            <Router
                location={reactLocation}
                routes={[
                    {
                        path: '/',
                        element: <Home />,
                    },
                ]}
            />
        </div>
    );
}

ReactDOM.render(<AppEntry />, document.getElementById('app'));
