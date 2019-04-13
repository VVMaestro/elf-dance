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

describe("Эльф должен уметь двигать конечностями одновременно", function () {
	it("поднять обе руки одновременно", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		};

		bothHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		});
	});

	it("опустить обе руки", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0]
		};

		bothHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("выставить обе ноги", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		};

		bothLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		});
	});

	it("убрать обе ноги", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		};

		bothLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("поднять левую руку, выставить левую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		};

		leftSplit(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 1, 0]);
			done();
		});
	});

	it("поднять правую руку, выставить правую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		};

		rightSplit(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 1]);
			done();
		});
	});

	it("собрать ноги и поднять руки", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		};

		allInUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		});
	});

	it("выставить ноги и опустить руки", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 1, 1]
		};

		allOutDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
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
			stance: [1, 1, 0, 0]
		}
		const gem = "Цитрин";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
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

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		});
	});

	it("Альмандин", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}
		const gem = "Альмандин";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 1, 0]);
			done();
		});
	});

	it("Родолит", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}
		const gem = "Родолит";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 1]);
			done();
		});
	});

	it("Пироп", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 1, 1]
		}
		const gem = "Пироп";

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
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
});

//Как тестировать рандом и функции, которые возвращаются к тому же состоянию?
//Как реализовать паузу для синхронизации?