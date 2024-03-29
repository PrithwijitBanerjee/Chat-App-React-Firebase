export const getInitialName = name => {
    const namesArr = name.toUpperCase().split(" ");
    if (namesArr.length > 1) {
        let shortNames = "";
        namesArr.forEach(element => shortNames += element[0]);
        return shortNames;
    }
    return namesArr[0][0];
}


export const transformToArrWithId = snapshotObj => {
    return snapshotObj ? Object.keys(snapshotObj).map(attribute => ({ ...snapshotObj[attribute], id: attribute })) : [];
}