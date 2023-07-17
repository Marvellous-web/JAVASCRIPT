describe("operations-validateFirstName method testing",()=>{
    it("Test validateFirstName() with valid input",()=>{
      expect(validateFirstName("utkarsha")).toEqual("");
    });
    it("Test validateFirstName() with valid input",()=>{
      expect(validateFirstName("utkarsha09")).toEqual("firstname should allow only alphabets");
  });
  })
  describe("operations-validateLastName method testing",()=>{
    it("Test validateLastName() with valid input",()=>{
      expect(validateLastName("Malpure")).toEqual("");
    });
    it("Test validateLastName() with valid input",()=>{
      expect(validateLastName("09malpure")).toEqual("Lastname should allow only alphabets");
  });
  })
  describe("operations-validateEmail method testing",()=>{
    it("Test validateEmail() with valid input",()=>{
      expect(validateEmail("utkarsha09@gmail.com")).toEqual("");
    });
    it("Test validateEmail() with valid input",()=>{
      expect(validateEmail("utkarsha09.com")).toEqual("Invalid Email Format");
  });
  })
  
  
  
  
  
  
  
  
  
  