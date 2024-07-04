import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="list-group">
            <Link to='/dashboard' className="list-group-item list-group-item-action">Profile</Link>
            <Link to='/dashboard/wishlist' className="list-group-item list-group-item-action">Wishlist</Link>
            <Link to='/dashboard/myitems' className="list-group-item list-group-item-action">My Items</Link>
            <Link to='/dashboard/additem' className="list-group-item list-group-item-action">Add Item</Link>
            <Link to='/dashboard/gendesc' className="list-group-item list-group-item-action">Generate Description</Link>
            <Link to='/dashboard/changepwd' className="list-group-item list-group-item-action">Change Password</Link>
            <Link to='/logout' className="list-group-item list-group-item-action text-danger">Logout</Link>
        </div>
    );
}

export default Sidebar;