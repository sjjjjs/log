
const REG = /(\d+):(\d+)-(\d+):(\d+)/;

export function sourcePosParse(sourcePosStr) {
    const match = REG.exec(sourcePosStr);
    if (!match) return null;
    return {
        startLine: Number(match[1]),
        startIndex: Number(match[2]),
        endLine: Number(match[3]),
        endIndex: Number(match[4]),
    }
}

export function getRange(source, sourcePosStr) {
    const sourceArr = source.split('\n');
    const sourcePos = sourcePosParse(sourcePosStr);
    const range = {
        from: sourceArr
            .slice(0, sourcePos.startLine - 1)
            .map(l => l.length)
            .reduce((p, n) => p + n, 0) + (sourcePos.startLine - 1) + sourcePos.startIndex,
        to: sourceArr
            .slice(0, sourcePos.endLine - 1)
            .map(l => l.length)
            .reduce((p, n) => p + n, 0) + (sourcePos.endLine - 1) + sourcePos.endIndex,
    };
    return range;
}

export function sliceCodeFromSource(source, sourcePosStr) {
    const range = getRange(source, sourcePosStr);
    return source.slice(range.from - 1, range.to - 1);
}
export function replaceCodeFromSource(source, sourcePosStr, replacement) {
    const range = getRange(source, sourcePosStr);
    return source.slice(0, range.from - 1) + replacement + source.slice(range.to - 1);
}