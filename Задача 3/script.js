let str = 'Мы посмотрели, а там - пожар! И не просто пожар, а пожарище! Полыхало так, что наш пожар было видно за горами, и не просто пожар или пожарчик, а пожарище!';

function mchs(str) {
    const fire = /пожар[a-яё]*/g
    let newStr = str.split(fire).join('~~');

    return newStr;
}

