'use client';

import {
  RiTwitterXFill,
  RiMetaFill,
  RiInstagramFill,
} from 'react-icons/ri';

const icons = [
  {
    path: 'https://x.com/carbozen1',
    name: <RiTwitterXFill />,
  },
  {
    path: 'https://www.facebook.com/profile.php?id=61578947320829',
    name: <RiMetaFill />,
  },
  {
    path: 'https://www.instagram.com/carbozen1/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <a
          href={icon.path}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className={iconsStyles}
        >
          {icon.name}
        </a>
      ))}
    </div>
  );
};

export default Socials;
