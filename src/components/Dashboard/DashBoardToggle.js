import { Button } from 'react-bootstrap'
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the desired icon
import "../../styles/sidebar.css";
import { useToggle } from '../../hooks/useToggle';
const DashBoardToggle = () => {
    const { showSidebar, handleToggleSidebar } = useToggle(); // custom hooks...
    return (
        <>
            <div className="dashboard-container">
                <Button className='w-75' onClick={handleToggleSidebar}>
                    <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> {/* Icon */}
                    DashBoard
                </Button>
                <SideBar show={showSidebar} handleClose={handleToggleSidebar} />
            </div>
        </>
    )
}

export default DashBoardToggle