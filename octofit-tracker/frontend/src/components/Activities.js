import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://automatic-trout-r464qj4xwx4635v9p-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => {
        console.log('Activities data:', data); // Debugging log
        setActivities(data);
      })
      .catch(error => console.error('Error fetching activities:', error)); // Error handling
  }, []);

  return (
    <div>
      <h1 className="mb-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;