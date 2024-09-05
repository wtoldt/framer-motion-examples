import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { ExampleSection } from '@/components/ExampleSection';
import { Tile } from '@/components/Tile';

const Example1 = () => {
  const [flip, setFlip] = React.useState(false);
  return (
    <ExampleSection heading="Flip tile with motion.div">
      <p>
        Flip a tile on click by toggling a boolean which sets a motion.div
        animate property
      </p>
      <motion.div
        animate={{ rotateY: flip ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tile>1</Tile>
      </motion.div>

      <Button onClick={() => setFlip(!flip)}>Flip</Button>
    </ExampleSection>
  );
};
Example1.displayName = 'Example1';

export { Example1 };
