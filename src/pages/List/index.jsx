import React from 'react';
import { useSelector } from 'react-redux'
import Caneca from '../../components/Caneca';

export default function List() {

	const canecas = useSelector((state) => state.canecas)

	return (
		<div className="container-fluid">
			<div className="row">{canecas.map((caneca, index) => <Caneca key={index} caneca={caneca} />)}</div>
		</div>
	);
}
