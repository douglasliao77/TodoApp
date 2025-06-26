import './Sidebar.css' 

export function Sidebar() {
    return (
      <div className="sidebar">
        <h2>Menu</h2>
        <ul className="menu-list">
          <li className="menu-item"><a href="/Add_task">Add Task</a></li>
          <li className="menu-item"><a href="/search">Search</a></li>
          <li className="menu-item"><a href="/All">All Todos</a></li>
          <li className="menu-item"><a href="/Completed">Completed</a></li>
        </ul>
      </div>
    );
  }


