/**
******************************************************************************************
* The following code represents page "Forum". It has a list of questions or 
* discussion topics formed into a table. Also the page provides information about online users
*
******************************************************************************************
*/

const Forum = () => {
    return (

  <div class="container my-3">
    <nav class="breadcrumb ">
      <h6  class="breadcrumb-item active">Welcome to the Forum Page.</h6>
    </nav>
    
    <div class="row">
      <div class="col-12 col-xl-9">
        <h2 class="h4 Category mb-0 p-4 rounded-top text-dark">Category</h2>
        <table class="table table-striped table-bordered table-responsive">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="forum-col">All</th>
              <th scope="col">Topics</th>
              <th scope="col">Posts</th>
              <th scope="col" class="last-post-col">Last Posts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">Attack</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">Ball Skills</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">Centre Pass Set Plays</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">Decision Making</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
          </tbody>
        
          <tbody>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">Defence</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">DIY Drills</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="h5 mb-0"><a href="#">Footwork</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="h5"><a href="#">Fundamentals</a></h3>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Velit, praesentium?</p>
              </td>
              <td>
                <div>8</div>
              </td>
              <td>30</td>
              <td>
                <h4 class="h6 mb-0"><a href="#"> Post Name</a></h4>
                <div> by <a href="#">Author Name</a></div>
                <div> 28 March, 15:00</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="col-12  col-xl-3">
        <aside>
          <div class="row">
            <div class="col-12 col-sm-6 col-xl-12">
              <div class="card mb-3 mb-sm-0 mb-xl-3">
                <div class="card-body">
                  <h2 class="h4 card-title">Members Online</h2>
                  <ul class="list-noStyle mb-0">
                    <li><a href="#">Sarah</a></li>
                    <li><a href="#">Tom Clews</a></li>
                    <li><a href="#">Jacqueline Peters</a></li>
                    <li><a href="#">Nikita K</a></li>
                    <li><a href="#">Aby</a></li>
                    <li><a href="#">Bijay</a></li>
                  </ul>
                </div>
                <div class="card-footer">
                  <dl class="row mb-0">
                    <dt class="col-8"> Total:</dt>
                    <dd class="col-4 mb-0">20</dd>
                  </dl>
                  <dl class="row mb-0">
                    <dt class="col-8"> Members:</dt>
                    <dd class="col-4 mb-0">6</dd>
                  </dl>
                  <dl class="row mb-0">
                    <dt class="col-8"> Guests:</dt>
                    <dd class="col-4 mb-0">6</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-12">
              <div class="card">
                <div class="card-body">
                  <h2 class="h4 card-title">Statistics</h2>
                  <dl class="row mb-0">
                    <dt class="col-8"> Total Forums</dt>
                    <dd class="col-4 mb-0">20</dd>
                  </dl>
                  <dl class="row mb-0">
                    <dt class="col-8"> Topics</dt>
                    <dd class="col-4 mb-0">10</dd>
                  </dl>
                  <dl class="row mb-0">
                    <dt class="col-8"> Total Members</dt>
                    <dd class="col-4 mb-0">6</dd>
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