import styles from './Grid.module.css';
import { cn } from '../utils';
import NavBtn from './NavBtn';

type GridTheme = {
	wrapper?: string;
};
interface Props extends ThemeProps<GridTheme> {
	Navbtn?: boolean;
}

export default function Grid({ appearance, Navbtn = true }: Props) {
	return (
		<section className={cn(styles.wrapper, appearance?.wrapper)}>
			{Navbtn && <NavBtn></NavBtn>}
		</section>
	);
}
