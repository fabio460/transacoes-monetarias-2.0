export interface TransactionType{
   //  id: string,
   //  debitedAccountId:number,
   //  creditedAccountId:number,
   //  createdAt:string,
   //  value:number
   
		obj: {
			id: number,
			createdAt: string,
			value:number,
			debitedAccount: {
				id: number,
				user: {
					username: string
				}
			},
			creditedAccount: {
				id: number,
				user: {
					username: string
				}
			}
		},
		date: {
			day: number,
			month: number,
			hours: number,
			minutes: number,
			year: number
		}
	
 };

 export interface AccountType{
    balance:string,
    id:number,
    creditedAccount:[],
    debitedAccount:[],

  }

  export interface UserType{
     user:{
		username:string
	 }
  }