import * as outlinedIcons from '../src/outlined';
import * as filledIcons from '../src/filled';

const icons = { ...outlinedIcons, ...filledIcons };

export default Object.keys(icons).map((key) => icons[key]);
