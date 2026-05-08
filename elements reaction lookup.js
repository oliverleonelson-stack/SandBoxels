// This directly replaces the standard Lookup tool's function
elements.lookup.tool = function(pixel) {
    let elName = pixel.element;
    let info = elements[elName];
    let reactionList = [];

    // 1. Still show the standard info window (Description, Category, etc.)
    showElementInfo(elName);

    // 2. Scan for and format all possible reaction outcomes
    if (info.reactions) {
        for (let reactant in info.reactions) {
            let r = info.reactions[reactant];
            
            // elem1: what the pixel you clicked turns into
            // elem2: what the other pixel it touched turns into
            let result1 = r.elem1 || "nothing";
            let result2 = r.elem2 || "nothing";
            
            // Ignore "reactions" that don't actually change anything
            if (result1 === elName && result2 === reactant) continue;

            reactionList.push(`• + ${reactant} = ${result1} (other: ${result2})`);
        }
    }

    // 3. Show the results in a pop-up
    if (reactionList.length > 0) {
        alert(`Reaction Recipes for ${elName.toUpperCase()}:\n\n` + reactionList.join("\n"));
    } else {
        alert(`${elName.toUpperCase()} has no special reactions.`);
    }
};
