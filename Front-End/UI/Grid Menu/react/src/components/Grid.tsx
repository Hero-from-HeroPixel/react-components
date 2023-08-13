import styles from './Grid.module.css';
import { cn } from '../utils';

type Props = {
	appearance?: {
		wrapper: string;
	};
};

export default function Grid({ appearance }: Props) {
	return <section className={cn(styles.wrapper, appearance?.wrapper)}></section>;
}
