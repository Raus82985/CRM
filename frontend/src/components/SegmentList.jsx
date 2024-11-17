import React from 'react';

// Function to add syntax highlighting to JSON
const highlightJson = (json) => {
  try {
    const parsedJson = typeof json === 'string' ? JSON.parse(json) : json;
    const jsonString = JSON.stringify(parsedJson, null, 2);

    return jsonString.replace(
      /("(.*?)")|([{}\[\]])|(:)|(-?\d+(\.\d+)?)|(true|false|null)/g,
      (match, string, key, brackets, colon, number, _, bool) => {
        if (string) {
          return `<span class="text-green-600">${string}</span>`; // Strings
        }
        if (key) {
          return `<span class="text-blue-500 font-medium">${key}</span>`; // Keys
        }
        if (brackets) {
          return `<span class="text-gray-500">${brackets}</span>`; // Brackets
        }
        if (colon) {
          return `<span class="text-gray-400">${colon}</span>`; // Colon
        }
        if (number) {
          return `<span class="text-purple-500">${number}</span>`; // Numbers
        }
        if (bool) {
          return `<span class="text-orange-500 font-semibold">${bool}</span>`; // Booleans and null
        }
        return match;
      }
    );
  } catch (e) {
    return json; // If parsing fails, return raw JSON
  }
};

const SegmentList = ({ segments }) => {
  if (!segments || segments.length === 0) {
    return <div className="text-center text-gray-500 mt-4">No segments created yet.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Existing Segments</h2>
      <ul className="space-y-4">
        {segments.map((segment, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-medium text-gray-800">
                  {segment.name}
                </h3>
                <span className="text-sm text-gray-500">
                  Audience Size: <span className="font-mono text-gray-700">{segment.audience_size}</span>
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ID: <span className="font-mono text-gray-700">{segment._id}</span>
              </span>
            </div>
            <div
              className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg overflow-x-auto font-mono"
              dangerouslySetInnerHTML={{ __html: highlightJson(segment.conditions) }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SegmentList;
