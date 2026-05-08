elements.reaction_lookup = {
    color: "#ffcc00",
    tool: function(pixel) {
        let elName = pixel.element;
        let info = elements[elName];
        let reactionList = [];

        if (info.reactions) {
            for (let reactant in info.reactions) {
                let r = info.reactions[reactant];
                // elem1 is what the clicked pixel turns into
                // elem2 is what the other pixel turns into
                let result1 = r.elem1 || "nothing";
                let result2 = r.elem2 || "nothing";
                
                // Format the string for the alert
                reactionList.push(`${elName} + ${reactant} -> ${result1} (and ${reactant} becomes ${result2})`);
            }
        }

        if (reactionList.length > 0) {
            alert(`Reactions for ${elName}:\n` + reactionList.join("\n"));
        } else {
            alert(`${elName} has no known reactions.`);
        }
    },
    category: "tools",
    desc: "Click a pixel to see all its possible reaction outcomes."
};
