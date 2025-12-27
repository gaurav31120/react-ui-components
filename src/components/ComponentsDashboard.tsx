import { useNavigate } from 'react-router-dom'
import './ComponentsDashboard.css'

const components = [
    { title: 'Button', path: '/components/button' },
    { title: 'Input', path: '/components/input' },
    { title: 'Modal', path: '/components/modal' },
]

function ComponentsDashboard() {
    const navigate = useNavigate()

    return (
        <div className="dashboard-container">
            <h1>React UI Components</h1>
            <p>Components Dashboard</p>

            <div className="card-container">
                {components.map((item) => (
                    <div
                        key={item.title}
                        className="component-card"
                        onClick={() => navigate(item.path)}
                    >
                        <h3>{item.title}</h3>
                        <p>View {item.title} component</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComponentsDashboard
