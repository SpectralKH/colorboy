function addColor(name, start, end = "\x1b[0m") {
    global.String.prototype.__defineGetter__(name, function() {
        let str = this;
        str.replace("\n", end+start);
        if (this.endsWith(end)) str= start+this;
        else str = start+this+end;
        return str;
    });
}
module.exports = (ignore = false, customColors = []) => {
    if (!ignore) {
        addColor("bright", "\x1b[1m");
        addColor("dim", "\x1b[2m");
        addColor("underline", "\x1b[4m");
        addColor("blink", "\x1b[5m");
        addColor("reverse", "\x1b[7m");
        addColor("hidden", "\x1b[8m");

        addColor("black", "\x1b[30m");
        addColor("red", "\x1b[31m");
        addColor("green", "\x1b[32m");
        addColor("yellow", "\x1b[33m");
        addColor("blue", "\x1b[34m");
        addColor("magenta", "\x1b[35m");
        addColor("cyan", "\x1b[36m");
        addColor("white", "\x1b[37m");

        addColor("blackBG", "\x1b[40m");
        addColor("redBG", "\x1b[41m");
        addColor("greenBG", "\x1b[42m");
        addColor("yellowBG", "\x1b[43m");
        addColor("blueBG", "\x1b[44m");
        addColor("magentaBG", "\x1b[45m");
        addColor("cyanBG", "\x1b[46m");
        addColor("whiteBG", "\x1b[47m");
    }
    if (customColors) {
        for (let i = 0; i < customColors.length; i++) {
            addColor(customColors[i][0], customColors[i][1]);
        }
    }
}
