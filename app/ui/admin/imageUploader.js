'use client';

import { useState } from 'react';

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    year: new Date().getFullYear().toString(),
    tags: '',
  });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }

    setLoading(true);

    const fd = new FormData();
    fd.append('file', file);
    fd.append('name', formData.name);
    fd.append('description', formData.description);
    fd.append('year', formData.year);
    fd.append('fileType', file.type);
    fd.append('tags', formData.tags); // comma-separated will be split on server

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();
      alert('Upload successful!');
      setFile(null);
      setFormData({ name: '', description: '', year: '', tags: '' });
    } catch (error) {
      alert('Upload failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
      <div>
        <label>Image File:</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>

      <div>
        <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g., Product Photo"
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe the image..."
        />
      </div>

      <div>
        <label>Year:</label>
        <input 
          type="number"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>

      <div>
        <label>Tags (comma-separated):</label>
        <input 
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="e.g., portfolio, client, nature"
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
    </form>
  );
}