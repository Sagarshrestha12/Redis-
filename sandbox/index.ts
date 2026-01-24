import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet("car", {color: "red", year:"1995"
        ,engine: {cylinder: 8}
        ,owner: null || ' '
        ,services: null || ' '
    }       

    );
   let car =  await client.hGetAll("car");
console.log(car)    
};
run();
