import React, { useEffect, useState } from 'react';

const fetchSVGContent = async (url: string) => {
  try {
    const response = await fetch(
      url
    );

    if (response.ok) {
      const svgContent = await response.text();
      return svgContent;
      // Here, 'svgContent' will contain the raw SVG content
    } else {
      throw new Error('Failed to fetch SVG file');
    }
  } catch (error) {
    console.error(error);
    // Handle error
  }
};


const GitHubRepoReader = () => {
  const [repoSvgs, setRepoSvgs] = useState<string[]>([]);

  useEffect(() => {
    const fetchRepoContent = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/shirJoopy/components-library/contents/src/componenets/Icons/sources/',
          {
            headers: {
              Authorization: 'barear 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', // Replace with your token or use another authentication method
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const srcs = await Promise.all(data.map((src: any) => fetchSVGContent(src.download_url)))
          console.log(data);
          debugger

          setRepoSvgs(srcs);
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
      {repoSvgs.map((src, index) => (
        <img key={index} src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(src)}`} alt="SVG Image" />
      ))}

    </div>
  );
};

export default GitHubRepoReader;
