
describe("operations-validateFirstName method testing",call//test suite
//   it("Test validateFirstName() with valid input",()=>{//test cases
//     expect(validateFirstName("abc")).toEqual("");
//   });
//   it("Test validateFirstName() with valid input",()=>{
//     expect(validateFirstName("uabc09")).toEqual("firstname should allow only alphabets");
// });
)

describe("operations-validateLastName method testing",()=>{
  it("Test validateLastName() with valid input",()=>{
    expect(validateLastName("xyz")).toEqual("");
  });
  it("Test validateLastName() with valid input",()=>{
    expect(validateLastName("xyz09")).toEqual("Lastname should allow only alphabets");
});
})

describe("operations-validateEmail method testing",()=>{
  it("Test validateEmail() with valid input",()=>{
    expect(validateEmail("cds09@gmail.com")).toEqual("");
  });
  it("Test validateEmail() with valid input",()=>{
    expect(validateEmail("usha09.com")).toEqual("Invalid Email Format");
});
})

function call()
{
  it("Test validateFirstName() with valid input",()=>{//test cases
    expect(validateFirstName("abc")).toEqual("");
  });
  it("Test validateFirstName() with valid input",()=>{
    expect(validateFirstName("uabc09")).toEqual("firstname should allow only alphabets");
});
}

