import Body from "./subcomponents/Body"
import RightSidebar from "./subcomponents/RightSidebar"
import Sidebar from "./subcomponents/Sidebar"

function Dashboard() {
    return (
        <main className="flex flex-row bg-black">
            <Sidebar/>
            <Body />
            <RightSidebar/>
        </main>
    )
}

export default Dashboard
