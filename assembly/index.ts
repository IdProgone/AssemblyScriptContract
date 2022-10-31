import { storage, Context } from "near-sdk-as";

export class Greeting {

getGreeting(accoundId: string): string | null {

   return storage.get<string>(accountId, 
    "Greeting Not available");

}

setGreeting(greeting: string): void {

    storage.set(Context.sender, greeting);
}

}

