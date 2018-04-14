import utils from './utils';

import './TreeNavigation.scss';

const TreeNavigation = {
  data() {
    return {
      classes: ['TreeNavigation'],
    };
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    defaultOpenLevel: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    itemsWithMetadata() {
      const self = this;

      const items = JSON.parse(JSON.stringify(self.items));
      return utils.insertMetadataToItems(items);
    },
  },

  render(createElement) {
    const self = this;

    const level = 1;
    const tree = createElement(
      'ul',
      utils.generateLevel(
        createElement,
        self.itemsWithMetadata,
        level,
        self.defaultOpenLevel
      )
    );

    const wrapper = createElement(
      'div',
      {
        class: self.classes,
      },
      [tree]
    );

    return wrapper;
  },
};

export default TreeNavigation;
