import config from '~/config.json';

export const navLinks = [
  {
    label: '我的项目',
    pathname: '/#project-1',
  },
  {
    label: '关于AMeng',
    pathname: '/#details',
  },
  {
    label: '作品集',
    pathname: '/articles',
  },
  {
    label: '联系我',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
