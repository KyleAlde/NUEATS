import '../styles/components/admindashboardbody.css';

function AdminDashboardBody(props) {
  return (
    <div id="AdminDashboardBody">
      {props.currentTab === "Users" ? (
        <div className="AdminContent">
          <h1>Manage Users</h1>
          <p>Users list and management actions will go here.</p>
        </div>
      ) : (
        <div className="AdminContent">
          <h1>Manage Menu</h1>
          <p>Menu items list and management actions will go here.</p>
        </div>
      )}
    </div>
  );
}

export default AdminDashboardBody;
