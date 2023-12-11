import React, { useEffect, useState } from 'react';

const GitHubRepoReader = () => {
  const [repoContent, setRepoContent] = useState('');

  useEffect(() => {
    const fetchRepoContent = async () => {
      try {
        const response = await fetch(
          'https://github.com/shirJoopy/components-library/contents/',
          {
            headers: {
              Authorization: 'token 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', // Replace with your token or use another authentication method
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const content = atob(data.content); // Decode base64-encoded content
          setRepoContent(content);
        } else {
          throw new Error('Failed to fetch file');
        }
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchRepoContent();
  }, []);

  return (
    <div>
      <h2>Repository Content:</h2>
      <pre>{repoContent}</pre>
    </div>
  );
};

export default GitHubRepoReader;
