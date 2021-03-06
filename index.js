var katzDeliLine = []

function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length>0) {
    var firstperson = line[0]
    line.shift()
    return `Currently serving ${firstperson}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
if (line.length === 0) {
  return "The line is currently empty."
}
else {
  var announce = 'The line is currently:'
  for (var i = 1; i<=line.length ; i++) {
    announce = announce + ` ${i}. ${line[i-1]}${i===line.length? '' : ','}`
  }
  return announce
}
}