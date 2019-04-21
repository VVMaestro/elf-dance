describe("Эльф должен делать простые движения", function() {
	it("поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		});
	});

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			done();
		});
	});

	it("опустить левую руку", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 0, 0, 0]
		}

		leftHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("опустить правую руку", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 0, 0]
		}

		rightHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("выставить левую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 0]
		}

		leftLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("выставить правую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 1]
		}

		rightLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("убрать левую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		leftLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		});
	});

	it("убрать правую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		rightLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 1]);
			done();
		});
	});
});

describe("Эльф должен независимо двигать конечностями", function () {
	it("поднять левую и правую руку", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
		});

		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		});
	});

	it("опустить левую и правую руку", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0]
		}

		leftHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
		});

		rightHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("выставить левую и правую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}

		leftLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 1]);
		});

		rightLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("собрать левую и правую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		leftLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
		});

		rightLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		});
	});
});

describe("Эльф должен выполнять соответствующие фигуры танца при демонстрации драгоценных камней", function () {
	it("Цитрин", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}
		const gem = "Цитрин";

		jasmine.clock().install();
		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
		
		jasmine.clock().tick(elf.danceSpeed + 1);
		expect(elf.stance).toEqual([1, 1, 0, 0]);

		jasmine.clock().uninstall();
	});

	it("Аметист", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0]
		}
		const gem = "Аметист";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("Кварц", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}
		const gem = "Кварц";

		jasmine.clock().install();

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});;

		jasmine.clock().tick(elf.danceSpeed + 1);
		expect(elf.stance).toEqual([0, 0, 1, 1]);
		jasmine.clock().uninstall();
	});

	it("Альмандин", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Альмандин";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 1]);
			done();
		});
	});

	it("Родолит", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Родолит";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 1, 0]);
			done();
		});
	});

	it("Пироп", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}
		const gem = "Пироп";

		jasmine.clock().install();

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});

		jasmine.clock().tick(elf.danceSpeed + 1);
		expect(elf.stance).toEqual([1, 1, 1, 1]);

		jasmine.clock().uninstall();
	});

	it("Спессартин", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Спессартин";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		});
	});

	it("Эвклаз", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0]
		}
		const gem = "Эвклаз";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("Тааффеит", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0]
		}
		const gem = "Тааффеит";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		});
	});
});

describe("Эльф должен понимать особый смысл некоторых камней", function () {
	it("Андалузит - принять начальную позицию", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0]
		}
		const gem = "Андалузит";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		});
	});

	it("Гиацинт - принять конечную позицию", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Гиацинт";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		});
	});

	it("Циркон - сделать паузу, равную скорости танца", function () {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Циркон";

		jasmine.clock().install();
		displayGemToElf(elf, gem);

		jasmine.clock().tick(elf.danceSpeed + 5);
		expect(elf.stance).toEqual([0, 0, 1, 1]);

		jasmine.clock().uninstall();
	});

	it("Танзанит - увеличить скорость танца вдвое", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Танзанит";
		let oldDanceSpeed = elf.danceSpeed;

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.danceSpeed).toEqual(2 * oldDanceSpeed);
			done();
		});
	});

	it("Топаз - уменьшить скорость танца вдвое", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Топаз";
		let oldDanceSpeed = elf.danceSpeed;

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.danceSpeed).toEqual(oldDanceSpeed / 2);
			done();
		});
	});

	it("Параиба - сделать паузу, пока все танцоры не исполнят все фигуры танца", function (done) {
		let elf1 = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
			favouriteGems: []
		}
		let elf2 = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
			favouriteGems: []
		}
		
		const gem1 = 'Спессартин';//4-ре фазы
		const gem2 = 'Родолит';//1-на фаза
		const gemPause = "Параиба";//Пауза
		
		displayGemToElf(elf1, gem1)
			.then((elf1) => {
				expect(elf1.stance).toEqual([1, 1, 0, 0]);
				expect(elf2.stance).toEqual([0, 1, 1, 0]);
				done();
			})
			.then((elf1) => {
				return displayGemToElf(elf1, gemPause);
			});
		displayGemToElf(elf2, gem2)
			.then((elf2) => displayGemToElf(elf2, gemPause))
			.then((elf2) => displayGemToElf(elf2, gem1));
	});
});

describe("Эльф должен станцевать фристайл на камень без определённого смысла", function () {
	it("Freestyle", function () {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}
		const gem = "Спессартин";
		 
		jasmine.clock().install();
		displayGemToElf(elf, gem);

		jasmine.clock().tick(elf.danceSpeed + 1);
		expect(elf.stance).not.toEqual([0, 0, 1, 1]);

		jasmine.clock().uninstall();
	});
});

describe("Эльф должен регировать на", function () {
	it("Любимый камень", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
			favouriteGems : ['Алмаз']
		}

		const gem = 'Алмаз';

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		});
	});

	it("Нелюбимый камень", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
			dislikedGems: ['Алмаз']
		}

		const gem = 'Алмаз';

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});
});