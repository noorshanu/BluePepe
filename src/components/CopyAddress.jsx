import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'

const CopyAddress = () => {
  const [tooltipText, setTooltipText] = useState('Copy this');
  const address = '9cDJYjiSg6c4A45W51joNBxTxGMJspDHayyN3TbFfw57';

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => {
        setTooltipText('Copy this');
      }, 2000);
    });
  };

  return (
    <div className="relative inline-block">
      <span
        onClick={handleCopy}
        data-tip={tooltipText}
        data-for="my-tooltip"
        className="cursor-pointer text-white font-bold text-xs sm:text-lg text-center "
      >
        {address}
      </span>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default CopyAddress;
