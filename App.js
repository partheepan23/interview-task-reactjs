import React, { useState } from 'react';
import './App.css';

function App() {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [newSchema, setNewSchema] = useState('');
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);

  const handleSaveSegment = () => {
    const dataToSend = {
      segment_name: segmentName,
      schema: selectedSchemas.map(schema => ({ [schema]: schema })),
    };
    // Send data to server
    console.log(dataToSend);
  };

  const handleAddNewSchema = () => {
    if (newSchema) {
      setSelectedSchemas([...selectedSchemas, newSchema]);
      setAvailableSchemas(availableSchemas.filter(schema => schema.value !== newSchema));
      setNewSchema('');
    }
  };

  return (
    <div className="App">
      <button onClick={() => console.log("Open Popup")}>Save Segment</button>
      <div className="popup">
      <input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
        <select value={newSchema} onChange={(e) => setNewSchema(e.target.value)}>
          <option value="">Select Schema to Add</option>
          {availableSchemas.map((schema) => (
            <option key={schema.value} value={schema.value}>
              {schema.label}
            </option>
          ))}
        </select>
        <button onClick={handleAddNewSchema}>+ Add New Schema</button>
        <button onClick={handleSaveSegment}>Save the Segment</button>
      </div>
      <div className="blue-box">
        <h3>Selected Schemas:</h3>
        <ul>
          {selectedSchemas.map((schema, index) => (
            <li key={index}>{schema}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
