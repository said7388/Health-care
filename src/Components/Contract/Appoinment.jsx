import React from "react";

function Appoinment() {
  return (
    <div>
      <div className='card shadow px-3 mb-3 py-4 w-md-50 mx-auto mt-5 bg-light'>
        <div className='text-center text-uppercase'>
          <h3>Make An Appointment</h3>
        </div>
        <div className='card-body'>
          <form>
            <div className='form-group py-2'>
              <label className='mb-0'>
                Your name <span className='text-danger'>*</span>
              </label>
              <input
                name='name'
                type='text'
                className='form-control p-3'
                placeholder='Name'
              />
            </div>
            <div className='form-group py-2'>
              <label className='mb-0'>
                Your email<span className='text-danger'>*</span>
              </label>
              <input
                name='email'
                type='email'
                className='form-control p-3'
                placeholder='Email'
              />
            </div>
            <div className='form-group py-2'>
              <label className='mb-0'>Your contact number (Optional)</label>
              <input
                name='contact'
                type='text'
                className='form-control p-3'
                placeholder='Contact'
              />
            </div>
            <div className='form-group py-2'>
              <label className='mb-0'>
                Message<span className='text-danger'>*</span>
              </label>
              <textarea
                name='message'
                type='text'
                className='form-control '
                placeholder='Message'
              />
            </div>
            <p className='text-center mb-0 py-2'>
              <input
                type='submit'
                className='btn btn-regular btn-lg w-50 text-uppercase'
                value='Send Now'
              />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
