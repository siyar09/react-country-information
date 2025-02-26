export function getRegionColor(region) {
    const colors = {
        Africa: "blue",
        Americas: "green",
        Asia: "red",
        Europe: "orange",
        Oceania: "purple"
    };
    return colors[region] || "gray";
}
