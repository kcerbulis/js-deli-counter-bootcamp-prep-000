

var lineLength = katzDeliLine.length

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${lineLength} in line.`
}


function nowServing(katzDeliLine){
  if (lineLength === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}





