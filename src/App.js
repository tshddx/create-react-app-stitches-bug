import { styled } from '@stitches/react';
import { useState } from 'react';

const Box = styled('div');

function App() {
  const [index, setIndex] = useState(0);
  return (
    <html lang="en" key={index}>
      <head>
        <title>React App</title>
      </head>
      <body>
        <Box
          css={{ backgroundColor: 'LightPink', padding: '2em', fontSize: 24 }}
        >
          <Box>This text and button should be inside a pink box.</Box>
          <Box
            as="button"
            onClick={() => setIndex((i) => i + 1)}
            css={{ fontSize: 'inherit' }}
          >
            Click me to re-render the html tag
          </Box>
        </Box>
      </body>
    </html>
  );
}

export default App;
