import ReactDOM from 'react-dom';
import { ReactLocation, Router } from 'react-location';
import { StyleSystemProvider } from './components/system/StyleSystemProvider';
import { Home } from './pages';
const reactLocation = new ReactLocation();

function AppEntry(): JSX.Element {
    return (
        <StyleSystemProvider>
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
        </StyleSystemProvider>
    );
}

ReactDOM.render(<AppEntry />, document.getElementById('app'));
