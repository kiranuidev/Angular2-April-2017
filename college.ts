interface ICollege{
  getCollegeAddress(name:string)
  getStaffDetails()
  getTimeTable()
}

class College implements ICollege{


  constructor(){
      console.log("I am the college class");
      this.CollegeName="NBITS";
  }
  CollegeName:string
  private tin:string
  getAddress(){
      this.CollegeName="NBITS";
  }
  getCollegeAddress(name:string){

  }
  getStaffDetails(){

  }
  getTimeTable(){

  }
}

class section extends College{
   constructor(){
       super();
      console.log("I am the section class");
  }
}