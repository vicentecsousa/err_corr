let _ = require("lodash")

genMatrix = ( size ) => {
    return _.times( size, () => _.times( size, () => Math.floor( Math.random()*2 ) ) )
}

checkForParity = ( matrix ) => {
    const hSum = _.map( matrix, row => _.reduce( row, (acc, c) => acc + c  ) )
    const vSum = _.map( _.zip( ...matrix ), row => _.reduce( row, (acc, c) => acc + c  ) )

    const impHSum = _.filter(hSum, (x) => x%2 === 1 )
    const impVSum = _.filter(vSum, (x) => x%2 === 1 )

    if ( impVSum.length !== impHSum.length || impHSum.length > 1 ) {
        return "Corrupt"
    } else {
        return impVSum.length === 1 ? "changeBit( " + (hSum.indexOf( impHSum[0] )+1) + ", " + (vSum.indexOf( impVSum[0] )+1) + " )" : "Ok"
    }
}

main = () => {
    const nTests = 100, size = 4
    const matrixArray = _.times( nTests, () => genMatrix( size ) )

    _.map(matrixArray, matrix => {
        console.log( checkForParity( matrix ) )
    } )
}

main();