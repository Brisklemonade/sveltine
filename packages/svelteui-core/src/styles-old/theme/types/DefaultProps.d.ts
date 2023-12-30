import type { SvelteUIStyleSystemProps } from './SvelteUIStyleSystem';
import type { Override } from './SvelteUITheme';
import type { ActionArray } from '$lib/internal/utils/forwarding/forward-actions';

export interface DefaultProps<T = HTMLElement> extends SvelteUIStyleSystemProps {
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	className?: string;
	// @TODO(migration): To be removed
	/** Used for custom theming the component */
	override?: Override['props'];
	// @TODO(migration): Check if this is indeed a string
	/** Used for custom styling the component */
	style?: string;
	/** Used for components to bind to elements */
	element?: T;
	/** Used for forwarding actions from component */
	use?: ActionArray;
}

/* Default Props to be used everywhere. Here in the same spot to copy

export let use: $$BLANK-Props['use'] = [],
		element: $$BLANK-Props['element'] = undefined,
		className: $$BLANK-Props['className'] = '',
		override: $$BLANK-Props['override'] = {}
*/
