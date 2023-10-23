import React, { lazy } from "react";
const HeroSection = lazy(() => import('../components/hero-section'));

const BlockManager = ({ blocks, contentType, pageData, type }) => {
  console.log("main block", blocks);
  return (
    <div>
      {blocks.map((block, index) => {
        let Block;
        switch (block.__component) {
          case 'blocks.hero':
            Block = HeroSection;
            break;
          default:
            null
        }

        return Block ? (
          <div key={`index-${index}`}>
            <Block component={block.__component} {...block} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default BlockManager;
