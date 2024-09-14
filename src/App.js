import React, { useState } from 'react';
import './App.css';

const TokenGenerator = () => {
  const [blueCount, setBlueCount] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState(1);

  const [redCount, setRedCount] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState(1);

  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);

  const handleGenerate = () => {
    if (blueCount > 0 && bluePerRow > 0) {
      const blueArray = Array.from(
        { length: blueCount },
        (_, i) => `${bluePrefix}${i + 1}`
      );
      setBlueTokens(blueArray);
    }

    if (redCount > 0 && redPerRow > 0) {
      const redArray = Array.from(
        { length: redCount },
        (_, i) => `${redPrefix}${i + 1}`
      );
      setRedTokens(redArray);
    }
  };

  const handleClear = () => {
    setBlueTokens([]);
    setRedTokens([]);
    setBlueCount(0);
    setBluePrefix('');
    setBluePerRow(1);
    setRedCount(0);
    setRedPrefix('');
    setRedPerRow(1);
  };

  const renderTokens = (tokens, perRow) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += perRow) {
      const row = tokens.slice(i, i + perRow);
      rows.push(
        <div key={i} className="token-row">
          {row.map((token, index) => (
            <span key={index} className="token">
              {token}
            </span>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="container">
      <h1>Token Generator</h1>
      <div className="form">
        <label>
          Number of blue tokens:
          <input
            type="number"
            value={blueCount}
            onChange={(e) => setBlueCount(+e.target.value)}
          />
        </label>
        <label>
          Prefix for blue tokens:
          <input
            type="text"
            value={bluePrefix}
            onChange={(e) => setBluePrefix(e.target.value)}
          />
        </label>
        <label>
          Blue tokens per row:
          <input
            type="number"
            value={bluePerRow}
            onChange={(e) => setBluePerRow(+e.target.value)}
          />
        </label>
        <label>
          Number of red tokens:
          <input
            type="number"
            value={redCount}
            onChange={(e) => setRedCount(+e.target.value)}
          />
        </label>
        <label>
          Prefix for red tokens:
          <input
            type="text"
            value={redPrefix}
            onChange={(e) => setRedPrefix(e.target.value)}
          />
        </label>
        <label>
          Red tokens per row:
          <input
            type="number"
            value={redPerRow}
            onChange={(e) => setRedPerRow(+e.target.value)}
          />
        </label>

        <div className="buttons">
          <button onClick={handleGenerate}>Generate</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="tokens">
        <h2>Blue Tokens</h2>
        {blueTokens.length > 0 ? (
          renderTokens(blueTokens, bluePerRow)
        ) : (
          <p>No blue tokens</p>
        )}

        <h2>Red Tokens</h2>
        {redTokens.length > 0 ? (
          renderTokens(redTokens, redPerRow)
        ) : (
          <p>No red tokens</p>
        )}
      </div>
    </div>
  );
};

export default TokenGenerator;
