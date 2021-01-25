import React, { useEffect, useState } from 'react';
import './App.scss';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Modal from './components/Modal';

function App() {
  const [jobs, setJobs] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    name: '',
    priority: ''
  });
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const result = jobs.filter(job => {
      return job.name.toLowerCase().includes(search);
    });
    setSearchResult(result);
  }, [search, jobs]);

  const addJob = job => {
    const newJobs = [job, ...jobs];
    setJobs(newJobs);
  };

  const updateJob = (newJob) => {
    setJobs(prev => prev.map(item => (item.id === newJob.id ? newJob : item)));
  };

  const updateJobModal = job => {
    if (job) {
      setUpdateModal(true);
      setEdit({
        id: job.id,
        name: job.name,
        priority: job.priority
      })
    }
  }

  const removeJob = id => {
    const removedArr = [...jobs].filter(job => job.id !== id);
    setJobs(removedArr);
    if(searchResult.length > 0) {
      const searchArr = [...searchResult].filter(job => job.id !== id);
      setSearchResult(searchArr);
    }
  };

  const submitUpdateJob = job => {
    updateJob(job);
    setEdit({
        id: null,
        name: '',
        priority: ''
    });
    closeModal();
  };

  const closeModal = () => {
    setUpdateModal(false);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <React.Fragment>
      <section className="form-area">
        <Form onSubmit={addJob} />
      </section>
      <section className="job-list">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2 className="title">JOB LIST</h2>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" onChange={updateSearch} value={search} placeholder="Search Job" />
            </div>
            <div className="col-md-12">
              <div className="job-list-table">
                {searchResult.length > 0 ? (
                  <ListItem jobs={searchResult} removeJob={removeJob} updateJobModal={updateJobModal} />
                ) : (
                  <ListItem jobs={jobs} removeJob={removeJob} updateJobModal={updateJobModal} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {updateModal && (
        <Modal closeModal={closeModal} edit={edit} onSubmit={submitUpdateJob} />
      )}
    </React.Fragment>
  );
}

export default App;
