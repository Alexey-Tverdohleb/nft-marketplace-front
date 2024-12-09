import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as InstagramIcon } from 'assets/icons/Instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/Twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/Facebook.svg';
import { ReactComponent as MailIcon } from 'assets/icons/Mail.svg';
import { ReactComponent as DiscordIcon } from 'assets/icons/Discord.svg';

export type Artist = {
  short_description: string,
  full_description: string
  items: number
  collections: number
  floor_price: number
  social_networks: {
    src: string
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
    id: number
  }[]
  name: string
  avatar: string
  id: string
}

const commonInfo: Pick<Artist, 'short_description' | 'full_description' | 'items' | 'collections' | 'floor_price' | 'social_networks'> = {
  short_description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed uia.',
  full_description: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work.',
  items: Math.round(Math.random() * 200),
  collections: Math.round(Math.random() * 10_000_000),
  floor_price: +Math.random().toFixed(2),
  social_networks: [
    {
      src: 'https://www.instagram.com/',
      icon: InstagramIcon,
    },
    {
      src: 'https://www.twitter.com/',
      icon: TwitterIcon,
    },
    {
      src: 'https://www.facebook.com/',
      icon: FacebookIcon,
    },
    {
      src: 'mailto:somerandom@gmail.com',
      icon: MailIcon,
    },
    {
      src: 'https://discord.com/',
      icon: DiscordIcon,
    },
  ].map((item, index) => ({ ...item, id: index })),
};

export const FAKE_ARTISTS: Artist[] = [
  {
    name: 'Kurt Bates',
    avatar: '/images/avatar/artists/1.png',
    ...commonInfo,
  },
  {
    name: 'Rhonda Rhodes',
    avatar: '/images/avatar/artists/2.png',
    ...commonInfo,
  },
  {
    name: 'Eddie Lake',
    avatar: '/images/avatar/artists/3.png',
    ...commonInfo,
  },
  {
    name: 'Patricia Sanders',
    avatar: '/images/avatar/artists/4.png',
    ...commonInfo,
  },
  {
    name: 'Rodger Struck',
    avatar: '/images/avatar/artists/5.png',
    ...commonInfo,
  },
  {
    name: 'Katie Sims',
    avatar: '/images/avatar/artists/6.png',
    ...commonInfo,
  },
  {
    name: 'Ricky Smith',
    avatar: '/images/avatar/artists/7.png',
    ...commonInfo,
  },
  {
    name: 'David Elson',
    avatar: '/images/avatar/artists/8.png',
    ...commonInfo,
  },
  {
    name: 'Kenneth Allen',
    avatar: '/images/avatar/artists/9.png',
    ...commonInfo,
  },
  {
    name: 'Merry Freund',
    avatar: '/images/avatar/artists/10.png',
    ...commonInfo,
  },
  {
    name: 'Kimberly Mastrangelo',
    avatar: '/images/avatar/artists/11.png',
    ...commonInfo,
  },
  {
    name: 'Iva Ryan',
    avatar: '/images/avatar/artists/12.png',
    ...commonInfo,
  },
].map((item) => ({ ...item, id: item.name.toLowerCase().split(' ').join('_') }));
