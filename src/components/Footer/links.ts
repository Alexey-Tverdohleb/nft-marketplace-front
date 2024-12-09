import { ReactComponent as TelegramIcon } from 'assets/icons/Telegram.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/Instagram.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/Facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/Twitter.svg';
import { ReactComponent as DiscordIcon } from 'assets/icons/Discord.svg';

export const LINKS = [
  {
    id: 1,
    links: [
      {
        label: 'Explore',
        to: '/explore#NFTs',
      },
      {
        label: 'Artists',
        to: '/artists',
      },
      {
        label: 'Activity',
        to: '/activity',
      },
      {
        label: 'Help Center',
        to: '/help-center',
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        label: 'About us',
        to: '/about-us',
      },
      {
        label: 'Contact us',
        to: '/about-us',
      },
      {
        label: 'Blog Page',
        to: '/blog',
      },
      {
        label: 'Terms of use',
        to: '/terms',
      },
    ],
  },
] as const;

export const SOCIAL_NETWORKS = [
  {
    to: 'https://www.instagram.com/?hl=en',
    icon: InstagramIcon,
  },
  {
    to: 'https://twitter.com/',
    icon: TwitterIcon,
  },
  {
    to: 'https://www.facebook.com/',
    icon: FacebookIcon,
  },
  {
    to: 'https://web.telegram.org',
    icon: TelegramIcon,
  },
  {
    to: 'https://discord.com/',
    icon: DiscordIcon,
  },
];
