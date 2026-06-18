"use client";

import Header from '../../src/components/header/header';
import Image from 'next/image';
import {Card} from '../../src/components/card/card';
import styles from './home.module.css'
import {PiLeafThin} from "react-icons/pi";
import { IoMdHeartEmpty } from 'react-icons/io';
import { TbCandle } from 'react-icons/tb';

export default function Home() {
	return (
		<><div className={styles.img}>
			<Image src="/imagens/velabubble.jpg" alt="fundo" fill className={styles.backgroundImage} />

			<Header />
			<div className={styles.divTexto}>
				<h1 className={`${styles['titulo-principal']}`}>
					Dando aroma para seus momentos
				</h1>
				<button className={styles.botao}>Conheça o catálogo</button>
			</div>
		</div>

			<div className={styles.divCards}>
			<Card icon={<PiLeafThin />} label="100% vegana" />
			<Card icon={<IoMdHeartEmpty />} label="Feito à mão" />
			<Card icon={<TbCandle />} label="Personalizadas" />
		</div>
	</>
	);
}
 
