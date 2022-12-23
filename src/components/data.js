import React, { useEffect } from 'react';

function DataPage() {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const products = [];
  }, []);
  return <h1>pagination</h1>;
}
export default DataPage;
