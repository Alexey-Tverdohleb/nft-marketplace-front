import { ReactComponent as ItemsIcon } from 'assets/icons/Items.svg';
import { ReactComponent as ActivityIcon } from 'assets/icons/Activity.svg';
import { ReactComponent as DollarIcon } from 'assets/icons/Dollar.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/Clock.svg';

const LINKS = [
  {
    name: 'My Items',
    link: '/wallet/my-items',
    icon: ItemsIcon,
  },
  {
    name: 'Latest Activity',
    link: '/wallet/activity',
    icon: ActivityIcon,
  },
  {
    name: 'My Propositions',
    link: '/wallet/propositions',
    totalPrepositions: 3,
    icon: DollarIcon,
  },
  {
    name: 'Pending Bids',
    link: '/wallet/bids',
    icon: ClockIcon,
  },
];

export default LINKS;
