interface ThemeProps<T> {
	appearance?: T;
}

interface TIntent {
	primary: string | string[];
	secondary: string | string[];
	tertiary: string | string[];
	info: string | string[];
	success: string | string[];
	warning: string | string[];
	error: string | string[];
}

interface TSize {
	sm: string | string[];
	md: string | string[];
	lg: string | string[];
}

interface TState {
	static: string | string[];
	loading: string | string[];
	disabled: string | string[];
}

interface baseTheme {
	component: {
		intent: TIntent;
		size: TSize;
		state: TState;
	};
}
