import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Features',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Read guides', href: getBlogPermalink() }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/services') },
        { text: 'About SnapAtlas', href: getPermalink('/about') },
        { text: 'Getting started', href: getPermalink('/blog/getting-started-with-snapatlas') },
      ],
    },
    {
      title: 'Workflows',
      links: [
        { text: 'Organize library', href: getPermalink('/blog/how-to-organize-photo-library') },
        { text: 'Clean duplicates', href: getPermalink('/blog/how-to-find-and-clean-photo-duplicates') },
        { text: 'Convert HEIC', href: getPermalink('/blog/how-to-convert-heic-to-jpg') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Troubleshooting', href: getPermalink('/blog/troubleshooting-common-snapatlas-issues') },
        { text: 'Safety and privacy', href: getPermalink('/blog/snapatlas-safety-and-privacy') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of use', href: getPermalink('/terms') },
        { text: 'Privacy policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Use', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/XopherR/photoorganizer-website' },
  ],
  footNote: `
    SnapAtlas Photo Organizer · Local-first photo cleanup and organization.
  `,
};
