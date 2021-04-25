

Hooks.once('WhetstoneReady', () => {

	// register theme: Spearmint
	game.Whetstone.themes.register('Whetstone', {
		id: 'Spearmint',
		name: 'Spearmint',
		title: 'Spearmint',
		description: 'Spearmint is a module stub for authors looking to create a Whetstone theme.',
		version: '1.0.0',
		authors: [{
			name: 'MajorVictory',
			contact: 'Github',
			url: 'https://github.com/MajorVictory'
		}],
		styles: ['modules/Whetstone-Spearmint/styles/Main.css'],
		substyles: {
			'Spearmint-Hotbar': {
				name: 'Spearmint-Hotbar',
				title: 'OCEANBLUES.SubstyleHotbar',
				hint: 'OCEANBLUES.SubstyleHotbarHint',
				active: true,
				styles: ['modules/Whetstone-Spearmint/styles/Hotbar.css']
			},
			'Spearmint-Toolbar': {
				name: 'Spearmint-Toolbar',
				title: 'OCEANBLUES.SubstyleToolbar',
				hint: 'OCEANBLUES.SubstyleToolbarHint',
				active: true,
				styles: ['modules/Whetstone-Spearmint/styles/Toolbar.css']
			},
			'Spearmint-SceneButtons': {
				name: 'Spearmint-SceneButtons',
				title: 'OCEANBLUES.SubstyleSceneButtons',
				hint: 'OCEANBLUES.SubstyleSceneButtonsHint',
				active: true,
				styles: ['modules/Whetstone-Spearmint/styles/SceneButtons.css']
			},
			'Spearmint-Chat': {
				name: 'Spearmint-Chat',
				title: 'OCEANBLUES.SubstyleChat',
				hint: 'OCEANBLUES.SubstyleChatHint',
				active: true,
				styles: ['modules/Whetstone-Spearmint/styles/Chat.css']
			},
			'Spearmint-CompactSidebar': {
				name: 'Spearmint-CompactSidebar',
				title: 'OCEANBLUES.SubstyleCompactSidebar',
				hint: 'OCEANBLUES.SubstyleCompactSidebarHint',
				active: false,
				styles: ['modules/Whetstone-Spearmint/styles/CompactSidebar.css']
			},
			'Spearmint-SceneButtonsSmaller': {
				name: 'Spearmint-SceneButtonsSmaller',
				title: 'OCEANBLUES.SubstyleSceneButtonsSmaller',
				hint: 'OCEANBLUES.SubstyleSceneButtonsSmallerHint',
				active: false,
				styles: ['modules/Whetstone-Spearmint/styles/SceneButtonsSmaller.css']
			},
			'Spearmint-OneJournal-SheetColors': {
				name: 'Spearmint-OneJournal-SheetColors',
				title: 'OCEANBLUES.SubstyleOneJournalSheetColors',
				hint: 'OCEANBLUES.SubstyleOneJournalSheetColorsHint',
				active: true,
				styles: ['modules/Whetstone-Spearmint/styles/OneJournal-SheetColors.css']
			},
			'Spearmint-Tidy5e-SheetColors': {
				name: 'Spearmint-Tidy5e-SheetColors',
				title: 'OCEANBLUES.SubstyleTidy5eSheetColors',
				hint: 'OCEANBLUES.SubstyleTidy5eSheetColorsHint',
				system: 'dnd5e',
				active: true,
				styles: ['modules/Whetstone-Spearmint/styles/Tidy5e-SheetColors.css']
			},
		},
		variables: [
			{
				name: '--Spearmint-bg-color',
				title: 'Background Color',
				hint: 'Used in dialog and sheet headers.',
				default: '#3d7f69ff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-bg-image-window',
				title: 'Window Background Image',
				hint: 'Background image used for window titles and the sidebar.',
				default: 'ui/denim075.png',
				type: 'image'
			},
			{
				name: '--Spearmint-bg-window-blendmode',
				title: 'Window Background Blend Mode',
				hint: 'Color blend for window titles and sidebar.',
				default: 'luminosity',
				type: String,
				presets: 'blendmodes'
			},
			{
				name: '--Spearmint-bg-color-sheet',
				title: 'Sheet Background Color',
				hint: 'Used for dialog and sheet window backgrounds.',
				default: '#346555ff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-bg-image-sheet',
				title: 'Sheet Background Image',
				hint: 'Background image used for sheets and dialogs.',
				default: 'ui/parchment.jpg',
				type: 'image'
			},
			{
				name: '--Spearmint-bg-sheet-blendmode',
				title: 'Sheet Background Blend Mode',
				hint: 'Color blend for sheet backgrounds.',
				default: 'soft-light',
				type: String,
				presets: 'blendmodes'
			},
			{
				name: '--Spearmint-text-light-color',
				title: 'Text Color - Light',
				hint: 'Used for text on dark backgrounds.',
				default: '#a2ddbbff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-text-dark-color',
				title: 'Text Color - Dark',
				hint: 'Used for text on light backgrounds.',
				default: '#103225ff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-text-highlight-color',
				title: 'Text Highlight Color',
				hint: 'Used for hyperlinks when hovering.',
				default: '#206a4eff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-text-selection-color',
				title: 'Text Selection Color',
				hint: 'The background color for selected text.',
				default: '#b1c3b9ff',
				type: 'color',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-fg-color',
				title: 'Foreground Color',
				hint: 'Used for textboxes, buttons, and input fields.',
				default: '#c1fbd8ff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-highlight-color',
				title: 'Highlight Color',
				hint: 'Used when hovering over interface and input elements.',
				default: '#a3ffcbff',
				type: 'shades',
				presets: 'spearmint'
			},
			{
				name: '--Spearmint-border-color',
				title: 'Border Color',
				hint: 'Used for borders around buttons and seperators.',
				default: '#29422dff',
				type: 'color',
				presets: 'spearmint'
			}
		],

		presets: {
			spearmint: {
				'#3d7f69ff': 'Deep Aquamarine',
				'#346555ff': 'Amazon',
				'#a2ddbbff': 'Sea Foam Green',
				'#103225ff': 'Phthalo Green',
				'#206a4eff': 'Dark Spring Green',
				'#b1c3b9ff': 'Ash Gray',
				'#c1fbd8ff': 'Aero Blue',
				'#a3ffcbff': 'Magic Mint',
				'#29422dff': 'Kombu Green'
			},
			blendmodes: {
				'normal': 'Normal',
				'multiply': 'Multiply',
				'screen': 'Screen',
				'overlay': 'Overlay',
				'darken': 'Darken',
				'lighten': 'Lighten',
				'color-dodge': 'Color Dodge',
				'color-burn': 'Color Burn',
				'hard-light': 'Hard Light',
				'soft-light': 'Soft Light',
				'difference': 'Difference',
				'exclusion': 'Exclusion',
				'hue': 'Hue',
				'saturation': 'Saturation',
				'color': 'Color',
				'luminosity': 'Luminosity',
				'initial': 'Initial',
				'inherit': 'Inherit',
				'unset': 'Unset'
			}
		},
		colorTheme: 'spearmint',
		colorThemes: [
			{
				id: 'spearmint',
				name: 'Spearmint',
				presets: 'spearmint',
				values: {
					'--Spearmint-bg-color': '#3d7f69ff',
					'--Spearmint-bg-image-window': 'ui/denim075.png',
					'--Spearmint-bg-window-blendmode': 'luminosity',
					'--Spearmint-bg-color-sheet': '#346555ff',
					'--Spearmint-bg-image-sheet': 'ui/parchment.jpg',
					'--Spearmint-bg-sheet-blendmode': 'soft-light',
					'--Spearmint-text-light-color': '#a2ddbbff',
					'--Spearmint-text-dark-color': '#103225ff',
					'--Spearmint-text-highlight-color': '#206a4eff',
					'--Spearmint-text-selection-color': '#b1c3b9ff',
					'--Spearmint-fg-color': '#c1fbd8ff',
					'--Spearmint-highlight-color': '#a3ffcbff',
					'--Spearmint-border-color': '#29422dff'
				}
			},
		],
		dialog: '',
		config: '',
		// thumbnail images are optional
		img: 'modules/Whetstone-Spearmint/images/thumb.png',
		preview: 'modules/Whetstone-Spearmint/images/preview.jpg',
		// none of the values below are enforced, this is merely for user information
		dependencies: {},
		systems: {core: '0.7.9'},
		compatible: {},
		conflicts: {}
	});

	// Register that this theme has a menu.
	// 'type' is left intentionally empty since
	// WhetstoneThemeConfigDialog will be provided by Whetstone core
	game.Whetstone.settings.registerMenu('Spearmint', 'Spearmint', {
		name: game.i18n.localize('WHETSTONE.Config'),
		label: game.i18n.localize('WHETSTONE.ConfigTitle'),
		hint: game.i18n.localize('WHETSTONE.ConfigHint'),
		icon: 'fas fa-paint-brush',
		restricted: false
	});
});

