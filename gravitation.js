/*/
You are given a vertical box divided into equal columns. 
Someone dropped several stones from its top through the 
columns. Stones are falling straight down at a constant 
speed (equal for all stones) while possible (i.e. while 
they haven't reached the ground or they are not blocked 
by another motionless stone). 

Given the state of the box at some moment in time, find 
out which columns become motionless first.

Example

rows = ["#..##",
        ".##.#",
        ".#.##",
        "....."]

solution(rows) = [1, 4].

/*/

const transpose = matrix => {
  
  let tmp = []
  
  for (let row = 0; row < matrix.length; row++) {
     for (let i=0; i < matrix[row].length; i++) {    
         tmp[i] += matrix[row][i]
     }
  }
  
  for (let i=0;i<tmp.length;i++) {
    tmp[i] = tmp[i].replace("undefined", "")   
  }
  
  return tmp
}

const solution = rows => {

    let instans = 0,    //Instances
        lenth = 0,      //Length
        eendecks = 0,   //Index
        tym = 0         //Time

    const countOccurence = (haystack, needle) => haystack.split(needle).length - 1
    const min = arr => Math.min(...arr);
    const polyfillter = arr => arr.map( (e,i) => e === min(arr) ? i : -1).filter(e=>e>=0)  
    rows = transpose(rows)
    rows = rows.map(e=> {
        
        instans = countOccurence(e, '#')
        if (instans === 0) return 0
        
        lenth = e.length
        if (lenth === 0) return 0
        
        eendecks = e.indexOf("#")
        if (eendecks === -1) return 0
        
        tym = lenth - instans - eendecks
    
        tym = tym < 0 ? 0 : tym
        
        tym = tym > lenth ? 0 : tym
        
        return tym
    })
   
    rows = polyfillter(rows)
    return rows
}
