import { containerId } from './constants';

const apps = [
  {
    // app name registered
    name: 'qiankun-child',
    entry: '//localhost:3002',
    activeRule: '/',
  },
];

export default apps.map((app) => ({
  ...app,
  container: `#${containerId}`,
  props: {
    route: app.activeRule,
  },
}));