// create/remove the quick access config button
Hooks.on('renderSettings', () => {
	WhetstoneThemes.toggleConfigButton(
		JSON.parse(game.settings.get('Whetstone', 'addMenuButton'))
	);
});

// this implementation is for v1.1.2 only
// this process will be streamlined in future versions
// this is a special workaround for image urls being in css variables
// if left alone, the image is refetched and re-displayed every time the view is redrawn
// this causes flickering and a staggering amount of network usage
// doing the hack belows circumvents this problem by embedding the styles manually
Hooks.on('onThemeActivated', (themeData) => {
	if(themeData.id !== 'Spearmint') return;

	let windowImage = game.Whetstone.settings.get('Spearmint', 'variables.--Spearmint-bg-image-window');
	let sheetImage = game.Whetstone.settings.get('Spearmint', 'variables.--Spearmint-bg-image-sheet');

	let customStyle = $('#SpearmintCustomStyle');
	if (!customStyle.length) {
		$('head').append('<style id="SpearmintCustomStyle"></style>');
		customStyle = $('#SpearmintCustomStyle');
	}

	customStyle.html(`
.app,
#combat-carousel .card,
#combat-carousel .splide__slide:hover .name,
#combat-carousel .carousel-icon,
#combat-carousel .combat-control a,
#combat-carousel .encounter-info,
#vtta-notifications > div {
	background-image: url('/${windowImage}');
    background-repeat: repeat;
}
.window-app .window-content,
.dnd5e.sheet .window-content,
.tidy5e.sheet.actor.npc .spellcasting-ability,
.tidy5e.sheet.actor #item-info-container {
	background-image: url('/${sheetImage}');
    background-repeat: repeat;
}`);

Hooks.on('onThemeDeactivated', (themeData) => {
	if(themeData.id !== 'Spearmint') return;

	let customStyle = $('#SpearmintCustomStyle');
	if (customStyle.length) customStyle.remove();
});

});