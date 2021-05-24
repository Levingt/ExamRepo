function findScreenHeight(widthScreen, ratio) {
    const ratioArr = ratio.split(':');
    const resultSize = widthScreen * ratioArr[1] / ratioArr[0];

    return `${widthScreen}x${resultSize}`;
}

