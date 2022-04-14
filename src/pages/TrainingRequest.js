import styled from 'styled-components'
const TrainingRequest = () => {
    return (
        <div class="container">
        <h1 style={{padding: "24px 0", fontSize: "24px",fontWeight:'bolder',fontFamily:'None'}}>Request New Training Session</h1>
  <div class="row justify-content-md-center">
   
        <div className='col-md' style={{maxWidth:'600px'}}>
        <form>
            {/* <!-- Name input --> */}
            <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Title</label>
                <input type="text" id="form4Example1" class="form-control" />
                
            </div>

            
            {/* <!-- Message input --> */}
            <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Description</label>
                <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                
            </div>



            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
        </div>
    </div>
    </div>
  );
  };
  
  export default TrainingRequest;

  const Wrapper = styled.section`
  width:600px;
  justify-content: center;
`;