
treeConfig = {
    // svgSrc: '/demo/demo_resources/tree.svg',
    imgDir: './demo_tree/',
    jsonSrc: '/demo/demo_tree.json',
    treeWidth: 800,
    treeHeight: 600,
    closeTooltip: 'onmouseout',  // x-button || onmouseout
    openTooltip: 'onclick',  // onclick, onmouseover, or any svg attr
    showNodeNames: false,  // boolean
    showImages: true,
    futureTechFog: 'aesthetic',  // [ none || aesthetic || partial(not implemented) || complete(not implemented) ] sets to what degree unresearched tech should be shown
	// TODO: add toggle buttons (or sliders) for the following :
    tooltipH: 200, //TODO: delete after popover working
    tooltipW: 400, //TODO: delete after popover working
    tooltipTextLineCount: 12,  // approx number of lines of description text in the tooltip
    nodeSize: 48,  // [px]
    transitionTime: 2000    // ms used for transitions

};

