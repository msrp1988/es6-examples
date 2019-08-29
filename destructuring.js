
// function for create destructring patterns

var destructuringExample = () => {

    // create destructring pattern

    var [a, b, c, d, e] = [10, 20, 30, 40]

    // print array destructred values using template strings

    console.log("============== destructuring ==============")
    
    console.log(`
        a = ${a},
        b = ${b},
        c = ${c},
        d = ${d},
        e = ${e}
    `)

    // object literals with destructuring

    var [p, q, r, s] = [10, 20, 30, 40]

    let marks = {
        "student 1 ": p,
        "student 2 ": q,
        "student 3 ": r,
        "student 4 ": s
    }

    // printing object literal

    console.log(marks)
}