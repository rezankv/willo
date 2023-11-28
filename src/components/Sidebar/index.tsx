const Sidebar = () => {
  return (
    <div className="sidebar-left">
      <div className="sidebar">
        <div className="sidebar-content todo-sidebar">
          <div className="todo-app-menu">
            <div className="add-task">
              <button
                type="button"
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#new-task-modal"
              >
                Add Task
              </button>
            </div>
            <div className="sidebar-menu-list">
              <div className="list-group list-group-filters">
                <a
                  href="#"
                  className="list-group-item list-group-item-action active"
                >
                  <i data-feather="mail" className="font-medium-3 me-50"></i>
                  <span className="align-middle"> My Task</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="star" className="font-medium-3 me-50"></i>
                  <span className="align-middle">Important</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="check" className="font-medium-3 me-50"></i>
                  <span className="align-middle">Completed</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="trash" className="font-medium-3 me-50"></i>
                  <span className="align-middle">Deleted</span>
                </a>
              </div>
              <div className="mt-3 px-2 d-flex justify-content-between">
                <h6 className="section-label mb-1">Tags</h6>
                <i data-feather="plus" className="cursor-pointer"></i>
              </div>
              <div className="list-group list-group-labels">
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-primary me-1"></span>Team
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-success me-1"></span>Low
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-warning me-1"></span>
                  Medium
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-danger me-1"></span>High
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-info me-1"></span>Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
