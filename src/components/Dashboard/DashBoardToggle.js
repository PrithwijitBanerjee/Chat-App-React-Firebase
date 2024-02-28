import { Button } from 'react-bootstrap'
import SideBar from '../SideBar';
import "../../styles/sidebar.css";
import { useToggle } from '../../hooks/useToggle';
const DashBoardToggle = () => {
    const { showSidebar, handleToggleSidebar } = useToggle(); // custom hooks...
    return (
        <>
            <div className="dashboard-container">
                <Button className='w-75' onClick={handleToggleSidebar}>
                    DashBoard
                </Button>
                <SideBar show={showSidebar} handleClose={handleToggleSidebar} />
            </div>
        </>
    )
}

export default DashBoardToggle