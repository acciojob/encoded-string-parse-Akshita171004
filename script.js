const parseCode = (str) => {
  // Split by one or more zeros using regex
  const parts = str.split(/0+/);
  
  // Return the required object
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
