import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			menu: [
				{
					id: 1,
					fighterName: 'Goku',
					race: 'Saiyan',
					specialAttack: 'Kamehameha Wave',
					img: './assets/goku.jpg'
				},
				{
					id: 2,
					fighterName: 'Vegeta',
					race: 'Saiyan',
					specialAttack: 'Final Flash',
					img: './assets/vegeta.png'
				},
				{
					id: 3,
					fighterName: 'Gohun',
					race: 'Human',
					specialAttack: 'Masenko',
					img: './assets/gohun.jpg'
				},
				{
					id: 4,
					fighterName: 'Krillin',
					race: 'Human',
					specialAttack: 'Destructo Disc',
					img: './assets/krillin.jpg'
				},
				{
					id: 5,
					fighterName: 'Android 17',
					race: 'Android',
					specialAttack: 'Barrier',
					img: './assets/android17.jpg'
				},
				{
					id: 6,
					fighterName: 'Jiren',
					race: 'Unknown',
					specialAttack: 'Eye Paralysis',
					img: './assets/jiren.png'
				},
				{
					id: 7,
					fighterName: 'Lord Beerus',
					race: 'God',
					specialAttack: 'Hakai',
					img: './assets/beerus.png'
				},
				{
					id: 8,
					fighterName: 'Cell',
					race: 'Android',
					specialAttack: 'Kamehameha Wave',
					img: './assets/cell.jpg'
				},
				{
					id: 9,
					fighterName: 'Frieza',
					race: 'Unknown',
					specialAttack: 'Finger Blasters',
					img: './assets/frieza.jpg'
				},
				{
					id: 10,
					fighterName: 'Black Goku',
					race: 'Sayian',
					specialAttack: 'Ki Blade',
					img: './assets/gokuBlack.jpg'
				}
			]
		};
	}
	toggleClass = id => {
		console.log(`Clicked item ${id}`, this);

		const currentState = this.state.active;
		this.setState({ active: !currentState });
		this.setState({ selectedItemIndex: id });
	};

	render() {
		return (
			<div className="container">
				<h1>Menu Selector</h1>
				<div>
					<ul>
						{this.state.menu.map((dragonball, index) => (
							<li
								key={index}
								onClick={() => this.toggleClass(dragonball.id)}
								className={this.state.selectedItemIndex === dragonball.id ? 'hover' : null}
							>
								<div className="container-dragonball">
									<div className="dragonball-stats">
										<h1>{dragonball.fighterName}</h1>
										<p>Race: {dragonball.race}</p>
										<p>Special Attack: {dragonball.specialAttack}</p>
									</div>
									<div className="dragonball-img">
										<img src={require(`${dragonball.img}`)} alt={dragonball.fighterName} />
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
