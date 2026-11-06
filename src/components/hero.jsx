const Hero= ()=>{
return(
  <main className="hero">
  <div className="hero-badge">
    <span className="new-text">
    New
    </span> Project Updates
  </div>

  <h1 className="hero-title">
  Plan,build and Ship <br/> better software
  </h1>

  <p className="hero-subtitle">
  Linear is a purpose-built tool for planning and building products. Designed for the modern software team.  
  </p>

  <div className="hero-actions" >
  <button className="primary-btn">Start building</button>
  <button className="secondary-btn">Explore features</button>
  </div>

    {/* THIS IS THE NEW "PICTURE" SECTION */}
      <div className="hero-image-container">
        <div className="app-window">
          
          {/* Fake App Sidebar */}
          <div className="app-sidebar">
            <div className="sidebar-item active">Workspace</div>
            <div className="sidebar-item">My Issues</div>
            <div className="sidebar-item">Projects</div>
            <div className="sidebar-item">Views</div>
          </div>

          {/* Fake App Content */}
          <div className="app-content">
            <div className="app-header">
              <span>My Issues</span>
              <span className="app-badge">12 Open</span>
            </div>
            
            <div className="issue-list">
              <div className="issue-item">
                <span className="issue-status">In Progress</span>
                <span className="issue-title">Design new landing page</span>
              </div>
              <div className="issue-item">
                <span className="issue-status done">Done</span>
                <span className="issue-title">Set up React environment</span>
              </div>
              <div className="issue-item">
                <span className="issue-status">Todo</span>
                <span className="issue-title">Connect backend API</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
  </main>
)
}
export default Hero;