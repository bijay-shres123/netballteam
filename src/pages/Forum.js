/**
******************************************************************************************
* The following code represents page "Forum". It has a list of questions or 
* discussion topics formed into a table. Also the page provides information about online users
*
******************************************************************************************
*/
import { Link } from "react-router-dom";
const Forum = () => {
    return (

  <div className="container my-3">
    <nav className="breadcrumb ">
      <h6  className="breadcrumb-item active">Welcome to the Forum Page.</h6>
    </nav>
    
    <div className="row">
      <div className="col-12 col-xl-9">
        <h2 className="h4 Category mb-0 p-4 rounded-top text-dark">Category</h2>
        <Link to="/ask-question">
        <button type="button " className="btn btn-secondary pull-right" style={{margin:'10px 0'}}>+ Add Question</button>
        </Link>
        <table className="table table-striped table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="forum-col">All</th>
              <th scope="col">Topics</th>
              <th scope="col">Posts</th>
              <th scope="col" className="last-post-col">Last Posts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">Attack</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">Ball Skills</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">Centre Pass Set Plays</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">Decision Making</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
          </tbody>
        
          <tbody>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">Defence</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">DIY Drills</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="h5 mb-0"><a href="#">Footwork</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="h5"><a href="#">Fundamentals</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 className="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="col-12  col-xl-3">
        <aside>
          <div className="row">
            <div className="col-12 col-sm-6 col-xl-12">
              <div className="card mb-3 mb-sm-0 mb-xl-3">
                <div className="card-body">
                  <h2 className="h4 card-title">Members Online</h2>
                  <ul className="list-noStyle mb-0">
                    <li><a href="#">Sarah</a></li>
                    <li><a href="#">Tom Clews</a></li>
                    <li><a href="#">Jacqueline Peters</a></li>
                    <li><a href="#">Nikita K</a></li>
                    <li><a href="#">Aby</a></li>
                    <li><a href="#">Bijay</a></li>
                  </ul>
                </div>
                <div className="card-footer">
                  <dl className="row mb-0">
                    <dt className="col-8"> Total:</dt>
                    <dd className="col-4 mb-0">20</dd>
                  </dl>
                  <dl className="row mb-0">
                    <dt className="col-8"> Members:</dt>
                    <dd className="col-4 mb-0">6</dd>
                  </dl>
                  <dl className="row mb-0">
                    <dt className="col-8"> Guests:</dt>
                    <dd className="col-4 mb-0">6</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 card-title">Statistics</h2>
                  <dl className="row mb-0">
                    <dt className="col-8"> Total Forums</dt>
                    <dd className="col-4 mb-0">20</dd>
                  </dl>
                  <dl className="row mb-0">
                    <dt className="col-8"> Topics</dt>
                    <dd className="col-4 mb-0">10</dd>
                  </dl>
                  <dl className="row mb-0">
                    <dt className="col-8"> Total Members</dt>
                    <dd className="col-4 mb-0">6</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  )
};
  
  export default Forum;