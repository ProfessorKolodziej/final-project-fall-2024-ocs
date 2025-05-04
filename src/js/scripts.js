// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const surpriseBtn = document.querySelector('.tile-surprise');
surpriseBtn?.addEventListener('click', () => {
	const pages = ['character1.html', 'character2.html', 'character3.html'];
	const random = pages[Math.floor(Math.random() * pages.length)];
	window.location.href = random;
});

