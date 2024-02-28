class Olonade{
    constructor(
        fid,
        name,
        age,
        position,
        location,
        skinColor,
        maritalStatus,
        childrenG,
        childrenB,
        dateMarried

    ){
        this.fid = fid;
        this.name = name;
        this.age = age;
        this.position = position;
        this.location = location;
        this.skinColor = skinColor;
        this.maritalStatus = maritalStatus;
        this.children = {
            girl : childrenG,
            boy : childrenB
        };
        this.dateMarried = dateMarried;
    }
       married(marital){
        this.maritalStatus = marital;
       }
        newChildren(girlChild, boyChild){
            this.children.girl = girlChild;
            this.children.boy = boyChild;
        }
        totalMarriedDays(){  
            let dateOfMarriage = new Date(this.dateMarried); 
            let todaysDate = new Date();
                let  daysMarried = todaysDate - dateOfMarriage;
                let  tDaysMarried = Math.floor((daysMarried/(1000 * 3600 * 24))/365);
                return tDaysMarried;                       
            };
           
}

export default Olonade
