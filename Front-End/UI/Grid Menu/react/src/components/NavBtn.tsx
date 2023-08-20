import React, { ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import styles from './Navbtn.module.css';
import { BtnTheme } from '../theme.config';

export interface TBtnTheme extends baseTheme {}

interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof btnStyles> {
	children?: ReactNode;
}

const btnStyles = cva(styles.btn, {
	variants: {
		intent: {
			primary: BtnTheme.intent.primary,
			secondary: BtnTheme.intent.secondary,
			tertiary: BtnTheme.intent.tertiary,
			info: BtnTheme.intent.info,
			success: BtnTheme.intent.success,
			danger: BtnTheme.intent.danger,
			warning: BtnTheme.intent.warning,
			error: BtnTheme.intent.error,
		},
		size: {
			sm: BtnTheme.size.sm,
			md: BtnTheme.size.md,
			lg: BtnTheme.size.lg,
		},
		state: {
			static: BtnTheme.state.static,
			loading: BtnTheme.state.loading,
			disabled: BtnTheme.state.disabled,
		},
	},
	defaultVariants: {
		intent: 'primary',
		size: 'md',
	},
});

export default function NavBtn({ children, intent, size, state, ...props }: Props) {
	return (
		<button className={btnStyles({ intent, size, state })} {...props}>
			{children}
		</button>
	);
}
