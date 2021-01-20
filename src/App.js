import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="inputJob" className="form-label">Job</label>
                <input type="email" className="form-control" id="inputJob" maxLength="70" />
              </div>
              <div className="mb-3">
                <label htmlFor="selectInputPriortiy" className="form-label">Priority</label>
                <select className="form-control" id="selectInputPriortiy">
                  <option value="1">Urgent</option>
                  <option value="2">Regular</option>
                  <option value="3">Trival</option>
                </select>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2 className="title">JOB LIST</h2>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Search Job" />
            </div>
            <div className="col-md-12">
              <div className="job-list-table">
                <div className="job-box job-urgent">
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="job-title">My Job Name 3</h3>
                    </div>
                    <div className="col-md-4">
                      <span className="job-status">Urgent</span>
                    </div>
                    <div className="col-md-4">
                      <button type="button" className="btn btn-primary mr-2">Edit</button>
                      <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="job-box job-regular">
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="job-title">My Job Name 1</h3>
                    </div>
                    <div className="col-md-4">
                      <span className="job-status">Regular</span>
                    </div>
                    <div className="col-md-4">
                      <button type="button" className="btn btn-primary mr-2">Edit</button>
                      <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="job-box job-trivial">
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="job-title">My Job Name 2</h3>
                    </div>
                    <div className="col-md-4">
                      <span className="job-status">Trivial</span>
                    </div>
                    <div className="col-md-4">
                      <button type="button" className="btn btn-primary mr-2">Edit</button>
                      <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
