/**
******************************************************************************************
* The following code represents page "Request New Training Session". Here user can 
* Fill the form where he or she says which training session user wants or needs
* Designed to be shown on page Training Session.
******************************************************************************************
*/

import styled from 'styled-components'
import {useState} from 'react'
import { PostTrainingRequest } from '../services/PostTrainingRequest';
const TrainingRequest = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [success, setSuccess] =useState()
    const values = 
        {
        title:'',
        description:''
        }
    
    const handleSubmit= (e) => {
        e.preventDefault();
        values.title = title
        values.description = description
        // console.log(values)
        PostTrainingRequest(values).then((result) => {
            let responseJSON:any = result;
            console.log(responseJSON);
            if (responseJSON.status===200|| responseJSON.status===201) {
              console.log('Sent');
              setSuccess(true)
            }
            else
            {
                setSuccess(false)
            }
        })
      }
    return (
        <div class="container">
        <h1 style={{padding: "24px 0", fontSize: "24px",fontWeight:'bolder',fontFamily:'None'}}>Request New Training Session</h1>
            <div class="row justify-content-md-center" style={{background:'#f9f9f9', padding:'50px', margin:'30px 0'}}>
                <div className='col-md' style={{maxWidth:'600px'}}>
                    <p>Please provide a detail overview of training request.</p>
                    <form onSubmit={handleSubmit}>
                        {/* <!-- Name input --> */}
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example1">Title</label>
                            <input type="text" name="title" value={title} class="form-control" onChange={e => setTitle(e.target.value)} />
                        </div>

                        {/* <!-- Message input --> */}
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example3">Description</label>
                            <textarea class="form-control" value={description} name="description" onChange={e => setDescription(e.target.value)} rows="4"></textarea>
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