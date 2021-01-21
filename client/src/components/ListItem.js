import React from 'react';

function ListItem({ jobs, removeJob, updateJobModal }) {
    return jobs.map((job, index) => (
        <div className={`job-box job-${job.priority}`} key={index}>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="job-title">{job.name}</h3>
                </div>
                <div className="col-md-4">
                    <span className="job-status">{job.priority}</span>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn-primary mr-2" onClick={() => updateJobModal({ id: job.id, name: job.name, priority: job.priority })}>Edit</button>
                    <button type="button" className="btn btn-primary" onClick={() => removeJob(job.id)}>Delete</button>
                </div>
            </div>
        </div>
    ));
}

export default ListItem;