
function average(numbers) {
  let newNum=numbers.filter(num=>!Number.isNaN(num));
  return newNum.reduce((p, c)=>{    
    return p + c
  }, 0) / newNum.length;
}

module.exports = {average};
