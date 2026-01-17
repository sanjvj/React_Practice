const users = [
  { id: 1, name: "Aman", isActive: true, hoursSpent: 5 },
  { id: 2, name: "Neha", isActive: false, hoursSpent: 3 },
  { id: 3, name: "Ravi", isActive: true, hoursSpent: 8 },
  { id: 4, name: "Priya", isActive: true, hoursSpent: 2 }
];


const activeUser = (users) => {
   return users.filter(user => user.isActive); 
}
const result = activeUser(users);

const normalizeUser = (users) => {
    const newUsers = users.map(user => {
        if(user.isActive && user.hoursSpent >= 6){
            
            return {
                ...user,
                Category : "High"
            }
        }else if(user.isActive && user.hoursSpent < 6){
            return {
                ...user,
                Category : "Low"
            }
        }else{
            return{
                ...user
            }
        }
        
    })
    return newUsers
}
const result2 = normalizeUser(users);

const total = (users) => {
    const userTotal = users.reduce((sum,user)=>{
        if(user.isActive){
            return sum+user.hoursSpent
        }
        return sum
    },0)
    return userTotal
}
const result3 = total(users);

console.log(result);
console.log(result2);
console.log(result3);